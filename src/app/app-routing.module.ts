import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ShowImageComponent } from './show-image/show-image.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'users/:userId', component: HomePageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'users/:userId/:imageId', component: ShowImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
