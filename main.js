(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Model/Image.ts":
/*!********************************!*\
  !*** ./src/app/Model/Image.ts ***!
  \********************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
var Image = /** @class */ (function () {
    function Image(photo) {
        this.url = '';
        this.title = '';
        this.url = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret;
        this.title = photo.title;
    }
    return Image;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-searchbar></app-searchbar>\n    <app-imagescroll></app-imagescroll>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'gallary';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _imagescroll_imagescroll_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imagescroll/imagescroll.component */ "./src/app/imagescroll/imagescroll.component.ts");
/* harmony import */ var _search_searchbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/searchbar */ "./src/app/search/searchbar.ts");
/* harmony import */ var _service_imagesearch_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/imagesearch.service */ "./src/app/service/imagesearch.service.ts");
/* harmony import */ var _directives_infinitescroll_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/infinitescroll.directive */ "./src/app/directives/infinitescroll.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _directives_infinitescroll_directive__WEBPACK_IMPORTED_MODULE_9__["InfiniteScrollDirective"],
                _search_searchbar__WEBPACK_IMPORTED_MODULE_7__["SearchBarComponent"],
                _imagescroll_imagescroll_component__WEBPACK_IMPORTED_MODULE_6__["ImageScrollComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"]
            ],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["PathLocationStrategy"] },
                _service_imagesearch_service__WEBPACK_IMPORTED_MODULE_8__["ImageService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/directives/infinitescroll.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/directives/infinitescroll.directive.ts ***!
  \********************************************************/
/*! exports provided: InfiniteScrollDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollDirective", function() { return InfiniteScrollDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



;
var InfiniteScrollDirective = /** @class */ (function () {
    function InfiniteScrollDirective(element) {
        this.element = element;
        this.percent = 90;
        this.scrollAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.el = element.nativeElement;
    }
    InfiniteScrollDirective.prototype.ngAfterViewInit = function () {
        this.registerScrollEvent();
        this.registerResizeEvent();
    };
    InfiniteScrollDirective.prototype.registerScrollEvent = function () {
        var _this = this;
        this.scrollEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'scroll');
        var requestOnScroll$ = this.scrollEvent$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return ({
            sH: document.body.clientHeight,
            sT: window.pageYOffset,
            cH: window.innerHeight
        }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (position) { return _this.needLoadMore(position); }));
        requestOnScroll$.subscribe(function () {
            _this.scrollAction.emit(null);
        });
    };
    InfiniteScrollDirective.prototype.registerResizeEvent = function () {
        var _this = this;
        this.resizeEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'resize');
        var requestOnResize$ = this.resizeEvent$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(250), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return ({
            sH: _this.el.scrollHeight,
            sT: window.pageYOffset,
            cH: _this.el.offsetHeight
        }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (position) { return _this.needLoadMore(position); }));
        requestOnResize$.subscribe(function () {
            _this.scrollAction.emit(null);
        });
    };
    InfiniteScrollDirective.prototype.needLoadMore = function (position) {
        return ((position.sT + position.cH) / position.sH) > (this.percent / 100);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfiniteScrollDirective.prototype, "scrollElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], InfiniteScrollDirective.prototype, "scrollAction", void 0);
    InfiniteScrollDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[infinite-scroll]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], InfiniteScrollDirective);
    return InfiniteScrollDirective;
}());



/***/ }),

/***/ "./src/app/imagescroll/imagescroll.component.css":
/*!*******************************************************!*\
  !*** ./src/app/imagescroll/imagescroll.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ga-image-container {\n    padding: 20px;\n    height: 100%;\n}\n\n.ga-image-container>div *,\n.ga-image-container>h2 {\n    display: block;\n    margin: 0 auto;\n    text-align: center;\n    max-width: 100%;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    color: #c3c3c3;\n}\n\n.ga-image-container>div>h3 {\n    margin: 20px;\n}\n\n.ga-image-container>h2 {\n    width: 100%;\n    border-bottom: 2px solid #c3c3c3;\n    line-height: 0.1em;\n    margin: 50px 0 20px;\n    font-weight: 600;\n}\n\n.ga-image-container>h2>span {\n    background: #fff;\n    padding: 0 10px;\n}\n\n.ga-image-list {\n    display: flex;\n    flex-flow: wrap;\n    align-items: top;\n    justify-content: space-around;\n}\n\n.ga-image-list li {\n    box-shadow: 5px 11px 20px 3px rgba(1, 1, 1, 0.43);\n    flex: 30%;\n    list-style-type: none;\n    max-width: 30%;\n    margin-bottom: 15px;\n    max-height: 210px;\n    overflow: hidden;\n    text-align: center;\n}\n\n.ga-image-list img {\n    width: auto;\n    height: auto;\n    min-height: 210px;\n    min-width: 100%;\n    margin: 0 -100%;\n    position: relative;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n\n@media screen and (max-width: 786px) {\n    .ga-image-list li {\n        flex: 48%;\n        max-width: 48%;\n    }\n}\n\n@media screen and (max-width: 480px) {\n    .ga-image-list li {\n        flex: 100%;\n        max-width: 100%;\n        max-height: 300px;\n    }\n}"

/***/ }),

