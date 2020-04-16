import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { Capability2AppComponent } from './capability2-app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    Capability2AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    Capability2AppComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    const capability2App = createCustomElement(Capability2AppComponent, {injector: this.injector});
    customElements.define('capability2-app', capability2App);
  }

  ngDoBootstrap() {
    
  }
}
