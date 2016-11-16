import {RouterModule} from "@angular/router";

const routes = [
    {path: '', loadChildren: 'app/home/home.module'},
    {path: 'celsius', loadChildren: 'app/celsius/celsius.module'}
];


export default RouterModule.forRoot(routes);