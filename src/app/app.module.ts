import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgParticlesModule } from "ng-particles";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/dashboard/footer/footer.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { ListUsersComponent } from './components/dashboard/list-users/list-users.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CardUserComponent } from './components/dashboard/list-users/card-user/card-user.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    NavbarComponent,
    ListUsersComponent,
    LayoutComponent,
    CardUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
