import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private logService: LogService) { }

  users = [
    {name: 'Jahanvi', status:'Active'},
    {name: 'Jahanvi1', status:'Active'},
    {name: 'Jahanvi2', status:'Active'},

  ];

  addUser(name:string, status:string){
    this.users.push({name, status});
    this.logService.logConsole(status);
  }
  onUpdateStatus(id: number, status:string){
    this.users[id].status = status;
  }
}
