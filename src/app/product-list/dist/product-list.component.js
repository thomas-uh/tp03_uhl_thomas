"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductListComponent = void 0;
var core_1 = require("@angular/core");
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService) {
        this.productService = productService;
        this.nameFilter = '';
        this.priceFilterLE = -1;
        this.priceFilterGE = -1;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.products = this.productService.getProducts();
    };
    ProductListComponent.prototype.onFilterEvent = function (filters) {
        var _this = this;
        filters.subscribe(function (filtersValues) {
            _this.nameFilter = filtersValues.nameFilter;
            _this.priceFilterLE = filtersValues.priceFilterLE === '' ? -1 : filtersValues.priceFilterLE;
            _this.priceFilterGE = filtersValues.priceFilterGE === '' ? -1 : filtersValues.priceFilterGE;
        });
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'app-product-list',
            templateUrl: './product-list.component.html',
            styleUrls: ['./product-list.component.scss']
        })
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
