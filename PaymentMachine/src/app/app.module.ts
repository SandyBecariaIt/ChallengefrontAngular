import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuantityMoneyComponent } from './quantity-money/quantity-money.component';
import { ActivityComponent } from './activity/activity.component';

@NgModule({
  declarations: [
    AppComponent,
    QuantityMoneyComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
