import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserImageComponent } from './user-image/user-image.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'users/:userId', component: UserImageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
