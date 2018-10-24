import { HomeComponent } from './views/home/home.component';
import { HowtoComponent } from './views/howto/howto.component';
import { RhymeModule} from './modules/Rhyme/rhyme.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RhymeService } from './modules/Rhyme/rhyme.service';
import { HttpClientModule } from '@angular/common/http';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HowtoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RhymeModule,
    HttpClientModule
  ],
  providers: [RhymeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
