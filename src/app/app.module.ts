import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home/home.component';
import { MylistComponent } from './components/myList/mylist/mylist.component';
import { TvSeriesComponent } from './components/tvSeries/tv-series/tv-series.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MylistComponent,
    TvSeriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
