import { HomeComponent } from './views/home/home.component';
import { aboutusComponent } from './views/aboutus/aboutus.component';
import { RhymeModule } from './modules/Rhyme/rhyme.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RhymeService } from './modules/Rhyme/rhyme.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ContactComponent } from './views/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    aboutusComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RhymeModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [RhymeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
