import Movie from '../models/Movie.js'
const registerMovie = async(req, res) => {
    const links = [
        'https://www.youtube.com/watch?v=g60H8s9QDpc',
        'https://www.youtube.com/watch?v=YhOl34lI-xw',
        'https://www.youtube.com/watch?v=i26HL4IhMdI',
        'https://www.youtube.com/watch?v=kG-lO7vaDEw',
        'https://www.youtube.com/watch?v=pSjrT45Bylg',
        'https://www.youtube.com/watch?v=t_sci_yi-Fg',
        'https://www.youtube.com/watch?v=AsL1WQainSY',
        'https://www.youtube.com/watch?v=tYMDHo9xy1I',
        'https://www.youtube.com/watch?v=al2foK2tI0g',
        'https://www.youtube.com/watch?v=1jXlFVkAAm4',
        'https://www.youtube.com/watch?v=ZBaZDoG0H_Y',
        'https://www.youtube.com/watch?v=9CvG0BW2fsc',
        'https://www.youtube.com/watch?v=WPd2_bgY1ew',
        'https://www.youtube.com/watch?v=36BJvV0h6Kc',
        'https://www.youtube.com/watch?v=ms_5JpehARM',
        'https://www.youtube.com/watch?v=8dqnaBra3lQ',
        'https://www.youtube.com/watch?v=RMu5AVPcv24',
        'https://www.youtube.com/watch?v=uPwtcZEJgyw',
        'https://www.youtube.com/watch?v=wgXO0MhmqxM',
        'https://www.youtube.com/watch?v=_zIvy008y3w',
    ]
    try {
        let movies = Array.from({length: links.length}, (_, i) => ({
            name: `Movie ${i+1}`,
            description: 'loremIpsum adipisicing laboris mollit irure adipisicing. Duis aute labore incididunt sint mollit amet est dolore deserunt cupidatat ea commodo. Cillum consequat labore dolore pariatur quis cupidatat proident laboris labore pariatur nisi adipisicing. Magna laboris fugiat eiusmod consectetur id adipisicing mollit nisi ullamco occaecat.',
            link: links[i]
        }));
        movies.map(async(movie) => {
            await Movie.create({
                name : movie.name,
                description : movie.description,
                link : movie.link
            })
        })
        res.json({ data : 'Peliculas registradas'})
    } catch (error) {
        res.status(400).json({ message: 'Fallo de servidor' })
    }
}

const getMovies = async(req, res) => {
    try {
        const movies = await Movie.findAll({
            attributes: ['name', 'description', 'link']
        })
        res.json({ data: movies })
    } catch (error) {
        res.status(400).json({ message: 'Fallo de servidor' })
    }
}
export {
    registerMovie,
    getMovies
}

