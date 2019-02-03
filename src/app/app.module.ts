import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactItemComponent } from './contact/contact-item/contact-item.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component'

import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {ToastModule} from 'primeng/toast';
import { DialogService } from 'primeng/components/common/api';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactItemComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    // ngprime
    ButtonModule,
    TabViewModule,
    CodeHighlighterModule,
    DynamicDialogModule,
    ToastModule,
    InputTextModule
  ],
  entryComponents: [ContactFormComponent],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
