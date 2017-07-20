import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { NetworkComponent } from './components/network/network.component';
import { ScatterplotComponent } from './components/scatterplot/scatterplot.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    NetworkComponent,
    ScatterplotComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
