import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { BookService } from './book.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookService]
})
export class AppComponent implements OnInit {
  title = 'app';
  signInForm: FormGroup;
  constructor(private bookService: BookService) {}
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
    this.bookService.getBooks()
    .subscribe(data => {
        console.log(data);
    });
  }
}
