const Movie = require('./../Models/movieModel');
const ApiFeatures = require('./../Utils/ApiFeatures');

exports.getAllMovies = async (req, res) => {
    try{
        const features = new ApiFeatures(Movie.find(), req.query)
                                .filter()
                                .sort()
                                .paginate();
        let movies = await features.query;
        
        res.status(200).json({
            status: 'success',
            length: movies.length,
            data: {
                movies
            }
        });
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err.message
        })
    }
    
}