import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FriendsComponent } from './components/friends/friends.component';
import { ChatComponent } from './components/chat/chat.component';
import { authguardGuard } from './shared/authguard.guard';


const routes: Routes = [
  {path: '', component:ChatComponent, canActivate:[authguardGuard]},
  {path: 'login', component:LoginComponent },
  {path: 'register', component:RegisterComponent },
  {path: 'chat', component:ChatComponent, canActivate:[authguardGuard]},
  {path: 'friends', component:FriendsComponent, canActivate:[authguardGuard], 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }