import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { UserImageComponent } from './user-image/user-image.component';
import { UserListComponent } from './user-list/user-list.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ShowImageComponent } from './show-image/show-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopNavComponent,
    UserImageComponent,
    UserListComponent,
    SignupPageComponent,
    ShowImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