/***/ "./src/app/imagescroll/imagescroll.component.html":
/*!********************************************************!*\
  !*** ./src/app/imagescroll/imagescroll.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ga-image-container\">\n    <div *ngIf=\"noResult\">\n        <h3>Cound not find images for the keyword, please try another.</h3>\n        <img src=\"assets/image/notFound.jpg\" alt=\"Result not found\">\n    </div>\n    <ul class=\"ga-image-list\" [hidden]=\"!noResult\" infinite-scroll (scrollAction)=\"loadMoreImages()\">\n        <li *ngFor=\"let image of imageList\">\n            <img src=\"{{image.url}}.jpg\" sizes=\"(max-width: 480px) 100vw,(max-width: 786px) 50vw, 30vw\" srcset=\"{{image.url}}_n.jpg 300w,\n                {{image.url}}_n.jpg 350w,\n                {{image.url}}_z.jpg 500w\" alt=\"{{image.title}}\">\n        </li>\n    </ul>\n    <h2 *ngIf=\"toEnd\">\n        <span>{{total}} Results</span>\n    </h2>\n</div>"

/***/ }),

/***/ "./src/app/imagescroll/imagescroll.component.ts":
/*!******************************************************!*\
  !*** ./src/app/imagescroll/imagescroll.component.ts ***!
  \******************************************************/
/*! exports provided: ImageScrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageScrollComponent", function() { return ImageScrollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_imagesearch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/imagesearch.service */ "./src/app/service/imagesearch.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _Model_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Model/Image */ "./src/app/Model/Image.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageScrollComponent = /** @class */ (function () {
    function ImageScrollComponent(imageService) {
        this.imageService = imageService;
        this.noResult = true;
        this.total = "0";
        this.currentPage = 1;
        this.toEnd = false;
        this.imageList = [];
        this.loadMoreImages = this.pullImages.bind(this);
    }
    ImageScrollComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.imageService.response
            .subscribe(function (data) { return _this._handleDataSuccess(data); });
    };
    ImageScrollComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ImageScrollComponent.prototype._handleDataSuccess = function (res) {
        if (!res || res.stat !== "ok")
            return;
        var data = res.photos;
        this.toEnd = (data.page == data.pages);
        this.noResult = (data.total === "0") ? true : false;
        this.total = data.total;
        var result = data.photo.map(function (photo) {
            return new _Model_Image__WEBPACK_IMPORTED_MODULE_3__["Image"](photo);
        });
        if (data.page === 1) {
            this.imageList.length = 0;
        }
        (_a = this.imageList).push.apply(_a, result);
        var _a;
    };
    ImageScrollComponent.prototype.pullImages = function () {
        return this.toEnd ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null) : this.imageService.getMoreImage();
    };
    ImageScrollComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-imagescroll',
            template: __webpack_require__(/*! ./imagescroll.component.html */ "./src/app/imagescroll/imagescroll.component.html"),
            styles: [__webpack_require__(/*! ./imagescroll.component.css */ "./src/app/imagescroll/imagescroll.component.css")]
        }),
        __metadata("design:paramtypes", [_service_imagesearch_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"]])
    ], ImageScrollComponent);
    return ImageScrollComponent;
}());



/***/ }),

