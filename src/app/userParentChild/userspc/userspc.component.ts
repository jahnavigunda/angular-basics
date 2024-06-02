import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userspc',
  templateUrl: './userspc.component.html',
  styleUrls: ['./userspc.component.css']
})
export class UserspcComponent implements OnInit{

userName:string = '';
usersList:string[] = [];

constructor(){}
ngOnInit(): void {

}

onUserAdded(){
  this.usersList.push(this.userName);
}


}
