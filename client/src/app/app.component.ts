import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Dating App';

  constructor(private accountService: AccountService){} 

  ngOnInit(): void {
    this.setCurrentUser();
  }



  setCurrentUser(){
    const userString = localStorage.getItem('user');    //get user from local storage
    if (!userString) return;                          //check if user has something
    const user: User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }
}
