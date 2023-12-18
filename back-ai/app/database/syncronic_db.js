//? testing de coneccion a base de dato
import User from "../models/User.js";
import Gender from "../models/Gender.js";
import Movie from "../models/Movie.js";
import Preference from "../models/Preference.js";
import Multimedia from "../models/Multimedia.js";
const syncConnection = async() => {
    try {
        await User.sync({ alter: true });
        await Gender.sync({ alter: true });
        await Movie.sync({ alter: true });
        await Preference.sync({ alter: true });
        await Multimedia.sync({ alter: true });
        console.log('Syncronic database correct.');
    } catch (error) {
        console.error('Syncronic fail database:', error);
    }
}
export default syncConnection