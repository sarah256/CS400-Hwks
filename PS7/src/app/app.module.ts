import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { ResultDisplayComponent } from './result-display/result-display.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    ResultDisplayComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
