import { Component } from '@angular/core';
import {DataserviceService} from './services/dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataserviceService]
})
export class AppComponent {
  title = 'app';
  timelineData:any;
  networkData:any;
  scatterPlotData:any;

  constructor(private _dataService:DataserviceService){
    this.networkData = _dataService.getNetworkData();
    this.timelineData = _dataService.getTimeLineData();
    this.scatterPlotData = _dataService.getScatterplotData();
  }

}
