import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit{

userName: string='';
@Output() userAdded = new EventEmitter<string>();

@ViewChild('userInput') userInput: ElementRef | undefined;
constructor() {
}
ngOnInit(): void {
}
onUserAdded(){
  this.userAdded.emit(this.userInput?.nativeElement.value);
}

}
