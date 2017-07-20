import { Component, OnInit,AfterViewInit,ElementRef,ViewChild,Input } from '@angular/core';
declare var vis: any;


@Component({
  selector: 'app-scatterplot',
  templateUrl: './scatterplot.component.html',
  styleUrls: ['./scatterplot.component.css']
})
export class ScatterplotComponent implements AfterViewInit {
  @ViewChild("scatterplot", {read: ElementRef}) scatterplot: ElementRef;
  @Input()
  dataArray:any;

  ngAfterViewInit() {
    var options = {
      sort: false,
      sampling:false,
      style:'points',
      dataAxis: {
        left: {
          range: {
            min: 300, max: 800
          }
        }
      },
      drawPoints: {
        enabled: true,
        size: 6,
        style: 'circle' // square, circle
      },
      defaultGroup: 'Scatterplot',
      height: '300px'
    };
    var graph2d = new vis.Graph2d(this.scatterplot.nativeElement, this.dataArray, options);
  }

}
