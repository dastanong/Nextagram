import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { UserImageComponent } from './user-image/user-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopNavComponent,
    UserImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
