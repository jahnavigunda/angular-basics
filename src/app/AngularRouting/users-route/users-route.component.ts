import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-route',
  templateUrl: './users-route.component.html',
  styleUrls: ['./users-route.component.css']
})
export class UsersRouteComponent implements OnInit{

  constructor(private router: Router){}
  ngOnInit(): void {
  }
  onCategoriesClick(){
    //perform some logic and navigate to page
    // this.router.navigateByUrl('/categories');
    this.router.navigate(['/categories']);

  }

}
