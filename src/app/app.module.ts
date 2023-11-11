import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormArrayComponent } from './shared/components/form-array/form-array.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './shared/components/blog/blog.component';
import { CreditDirective } from './shared/directive/credit.directive';
import { CreditCardComponent } from './shared/components/credit-card/credit-card.component';
import { RxjsComponent } from './shared/components/rxjs/rxjs.component';

import {HttpClientModule} from '@angular/common/http';
import { PostFormComponent } from './shared/components/post-form/post-form.component'

@NgModule({
  declarations: [
    AppComponent,
    FormArrayComponent,
    BlogComponent,
    CreditDirective,
    CreditCardComponent,
    RxjsComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
