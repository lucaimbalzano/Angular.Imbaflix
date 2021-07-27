import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { MylistComponent } from './components/myList/mylist/mylist.component';
import { TvSeriesComponent } from './components/tvSeries/tv-series/tv-series.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'myList', component: MylistComponent},
  {path: 'tvSeries', component: TvSeriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
