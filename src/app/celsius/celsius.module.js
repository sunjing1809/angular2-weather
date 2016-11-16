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
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var celsius_component_1 = require("./celsius.component");
var celsius_routes_1 = require("./celsius.routes");
var http_1 = require("@angular/http");
var CelsiusModule = (function () {
    function CelsiusModule() {
    }
    CelsiusModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, celsius_routes_1.default, http_1.HttpModule],
            declarations: [celsius_component_1.CelsiusComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], CelsiusModule);
    return CelsiusModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CelsiusModule;
//# sourceMappingURL=celsius.module.js.map