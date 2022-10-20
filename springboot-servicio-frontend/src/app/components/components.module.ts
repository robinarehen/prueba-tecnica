import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule
  ]
})
export class ComponentsModule { }
