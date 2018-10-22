import { HomeComponent } from './views/home/home.component';
import { HowtoComponent } from './views/howto/howto.component';
import { WikipediaModule} from './modules/wikipedia/wiki.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WikiService } from './modules/wikipedia/wiki.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HowtoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WikipediaModule,
  ],
  providers: [WikiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
