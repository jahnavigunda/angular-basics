import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userspc',
  templateUrl: './userspc.component.html',
  styleUrls: ['./userspc.component.css']
})
export class UserspcComponent implements OnInit{


userName:string = '';
usersList:string[] = [];
name = 'Jahnavi';
constructor(){}
ngOnInit(): void {

}

onUserAdded(event: string){
  this.usersList.push(event);
}
onNameChanged() {
  this.name = 'Hi jahnavi';
}
onDeleteComponent() {
  this.usersList = [];
  }
}
