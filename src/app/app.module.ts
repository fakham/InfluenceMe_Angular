import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HeaderComponent } from './common/header/header.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBriefcase, faUniversity, faMapMarker, fas } from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from './common/footer/footer.component';
import { PostComponent } from './components/post/post.component';
import { InfluencersComponent } from './components/influencers/influencers.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FeaturedpostComponent } from './components/featuredpost/featuredpost.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { PostdetailsComponent } from './pages/postdetails/postdetails.component';
import { AuthorComponent } from './components/author/author.component';
import { PostinfoComponent } from './components/postinfo/postinfo.component';
import { EditprofileComponent } from './pages/editprofile/editprofile.component';
import { FormsModule } from '@angular/forms';
import { CreatepostComponent } from './modals/createpost/createpost.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    ProfileComponent,
    FooterComponent,
    PostComponent,
    InfluencersComponent,
    CategoriesComponent,
    FeaturedpostComponent,
    NavigationComponent,
    HomeComponent,
    PostdetailsComponent,
    AuthorComponent,
    PostinfoComponent,
    EditprofileComponent,
    CreatepostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faMapMarker, faUniversity, faBriefcase);
  }
}
