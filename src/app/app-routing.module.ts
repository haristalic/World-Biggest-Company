import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeiesComponent } from './home/employeies/employeies.component';
import { FacilitiesComponent } from './home/facilities/facilities.component';
import { LocationComponent } from './home/location/location.component';
import { ServiceComponent } from './home/service/service.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component:NewsComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HeaderComponent,HomeComponent,NavigationComponent,FooterComponent,EmployeiesComponent,FacilitiesComponent,LocationComponent,ServiceComponent,NewsComponent];