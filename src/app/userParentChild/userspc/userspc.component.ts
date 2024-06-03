import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-userspc',
  templateUrl: './userspc.component.html',
  styleUrls: ['./userspc.component.css']
})
export class UserspcComponent implements OnInit{


userName:string = '';
usersList:string[] = [];
name = 'Jahnavi';
isAvailable: boolean = true;
value = 25;
constructor(){}
ngOnInit(): void {

}

onUserAdded(event: string){
  this.usersList.push(event);
}
onNameChanged() {
  this.name = 'Hi jahnavi';
  let loggingService = new LoggingService();
  loggingService.logToConsole('user is changed: ' +this.name);
}
onDeleteComponent() {
  this.usersList = [];
  }
}
