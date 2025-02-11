class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

export { AppError}












//
//
// export {AppError};
//
// /**
//  * @description Common Error class to throw an error from anywhere.
//  * The {@Link errorHandler} middleware will catch this error at the central place and,
//  * it will return an appropriate response to the client.
//  * */
//
//
// class AppError extends Error {
//
//     /**
//      *
//      * @param {number} statusCode
//      * @param {string} message
//      * @param {any[]} errors
//      * @param {string} stack
//      * @param {Boolean} isOperational
//      * */
//
//     constructor(
//         message ,
//         statusCode,
//         erros= [],
//         stack= []
//     ) {
//         super(message);
//         this.statusCode = statusCode;
//         this.data = null;
//         this.message = message;
//         this.success = false;
//         this.errors = errors;
//
//         if (stack) {
//             this.stack = stack;
//         } else {
//             Error.captureStackTrace(this, this.constructor);
//         }
//
//
//
//
//     }
// }
