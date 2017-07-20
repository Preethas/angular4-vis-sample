import { Injectable } from '@angular/core';


@Injectable()
export class DataserviceService {

  constructor() {
  }

  getTimeLineData() {
    return [
      {id: 1, content: '10th', start: '1991-01-20'},
      {id: 2, content: '12th', start: '1993-02-14'},
      {id: 3, content: 'BTech', start: '1997-03-18'},
      {id: 4, content: 'MTech', start: '2001-04-16'},
      {id: 5, content: 'CSM', start: '2005-05-25'},
      {id: 6, content: 'SCJP', start: '2007-06-27'}
    ];
  }

  getNetworkData() {
    var nodesArr = [
      {id: 1, label: 'user', image: '../assets/icons8-Thinking Female-48.png',shape:'image'},
      {id: 2, label: 'java', color: 'rgb(255,168,7)'},
      {id: 3, label: 'scala', color: '#7BE141'},
      {id: 4, label: 'go', color: 'rgba(97,195,238,0.5)'},
      {id: 5, label: 'c++', color: {background: 'pink', border: 'purple'}}
    ];
    var edgesArr = [
      {from: 1, to: 2},
      {from: 1, to: 3},
      {from: 1, to: 4},
      {from: 1, to: 5},
    ];

    return {'nodes': nodesArr, 'edges': edgesArr};
  }

  getScatterplotData(){
    var items = [];
    for (var i = 0; i < 100; i++) {
      items.push({x: new Date('2014-06-11').valueOf() + Math.floor(Math.random() * 30000), y: 500 + (Math.random() * 100)});
    }
    return items;
  }

}
