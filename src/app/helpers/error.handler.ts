import { errorCodes } from '../helpers/error-codes';
import { errorStrings } from '../helpers/error-strings';

export class ErrorHandler{

    handleError(error){
        switch(error.status){
            case errorCodes.INTERNAL_SERVER_ERROR:
                return errorStrings.INTERNAL_SERVER_ERROR_MESSAGE;
            case errorCodes.BAD_REQUEST:
                return errorStrings.BAD_REQUEST_MESSAGE;
            case errorCodes.PAGE_NOT_FOUND:
                return errorStrings.PAGE_NOT_FOUND_MESSAGE;
            case errorCodes.SERVER_NOT_RESPONDING:
                return errorStrings.SERVER_NOT_RESPONDING_MESSAGE;
        }
    }
}