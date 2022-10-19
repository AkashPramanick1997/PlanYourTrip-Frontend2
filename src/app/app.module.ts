import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PacksComponent } from './packs/packs.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HotelComponent } from './hotel/hotel.component';
import { UserPackComponent } from './user-pack/user-pack.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { BookingsComponent } from './bookings/bookings.component';
import { DummyComponent } from './dummy/dummy.component';
import { AuthGuard } from './auth.guard';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import {MatInputModule} from '@angular/material/input';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import {MatMenuModule} from '@angular/material/menu';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import {MatTableModule} from '@angular/material/table';
import { MatDrawerContainer } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AdminOrganizationComponent } from './admin-organization/admin-organization.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminHotelComponent } from './admin-hotel/admin-hotel.component';
import { AdminPackComponent } from './admin-pack/admin-pack.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogAdminUserComponent } from './dialog-admin-user/dialog-admin-user.component';
import { DialogAdminOrganizationComponent } from './dialog-admin-organization/dialog-admin-organization.component';
import { NgConfirmModule } from 'ng-confirm-box';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    PacksComponent,
    HeaderComponent,
    FooterComponent,
    HotelComponent,
    UserPackComponent,
    BookingsComponent,
    DummyComponent,
    AdminLoginComponent,
    SidenavComponent,
    AdminHeaderComponent,
    AdminDashboardComponent,
    AdminComponent,
    AdminOrganizationComponent,
    AdminUserComponent,
    AdminHotelComponent,
    AdminPackComponent,
    DialogAdminUserComponent,
    DialogAdminOrganizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatTabsModule,
    MatTableModule,
    MatSnackBarModule,
    MatDialogModule,
    NgConfirmModule,


  ],
  providers: [ AuthGuard],
  bootstrap: [AppComponent],
  entryComponents : [
    DialogAdminUserComponent,
    DialogAdminOrganizationComponent,
  ]
})
export class AppModule { }
