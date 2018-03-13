import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { BookService } from './book.service';
import { DownloadService } from './download.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookService, DownloadService]
})
export class AppComponent implements OnInit {
  title = 'app';
  signInForm: FormGroup;
  imageUrl: string;
  constructor(private bookService: BookService, private downloadService: DownloadService) {}
  ngOnInit() {
      this.signInForm = new FormGroup({
          'email': new FormControl(),
          'password': new FormControl()
      });
  }
  onSubmitForm() {
    //   console.log(this.signInForm.value);
    // this.httpClient.get('http://192.168.254.102/api/books')
    // .subscribe(data => {
    //     console.log(data);
    // });
    //

    // this.bookService.getBooks()
    // .subscribe(data => {
    //     console.log(data);
    // });

    this.downloadService.getFile();

  }
}
