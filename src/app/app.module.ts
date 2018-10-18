import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HowtoComponent } from './views/howto/howto.component';
import { WikipediaModule} from './modules/wikipedia/wiki.module';
import { WikiService } from './modules/wikipedia/wiki.service';

import { AppRoutingModule } from './app-routing.module';

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
