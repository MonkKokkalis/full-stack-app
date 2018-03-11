import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class HttpErrorHandler {
    handleError(error: HttpErrorResponse) {
        if (error.error instanceof HttpErrorResponse) {
            console.log(`Http Error Response error occured ${error.message}`);
        }

        return new ErrorObservable('An error has occured when processing the request');
    }
}
