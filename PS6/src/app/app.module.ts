import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { ResultDisplayComponent } from './result-display/result-display.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    ResultDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
