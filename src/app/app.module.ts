import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user/user.component';
import { UsersComponent } from './user/users/users.component';

import { FormsModule } from '@angular/forms';
import { UserpcComponent } from './userParentChild/userpc/userpc.component';
import { UserspcComponent } from './userParentChild/userspc/userspc.component';
import { AdduserComponent } from './userParentChild/adduser/adduser.component';
import { HighlightTextDirective } from './Directives/HighlightText.directive';
import { RendererHighlightDirective } from './Directives/renderer-highlight.directive';
import { AlternateIfDirective } from './Directives/alternate-if.directive';
import { UserService } from './services/user.service';
import { LoggingService } from './services/logging.service';
import { LogService } from './services/log.service';
import { UsersRouteComponent } from './AngularRouting/users-route/users-route.component';
import { HomeComponent } from './AngularRouting/home/home.component';
import { CategoriesComponent } from './AngularRouting/categories/categories.component';
import { Router, RouterModule, Routes,RouterLinkActive } from '@angular/router';

const appRoutes: Routes =[
  {path:'', component: HomeComponent},
  {path:'users', component: UsersRouteComponent},
  {path: 'categories', component: CategoriesComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    UserpcComponent,
    UserspcComponent,
    AdduserComponent, 
    HighlightTextDirective, RendererHighlightDirective, AlternateIfDirective,
     UsersRouteComponent, HomeComponent, CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, LoggingService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
