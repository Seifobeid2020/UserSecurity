import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from "@auth0/angular-jwt";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainNavComponent } from './main-nav/main-nav.component';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerComponent,
    HomeComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
     RouterModule.forRoot([
      { path: '', component: HomeComponent  },
      { path: 'login', component: LoginComponent },
      { path: 'customers', component: CustomerComponent ,canActivate: [AuthGuard]},
    ]),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:44317"],
        blacklistedRoutes: []
      }
    }),
    MatTableModule,MatDialogModule,MatFormFieldModule,MatInputModule,MatButtonModule,
    MatDatepickerModule,MatToolbarModule,MatSidenavModule,MatSidenavModule,MatIconModule,MatListModule,MatCardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
