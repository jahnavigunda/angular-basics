import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  // styleUrls: ['./user.component.css'],
  styles: [
    `
    .offline{
      color: white;
    }
    `
  ]
})
export class UserComponent implements OnInit{
userId: number = 10;
userStatus: string;
  constructor(){
    this.userStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getUserStatus(){
    return this.userStatus;
  }

  getColor(){
    if(this.userStatus === 'online') return 'green';
    else return 'red';
  }

  ngOnInit(): void {
  }

}
