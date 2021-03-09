class ErrorResponse extends Error{
    constructor(message, statusCode){
        super(message);
        
        this.statusCode = statusCode;

        
    }
   
ok done or not done
}

module.exports = ErrorResponse;