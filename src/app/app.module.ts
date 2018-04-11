import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './footer/footer.component';
import { FilterByStatusPipe } from './filter-by-status.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    FooterComponent,
    FilterByStatusPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
