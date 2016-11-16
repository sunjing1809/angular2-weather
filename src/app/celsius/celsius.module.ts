import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CelsiusComponent} from "./celsius.component";
import celsiusRoutes from "./celsius.routes";
import {HttpModule} from "@angular/http";
@NgModule({
    imports:[CommonModule, celsiusRoutes, HttpModule],
    declarations: [CelsiusComponent]
})
export default class CelsiusModule{}
