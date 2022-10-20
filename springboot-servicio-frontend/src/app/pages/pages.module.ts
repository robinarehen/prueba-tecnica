import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../components/components.module';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    PagesComponent,
    LoginComponent,
    UsersComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressBarModule
  ]
})
export class PagesModule { }
