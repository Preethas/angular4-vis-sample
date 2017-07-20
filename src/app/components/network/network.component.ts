import { Component, OnInit,AfterViewInit,ElementRef,ViewChild,Input } from '@angular/core';
declare var vis: any;


@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements AfterViewInit {
  @ViewChild("network", {read: ElementRef}) network: ElementRef;
  @Input()
  dataArray:any;

  ngAfterViewInit(): void {

    var options = {
      height:'500px',
      width:'100%',
    }

    var network = new vis.Network(this.network.nativeElement, this.dataArray, options);
  }

}
