(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/*!*******************************************************!*\
  !*** ../$$_lazy_route_resource lazy namespace object ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../node_modules/raw-loader/index.js!../src/app/app.component.html":
/*!****************************************************************!*\
  !*** ../node_modules/raw-loader!../src/app/app.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" layout-align=\"center center\" style=\"width: 600px; margin-left: auto; margin-right: auto\">\n    <app-footprint-form></app-footprint-form>\n</div>\n\n"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!../src/app/footprint-form/footprint-form.component.html":
/*!******************************************************************************************!*\
  !*** ../node_modules/raw-loader!../src/app/footprint-form/footprint-form.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"leaves\">\n  <i></i>\n  <i></i>\n  <i></i>\n  <i></i>\n  <i></i>\n  <i></i>\n  <i></i>\n  <i></i>\n  <i></i>\n  <i></i>\n  <i></i>\n  <i></i>\n  <i></i>\n  <i></i>\n  <i></i>\n</div>\n<mat-vertical-stepper [linear]=\"isLinear\" #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\" state=\"globe\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Your country</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Choose your country\" type=\"text\" formControlName=\"firstCtrl\" [matAutocomplete]=\"auto\" required>\n      </mat-form-field>\n\n      <mat-autocomplete #auto=\"matAutocomplete\">\n        <mat-option *ngFor=\"let country of countries\" [value]=\"country\" matStepperNext>{{country}}</mat-option>\n      </mat-autocomplete>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\" state=\"electricity\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>How much power do you use (continuously)?</ng-template>\n      <mat-form-field>\n        <input type=\"number\" matInput placeholder=\"in Watts\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext (click)=\"calcFactors()\">Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n    <!--Trees to plant: {{treesToPlant}}-->\n    <!--CO2 Kg production: {{cO2KgProd}}-->\n    <div class=\"coffee-mug\">\n      <div><div class=\"example-2\">Donate ${{usdNeeded}}</div><div class=\"example-2\">Plant {{treesToPlant}} trees!</div></div>\n    </div>\n\n  </mat-step>\n  <ng-template matStepperIcon=\"electricity\">\n    <mat-icon>power</mat-icon>\n  </ng-template>\n  <ng-template matStepperIcon=\"globe\">\n    <mat-icon>public</mat-icon>\n  </ng-template>\n</mat-vertical-stepper>\n"

/***/ }),

