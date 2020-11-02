import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ScheduleModule, ContextMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
