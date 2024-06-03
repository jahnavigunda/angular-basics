import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users = [
    {name: 'Jahanvi', status:'Active'},
    {name: 'Jahanvi1', status:'Active'},
    {name: 'Jahanvi2', status:'Active'},

  ];

  addUser(name:string, status:string){
    this.users.push({name, status});
  }
  onUpdateStatus(id: number, status:string){
    this.users[id].status = status;
  }
}
