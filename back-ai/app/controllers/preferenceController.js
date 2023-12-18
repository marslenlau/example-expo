const registerPreference = async (req, res) => {
    try {
        res.json({data: 'lenny'})
    } catch (error) {
        res.status(400).json({ message: 'Fallo de servidor' })
    }
}
export {
    registerPreference
}