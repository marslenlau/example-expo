from flask import Flask, request, jsonify
from sklearn.neighbors import NearestNeighbors
import numpy as np
from flask_mysqldb import MySQL
from flask_cors import CORS
app = Flask(__name__)
#?Configuración de la aplicación db
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] ='db_expo'
conexion = MySQL(app)
# Configurar CORS para toda la aplicación
CORS(app)
@app.route('/obtener_datos', methods=['POST'])
def obtener_datos():
    try:
        #? CONSULTA DATOS PREFERENCES
        inputData = request.json

        #?CONSULTA DATOS PREFERENCES
        cursor = conexion.connection.cursor()
        sql = "SELECT u.bussiness AS user_name, JSON_OBJECT( 'formally', MAX(CASE WHEN g.name = 'formally' THEN p.data END), 'fun', MAX(CASE WHEN g.name = 'fun' THEN p.data END), 'intriguing', MAX(CASE WHEN g.name = 'intriguing' THEN p.data END), 'avant', MAX(CASE WHEN g.name = 'avant' THEN p.data END), 'warm', MAX(CASE WHEN g.name = 'warm' THEN p.data END)) AS preferences FROM preferences p JOIN users u ON p.user_id = u.id JOIN genders g ON p.gender_id = g.id GROUP BY u.name;"
        cursor.execute(sql)
        data = cursor.fetchall()
        # Procesar los resultados y construir la estructura de datos deseada
        user_preferences = {}
        for nombre, preferencias_json in data:
            preferencias_dict = eval(preferencias_json)  # Convertir la cadena JSON a un diccionario

            # Convertir valores de cadenas a valores numéricos flotantes
            preferencias_dict_numerico = {genero: float(valor) for genero, valor in preferencias_dict.items()}
            user_preferences[nombre] = preferencias_dict_numerico
        

        #?CONSULTA DATOS ITEMS
        cursor = conexion.connection.cursor()
        sql = "SELECT mo.id, mo.name AS title, mo.link AS movie_link, JSON_OBJECT('formally', MAX(CASE WHEN g.name = 'formally' THEN mu.data END),'fun', MAX(CASE WHEN g.name = 'fun' THEN mu.data END), 'intriguing', MAX(CASE WHEN g.name = 'intriguing' THEN mu.data END), 'avant', MAX(CASE WHEN g.name = 'avant' THEN mu.data END),'warm', MAX(CASE WHEN g.name = 'warm' THEN mu.data END)) AS features FROM multimedia mu JOIN movies mo ON mu.movie_id = mo.id JOIN genders g ON mu.gender_id = g.id GROUP BY mo.id, mo.name, mo.link;"
        cursor.execute(sql)
        data = cursor.fetchall()
        # Procesar los resultados y construir la estructura de datos deseada
        multimedia_items = []
        for item_id, title, movie_link, features_json in data:
            features_dict = eval(features_json)  # Convertir la cadena JSON a un diccionario
            # Convertir valores de cadenas a valores numéricos flotantes
            features_dict_numerico = {genero: float(valor) for genero, valor in features_dict.items()}

            multimedia_item = {"id": item_id, "title": title, "link": movie_link, "features": features_dict_numerico}
            multimedia_items.append(multimedia_item)

        # print(multimedia_items)
        #? VARIABLES IMPORTANTES user_preferences, multimedia_items
        # Convertir los datos en arrays de numpy
        users_array = np.array([list(user.values()) for user in user_preferences.values()])
        items_array = np.array([list(item["features"].values()) for item in multimedia_items])
        # Modelo de vecinos más cercanos para recomendaciones
        knn_model = NearestNeighbors(n_neighbors=3, metric='cosine')
        knn_model.fit(users_array)

        #* RECOMENDACIONES
        if 'user_id' not in inputData:
            return jsonify({"error": "Debe proporcionar un ID de usuario"}), 400
        user_id = inputData['user_id']
        if user_id not in user_preferences:
            return jsonify({"error": f"No se encontraron preferencias para el usuario {user_id}"}), 404
        user_features = list(user_preferences[user_id].values())
        user_features = np.array([user_features])
        # Encontrar los vecinos más cercanos en función de las preferencias del usuario
        _, indices = knn_model.kneighbors(user_features)
        recommended_items = [multimedia_items[i] for i in indices[0]]
        # Devolver detalles de las películas recomendadas
        recommendations_details = [{"id": item["id"], "title": item["title"], "features": item["features"], "link" : item["link"]} for item in recommended_items]
        return jsonify({"user_id": user_id, "recommendations": recommendations_details})
    except Exception as e:
        print("Ocurrió un error al consultar: ", e)
        return jsonify({'error': 'Ocurrió un error al consultar la base de datos'}), 500

if __name__ == '__main__':
    app.run(debug=True)
