import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {AvatarModule} from "primeng/avatar";
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "./services/api.service";
import {FormsModule} from "@angular/forms";
import { TrackingDialogComponent } from './components/tracking-dialog/tracking-dialog.component';
import {TableModule} from "primeng/table";
import {TagModule} from "primeng/tag";
import { TrackingStateComponent } from './components/tracking-state/tracking-state.component';
import {DialogService} from "primeng/dynamicdialog";
import {DialogModule} from "primeng/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TooltipModule} from "primeng/tooltip";
import {StyleClassModule} from "primeng/styleclass";

@NgModule({
  declarations: [
    AppComponent,
    TrackingDialogComponent,
    TrackingStateComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    FormsModule,
    TableModule,
    TagModule,
    DialogModule,
    TooltipModule,
    StyleClassModule
  ],
  providers: [ApiService, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
