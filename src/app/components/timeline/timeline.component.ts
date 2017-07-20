import {Component,AfterViewInit,ElementRef,ViewChild,Input} from '@angular/core';


declare var vis: any;

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements AfterViewInit {

  @ViewChild("timeline", {read: ElementRef}) timeline: ElementRef;

  @Input()
  dataArray:any;



  ngAfterViewInit() {

    var items = new vis.DataSet(this.dataArray);

    // Configuration for the Timeline
    var options = {};

    // Create a Timeline
    var timelineObj = new vis.Timeline(this.timeline.nativeElement, items, options);


  }

}
