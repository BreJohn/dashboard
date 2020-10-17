import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { AppComponent } from '../components/app/app.component';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { CalendarComponent } from '../components/calendar/calendar.component';
import { MapComponent } from '../components/map/map.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { StoreModule } from '@ngrx/store';
import { UserFormComponent } from '../components/user-form/user-form.component';
import { AgmCoreModule } from '@agm/core';
import { UsersComponent } from '../components/users/users.component';
import * as fromApp from '../store/app.reducer';
import { UserService } from '../services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CalendarComponent,
    MapComponent,
    CalendarComponent,
    UserFormComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot(fromApp.appReducer),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDXrny7l7-uRKd64MWqBGh4_-ke_j2l3qk',
    }),
  ],
  providers: [LoginService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
