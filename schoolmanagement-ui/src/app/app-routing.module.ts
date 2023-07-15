import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ChatWithUsComponent } from './chat-with-us/chat-with-us.component';
import { EventsComponent } from './events/events.component';
import { OrderComponent } from './order/order.component';
import { OurProductComponent } from './our-product/our-product.component';
import { HomeContentComponent } from './home-content/home-content.component';


const routes: Routes = [
  {path:'home', component:HomeContentComponent},
  {path: 'employees', component:EmployeeComponent},
  {path: 'employeeForm', component:EmployeeFormComponent},
  {path:'aboutUs', component:AboutUsComponent},
  {path:'contactUs', component:ContactUsComponent},
  {path:'chat', component:ChatWithUsComponent},
  {path:'events', component:EventsComponent},
  {path:'order', component:OrderComponent},
  {path:'ourProduct', component:OurProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
