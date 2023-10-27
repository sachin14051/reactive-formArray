import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormArrayComponent } from './shared/components/form-array/form-array.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './shared/components/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    FormArrayComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
