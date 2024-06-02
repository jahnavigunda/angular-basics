import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-userpc',
  templateUrl: './userpc.component.html',
  styleUrls: ['./userpc.component.css']
})
export class UserpcComponent implements OnInit, OnChanges{

@Input('user') userName : string | undefined ;
@Input() name : string | undefined;
constructor(){}

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnchanges called');
    console.log(changes);
  }

ngOnInit(): void {
  console.log('ngOnInit called');
}

}
