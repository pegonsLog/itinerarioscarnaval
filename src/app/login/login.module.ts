import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing-module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, AngularMaterialModule, ReactiveFormsModule, LoginRoutingModule, FormsModule],
  exports: [LoginComponent],
})
export class LoginModule {}
