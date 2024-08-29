const Movie = require('./../Models/movieModel');
const ApiFeatures = require('./../Utils/ApiFeatures');

exports.getAllMovies = async (req, res) => {
    try{
        const features = new ApiFeatures(Movie.find(), req.query)
                                .filter()
                                .sort()
                                .paginate();
        let movies = await features.query;

        /**************Mongoose 6.0 or less************** 
        const excludeFields = ['sort', 'page', 'limit', 'fields'];
        const queryObj = {...req.query};
        excludeFields.forEach((el) => {
            delete queryObj[el]
        })
        const movies = await Movie.find(queryObj);
        **************************************************/

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