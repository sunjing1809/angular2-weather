import {RouterModule} from "@angular/router";
import {CelsiusComponent} from "./celsius.component";
const routes = [
    {path: '', component: CelsiusComponent}
];


export default RouterModule.forChild(routes);