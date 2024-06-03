import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  providers: [LoggingService, UserService],
})
export class AdduserComponent implements OnInit{

userName: string='';
@Output() userAdded = new EventEmitter<string>();

@ViewChild('userInput') userInput: ElementRef | undefined;
constructor(private loggingService: LoggingService, private userSerivce: UserService) {
}
ngOnInit(): void {
}
onUserAdded(){
  this.userAdded.emit(this.userInput?.nativeElement.value);
  this.loggingService.logToConsole('User is added: '+this.userName);
}

onAdduser(){
  this.userSerivce.addUser(this.userName, 'active');
}
}
