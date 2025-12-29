import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessLevelComponent } from './components/access-level/access-level.component';

// Services
import { ApiService } from './services/api.service';
import { AccessLevelService } from './services/access-level.service';

@NgModule({
  declarations: [
    AppComponent,
    AccessLevelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService,
    AccessLevelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }