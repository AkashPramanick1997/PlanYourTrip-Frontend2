import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminOrganizationComponent } from './admin-organization/admin-organization.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { DummyComponent } from './dummy/dummy.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PacksComponent } from './packs/packs.component';
import { HotelComponent } from './hotel/hotel.component';
import { UserPackComponent } from './user-pack/user-pack.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AuthGuard } from './auth.guard';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AdminHotelComponent } from './admin-hotel/admin-hotel.component';
import { AdminPackComponent } from './admin-pack/admin-pack.component';

const routes: Routes = [
  { path : '' , component : HomeComponent },
  { path : 'home' , component : HomeComponent},
  { path : 'registration' , component : RegistrationComponent},
  { path : 'login' , component : LoginComponent},
  { path : 'aboutus', component : AboutUsComponent},
  { path : 'contactus' , component : ContactUsComponent},
  { path : 'packs' , component : PacksComponent},
  { path : 'hotels' , component : HotelComponent},
  { path : 'user-pack' , component : UserPackComponent,
            canActivate : [AuthGuard]},
  { path : 'bookings' , component : BookingsComponent},
  { path : 'dummy' ,  component : DummyComponent},
  {path : 'adminlogin' , component : AdminLoginComponent},
  { path : 'dashboard' , component : AdminDashboardComponent},
  { path : 'adminorg' , component : AdminOrganizationComponent},
  { path : 'admin' , component : AdminComponent},
  { path :'sidenav' , component : SidenavComponent},
  { path : 'adminuser' , component : AdminUserComponent},
  { path : 'adminhotel' , component : AdminHotelComponent},
  { path : 'adminpack' , component : AdminPackComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
