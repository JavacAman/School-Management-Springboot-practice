import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeServiceService } from './employeeServices/employee-service.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from  '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OrderComponent } from './order/order.component';
import { OurProductComponent } from './our-product/our-product.component';
import { EventsComponent } from './events/events.component';
import { ChatWithUsComponent } from './chat-with-us/chat-with-us.component';
import { HomeComponent } from './home/home.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HomeContentComponent } from './home-content/home-content.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeFormComponent,
    ContactUsComponent,
    AboutUsComponent,
    OrderComponent,
    OurProductComponent,
    EventsComponent,
    ChatWithUsComponent,
    HomeComponent,
    FooterComponentComponent,
    HomeContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
