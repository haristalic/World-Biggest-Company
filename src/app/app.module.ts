import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routingComponents } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
