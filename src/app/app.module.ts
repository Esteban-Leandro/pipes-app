import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData }  from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import  localeEsCL  from '@angular/common/locales/es-CL';
import  localeFrCA  from '@angular/common/locales/fr-CA';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData( localeEsCL );
registerLocaleData( localeFrCA );
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue:'es-CL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
