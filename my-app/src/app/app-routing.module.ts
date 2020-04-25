import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent} from './component/signin/signin.component';
import { UserdataComponent} from './component/userdata/userdata.component';
import { ShowUsersComponent} from './component/show-users/show-users.component';
import { AddBbidComponent } from './component/add-bbid/add-bbid.component';

const routes: Routes = [
  {path:'', redirectTo:'index.html',pathMatch:'full'},
  {path:'addbbid', component: AddBbidComponent },
  {path:'showusers', component:ShowUsersComponent },
  {path:'userdata', component:UserdataComponent },
  {path:'signin', component:SigninComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
