import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { WeatherService } from './Weather.service';
import { Subject }          from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


const Highcharts = require('highcharts/highcharts.src');
import 'highcharts/adapters/standalone-framework.src';


@Component({
  moduleId: "module.id",
  selector: 'user-form',
      styles:[`
a{
    text-decoration: none;
}

a.active{
    font-weight: bold;
}
`],

  templateUrl: 'user-form.component.html',
    providers: [ WeatherService]
})

 export class UserFormComponent {
    
    //     navs = [
    //     {url: "", content: "Home"},
    //     {url: "contacts", content: "Contacts"},
    //     {url: "contacts/1", content: "One"},
    // ];
  
   @ViewChild('chart') public chartEl: ElementRef;
   private _chart: any;

    isVisible = false;
    private searchTermStream = new Subject<string>();


constructor(  private weatherService: WeatherService) {


}

// public ngAfterViewInit() {
  
//   }
  public loadChart(date:any[], highTemp:number[], lowTemp:number[]) {

   
    let opts: any = {
        title: {
             text: 'Next ' + date.length +   ' Days Temperature',
            x: -20 //center
        },
        xAxis: {
            categories: date
        },
        series: [{
            name: 'High Temp',
            data: highTemp
        },
        {
             name: 'Low Temp',
            data: lowTemp,
            color: 'pink'

        }
        ],
        lineWidth: 5
    };
    
    if (this.chartEl && this.chartEl.nativeElement) {
        opts.chart = {
            type: 'line',
            renderTo: this.chartEl.nativeElement
        };

        this._chart = new Highcharts.Chart(opts);
    }

  }
  
//   public ngOnDestroy() {
//     this._chart.destroy();
//   }

    search(term: string) 
    {         
        this.isVisible = false; 
        this.searchTermStream.next(term); 
        
    }

forcases:Array<any>;
    
    items = this.searchTermStream
        .debounceTime(1000)
        .distinctUntilChanged()
        .switchMap((term: string) => this.weatherService.search(term))
        .subscribe(data => { this.isVisible = true; console.log(data); this.items =  data; 
             
             this.forcases= data.query.results.channel.item.forecast;
             console.log('array length: ',this.forcases.length);

             var dateArray: any[] = [this.forcases.length];
             var highArray: number[] = [this.forcases.length];
             var lowArray: number[] = [this.forcases.length];
     
        for (let c = 0; c < this.forcases.length; c++){
            dateArray[c] = this.forcases[c].date;
            highArray[c] = Number(this.forcases[c].high);
            lowArray[c] = Number(this.forcases[c].low);
        }
            console.log('date array' , dateArray);
            console.log('High temp array' , highArray);
            console.log('low temp array' , lowArray);
             
             this.loadChart(dateArray, highArray, lowArray );
        

        });

}
