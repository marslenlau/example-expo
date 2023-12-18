import User from "../models/User.js";
import bcrypt from 'bcrypt'

const verifyConection = async(req, res) => {
    try {
        res.json({data : 'LENNY LAURA VALENCIA'})
    } catch (error) {
        console.log(error)
    }
}
const obtainUser = async(req, res) => {
    try {
        const userData = await User.findAll();
        res.json({data : userData})
    } catch (error) {
        res.status(400).json({ message: 'Fallo de servidor' })
    }
}
const registerUser = async(req, res) => {
    try {
        const {name, lastname, email, password} = req.body
        // verification email
        const existUser = await User.findOne({ where : { email } })
        if (existUser) return res.status(400).json({ message: 'El usuario ya existe' })

        // Encriptar password con bcrypt
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const dataInit = {
            name,
            lastname,
            email,
            password: hashedPassword,
        }
        const saveQuery = await User.create(dataInit)
        res.json({data : saveQuery})
    } catch (error) {
        res.status(400).json({ message: 'Fallo de servidor' })
    }
}
const authUser = async (req, res) => { 
    const {email, password} = req.body
    const user = await User.findOne({ where: {email}  })
    
    if(!user) {
        return res.status(400).json({ message: 'El usuario no existe' })
    }else{
        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword) return res.status(400).json({ message: 'Password incorrecto' })
        res.json({ 
            id : user.id,
            name : user.name,
            lastname : user.lastname,
            email : user.email,
            bussiness : user.bussiness,
        });
    }
} 
const identityUser = async (req, res) => {
    try {
        const {id} = req.body
        const user = await User.findOne({ where: {id}  })
        res.json({ 
            id : user.id,
            name : user.name,
            lastname : user.lastname,
            email : user.email,
            bussiness : user.bussiness,
        });
    } catch (error) {
        res.status(400).json({ message: 'Fallo de servidor' })
    }
}
export {
    verifyConection,
    obtainUser,
    registerUser,
    authUser,
    identityUser
}