/***/ "./src/app/search/searchbar.component.css":
/*!************************************************!*\
  !*** ./src/app/search/searchbar.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n\n@keyframes spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n\n.ga-search {\n    max-width: 600px;\n    margin: 0 auto;\n    width: 100%;\n    text-align: center;\n}\n\n.ga-search input,\n.ga-search button {\n    padding: 5px;\n    line-height: 1.4;\n    border: 1px solid #128fdc;\n    font-size: 16px;\n}\n\ninput {\n    width: 80%;\n    border-top-left-radius: 3px;\n    border-bottom-left-radius: 3px;\n}\n\nbutton {\n    background: #128fdc;\n    border-top-right-radius: 3px;\n    border-bottom-right-radius: 3px;\n    color: white;\n}\n\n.loader {\n    border: 3px solid #95b5e6;\n    border-top: 3px solid #ffffff;\n    border-radius: 50%;\n    position: relative;\n    display: inline-block;\n    margin-left: -40px;\n    top: 3px;\n    width: 14px;\n    height: 14px;\n    -webkit-animation: spin 2s linear infinite;\n            animation: spin 2s linear infinite;\n}\n\nbutton:disabled {\n    color: #128fdc;\n}\n\n.ga-search input:focus {\n    outline: none;\n    box-shadow: inset 0 0 4px 1px rgba(66, 173, 206, 0.94);\n}"

/***/ }),

/***/ "./src/app/search/searchbar.ts":
/*!*************************************!*\
  !*** ./src/app/search/searchbar.ts ***!
  \*************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_imagesearch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/imagesearch.service */ "./src/app/service/imagesearch.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent(imageService, location) {
        this.imageService = imageService;
        this.location = location;
        this.loading = false;
        this.location = location;
    }
    SearchBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.imageService.response
            .subscribe(function (res) { return _this._handleDataSuccess(res); });
        var deeplink = this._getSearch();
        if (deeplink) {
            this.query = deeplink;
            this.updateSearch();
        }
    };
    SearchBarComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    SearchBarComponent.prototype.updateSearch = function () {
        this.loading = true;
        this.imageService.searchImage(this.query);
    };
    SearchBarComponent.prototype._getSearch = function () {
        var hash = window.location.hash;
        var query = hash ? hash.split('#').pop() : null;
        return query ? decodeURIComponent(query) : null;
    };
    SearchBarComponent.prototype._setSearch = function (query) {
        if (query === void 0) { query = ""; }
        var path = window.location.pathname;
        this.location.replaceState(path + "#" + query);
    };
    SearchBarComponent.prototype._handleDataSuccess = function (res) {
        if (!res)
            return;
        if (res.stat === "ok") {
            this.loading = false;
            this._setSearch(this.query);
        }
        else {
            console.log("Request error:" + res);
        }
    };
    Object.defineProperty(SearchBarComponent.prototype, "query", {
        get: function () {
            return this.searchInput.nativeElement.value;
        },
        set: function (val) {
            this.searchInput.nativeElement.value = val;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SearchBarComponent.prototype, "searchInput", void 0);
    SearchBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchbar',
            template: "<div class=\"ga-search\"><input #searchInput \n        type=\"search\"\n        aria-label=\"search\"\n        placeholder=\"Please enter your keyword!\"\n        (keyup.enter)=\"updateSearch()\">\n        <button [disabled]=\"loading\"\n        (click)=\"updateSearch()\">\n        Search</button>\n        <span class=\"loader\" *ngIf=\"loading\"></span></div>",
            styles: [__webpack_require__(/*! ./searchbar.component.css */ "./src/app/search/searchbar.component.css")]
        }),
        __metadata("design:paramtypes", [_service_imagesearch_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/service/imagesearch.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/imagesearch.service.ts ***!
  \************************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var API_URL = "https://api.flickr.com/services/rest";
var API_KEY = "18470d9eeeb3597104c30f05a72269a8";
var params = {
    "method": "flickr.photos.search",
    "api_key": API_KEY,
    "per_page": 24,
    "format": 'json',
    "nojsoncallback": 1,
    "page": 1,
    "text": ''
};
var ImageService = /** @class */ (function () {
    function ImageService(http) {
        this.http = http;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.response = this.subject.asObservable();
    }
    ImageService.prototype.searchImage = function (term, page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        var url = this._createRequest(term, page);
        this.http.get(API_URL + "/?" + url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])("Error: " + error); }))
            .subscribe(function (value) { return _this.subject.next(value); });
    };
    ImageService.prototype.getMoreImage = function () {
        var _this = this;
        var url = this._createRequest(params.text, params.page + 1);
        this.http.get(API_URL + "/?" + url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])("Error: " + error); }))
            .subscribe(function (value) { return _this.subject.next(value); });
    };
    ImageService.prototype._createRequest = function (term, page) {
        params.text = term;
        params.page = page;
        return Object.keys(params).map(function (key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
        }).join('&');
    };
    ImageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ImageService);
    return ImageService;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");


Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sylvia/Developer/Senior-Front-End-Coding-Challenge/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map