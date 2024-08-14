import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module'; // Asegúrate de tener un routing module para HomePage

@NgModule({
  declarations: [HomePage], // Declara HomePage aquí
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // Importa ReactiveFormsModule aquí para formularios reactivos
    IonicModule,
    HomePageRoutingModule // Importa el módulo de routing si existe
  ]
})
export class HomePageModule {}
