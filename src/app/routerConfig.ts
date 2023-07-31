import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';
import { FriendsComponent } from './components/friends/friends.component';



const appRoutes : Routes = [
    {path: '', component:ChatComponent },
    {path: 'login', component:LoginComponent },
    {path: 'register', component:RegisterComponent },
    {path: 'chat', component:ChatComponent},
    {path: 'friends', component:FriendsComponent }
]

export default appRoutes;