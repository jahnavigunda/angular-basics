import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  providers: [LoggingService],
})
export class AdduserComponent implements OnInit{

userName: string='';
@Output() userAdded = new EventEmitter<string>();

@ViewChild('userInput') userInput: ElementRef | undefined;
constructor(private loggingService: LoggingService) {
}
ngOnInit(): void {
}
onUserAdded(){
  this.userAdded.emit(this.userInput?.nativeElement.value);
  this.loggingService.logToConsole('User is added: '+this.userName);
}

}
