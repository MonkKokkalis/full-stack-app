import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { saveAs } from 'file-saver/FileSaver';
@Injectable()
export class DownloadService {
    constructor(private httpClient: HttpClient) {}

    getFile() {
        const responseOptions = {
            headers: new HttpHeaders()
        }
        // const fileUrl = 'http://192.168.254.102/api/download';
        const fileUrl = 'http://192.168.0.104/api/download';
        this.httpClient.get(fileUrl, {responseType: 'blob', observe: 'response'})
        .subscribe(response => {
            saveAs(response.body, response.headers.get('FileName'));
        });
    }
}
