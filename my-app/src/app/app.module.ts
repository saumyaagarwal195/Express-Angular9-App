import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent} from './component/signin/signin.component';
import { UserdataComponent} from './component/userdata/userdata.component';
import { ShowUsersComponent} from './component/show-users/show-users.component';
import { AddBbidComponent } from './component/add-bbid/add-bbid.component';
import { MyappService } from './services/myapp.service';


@NgModule({
  declarations: [
    AppComponent,
    AddBbidComponent,
    SigninComponent,
    UserdataComponent,
    ShowUsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [MyappService],
  bootstrap: [AppComponent]
})
export class AppModule { }