/***/ "../src/app/app.component.css":
/*!************************************!*\
  !*** ../src/app/app.component.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "../src/app/app.component.ts":
/*!***********************************!*\
  !*** ../src/app/app.component.ts ***!
  \***********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'carbon-footprint-calc';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "../node_modules/raw-loader/index.js!../src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../src/app/app.module.ts":
/*!********************************!*\
  !*** ../src/app/app.module.ts ***!
  \********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "../src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _footprint_form_footprint_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footprint-form/footprint-form.component */ "../src/app/footprint-form/footprint-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/stepper */ "../node_modules/@angular/cdk/esm5/stepper.es5.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _footprint_form_footprint_form_component__WEBPACK_IMPORTED_MODULE_6__["FootprintFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"]
            ],
            providers: [{
                    provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_8__["STEPPER_GLOBAL_OPTIONS"],
                    useValue: { displayDefaultIndicatorType: false }
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../src/app/footprint-form/footprint-form.component.css":
/*!**************************************************************!*\
  !*** ../src/app/footprint-form/footprint-form.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed');\r\n\r\nbody {background: #222;}\r\n\r\n/* leaf animations */\r\n\r\n#leaves {position:relative;top:-50px;width:100%;text-align: right;}\r\n\r\n#leaves i {\r\n  display: inline-block;\r\n  width: 200px;\r\n  height: 150px;\r\n  background: linear-gradient(to bottom right, #309900, #005600);\r\n  border-radius: 0 100%;\r\n  -webkit-transform: rotate(30deg);\r\n          transform: rotate(30deg);\r\n  z-index: 1;\r\n  -webkit-animation: falling 5s 0s infinite;\r\n}\r\n\r\n#leaves i:nth-of-type(2n) { -webkit-animation: falling2 5s 0s infinite; }\r\n\r\n#leaves i:nth-of-type(3n) { -webkit-animation: falling3 5s 0s infinite; }\r\n\r\n#leaves i:before {\r\n  position: absolute;\r\n  content: '';\r\n  top: 117px;\r\n  right: 9px;\r\n  height: 27px;\r\n  width: 32px;\r\n  -webkit-transform: rotate(49deg);\r\n          transform: rotate(49deg);\r\n  border-radius: 0% 15% 15% 0%;\r\n  border-top: 1px solid #222;\r\n  border-bottom: 1px solid #222;\r\n  border-left: 0px solid #222;\r\n  border-right: 1px solid #222;\r\n  background: linear-gradient(to right, rgba(0,100,0,1), #005600);\r\n  z-index: 1;\r\n}\r\n\r\n#leaves i:after {\r\n  content: '';\r\n  height: 125px;\r\n  width: 10px;\r\n  background: linear-gradient(to right, rgba(0,0,0,.15), rgba(0,0,0,0));\r\n  display: block;\r\n  -webkit-transform: rotate(125deg);\r\n          transform: rotate(125deg);\r\n  position: absolute;\r\n  left: 85px;\r\n  border-radius:50%;\r\n}\r\n\r\n#leaves i:nth-of-type(n)    { height:23px; width:30px; }\r\n\r\n#leaves i:nth-of-type(n):before { width:7px; height:5px; top:17px; right:1px; }\r\n\r\n#leaves i:nth-of-type(n):after { width:2px; height:17px; left: 12px; top:0px; }\r\n\r\n#leaves i:nth-of-type(2n+1)    { height:11px; width:16px; }\r\n\r\n#leaves i:nth-of-type(2n+1):before { width:4px; height:3px; top:7px; right:0px; }\r\n\r\n#leaves i:nth-of-type(2n+1):after { width:2px; height:6px; left: 5px; top:1px; }\r\n\r\n#leaves i:nth-of-type(3n+2)  { height:17px; width:23px; }\r\n\r\n#leaves i:nth-of-type(3n+2):before  { height:4px; width:4px; top:12px; right:1px; }\r\n\r\n#leaves i:nth-of-type(3n+2):after  { height:10px; width:2px; top:1px; left:8px; }\r\n\r\n#leaves i:nth-of-type(n)   { -webkit-animation-delay: 1.9s;}\r\n\r\n#leaves i:nth-of-type(2n)  { -webkit-animation-delay: 3.9s;}\r\n\r\n#leaves i:nth-of-type(3n)  { -webkit-animation-delay: 2.3s;}\r\n\r\n#leaves i:nth-of-type(4n)  { -webkit-animation-delay: 4.4s;}\r\n\r\n#leaves i:nth-of-type(5n)  { -webkit-animation-delay: 5s;  }\r\n\r\n#leaves i:nth-of-type(6n)  { -webkit-animation-delay: 3.5s;}\r\n\r\n#leaves i:nth-of-type(7n)  { -webkit-animation-delay: 2.8s;}\r\n\r\n#leaves i:nth-of-type(8n)  { -webkit-animation-delay: 1.5s;}\r\n\r\n#leaves i:nth-of-type(9n)  { -webkit-animation-delay: 3.3s;}\r\n\r\n#leaves i:nth-of-type(10n) { -webkit-animation-delay: 2.5s;}\r\n\r\n#leaves i:nth-of-type(11n) { -webkit-animation-delay: 1.2s;}\r\n\r\n#leaves i:nth-of-type(12n) { -webkit-animation-delay: 4.1s;}\r\n\r\n#leaves i:nth-of-type(13n) { -webkit-animation-delay: 1s;  }\r\n\r\n#leaves i:nth-of-type(14n) { -webkit-animation-delay: 4.7s;}\r\n\r\n#leaves i:nth-of-type(15n) { -webkit-animation-delay: 3s;  }\r\n\r\n#leaves i:nth-of-type(n)    { background: linear-gradient(to bottom right, #309900, #005600); }\r\n\r\n#leaves i:nth-of-type(2n+2)  { background: linear-gradient(to bottom right, #5e9900, #2b5600); }\r\n\r\n#leaves i:nth-of-type(4n+1)  { background: linear-gradient(to bottom right, #990, #564500); }\r\n\r\n#leaves i:nth-of-type(n)    { opacity: .7;}\r\n\r\n#leaves i:nth-of-type(3n+1)  { opacity: .5;}\r\n\r\n#leaves i:nth-of-type(3n+2)  { opacity: .3;}\r\n\r\n#leaves i:nth-of-type(n)    {-webkit-transform: rotate(180deg);transform: rotate(180deg);}\r\n\r\n#leaves i:nth-of-type(n) { -webkit-animation-timing-function:ease-in-out;}\r\n\r\n@-webkit-keyframes falling {\r\n\r\n  0% {\r\n    -webkit-transform:\r\n      translate3d(300,0,0)\r\n      rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform:\r\n      translate3d(-350px,700px,0)\r\n      rotate(90deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes falling3 {\r\n  0% {\r\n    -webkit-transform:\r\n      translate3d(0,0,0)\r\n      rotate(-20deg);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform:\r\n      translate3d(-230px,640px,0)\r\n      rotate(-70deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes falling2 {\r\n  0% {\r\n    -webkit-transform:\r\n      translate3d(0,0,0)\r\n      rotate(90deg);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform:\r\n      translate3d(-400px,680px,0)\r\n      rotate(0deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\nbody{\r\n  background: #D7C0D0;\r\n}\r\n\r\n/* the coffee mug and the coffee will be created mostly using box shadows */\r\n\r\n.coffee-mug{\r\n  background: #3F2616;\r\n  position: relative;\r\n  margin: 150px auto;\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 50%;\r\n  /* the following box-shadow values are going to create the coffee mug, a coffee ring, and some coffee splatters (our mug is a little leaky) */\r\n  box-shadow: 0 0 0 10px #442918,\r\n  0 0 0 25px #3C2415,\r\n  0 0 0 42px #E4E6B2,\r\n  0 0 0 65px #EFF0D1,\r\n  0 120px 0 -25px #3C2415,\r\n  100px 70px 0 -25px #3C2415,\r\n  80px 140px 0 -10px #3C2415,\r\n  0px 210px 0 -55px #3C2415,\r\n  20px 250px 0 -65px #3C2415;\r\n}\r\n\r\n/* cool right? except the mug needs a handle */\r\n\r\n.coffee-mug::before{\r\n  content: '';\r\n  position: absolute;\r\n  background: #EFF0D1;\r\n  height: 80px;\r\n  width: 60px;\r\n  top: -85px;\r\n  right: -75px;\r\n  border-radius: 5px;\r\n  box-shadow: inset 0px 50px 0 0px #EFF0D1;\r\n  /* transform lets us rotate the handle on an angle */\r\n  -webkit-transform: rotate(45deg);\r\n          transform: rotate(45deg);\r\n}\r\n\r\n/* that coffee could look a little more realistic. let's add a simple ripple effect */\r\n\r\n.coffee-mug::after{\r\n  content: '';\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  border: 3px solid #77665C;\r\n  left: 0;\r\n  right: 0;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  opacity: 0.2;\r\n  /* a little bit of animation */\r\n  -webkit-animation: rings 3s ease-out infinite;\r\n          animation: rings 3s ease-out infinite;\r\n}\r\n\r\n@-webkit-keyframes rings{\r\n  to{\r\n    width: 80px;\r\n    height: 80px;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes rings{\r\n  to{\r\n    width: 80px;\r\n    height: 80px;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.example-1\r\n{\r\n  float: left;\r\n  margin: 40px;\r\n  width: 130px;\r\n  height: 130px;\r\n  font: 50px/50px 'Barlow Semi Condensed', sans-serif;\r\n  text-transform: uppercase;\r\n  letter-spacing: 1px;\r\n  color: #fff;\r\n  text-align: center;\r\n  background: rgba(30, 144, 255, 0.6);\r\n  border-radius: 50%;\r\n  -webkit-animation: shadow-pulse 1s infinite;\r\n          animation: shadow-pulse 1s infinite;\r\n}\r\n\r\n.example-2\r\n{\r\n  float: right;\r\n  width: 130px;\r\n  height: 60px;\r\n  font: 13px/60px 'Barlow Semi Condensed', sans-serif;\r\n  text-transform: uppercase;\r\n  letter-spacing: 1px;\r\n  color: #fff;\r\n  text-align: center;\r\n  background: rgba(3, 3, 3, 0.6);\r\n  -webkit-animation: shadow-pulse 1s 3;\r\n          animation: shadow-pulse 1s 3;\r\n}\r\n\r\n.wrapper\r\n{\r\n  padding: 20px;\r\n}\r\n\r\n@-webkit-keyframes shadow-pulse\r\n{\r\n  0% {\r\n    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);\r\n  }\r\n  100% {\r\n    box-shadow: 0 0 0 35px rgba(0, 0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes shadow-pulse\r\n{\r\n  0% {\r\n    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);\r\n  }\r\n  100% {\r\n    box-shadow: 0 0 0 35px rgba(0, 0, 0, 0);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes shadow-pulse-big\r\n{\r\n  0% {\r\n    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.1);\r\n  }\r\n  100% {\r\n    box-shadow: 0 0 0 70px rgba(0, 0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes shadow-pulse-big\r\n{\r\n  0% {\r\n    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.1);\r\n  }\r\n  100% {\r\n    box-shadow: 0 0 0 70px rgba(0, 0, 0, 0);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdHByaW50LWZvcm0vZm9vdHByaW50LWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RUFBNEU7O0FBRTVFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXZCLG9CQUFvQjs7QUFFcEIsU0FBUyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDOztBQUVsRTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osYUFBYTtFQUNiLDhEQUE4RDtFQUM5RCxxQkFBcUI7RUFDckIsZ0NBQXdCO1VBQXhCLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YseUNBQXlDO0FBQzNDOztBQUVBLDRCQUE0QiwwQ0FBMEMsRUFBRTs7QUFDeEUsNEJBQTRCLDBDQUEwQyxFQUFFOztBQUV4RTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QiwrREFBK0Q7RUFDL0QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixXQUFXO0VBQ1gscUVBQXFFO0VBQ3JFLGNBQWM7RUFDZCxpQ0FBeUI7VUFBekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUdBLDhCQUE4QixXQUFXLEVBQUUsVUFBVSxFQUFFOztBQUN2RCxrQ0FBa0MsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFOztBQUM5RSxpQ0FBaUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFOztBQUU5RSxpQ0FBaUMsV0FBVyxFQUFFLFVBQVUsRUFBRTs7QUFDMUQscUNBQXFDLFNBQVMsRUFBRSxVQUFVLEVB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LG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsMkNBQW1DO1VBQW5DLG1DQUFtQztBQUNyQzs7QUFDQTs7RUFFRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixtREFBbUQ7RUFDbkQseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixvQ0FBNEI7VUFBNUIsNEJBQTRCO0FBQzlCOztBQUVBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRTtJQUNFLHdDQUF3QztFQUMxQztFQUNBO0lBQ0UsdUNBQXVDO0VBQ3pDO0FBQ0Y7O0FBUkE7O0VBRUU7SUFDRSx3Q0FBd0M7RUFDMUM7RUFDQTtJQUNFLHVDQUF1QztFQUN6QztBQUNGOztBQUVBOztFQUVFO0lBQ0Usd0NBQXdDO0VBQzFDO0VBQ0E7SUFDRSx1Q0FBdUM7RUFDekM7QUFDRjs7QUFSQTs7RUFFRTtJQUNFLHdDQUF3QztFQUMxQztFQUNBO0lBQ0UsdUNBQXVDO0VBQ3pDO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mb290cHJpbnQtZm9ybS9mb290cHJpbnQtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CYXJsb3crU2VtaStDb25kZW5zZWQnKTtcclxuXHJcbmJvZHkge2JhY2tncm91bmQ6ICMyMjI7fVxyXG5cclxuLyogbGVhZiBhbmltYXRpb25zICovXHJcblxyXG4jbGVhdmVzIHtwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6LTUwcHg7d2lkdGg6MTAwJTt0ZXh0LWFsaWduOiByaWdodDt9XHJcblxyXG4jbGVhdmVzIGkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMzA5OTAwLCAjMDA1NjAwKTtcclxuICBib3JkZXItcmFkaXVzOiAwIDEwMCU7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhbGxpbmcgNXMgMHMgaW5maW5pdGU7XHJcbn1cclxuXHJcbiNsZWF2ZXMgaTpudGgtb2YtdHlwZSgybikgeyAtd2Via2l0LWFuaW1hdGlvbjogZmFsbGluZzIgNXMgMHMgaW5maW5pdGU7IH1cclxuI2xlYXZlcyBpOm50aC1vZi10eXBlKDNuKSB7IC13ZWJraXQtYW5pbWF0aW9uOiBmYWxsaW5nMyA1cyAwcyBpbmZpbml0ZTsgfVxyXG5cclxuI2xlYXZlcyBpOmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHRvcDogMTE3cHg7XHJcbiAgcmlnaHQ6IDlweDtcclxuICBoZWlnaHQ6IDI3cHg7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDlkZWcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAlIDE1JSAxNSUgMCU7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyMjI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMjI7XHJcbiAgYm9yZGVyLWxlZnQ6IDBweCBzb2xpZCAjMjIyO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyMjI7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsMTAwLDAsMSksICMwMDU2MDApO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbiNsZWF2ZXMgaTphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgaGVpZ2h0OiAxMjVweDtcclxuICB3aWR0aDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwwLDAsLjE1KSwgcmdiYSgwLDAsMCwwKSk7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTI1ZGVnKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogODVweDtcclxuICBib3JkZXItcmFkaXVzOjUwJTtcclxufVxyXG5cclxuXHJcbiNsZWF2ZXMgaTpudGgtb2YtdHlwZShuKSAgICB7IGhlaWdodDoyM3B4OyB3aWR0aDozMHB4OyB9XHJcbiNsZWF2ZXMgaTpudGgtb2YtdHlwZShuKTpiZWZvcmUgeyB3aWR0aDo3cHg7IGhlaWdodDo1cHg7IHRvcDoxN3B4OyByaWdodDoxcHg7IH1cclxuI2xlYXZlcyBpOm50aC1vZi10eXBlKG4pOmFmdGVyIHsgd2lkdGg6MnB4OyBoZWlnaHQ6MTdweDsgbGVmdDogMTJweDsgdG9wOjBweDsgfVxyXG5cclxuI2xlYXZlcyBpOm50aC1vZi10eXBlKDJuKzEpICAgIHsgaGVpZ2h0OjExcHg7IHdpZHRoOjE2cHg7IH1cclxuI2xlYXZlcyBpOm50aC1vZi10eXBlKDJuKzEpOmJlZm9yZSB7IHdpZHRoOjRweDsgaGVpZ2h0OjNweDsgdG9wOjdweDsgcmlnaHQ6MHB4OyB9XHJcbiNsZWF2ZXMgaTpudGgtb2YtdHlwZSgybisxKTphZnRlciB7IHdpZHRoOjJweDsgaGVpZ2h0OjZweDsgbGVmdDogNXB4OyB0b3A6MXB4OyB9XHJcblxyXG4jbGVhdmVzIGk6bnRoLW9mLXR5cGUoM24rMikgIHsgaGVpZ2h0OjE3cHg7IHdpZHRoOjIzcHg7IH1cclxuI2xlYXZlcyBpOm50aC1vZi10eXBlKDNuKzIpOmJlZm9yZSAgeyBoZWlnaHQ6NHB4OyB3aWR0aDo0cHg7IHRvcDoxMnB4OyByaWdodDoxcHg7IH1cclxuI2xlYXZlcyBpOm50aC1vZi10eXBlKDNuKzIpOmFmdGVyICB7IGhlaWdodDoxMHB4OyB3aWR0aDoycHg7IHRvcDoxcHg7IGxlZnQ6OHB4OyB9XHJcblxyXG4jbGVhdmVzIGk6bnRoLW9mLXR5cGUobikgICB7IC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjlzO31cclxuI2xlYXZlcyBpOm50aC1vZi10eXBlKDJuKSAgeyAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMy45czt9XHJcbiNsZWF2ZXMgaTpudGgtb2YtdHlwZSgzbikgIHsgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDIuM3M7fVxyXG4jbGVhdmVzIGk6bnRoLW9mLXR5cGUoNG4pICB7IC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA0LjRzO31cclxuI2xlYXZlcyBpOm50aC1vZi10eXBlKDVuKSAgeyAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogNXM7ICB9XHJcbiNsZWF2ZXMgaTpudGgtb2YtdHlwZSg2bikgIHsgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMuNXM7fVxyXG4jbGVhdmVzIGk6bnRoLW9mLXR5cGUoN24pICB7IC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAyLjhzO31cclxuI2xlYXZlcyBpOm50aC1vZi10eXBlKDhuKSAgeyAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS41czt9XHJcbiNsZWF2ZXMgaTpudGgtb2YtdHlwZSg5bikgIHsgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMuM3M7fVxyXG4jbGVhdmVzIGk6bnRoLW9mLXR5cGUoMTBuKSB7IC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAyLjVzO31cclxuI2xlYXZlcyBpOm50aC1vZi10eXBlKDExbikgeyAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS4yczt9XHJcbiNsZWF2ZXMgaTpudGgtb2YtdHlwZSgxMm4pIHsgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDQuMXM7fVxyXG4jbGVhdmVzIGk6bnRoLW9mLXR5cGUoMTNuKSB7IC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxczsgIH1cclxuI2xlYXZlcyBpOm50aC1vZi10eXBlKDE0bikgeyAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogNC43czt9XHJcbiNsZWF2ZXMgaTpudGgtb2YtdHlwZSgxNW4pIHsgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDNzOyAgfVxyXG5cclxuI2xlYXZlcyBpOm50aC1vZi10eXBlKG4pICAgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzMwOTkwMCwgIzAwNTYwMCk7IH1cclxuI2xlYXZlcyBpOm50aC1vZi10eXBlKDJuKzIpICB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM1ZTk5MDAsICMyYjU2MDApOyB9XHJcbiNsZWF2ZXMgaTpudGgtb2YtdHlwZSg0bisxKSAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjOTkwLCAjNTY0NTAwKTsgfVxyXG5cclxuI2xlYXZlcyBpOm50aC1vZi10eXBlKG4pICAgIHsgb3BhY2l0eTogLjc7fVxyXG4jbGVhdmVzIGk6bnRoLW9mLXR5cGUoM24rMSkgIHsgb3BhY2l0eTogLjU7fVxyXG4jbGVhdmVzIGk6bnRoLW9mLXR5cGUoM24rMikgIHsgb3BhY2l0eTogLjM7fVxyXG5cclxuI2xlYXZlcyBpOm50aC1vZi10eXBlKG4pICAgIHt0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO31cclxuXHJcblxyXG4jbGVhdmVzIGk6bnRoLW9mLXR5cGUobikgeyAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7fVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhbGxpbmcge1xyXG5cclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpcclxuICAgICAgdHJhbnNsYXRlM2QoMzAwLDAsMClcclxuICAgICAgcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpcclxuICAgICAgdHJhbnNsYXRlM2QoLTM1MHB4LDcwMHB4LDApXHJcbiAgICAgIHJvdGF0ZSg5MGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhbGxpbmczIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpcclxuICAgICAgdHJhbnNsYXRlM2QoMCwwLDApXHJcbiAgICAgIHJvdGF0ZSgtMjBkZWcpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpcclxuICAgICAgdHJhbnNsYXRlM2QoLTIzMHB4LDY0MHB4LDApXHJcbiAgICAgIHJvdGF0ZSgtNzBkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWxsaW5nMiB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06XHJcbiAgICAgIHRyYW5zbGF0ZTNkKDAsMCwwKVxyXG4gICAgICByb3RhdGUoOTBkZWcpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpcclxuICAgICAgdHJhbnNsYXRlM2QoLTQwMHB4LDY4MHB4LDApXHJcbiAgICAgIHJvdGF0ZSgwZGVnKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5e1xyXG4gIGJhY2tncm91bmQ6ICNEN0MwRDA7XHJcbn1cclxuXHJcbi8qIHRoZSBjb2ZmZWUgbXVnIGFuZCB0aGUgY29mZmVlIHdpbGwgYmUgY3JlYXRlZCBtb3N0bHkgdXNpbmcgYm94IHNoYWRvd3MgKi9cclxuLmNvZmZlZS1tdWd7XHJcbiAgYmFja2dyb3VuZDogIzNGMjYxNjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAxNTBweCBhdXRvO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAvKiB0aGUgZm9sbG93aW5nIGJveC1zaGFkb3cgdmFsdWVzIGFyZSBnb2luZyB0byBjcmVhdGUgdGhlIGNvZmZlZSBtdWcsIGEgY29mZmVlIHJpbmcsIGFuZCBzb21lIGNvZmZlZSBzcGxhdHRlcnMgKG91ciBtdWcgaXMgYSBsaXR0bGUgbGVha3kpICovXHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMTBweCAjNDQyOTE4LFxyXG4gIDAgMCAwIDI1cHggIzNDMjQxNSxcclxuICAwIDAgMCA0MnB4ICNFNEU2QjIsXHJcbiAgMCAwIDAgNjVweCAjRUZGMEQxLFxyXG4gIDAgMTIwcHggMCAtMjVweCAjM0MyNDE1LFxyXG4gIDEwMHB4IDcwcHggMCAtMjVweCAjM0MyNDE1LFxyXG4gIDgwcHggMTQwcHggMCAtMTBweCAjM0MyNDE1LFxyXG4gIDBweCAyMTBweCAwIC01NXB4ICMzQzI0MTUsXHJcbiAgMjBweCAyNTBweCAwIC02NXB4ICMzQzI0MTU7XHJcbn1cclxuXHJcbi8qIGNvb2wgcmlnaHQ/IGV4Y2VwdCB0aGUgbXVnIG5lZWRzIGEgaGFuZGxlICovXHJcbi5jb2ZmZWUtbXVnOjpiZWZvcmV7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6ICNFRkYwRDE7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIHRvcDogLTg1cHg7XHJcbiAgcmlnaHQ6IC03NXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3gtc2hhZG93OiBpbnNldCAwcHggNTBweCAwIDBweCAjRUZGMEQxO1xyXG4gIC8qIHRyYW5zZm9ybSBsZXRzIHVzIHJvdGF0ZSB0aGUgaGFuZGxlIG9uIGFuIGFuZ2xlICovXHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG4vKiB0aGF0IGNvZmZlZSBjb3VsZCBsb29rIGEgbGl0dGxlIG1vcmUgcmVhbGlzdGljLiBsZXQncyBhZGQgYSBzaW1wbGUgcmlwcGxlIGVmZmVjdCAqL1xyXG4uY29mZmVlLW11Zzo6YWZ0ZXJ7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzc3NjY1QztcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICBvcGFjaXR5OiAwLjI7XHJcbiAgLyogYSBsaXR0bGUgYml0IG9mIGFuaW1hdGlvbiAqL1xyXG4gIGFuaW1hdGlvbjogcmluZ3MgM3MgZWFzZS1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcmluZ3N7XHJcbiAgdG97XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbi5leGFtcGxlLTFcclxue1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogNDBweDtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgaGVpZ2h0OiAxMzBweDtcclxuICBmb250OiA1MHB4LzUwcHggJ0JhcmxvdyBTZW1pIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDMwLCAxNDQsIDI1NSwgMC42KTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYW5pbWF0aW9uOiBzaGFkb3ctcHVsc2UgMXMgaW5maW5pdGU7XHJcbn1cclxuLmV4YW1wbGUtMlxyXG57XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgZm9udDogMTNweC82MHB4ICdCYXJsb3cgU2VtaSBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgzLCAzLCAzLCAwLjYpO1xyXG4gIGFuaW1hdGlvbjogc2hhZG93LXB1bHNlIDFzIDM7XHJcbn1cclxuXHJcbi53cmFwcGVyXHJcbntcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNoYWRvdy1wdWxzZVxyXG57XHJcbiAgMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzNXB4IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNoYWRvdy1wdWxzZS1iaWdcclxue1xyXG4gIDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNzBweCByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "../src/app/footprint-form/footprint-form.component.ts":
/*!*************************************************************!*\
  !*** ../src/app/footprint-form/footprint-form.component.ts ***!
  \*************************************************************/
/*! exports provided: FootprintFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootprintFormComponent", function() { return FootprintFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");



var FootprintFormComponent = /** @class */ (function () {
    function FootprintFormComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = true;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas',
            'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands',
            'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica',
            'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea',
            'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana',
            'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India',
            'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia',
            'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania',
            'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia',
            'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal',
            'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles',
            'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan',
            'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor L\'Este', 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia',
            'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'United States Minor Outlying Islands', 'Uruguay',
            'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'];
        this.rawData = "{\"Albania\":{\"Coal\":0,\"Gas\":0,\"Oil\":0,\"Hydro\":100,\"Renewable\":0,\"Nuclear\":0},\"Algeria\":{\"Coal\":0,\"Gas\":97.8,\"Oil\":1.8,\"Hydro\":0.4,\"Renewable\":0,\"Nuclear\":0},\"Angola\":{\"Coal\":0,\"Gas\":0,\"Oil\":46.8,\"Hydro\":53.2,\"Renewable\":0,\"Nuclear\":0},\"Argentina\":{\"Coal\":2.9,\"Gas\":47.7,\"Oil\":13.8,\"Hydro\":29,\"Renewable\":2.5,\"Nuclear\":4.1},\"Armenia\":{\"Coal\":0,\"Gas\":42.4,\"Oil\":0,\"Hydro\":25.7,\"Renewable\":0.1,\"Nuclear\":31.8},\"Australia\":{\"Coal\":61.2,\"Gas\":21.9,\"Oil\":2,\"Hydro\":7.4,\"Renewable\":7.5,\"Nuclear\":0},\"Austria\":{\"Coal\":8,\"Gas\":8.8,\"Oil\":1,\"Hydro\":66.6,\"Renewable\":14.6,\"Nuclear\":0},\"Azerbaijan\":{\"Coal\":0,\"Gas\":93.9,\"Oil\":0.2,\"Hydro\":5.3,\"Renewable\":0.4,\"Nuclear\":0},\"Bahrain\":{\"Coal\":0,\"Gas\":100,\"Oil\":0,\"Hydro\":0,\"Renewable\":0,\"Nuclear\":0},\"Bangladesh\":{\"Coal\":2,\"Gas\":82,\"Oil\":14.7,\"Hydro\":1.1,\"Renewable\":0.3,\"Nuclear\":0},\"Belarus\":{\"Coal\":0.1,\"Gas\":98,\"Oil\":1.1,\"Hydro\":0.3,\"Renewable\":0.4,\"Nuclear\":0},\"Belgium\":{\"Coal\":6.2,\"Gas\":27,\"Oil\":0.3,\"Hydro\":0.4,\"Renewable\":16.6,\"Nuclear\":47.2},\"Benin\":{\"Coal\":0,\"Gas\":0,\"Oil\":99.5,\"Hydro\":0,\"Renewable\":0.5,\"Nuclear\":0},\"Bolivia\":{\"Coal\":0,\"Gas\":70,\"Oil\":2,\"Hydro\":25.7,\"Renewable\":2.3,\"Nuclear\":0},\"Bosnia and Herzegovina\":{\"Coal\":62.8,\"Gas\":0.2,\"Oil\":0.3,\"Hydro\":36.7,\"Renewable\":0,\"Nuclear\":0},\"Botswana\":{\"Coal\":95.8,\"Gas\":0,\"Oil\":4.2,\"Hydro\":0,\"Renewable\":0,\"Nuclear\":0},\"Brazil\":{\"Coal\":4.5,\"Gas\":13.7,\"Oil\":6,\"Hydro\":63.2,\"Renewable\":9.9,\"Nuclear\":2.6},\"Brunei Darussalam\":{\"Coal\":0,\"Gas\":99,\"Oil\":1,\"Hydro\":0,\"Renewable\":0,\"Nuclear\":0},\"Bulgaria\":{\"Coal\":45.4,\"Gas\":4.6,\"Oil\":0.4,\"Hydro\":9.8,\"Renewable\":5.9,\"Nuclear\":33.8},\"Cambodia\":{\"Coal\":28.2,\"Gas\":0,\"Oil\":10.7,\"Hydro\":60.5,\"Renewable\":0.6,\"Nuclear\":0},\"Cameroon\":{\"Coal\":0,\"Gas\":12.9,\"Oil\":12.8,\"Hydro\":73.2,\"Renewable\":1,\"Nuclear\":0},\"Canada\":{\"Coal\":9.9,\"Gas\":9.4,\"Oil\":1.2,\"Hydro\":58.3,\"Renewable\":4.5,\"Nuclear\":16.4},\"Chile\":{\"Coal\":35.3,\"Gas\":16.9,\"Oil\":6.2,\"Hydro\":31.3,\"Renewable\":9.8,\"Nuclear\":0},\"China\":{\"Coal\":72.6,\"Gas\":2,\"Oil\":0.2,\"Hydro\":18.6,\"Renewable\":4.1,\"Nuclear\":2.3},\"Hong Kong SAR, China\":{\"Coal\":76.2,\"Gas\":23,\"Oil\":0.6,\"Hydro\":0,\"Renewable\":0.2,\"Nuclear\":0},\"Colombia\":{\"Coal\":10.2,\"Gas\":15.3,\"Oil\":0.2,\"Hydro\":71.1,\"Renewable\":3.1,\"Nuclear\":0},\"Congo, Dem. Rep.\":{\"Coal\":0,\"Gas\":0.1,\"Oil\":0,\"Hydro\":99.9,\"Renewable\":0,\"Nuclear\":0},\"Congo, Rep.\":{\"Coal\":0,\"Gas\":45.3,\"Oil\":0,\"Hydro\":54.7,\"Renewable\":0,\"Nuclear\":0},\"Costa Rica\":{\"Coal\":0,\"Gas\":0,\"Oil\":10.2,\"Hydro\":65.7,\"Renewable\":24,\"Nuclear\":0},\"Cote d'Ivoire\":{\"Coal\":0,\"Gas\":69.9,\"Oil\":6.1,\"Hydro\":23.1,\"Renewable\":0.8,\"Nuclear\":0},\"Croatia\":{\"Coal\":17.6,\"Gas\":7.5,\"Oil\":1,\"Hydro\":67,\"Renewable\":6.9,\"Nuclear\":0},\"Cuba\":{\"Coal\":0,\"Gas\":14.4,\"Oil\":81.6,\"Hydro\":0.5,\"Renewable\":3.5,\"Nuclear\":0},\"Curacao\":{\"Coal\":0,\"Gas\":0,\"Oil\":96.4,\"Hydro\":0,\"Renewable\":3.6,\"Nuclear\":0},\"Cyprus\":{\"Coal\":0,\"Gas\":0,\"Oil\":92.7,\"Hydro\":0,\"Renewable\":7.3,\"Nuclear\":0},\"Czech Republic\":{\"Coal\":51.5,\"Gas\":1.9,\"Oil\":0,\"Hydro\":2.2,\"Renewable\":8.5,\"Nuclear\":35.7},\"Denmark\":{\"Coal\":34.4,\"Gas\":6.5,\"Oil\":1,\"Hydro\":0,\"Renewable\":55.8,\"Nuclear\":0},\"Dominican Republic\":{\"Coal\":13.3,\"Gas\":21.5,\"Oil\":51.9,\"Hydro\":8.5,\"Renewable\":4.7,\"Nuclear\":0},\"Ecuador\":{\"Coal\":0,\"Gas\":13.3,\"Oil\":37.5,\"Hydro\":47.1,\"Renewable\":2,\"Nuclear\":0},\"Egypt, Arab Rep.\":{\"Coal\":0,\"Gas\":78.7,\"Oil\":12.2,\"Hydro\":8.1,\"Renewable\":0.9,\"Nuclear\":0},\"El Salvador\":{\"Coal\":0,\"Gas\":0,\"Oil\":40.3,\"Hydro\":27.6,\"Renewable\":32.1,\"Nuclear\":0},\"Eritrea\":{\"Coal\":0,\"Gas\":0,\"Oil\":99.5,\"Hydro\":0,\"Renewable\":0.5,\"Nuclear\":0},\"Estonia\":{\"Coal\":87.4,\"Gas\":0.6,\"Oil\":0.3,\"Hydro\":0.2,\"Renewable\":10.9,\"Nuclear\":0},\"Ethiopia\":{\"Coal\":0,\"Gas\":0,\"Oil\":0.1,\"Hydro\":95.6,\"Renewable\":4.3,\"Nuclear\":0},\"Finland\":{\"Coal\":17.4,\"Gas\":8.1,\"Oil\":0.3,\"Hydro\":19.7,\"Renewable\":18.9,\"Nuclear\":34.6},\"France\":{\"Coal\":2.2,\"Gas\":2.3,\"Oil\":0.3,\"Hydro\":11.3,\"Renewable\":5.1,\"Nuclear\":78.4},\"Gabon\":{\"Coal\":0,\"Gas\":38.9,\"Oil\":27,\"Hydro\":33.6,\"Renewable\":0.5,\"Nuclear\":0},\"Georgia\":{\"Coal\":0,\"Gas\":19.6,\"Oil\":0,\"Hydro\":80.4,\"Renewable\":0,\"Nuclear\":0},\"Germany\":{\"Coal\":45.8,\"Gas\":10,\"Oil\":0.9,\"Hydro\":3.1,\"Renewable\":23,\"Nuclear\":15.6},\"Ghana\":{\"Coal\":0,\"Gas\":18.2,\"Oil\":17.1,\"Hydro\":64.7,\"Renewable\":0,\"Nuclear\":0},\"Greece\":{\"Coal\":51.1,\"Gas\":13.5,\"Oil\":11,\"Hydro\":8.9,\"Renewable\":15.3,\"Nuclear\":0},\"Guatemala\":{\"Coal\":17.3,\"Gas\":0,\"Oil\":14.1,\"Hydro\":45.2,\"Renewable\":23.4,\"Nuclear\":0},\"Haiti\":{\"Coal\":0,\"Gas\":0,\"Oil\":91.3,\"Hydro\":8.7,\"Renewable\":0,\"Nuclear\":0},\"Honduras\":{\"Coal\":0.5,\"Gas\":0,\"Oil\":55.7,\"Hydro\":32.4,\"Renewable\":11.5,\"Nuclear\":0},\"Hungary\":{\"Coal\":20.8,\"Gas\":14.4,\"Oil\":0.2,\"Hydro\":1,\"Renewable\":9.7,\"Nuclear\":53.3},\"Iceland\":{\"Coal\":0,\"Gas\":0,\"Oil\":0,\"Hydro\":71,\"Renewable\":28.9,\"Nuclear\":0},\"India\":{\"Coal\":75.1,\"Gas\":4.9,\"Oil\":1.8,\"Hydro\":10.2,\"Renewable\":5.2,\"Nuclear\":2.8},\"Indonesia\":{\"Coal\":52.6,\"Gas\":24.6,\"Oil\":11.3,\"Hydro\":6.6,\"Renewable\":4.8,\"Nuclear\":0},\"Iran, Islamic Rep.\":{\"Coal\":0.2,\"Gas\":71.3,\"Oil\":21.7,\"Hydro\":5,\"Renewable\":0.1,\"Nuclear\":1.6},\"Iraq\":{\"Coal\":0,\"Gas\":21.9,\"Oil\":73.7,\"Hydro\":4.3,\"Renewable\":0,\"Nuclear\":0},\"Ireland\":{\"Coal\":24.9,\"Gas\":49.6,\"Oil\":0.7,\"Hydro\":2.7,\"Renewable\":21.8,\"Nuclear\":0},\"Israel\":{\"Coal\":49.6,\"Gas\":48.4,\"Oil\":0.5,\"Hydro\":0,\"Renewable\":1.5,\"Nuclear\":0},\"Italy\":{\"Coal\":16.7,\"Gas\":33.7,\"Oil\":5.1,\"Hydro\":21.1,\"Renewable\":22.3,\"Nuclear\":0},\"Jamaica\":{\"Coal\":0,\"Gas\":0,\"Oil\":90.2,\"Hydro\":3.3,\"Renewable\":6.5,\"Nuclear\":0},\"Japan\":{\"Coal\":33.7,\"Gas\":40.6,\"Oil\":11.2,\"Hydro\":7.9,\"Renewable\":6.1,\"Nuclear\":0},\"Jordan\":{\"Coal\":0,\"Gas\":7.1,\"Oil\":92.5,\"Hydro\":0.3,\"Renewable\":0,\"Nuclear\":0},\"Kazakhstan\":{\"Coal\":71.9,\"Gas\":19.2,\"Oil\":1,\"Hydro\":7.9,\"Renewable\":0,\"Nuclear\":0},\"Kenya\":{\"Coal\":0,\"Gas\":0,\"Oil\":18.5,\"Hydro\":35.8,\"Renewable\":45.7,\"Nuclear\":0},\"Korea, Dem. People\u2019s Rep.\":{\"Coal\":24.1,\"Gas\":0,\"Oil\":3.3,\"Hydro\":72.6,\"Renewable\":0,\"Nuclear\":0},\"Korea, Rep.\":{\"Coal\":42.4,\"Gas\":23.9,\"Oil\":3.2,\"Hydro\":0.5,\"Renewable\":1.1,\"Nuclear\":28.7},\"Kosovo\":{\"Coal\":96.9,\"Gas\":0,\"Oil\":0.3,\"Hydro\":2.8,\"Renewable\":0,\"Nuclear\":0},\"Kuwait\":{\"Coal\":0,\"Gas\":33.7,\"Oil\":66.3,\"Hydro\":0,\"Renewable\":0,\"Nuclear\":0},\"Kyrgyz Republic\":{\"Coal\":7.4,\"Gas\":0.8,\"Oil\":0.6,\"Hydro\":91.3,\"Renewable\":0,\"Nuclear\":0},\"Latvia\":{\"Coal\":0,\"Gas\":45.5,\"Oil\":0,\"Hydro\":38.8,\"Renewable\":15.8,\"Nuclear\":0},\"Lebanon\":{\"Coal\":0,\"Gas\":0,\"Oil\":98.9,\"Hydro\":1.1,\"Renewable\":0,\"Nuclear\":0},\"Libya\":{\"Coal\":0,\"Gas\":53.7,\"Oil\":46.3,\"Hydro\":0,\"Renewable\":0,\"Nuclear\":0},\"Lithuania\":{\"Coal\":0.1,\"Gas\":47.2,\"Oil\":4.3,\"Hydro\":10.8,\"Renewable\":30,\"Nuclear\":0},\"Luxembourg\":{\"Coal\":0,\"Gas\":76.2,\"Oil\":0,\"Hydro\":5.7,\"Renewable\":15.3,\"Nuclear\":0},\"Macedonia, FYR\":{\"Coal\":69.5,\"Gas\":3.6,\"Oil\":2.8,\"Hydro\":22.5,\"Renewable\":1.6,\"Nuclear\":0},\"Malaysia\":{\"Coal\":37.9,\"Gas\":50.1,\"Oil\":2.4,\"Hydro\":9.1,\"Renewable\":0.6,\"Nuclear\":0},\"Malta\":{\"Coal\":0,\"Gas\":0,\"Oil\":96.7,\"Hydro\":0,\"Renewable\":3.3,\"Nuclear\":0},\"Mauritius\":{\"Coal\":42.9,\"Gas\":0,\"Oil\":36.7,\"Hydro\":3.1,\"Renewable\":17.2,\"Nuclear\":0},\"Mexico\":{\"Coal\":11.2,\"Gas\":57,\"Oil\":10.9,\"Hydro\":12.9,\"Renewable\":4.6,\"Nuclear\":3.2},\"Moldova\":{\"Coal\":0,\"Gas\":93.5,\"Oil\":0.3,\"Hydro\":5.9,\"Renewable\":0.3,\"Nuclear\":0},\"Mongolia\":{\"Coal\":92.3,\"Gas\":0,\"Oil\":4.5,\"Hydro\":0,\"Renewable\":3.2,\"Nuclear\":0},\"Montenegro\":{\"Coal\":44.8,\"Gas\":0,\"Oil\":0,\"Hydro\":55.2,\"Renewable\":0,\"Nuclear\":0},\"Morocco\":{\"Coal\":55,\"Gas\":19.5,\"Oil\":13.1,\"Hydro\":5.7,\"Renewable\":6.7,\"Nuclear\":0},\"Mozambique\":{\"Coal\":0,\"Gas\":8.8,\"Oil\":0,\"Hydro\":91.2,\"Renewable\":0,\"Nuclear\":0},\"Myanmar\":{\"Coal\":2,\"Gas\":35.2,\"Oil\":0.5,\"Hydro\":62.4,\"Renewable\":0,\"Nuclear\":0},\"Namibia\":{\"Coal\":0,\"Gas\":0,\"Oil\":0.9,\"Hydro\":99.1,\"Renewable\":0,\"Nuclear\":0},\"Nepal\":{\"Coal\":0,\"Gas\":0,\"Oil\":0,\"Hydro\":99.8,\"Renewable\":0.2,\"Nuclear\":0},\"Netherlands\":{\"Coal\":31.3,\"Gas\":49.8,\"Oil\":1.8,\"Hydro\":0.1,\"Renewable\":11.2,\"Nuclear\":4},\"New Zealand\":{\"Coal\":4.5,\"Gas\":16.3,\"Oil\":0,\"Hydro\":55.9,\"Renewable\":23.2,\"Nuclear\":0},\"Nicaragua\":{\"Coal\":0,\"Gas\":0,\"Oil\":46.1,\"Hydro\":8.9,\"Renewable\":45,\"Nuclear\":0},\"Niger\":{\"Coal\":71.6,\"Gas\":0,\"Oil\":27.8,\"Hydro\":0,\"Renewable\":0.6,\"Nuclear\":0},\"Nigeria\":{\"Coal\":0,\"Gas\":82.4,\"Oil\":0,\"Hydro\":17.6,\"Renewable\":0,\"Nuclear\":0},\"Norway\":{\"Coal\":0.1,\"Gas\":1.8,\"Oil\":0,\"Hydro\":96,\"Renewable\":1.7,\"Nuclear\":0},\"Oman\":{\"Coal\":0,\"Gas\":97.4,\"Oil\":2.6,\"Hydro\":0,\"Renewable\":0,\"Nuclear\":0},\"Pakistan\":{\"Coal\":0.2,\"Gas\":25.1,\"Oil\":39.7,\"Hydro\":29.8,\"Renewable\":0.4,\"Nuclear\":4.8},\"Panama\":{\"Coal\":7.4,\"Gas\":0,\"Oil\":36.8,\"Hydro\":54.2,\"Renewable\":1.6,\"Nuclear\":0},\"Paraguay\":{\"Coal\":0,\"Gas\":0,\"Oil\":0,\"Hydro\":100,\"Renewable\":0,\"Nuclear\":0},\"Peru\":{\"Coal\":0.7,\"Gas\":45.9,\"Oil\":1.2,\"Hydro\":48.8,\"Renewable\":3.4,\"Nuclear\":0},\"Philippines\":{\"Coal\":42.8,\"Gas\":24.2,\"Oil\":7.4,\"Hydro\":11.8,\"Renewable\":13.8,\"Nuclear\":0},\"Poland\":{\"Coal\":83,\"Gas\":3.4,\"Oil\":1,\"Hydro\":1.4,\"Renewable\":11.1,\"Nuclear\":0},\"Portugal\":{\"Coal\":23,\"Gas\":13.2,\"Oil\":2.6,\"Hydro\":30,\"Renewable\":30.8,\"Nuclear\":0},\"Qatar\":{\"Coal\":0,\"Gas\":100,\"Oil\":0,\"Hydro\":0,\"Renewable\":0,\"Nuclear\":0},\"Romania\":{\"Coal\":27.3,\"Gas\":12.4,\"Oil\":0.7,\"Hydro\":28.8,\"Renewable\":12.8,\"Nuclear\":17.9},\"Russian Federation\":{\"Coal\":14.9,\"Gas\":50.2,\"Oil\":1,\"Hydro\":16.5,\"Renewable\":0.1,\"Nuclear\":17},\"Saudi Arabia\":{\"Coal\":0,\"Gas\":51.2,\"Oil\":48.8,\"Hydro\":0,\"Renewable\":0,\"Nuclear\":0},\"Senegal\":{\"Coal\":0,\"Gas\":4.2,\"Oil\":83.6,\"Hydro\":8.7,\"Renewable\":1.8,\"Nuclear\":0},\"Serbia\":{\"Coal\":66.3,\"Gas\":0.7,\"Oil\":0,\"Hydro\":32.9,\"Renewable\":0.1,\"Nuclear\":0},\"Singapore\":{\"Coal\":1.1,\"Gas\":95.3,\"Oil\":0.7,\"Hydro\":0,\"Renewable\":1.7,\"Nuclear\":0},\"Slovak Republic\":{\"Coal\":12.4,\"Gas\":6,\"Oil\":1.1,\"Hydro\":15.5,\"Renewable\":7.4,\"Nuclear\":57.1},\"Slovenia\":{\"Coal\":21.9,\"Gas\":2.2,\"Oil\":0.2,\"Hydro\":35.5,\"Renewable\":3,\"Nuclear\":37.1},\"South Africa\":{\"Coal\":93,\"Gas\":0,\"Oil\":0.1,\"Hydro\":0.4,\"Renewable\":1,\"Nuclear\":5.5},\"South Sudan\":{\"Coal\":0,\"Gas\":0,\"Oil\":99.6,\"Hydro\":0,\"Renewable\":0.4,\"Nuclear\":0},\"Spain\":{\"Coal\":16.5,\"Gas\":17.2,\"Oil\":5.1,\"Hydro\":14.2,\"Renewable\":25.9,\"Nuclear\":20.8},\"Sri Lanka\":{\"Coal\":25.7,\"Gas\":0,\"Oil\":35.1,\"Hydro\":36.5,\"Renewable\":2.7,\"Nuclear\":0},\"Sudan\":{\"Coal\":0,\"Gas\":0,\"Oil\":21.7,\"Hydro\":78.3,\"Renewable\":0,\"Nuclear\":0},\"Suriname\":{\"Coal\":0,\"Gas\":0,\"Oil\":37.7,\"Hydro\":62.3,\"Renewable\":0,\"Nuclear\":0},\"Sweden\":{\"Coal\":0.6,\"Gas\":0.3,\"Oil\":0.2,\"Hydro\":41.5,\"Renewable\":14.3,\"Nuclear\":42.3},\"Switzerland\":{\"Coal\":0,\"Gas\":0.7,\"Oil\":0.1,\"Hydro\":54.3,\"Renewable\":3.8,\"Nuclear\":39.3},\"Syrian Arab Republic\":{\"Coal\":0,\"Gas\":64.4,\"Oil\":21.8,\"Hydro\":13.8,\"Renewable\":0,\"Nuclear\":0},\"Tajikistan\":{\"Coal\":0,\"Gas\":2.9,\"Oil\":0,\"Hydro\":97.1,\"Renewable\":0,\"Nuclear\":0},\"Tanzania\":{\"Coal\":0,\"Gas\":42.2,\"Oil\":15.5,\"Hydro\":41.6,\"Renewable\":0.6,\"Nuclear\":0},\"Thailand\":{\"Coal\":21.6,\"Gas\":68.3,\"Oil\":1,\"Hydro\":3.2,\"Renewable\":5.9,\"Nuclear\":0},\"Togo\":{\"Coal\":0,\"Gas\":0,\"Oil\":12,\"Hydro\":84.5,\"Renewable\":3.5,\"Nuclear\":0},\"Trinidad and Tobago\":{\"Coal\":0,\"Gas\":99.8,\"Oil\":0.2,\"Hydro\":0,\"Renewable\":0,\"Nuclear\":0},\"Tunisia\":{\"Coal\":0,\"Gas\":94.2,\"Oil\":1.8,\"Hydro\":0.3,\"Renewable\":2.8,\"Nuclear\":0},\"Turkey\":{\"Coal\":30.3,\"Gas\":47.9,\"Oil\":0.9,\"Hydro\":16.1,\"Renewable\":4.8,\"Nuclear\":0},\"Turkmenistan\":{\"Coal\":0,\"Gas\":100,\"Oil\":0,\"Hydro\":0,\"Renewable\":0,\"Nuclear\":0},\"Ukraine\":{\"Coal\":38.7,\"Gas\":7,\"Oil\":0.1,\"Hydro\":4.7,\"Renewable\":0.9,\"Nuclear\":48.6},\"United Arab\":{\"Coal\":0,\"Gas\":98.4,\"Oil\":1.3,\"Hydro\":0,\"Renewable\":0.3,\"Nuclear\":0},\"United Kingdom\":{\"Coal\":30.4,\"Gas\":30,\"Oil\":0.5,\"Hydro\":1.8,\"Renewable\":17.7,\"Nuclear\":19},\"United States\":{\"Coal\":39.7,\"Gas\":26.9,\"Oil\":0.9,\"Hydro\":6.1,\"Renewable\":6.9,\"Nuclear\":19.2},\"Uruguay\":{\"Coal\":0,\"Gas\":0,\"Oil\":9.1,\"Hydro\":74.2,\"Renewable\":16.8,\"Nuclear\":0},\"Uzbekistan\":{\"Coal\":4.1,\"Gas\":74.2,\"Oil\":0.4,\"Hydro\":21.4,\"Renewable\":0,\"Nuclear\":0},\"Venezuela, RB\":{\"Coal\":0,\"Gas\":17.7,\"Oil\":14,\"Hydro\":68.3,\"Renewable\":0,\"Nuclear\":0},\"Vietnam\":{\"Coal\":24.5,\"Gas\":33.5,\"Oil\":0.3,\"Hydro\":41.5,\"Renewable\":0.1,\"Nuclear\":0},\"Yemen, Rep.\":{\"Coal\":0,\"Gas\":38.6,\"Oil\":61.4,\"Hydro\":0,\"Renewable\":0,\"Nuclear\":0},\"Zambia\":{\"Coal\":0,\"Gas\":0,\"Oil\":2.8,\"Hydro\":97.2,\"Renewable\":0,\"Nuclear\":0},\"Zimbabwe\":{\"Coal\":43.9,\"Gas\":0,\"Oil\":0.5,\"Hydro\":54.2,\"Renewable\":1.4,\"Nuclear\":0},\"World\":{\"Coal\":40.7,\"Gas\":21.6,\"Oil\":4.1,\"Hydro\":16.2,\"Renewable\":6,\"Nuclear\":10.6},\"East Asia & Pacific\":{\"Coal\":60.6,\"Gas\":13.5,\"Oil\":2.2,\"Hydro\":15,\"Renewable\":4.2,\"Nuclear\":3.8},\"Europe & Central\":{\"Coal\":24.1,\"Gas\":24.3,\"Oil\":1.3,\"Hydro\":16.6,\"Renewable\":10.5,\"Nuclear\":22.4},\"Latin America & Caribbean\":{\"Coal\":6.5,\"Gas\":26,\"Oil\":10.6,\"Hydro\":46.5,\"Renewable\":6.4,\"Nuclear\":1.9},\"Middle East & North Afrika\":{\"Coal\":3.4,\"Gas\":64.1,\"Oil\":28.8,\"Hydro\":2.6,\"Renewable\":0.4,\"Nuclear\":0.3},\"North America\":{\"Coal\":35.7,\"Gas\":24.6,\"Oil\":1,\"Hydro\":12.9,\"Renewable\":6.6,\"Nuclear\":18.9},\"South Asia\":{\"Coal\":65.7,\"Gas\":9.1,\"Oil\":5.2,\"Hydro\":11.6,\"Renewable\":4.6,\"Nuclear\":2.8},\"Sub\u00ADSaharan Africa\":{\"Coal\":51.4,\"Gas\":8.6,\"Oil\":4.3,\"Hydro\":21.2,\"Renewable\":1.7,\"Nuclear\":3}}";
    }
    FootprintFormComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    FootprintFormComponent.prototype.CSVParse = function () {
        return JSON.parse(this.rawData);
    };
    FootprintFormComponent.prototype.calcFactors = function () {
        var csvData = this.CSVParse();
        var country = this.firstFormGroup.get('firstCtrl').value;
        var coal = (csvData[country]).Coal;
        var gas = (csvData[country]).Gas;
        var oil = (csvData[country]).Oil;
        var hydro = (csvData[country]).Hydro;
        var renew = (csvData[country]).Renewable;
        var nuclear = (csvData[country]).Nuclear;
        var power = this.secondFormGroup.get('secondCtrl').value / 1000;
        console.log('country: ' + country);
        console.log('coal: ' + coal);
        console.log('gas: ' + gas);
        console.log('oil: ' + oil);
        console.log('hydro: ' + hydro);
        console.log('renew: ' + renew);
        console.log('nuclear: ' + nuclear);
        console.log('power: ' + power);
        var totalPercentage = Number(coal) + Number(gas) + Number(oil) + Number(hydro) + Number(renew) + Number(nuclear);
        var totalPercentageString = Math.round(totalPercentage * 10) / 10 + '%';
        var kgCO2result = ((coal * 820 + gas * 490 + oil * 778 +
            hydro * 24 + renew * 41 + nuclear * 12)) / 100000 * 24 * 365.2422 * power;
        var treesRequired = kgCO2result / 15.7;
        this.cO2KgProd = parseInt(Math.ceil(kgCO2result).toLocaleString('en').replace(/,/g, ' '), 10);
        this.treesToPlant = parseInt(Math.ceil(treesRequired).toLocaleString('en').replace(/,/g, ' '), 10);
        this.usdNeeded = parseInt(Math.round(treesRequired / 10).toLocaleString('en').replace(/,/g, ' '), 10);
    };
    FootprintFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    FootprintFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footprint-form',
            template: __webpack_require__(/*! raw-loader!./footprint-form.component.html */ "../node_modules/raw-loader/index.js!../src/app/footprint-form/footprint-form.component.html"),
            styles: [__webpack_require__(/*! ./footprint-form.component.css */ "../src/app/footprint-form/footprint-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], FootprintFormComponent);
    return FootprintFormComponent;
}());



/***/ }),

/***/ "../src/environments/environment.ts":
/*!******************************************!*\
  !*** ../src/environments/environment.ts ***!
  \******************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "../src/main.ts":
/*!**********************!*\
  !*** ../src/main.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "../src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "../src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "../node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ../src/main.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ysidemo\carbon-footprint-calc\src\main.ts */"../src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map