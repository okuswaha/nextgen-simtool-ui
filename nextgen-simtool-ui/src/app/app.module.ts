import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {ProductServiceService} from './service/product-service.service';
import { ConfigParametersComponent } from './config-parameters/config-parameters.component';
import { ConfigParamsListComponent } from './config-params-list/config-params-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigParametersComponent,
    ConfigParamsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
