class ApiFeatures{
    constructor(query, querystring){
        this.query = query
        this.querystring = querystring
    }


    filter(){
        const excludefields = ['sort', 'page', 'limit', 'fields']

        let querystringfilter = {...this.querystring}

        excludefields.forEach((el) => {
            delete querystringfilter[el]
        })

        querystringfilter = JSON.stringify(querystringfilter)
        querystringfilter = querystringfilter.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`)
        querystringfilter = JSON.parse(querystringfilter)
            
        this.query = this.query.find(querystringfilter)

        return this
        
    }

    sort(){
        if(this.querystring.sort){
            const sortby = this.querystring.sort.split(',').join(' ')
            this.query = this.query.sort(sortby)
        }
        else{
            this.query = this.query.sort('releasedate')
        }
        return this
    }

    paginate(){
        const page = +this.querystring.page || 1
        const limit = +this.querystring.limit || 9
        const skip = (page-1)*limit
        this.query = this.query.skip(skip).limit(limit)

        // if(this.querystring.page){
        //     const moviescount = await Movie.countDocuments()
        //     if(skip >= moviescount){
        //         throw new Error('This page is not found')
        //     }
        // }
        return this
    }

}

module.exports = ApiFeatures