class ErrorResponse extends Error{
    constructor(message, statusCode){
        super(message);
        
        this.statusCode = statusCode;

        
    }
   
ok done
}

module.exports = ErrorResponse;