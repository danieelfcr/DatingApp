import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe({
      //What we want to do with the returned data
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    });  //Observables are lazy by nature, so we need to subscribe
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}
