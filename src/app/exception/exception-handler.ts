class CustomException {
    _body: string;
}
class CustomExceptionBody {
    status: string;
    message: string;
}
export class ExceptionHandler {

    exception: CustomException;
    exceptionBody: CustomExceptionBody;

    getMessage(error) {
        let message = '';
        this.exception = JSON.parse(JSON.stringify(error));
        if (this.exception._body !== undefined) {
            message = error;
        } else {
            this.exceptionBody = JSON.parse(this.exception._body);
            message = this.exceptionBody.status + ' - ' + this.exceptionBody.message;
        }
        return message;
    }
}
