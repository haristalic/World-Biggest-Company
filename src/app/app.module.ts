import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './home/header/header.component';
import { ServiceComponent } from './home/service/service.component';
import { LocationComponent } from './home/location/location.component';
import { FacilitiesComponent } from './home/facilities/facilities.component';
import { EmployeiesComponent } from './home/employeies/employeies.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    ServiceComponent,
    LocationComponent,
    FacilitiesComponent,
    EmployeiesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
