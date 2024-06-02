import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit{

userName: string='';
@Output() userAdded = new EventEmitter<string>();
constructor() {
}
ngOnInit(): void {
}
onUserAdded(){
  this.userAdded.emit(this.userName);
}

}
