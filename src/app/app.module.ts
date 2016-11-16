import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HttpModule}  from '@angular/http';
import appRoutes from "./app.routes";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    appRoutes
  
  ],
  declarations: [
    AppComponent,

  ],
  bootstrap: [ AppComponent ]

})
export class AppModule { }
