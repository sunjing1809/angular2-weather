import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home.component";
import homeRoutes from "./home.routes";
import { UserFormComponent } from './form/user-form.component';

@NgModule({
    imports:[CommonModule, homeRoutes],
    declarations: [HomeComponent, UserFormComponent]
})
export default class HomeModule{}