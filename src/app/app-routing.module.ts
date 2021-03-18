import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { EditprofileComponent } from './pages/editprofile/editprofile.component';
import { HomeComponent } from './pages/home/home.component';
import { PostdetailsComponent } from './pages/postdetails/postdetails.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'editprofile', component: EditprofileComponent },
  { path: 'home', component: HomeComponent },
  { path: 'post/:id', component: PostdetailsComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
