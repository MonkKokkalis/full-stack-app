import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorHandler } from '../services/http-error-handler.service';
interface Book {
    title: string;
    author: string;
    price: number;
}

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class BookService {
    booksUrl = 'http://192.168.254.102/api/book';
    constructor(private httpClient: HttpClient, private httpErrorHandler: HttpErrorHandler) {}

    getBooks(): Observable<Object> {
        return this.httpClient.get(this.booksUrl)
        .pipe(
            retry(3),
            catchError(this.httpErrorHandler.handleError)
        );
    }
}
