import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


// Components
import { AppComponent } from './app.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';
import { NavComponent } from './nav/nav.component';
import { EventosComponent } from './eventos/eventos.component';

// Bootstrap
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [AppComponent, PalestrantesComponent, EventosComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, CollapseModule.forRoot(),FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
