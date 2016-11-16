import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import './rxjs-operators';
import {HomeComponent} from "./home/home.component";


@Component({
 
  selector: 'app-root',
 styles:[`
a{
    text-decoration: none;
}

a.active{
    font-weight: bold;
    font-size: 20px;
}
`],
    template: `
   

<nav>
    <a *ngFor="let nav of navs" 
        [routerLink]="nav.url" 
        routerLinkActive="active"
        [routerLinkActiveOptions]="{exact:true}"
        >
        {{nav.content}}
    </a>
</nav>

 
<router-outlet></router-outlet>

`
})
export class AppComponent {
    navs = [
        {url: "", content: "Fehrenheit"},
        {url: "celsius", content: "Celsius"},
      
    ];
}
 
