import Preference from "../models/Preference.js"
import User from "../models/User.js"
const registerPreference = async (req, res) => {
    try {
        res.json({data: 'lenny'})
    } catch (error) {
        res.status(400).json({ message: 'Fallo de servidor' })
    }
}
const obtainPreference = async (req, res) => {
    try {
        const {id} = req.body
        
        const queryPreferences  = await Preference.findAll({ 
            where: {
                user_id: id
            },
        })
        res.json({queryPreferences})
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Fallo de servidor' })
    }
}
export {
    registerPreference,
    obtainPreference
}