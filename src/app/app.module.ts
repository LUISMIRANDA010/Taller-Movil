import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms'; // Importar aquí si se usa en toda la app

@NgModule({
  declarations: [
    AppComponent
    // No declares HomePage aquí
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule // Importar aquí si es necesario en toda la app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
