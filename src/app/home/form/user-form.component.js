"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Weather_service_1 = require('./Weather.service');
var Subject_1 = require('rxjs/Subject');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/switchMap');
var Highcharts = require('highcharts/highcharts.src');
require('highcharts/adapters/standalone-framework.src');
var UserFormComponent = (function () {
    function UserFormComponent(weatherService) {
        var _this = this;
        this.weatherService = weatherService;
        this.isVisible = false;
        this.searchTermStream = new Subject_1.Subject();
        this.items = this.searchTermStream
            .debounceTime(1000)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this.weatherService.search(term); })
            .subscribe(function (data) {
            _this.isVisible = true;
            console.log(data);
            _this.items = data;
            _this.forcases = data.query.results.channel.item.forecast;
            console.log('array length: ', _this.forcases.length);
            var dateArray = [_this.forcases.length];
            var highArray = [_this.forcases.length];
            var lowArray = [_this.forcases.length];
            for (var c = 0; c < _this.forcases.length; c++) {
                dateArray[c] = _this.forcases[c].date;
                highArray[c] = Number(_this.forcases[c].high);
                lowArray[c] = Number(_this.forcases[c].low);
            }
            console.log('date array', dateArray);
            console.log('High temp array', highArray);
            console.log('low temp array', lowArray);
            _this.loadChart(dateArray, highArray, lowArray);
        });
    }
    // public ngAfterViewInit() {
    //   }
    UserFormComponent.prototype.loadChart = function (date, highTemp, lowTemp) {
        var opts = {
            title: {
                text: 'Next ' + date.length + ' Days Temperature',
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
    };
    //   public ngOnDestroy() {
    //     this._chart.destroy();
    //   }
    UserFormComponent.prototype.search = function (term) {
        this.isVisible = false;
        this.searchTermStream.next(term);
    };
    __decorate([
        core_1.ViewChild('chart'), 
        __metadata('design:type', core_1.ElementRef)
    ], UserFormComponent.prototype, "chartEl", void 0);
    UserFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-form',
            styles: ["\na{\n    text-decoration: none;\n}\n\na.active{\n    font-weight: bold;\n}\n"],
            templateUrl: 'user-form.component.html',
            providers: [Weather_service_1.WeatherService]
        }), 
        __metadata('design:paramtypes', [Weather_service_1.WeatherService])
    ], UserFormComponent);
    return UserFormComponent;
}());
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.component.js.map