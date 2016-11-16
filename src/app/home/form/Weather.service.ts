import { Injectable } from '@angular/core';
import { Http} from '@angular/http';



@Injectable()
export class WeatherService {
    constructor(private http: Http) {}

    search(term: string){

        var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'+term+'%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'

        return this.http.get( url )
            .map( res => res.json());

    }



}