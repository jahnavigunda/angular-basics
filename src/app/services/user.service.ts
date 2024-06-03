import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private loggingService: LoggingService) { }

  users = [
    {name: 'Jahanvi', status:'Active'},
    {name: 'Jahanvi1', status:'Active'},
    {name: 'Jahanvi2', status:'Active'},

  ];

  addUser(name:string, status:string){
    this.users.push({name, status});
    this.loggingService.logToConsole(status);
  }
  onUpdateStatus(id: number, status:string){
    this.users[id].status = status;
  }
}
