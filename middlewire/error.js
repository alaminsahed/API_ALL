const ErrorResponse = require("../utilites/errorResponse");

const errorHandler= (err, req,  res, next) =>{

    let error = {...err};
    error.message = err.message;

    console.log(err);
    // console.log(err.message);
    //error objects
    // err.name
    // err.statusCode
    // err.message
    // err.value

    //Mongoose bad object
    if(err.name=='CastError'){
        const message = `Resource not found with ${err.value}`;
         error = new ErrorResponse(message,404);
        
    }

    // ami kano kono kisu vula jai
    oefofeoj
   
    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "server error"
    })
}

module.exports = errorHandler;