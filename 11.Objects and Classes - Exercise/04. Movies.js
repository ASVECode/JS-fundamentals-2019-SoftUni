function linesInfo(input) {
    let movies = [];
    for (let line of input) {
        //console.log(line)
        if (line.includes('addMovie')) {
            let movieName = line.substring(9);
            let movie = { name: movieName };
            //console.log(movie)
            movies.push(movie);
        } else {
            if (line.includes('onDate')) {
                let lineParts = line.split(' onDate ');
                let date = lineParts[1];
                let name = lineParts[0];
                //console.log(lineParts)
                for (let m of movies) {
                    if (m.name == name) {
                        m.date = date;
                    }
                }
            } else {
                let lineParts = line.split(' directedBy ');
                let director = lineParts[1];
                let name = lineParts[0];
                //console.log(lineParts)
                for (let m of movies) {
                    if (m.name == name) {
                        m.director = director;
                    }
                }
            }
        }
        // console.log(movies)
    }
    for (let mov of movies) {
        if (Object.keys(mov).includes('director')
            && Object.keys(mov).includes('date')
            && Object.keys(mov).includes('name')) {
            console.log(JSON.stringify(mov));
        }
    }
}
linesInfo([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);
