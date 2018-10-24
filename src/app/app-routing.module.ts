import { HomeComponent } from './views/home/home.component';
import { aboutusComponent } from './views/aboutus/aboutus.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './views/contact/contact.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'aboutus', component: aboutusComponent},
  {path: 'contact', component: ContactComponent},
  {
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
