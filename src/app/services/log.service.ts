import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  logConsole(status: string){
    console.log("Logging the status in console and the status is: " +status);
  }
}
