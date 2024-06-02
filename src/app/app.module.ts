import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user/user.component';
import { UsersComponent } from './user/users/users.component';

import { FormsModule } from '@angular/forms';
import { UserpcComponent } from './userParentChild/userpc/userpc.component';
import { UserspcComponent } from './userParentChild/userspc/userspc.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    UserpcComponent,
    UserspcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
