import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  allowNewUser = false;
  userCreatedStatus = "No User is Created";
  newUserName="Test User";
  isUserCreated=false;
  users = ['user1', 'user2'];
  constructor(){
    setTimeout(()=> {
      this.allowNewUser = true;
    }, 3000);
  }

  changeUserCreatedStatus(){
    this.isUserCreated= true;
    this.users.push(this.newUserName);
  }
  onUpdateUser(event : Event) {
    this.newUserName= (<HTMLInputElement>event.target).value;
    }
  ngOnInit(): void {
  }

}
