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

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    UserpcComponent,
    UserspcComponent,
    AdduserComponent, 
    HighlightTextDirective, RendererHighlightDirective, AlternateIfDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserService, LoggingService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
