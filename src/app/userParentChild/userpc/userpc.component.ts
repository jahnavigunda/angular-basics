import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-userpc',
  templateUrl: './userpc.component.html',
  styleUrls: ['./userpc.component.css']
})
export class UserpcComponent {
@Input('user') userName : string | undefined ;
}
