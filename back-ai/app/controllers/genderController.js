import Gender from "../models/Gender.js";
const registerGender = async(req, res) => {
    try {
        const genders = ['action', 'comedy', 'drama', 'scifi', 'romance']
        genders.map(async(gender) => {
            const registerGender = await Gender.create({
                name : gender,
                description : 'Fugiat tempor mollit occaecat mollit dolor. Nostrud occaecat mollit ex labore id. Nisi occaecat eiusmod ea irure et Lorem cupidatat cillum ex quis sit cillum ad. Est sit consequat laborum in aliquip do. Eu dolore tempor esse anim consequat labore eu. Sunt consequat quis ipsum ex ipsum nulla eu ut laborum dolor irure cupidatat officia qui.'
            })
        })
        res.json({data : 'Gender register'})
    } catch (error) {
        res.status(400).json({ message: 'Fallo de servidor' })
    }
}
export {
    registerGender
}