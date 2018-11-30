webpackJsonp([0],{

/***/ "../../../../ng2-completer/components/completer-cmp.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_ctr_completer__ = __webpack_require__("../../../../ng2-completer/directives/ctr-completer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_completer_service__ = __webpack_require__("../../../../ng2-completer/services/completer-service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globals__ = __webpack_require__("../../../../ng2-completer/globals.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleterCmp; });







var noop = function () { };
var COMPLETER_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return CompleterCmp; }),
    multi: true
};
var CompleterCmp = (function () {
    function CompleterCmp(completerService, cdr) {
        this.completerService = completerService;
        this.cdr = cdr;
        this.inputName = "";
        this.inputId = "";
        this.pause = __WEBPACK_IMPORTED_MODULE_4__globals__["c" /* PAUSE */];
        this.minSearchLength = __WEBPACK_IMPORTED_MODULE_4__globals__["b" /* MIN_SEARCH_LENGTH */];
        this.maxChars = __WEBPACK_IMPORTED_MODULE_4__globals__["e" /* MAX_CHARS */];
        this.overrideSuggested = false;
        this.clearSelected = false;
        this.clearUnselected = false;
        this.fillHighlighted = true;
        this.placeholder = "";
        this.autoMatch = false;
        this.disableInput = false;
        this.autofocus = false;
        this.openOnFocus = false;
        this.openOnClick = false;
        this.selectOnClick = false;
        this.selectOnFocus = false;
        this.autoHighlight = false;
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.highlighted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.blurEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.click = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.focusEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.opened = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.keyup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.keydown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.control = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]("");
        this.displaySearching = true;
        this.displayNoResults = true;
        this._textNoResults = __WEBPACK_IMPORTED_MODULE_4__globals__["f" /* TEXT_NO_RESULTS */];
        this._textSearching = __WEBPACK_IMPORTED_MODULE_4__globals__["g" /* TEXT_SEARCHING */];
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
        this._focus = false;
        this._open = false;
        this._searchStr = "";
    }
    Object.defineProperty(CompleterCmp.prototype, "value", {
        get: function () { return this.searchStr; },
        set: function (v) {
            if (v !== this.searchStr) {
                this.searchStr = v;
            }
            // Propagate the change in any case
            this._onChangeCallback(v);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(CompleterCmp.prototype, "searchStr", {
        get: function () {
            return this._searchStr;
        },
        set: function (value) {
            if (typeof value === "string" || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__globals__["a" /* isNil */])(value)) {
                this._searchStr = value;
            }
            else {
                this._searchStr = JSON.stringify(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    CompleterCmp.prototype.ngAfterViewInit = function () {
        if (this.autofocus) {
            this._focus = true;
        }
    };
    CompleterCmp.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this._focus) {
            setTimeout(function () {
                _this.ctrInput.nativeElement.focus();
                _this._focus = false;
            }, 0);
        }
    };
    CompleterCmp.prototype.onTouched = function () {
        this._onTouchedCallback();
    };
    CompleterCmp.prototype.writeValue = function (value) {
        this.searchStr = value;
    };
    CompleterCmp.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    CompleterCmp.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    CompleterCmp.prototype.setDisabledState = function (isDisabled) {
        this.disableInput = isDisabled;
    };
    Object.defineProperty(CompleterCmp.prototype, "datasource", {
        set: function (source) {
            if (source) {
                if (source instanceof Array) {
                    this.dataService = this.completerService.local(source);
                }
                else if (typeof (source) === "string") {
                    this.dataService = this.completerService.remote(source);
                }
                else {
                    this.dataService = source;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleterCmp.prototype, "textNoResults", {
        set: function (text) {
            if (this._textNoResults != text) {
                this._textNoResults = text;
                this.displayNoResults = !!this._textNoResults && this._textNoResults !== "false";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleterCmp.prototype, "textSearching", {
        set: function (text) {
            if (this._textSearching != text) {
                this._textSearching = text;
                this.displaySearching = !!this._textSearching && this._textSearching !== "false";
            }
        },
        enumerable: true,
        configurable: true
    });
    CompleterCmp.prototype.ngOnInit = function () {
        var _this = this;
        this.completer.selected.subscribe(function (item) {
            _this.selected.emit(item);
        });
        this.completer.highlighted.subscribe(function (item) {
            _this.highlighted.emit(item);
        });
        this.completer.opened.subscribe(function (isOpen) {
            _this._open = isOpen;
            _this.opened.emit(isOpen);
        });
    };
    CompleterCmp.prototype.onBlur = function () {
        this.blurEvent.emit();
        this.onTouched();
        this.cdr.detectChanges();
    };
    CompleterCmp.prototype.onFocus = function () {
        this.focusEvent.emit();
        this.onTouched();
    };
    CompleterCmp.prototype.onClick = function (event) {
        this.click.emit(event);
        this.onTouched();
    };
    CompleterCmp.prototype.onKeyup = function (event) {
        this.keyup.emit(event);
        event.stopPropagation();
    };
    CompleterCmp.prototype.onKeydown = function (event) {
        this.keydown.emit(event);
        event.stopPropagation();
    };
    CompleterCmp.prototype.onChange = function (value) {
        this.value = value;
    };
    CompleterCmp.prototype.open = function () {
        this.completer.open();
    };
    CompleterCmp.prototype.close = function () {
        this.completer.clear();
    };
    CompleterCmp.prototype.focus = function () {
        if (this.ctrInput) {
            this.ctrInput.nativeElement.focus();
        }
        else {
            this._focus = true;
        }
    };
    CompleterCmp.prototype.blur = function () {
        if (this.ctrInput) {
            this.ctrInput.nativeElement.blur();
        }
        else {
            this._focus = false;
        }
    };
    CompleterCmp.prototype.isOpen = function () {
        return this._open;
    };
    CompleterCmp.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: "ng2-completer",
                    template: "\n        <div class=\"completer-holder\" ctrCompleter>\n            <input #ctrInput [attr.id]=\"inputId.length > 0 ? inputId : null\" type=\"search\" class=\"completer-input\" ctrInput [ngClass]=\"inputClass\"\n                [(ngModel)]=\"searchStr\" (ngModelChange)=\"onChange($event)\" [attr.name]=\"inputName\" [placeholder]=\"placeholder\"\n                [attr.maxlength]=\"maxChars\" [tabindex]=\"fieldTabindex\" [disabled]=\"disableInput\"\n                [clearSelected]=\"clearSelected\" [clearUnselected]=\"clearUnselected\"\n                [overrideSuggested]=\"overrideSuggested\" [openOnFocus]=\"openOnFocus\" [fillHighlighted]=\"fillHighlighted\" \n                [openOnClick]=\"openOnClick\" [selectOnClick]=\"selectOnClick\" [selectOnFocus]=\"selectOnFocus\"\n                (blur)=\"onBlur()\" (focus)=\"onFocus()\" (keyup)=\"onKeyup($event)\" (keydown)=\"onKeydown($event)\" (click)=\"onClick($event)\"\n                autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" />\n\n            <div class=\"completer-dropdown-holder\"\n                *ctrList=\"dataService;\n                    minSearchLength: minSearchLength;\n                    pause: pause;\n                    autoMatch: autoMatch;\n                    initialValue: initialValue;\n                    autoHighlight: autoHighlight;\n                    displaySearching: displaySearching;\n                    let items = results;\n                    let searchActive = searching;\n                    let isInitialized = searchInitialized;\n                    let isOpen = isOpen;\">\n                <div class=\"completer-dropdown\" ctrDropdown *ngIf=\"isInitialized && isOpen && (( items?.length > 0|| (displayNoResults && !searchActive)) || (searchActive && displaySearching))\">\n                    <div *ngIf=\"searchActive && displaySearching\" class=\"completer-searching\">{{_textSearching}}</div>\n                    <div *ngIf=\"!searchActive && (!items || items?.length === 0)\" class=\"completer-no-results\">{{_textNoResults}}</div>\n                    <div class=\"completer-row-wrapper\" *ngFor=\"let item of items; let rowIndex=index\">\n                        <div class=\"completer-row\" [ctrRow]=\"rowIndex\" [dataItem]=\"item\">\n                            <div *ngIf=\"item.image || item.image === ''\" class=\"completer-image-holder\">\n                                <img *ngIf=\"item.image != ''\" src=\"{{item.image}}\" class=\"completer-image\" />\n                                <div *ngIf=\"item.image === ''\" class=\"completer-image-default\"></div>\n                            </div>\n                            <div class=\"completer-item-text\" [ngClass]=\"{'completer-item-text-image': item.image || item.image === '' }\">\n                                <completer-list-item class=\"completer-title\" [text]=\"item.title\" [matchClass]=\"matchClass\" [searchStr]=\"searchStr\" [type]=\"'title'\"></completer-list-item>\n                                <completer-list-item *ngIf=\"item.description && item.description != ''\" class=\"completer-description\" [text]=\"item.description\"\n                                    [matchClass]=\"matchClass\" [searchStr]=\"searchStr\" [type]=\"'description'\">\n                                </completer-list-item>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
                    styles: ["\n    .completer-dropdown {\n        border-color: #ececec;\n        border-width: 1px;\n        border-style: solid;\n        border-radius: 2px;\n        width: 250px;\n        padding: 6px;\n        cursor: pointer;\n        z-index: 9999;\n        position: absolute;\n        margin-top: -6px;\n        background-color: #ffffff;\n    }\n\n    .completer-row {\n        padding: 5px;\n        color: #000000;\n        margin-bottom: 4px;\n        clear: both;\n        display: inline-block;\n        width: 103%;\n    }\n\n    .completer-selected-row {\n        background-color: lightblue;\n        color: #ffffff;\n    }\n\n    .completer-description {\n        font-size: 14px;\n    }\n\n    .completer-image-default {\n        width: 16px;\n        height: 16px;\n        background-image: url(\"demo/res/img/default.png\");\n    }\n\n    .completer-image-holder {\n        float: left;\n        width: 10%;\n    }\n    .completer-item-text-image {\n        float: right;\n        width: 90%;\n    }\n    "],
                    providers: [COMPLETER_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    CompleterCmp.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__services_completer_service__["a" /* CompleterService */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    CompleterCmp.propDecorators = {
        'dataService': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'inputName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'inputId': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pause': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'minSearchLength': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxChars': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'overrideSuggested': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'clearSelected': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'clearUnselected': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'fillHighlighted': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'placeholder': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'matchClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'fieldTabindex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'autoMatch': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'disableInput': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'inputClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'autofocus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'openOnFocus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'openOnClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'selectOnClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'selectOnFocus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'initialValue': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'autoHighlight': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'selected': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'highlighted': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'blurEvent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ["blur",] },],
        'click': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'focusEvent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ["focus",] },],
        'opened': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'keyup': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'keydown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'completer': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: [__WEBPACK_IMPORTED_MODULE_2__directives_ctr_completer__["a" /* CtrCompleter */],] },],
        'ctrInput': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ["ctrInput",] },],
        'datasource': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'textNoResults': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'textSearching': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return CompleterCmp;
}());

//# sourceMappingURL=completer-cmp.js.map

/***/ }),

/***/ "../../../../ng2-completer/components/completer-list-item-cmp.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleterListItemCmp; });


var CompleterListItemCmp = (function () {
    function CompleterListItemCmp() {
        this.parts = [];
    }
    CompleterListItemCmp.prototype.ngOnInit = function () {
        if (!this.searchStr) {
            this.parts.push({ isMatch: false, text: this.text });
            return;
        }
        var matchStr = this.text.toLowerCase();
        var matchPos = matchStr.indexOf(this.searchStr.toLowerCase());
        var startIndex = 0;
        while (matchPos >= 0) {
            var matchText = this.text.slice(matchPos, matchPos + this.searchStr.length);
            if (matchPos === 0) {
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length;
            }
            else if (matchPos > 0) {
                var matchPart = this.text.slice(startIndex, matchPos);
                this.parts.push({ isMatch: false, text: matchPart });
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length + matchPart.length;
            }
            matchPos = matchStr.indexOf(this.searchStr.toLowerCase(), startIndex);
        }
        if (startIndex < this.text.length) {
            this.parts.push({ isMatch: false, text: this.text.slice(startIndex, this.text.length) });
        }
    };
    CompleterListItemCmp.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: "completer-list-item",
                    template: "<span class=\"completer-list-item-holder\" [ngClass]=\"{'completer-title': type === 'title', 'completer-description': type === 'description'}\" >\n        <span class=\"completer-list-item\" *ngFor=\"let part of parts\" [ngClass]=\"part.isMatch ? matchClass : null\">{{part.text}}</span>\n    </span>"
                },] },
    ];
    /** @nocollapse */
    CompleterListItemCmp.ctorParameters = function () { return []; };
    CompleterListItemCmp.propDecorators = {
        'text': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'searchStr': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'matchClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return CompleterListItemCmp;
}());

//# sourceMappingURL=completer-list-item-cmp.js.map

/***/ }),

/***/ "../../../../ng2-completer/directives/ctr-completer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CtrCompleter; });

var CtrCompleter = (function () {
    function CtrCompleter() {
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.highlighted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.opened = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dataSourceChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._hasHighlighted = false;
        this._hasSelected = false;
        this._cancelBlur = false;
        this._isOpen = false;
    }
    CtrCompleter.prototype.registerList = function (list) {
        this.list = list;
    };
    CtrCompleter.prototype.registerDropdown = function (dropdown) {
        this.dropdown = dropdown;
    };
    CtrCompleter.prototype.onHighlighted = function (item) {
        this.highlighted.emit(item);
        this._hasHighlighted = !!item;
    };
    CtrCompleter.prototype.onSelected = function (item, clearList) {
        if (clearList === void 0) { clearList = true; }
        this.selected.emit(item);
        if (item) {
            this._hasSelected = true;
        }
        if (clearList) {
            this.clear();
        }
    };
    CtrCompleter.prototype.onDataSourceChange = function () {
        if (this.hasSelected) {
            this.selected.emit(null);
            this._hasSelected = false;
        }
        this.dataSourceChange.emit();
    };
    CtrCompleter.prototype.search = function (term) {
        if (this._hasSelected) {
            this.selected.emit(null);
            this._hasSelected = false;
        }
        if (this.list) {
            this.list.search(term);
        }
    };
    CtrCompleter.prototype.clear = function () {
        this._hasHighlighted = false;
        this.isOpen = false;
        if (this.dropdown) {
            this.dropdown.clear();
        }
        if (this.list) {
            this.list.clear();
        }
    };
    CtrCompleter.prototype.selectCurrent = function () {
        if (this.dropdown) {
            this.dropdown.selectCurrent();
        }
    };
    CtrCompleter.prototype.nextRow = function () {
        if (this.dropdown) {
            this.dropdown.nextRow();
        }
    };
    CtrCompleter.prototype.prevRow = function () {
        if (this.dropdown) {
            this.dropdown.prevRow();
        }
    };
    CtrCompleter.prototype.hasHighlighted = function () {
        return this._hasHighlighted;
    };
    CtrCompleter.prototype.cancelBlur = function (cancel) {
        this._cancelBlur = cancel;
    };
    CtrCompleter.prototype.isCancelBlur = function () {
        return this._cancelBlur;
    };
    CtrCompleter.prototype.open = function () {
        if (!this._isOpen) {
            this.isOpen = true;
            this.list.open();
        }
    };
    Object.defineProperty(CtrCompleter.prototype, "isOpen", {
        get: function () {
            return this._isOpen;
        },
        set: function (open) {
            this._isOpen = open;
            this.opened.emit(this._isOpen);
            if (this.list) {
                this.list.isOpen(open);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CtrCompleter.prototype, "autoHighlightIndex", {
        get: function () {
            return this._autoHighlightIndex;
        },
        set: function (index) {
            this._autoHighlightIndex = index;
            if (this.dropdown) {
                this.dropdown.highlightRow(this._autoHighlightIndex);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CtrCompleter.prototype, "hasSelected", {
        get: function () {
            return this._hasSelected;
        },
        enumerable: true,
        configurable: true
    });
    CtrCompleter.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: "[ctrCompleter]",
                },] },
    ];
    /** @nocollapse */
    CtrCompleter.ctorParameters = function () { return []; };
    CtrCompleter.propDecorators = {
        'selected': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'highlighted': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'opened': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'dataSourceChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return CtrCompleter;
}());

//# sourceMappingURL=ctr-completer.js.map

/***/ }),

/***/ "../../../../ng2-completer/directives/ctr-dropdown.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ctr_completer__ = __webpack_require__("../../../../ng2-completer/directives/ctr-completer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__("../../../../ng2-completer/globals.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CtrRowItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CtrDropdown; });



var CtrRowItem = (function () {
    function CtrRowItem(row, index) {
        this.row = row;
        this.index = index;
    }
    return CtrRowItem;
}());

var CtrDropdown = (function () {
    function CtrDropdown(completer, el) {
        this.completer = completer;
        this.el = el;
        this.rows = [];
        this._rowMouseDown = false;
        this.completer.registerDropdown(this);
    }
    CtrDropdown.prototype.ngOnDestroy = function () {
        this.completer.registerDropdown(null);
    };
    CtrDropdown.prototype.ngAfterViewInit = function () {
        var _this = this;
        var css = getComputedStyle(this.el.nativeElement);
        var autoHighlightIndex = this.completer.autoHighlightIndex;
        this.isScrollOn = !!css.maxHeight && css.overflowY === "auto";
        if (autoHighlightIndex) {
            setTimeout(function () {
                _this.highlightRow(autoHighlightIndex);
            }, 0);
        }
    };
    CtrDropdown.prototype.onMouseDown = function (event) {
        var _this = this;
        // Support for canceling blur on IE (issue #158)
        if (!this._rowMouseDown) {
            this.completer.cancelBlur(true);
            setTimeout(function () {
                _this.completer.cancelBlur(false);
            }, 0);
        }
        else {
            this._rowMouseDown = false;
        }
    };
    CtrDropdown.prototype.registerRow = function (row) {
        var arrIndex = this.rows.findIndex(function (_row) { return _row.index === row.index; });
        if (arrIndex >= 0) {
            this.rows[arrIndex] = row;
        }
        else {
            this.rows.push(row);
        }
    };
    CtrDropdown.prototype.unregisterRow = function (rowIndex) {
        var arrIndex = this.rows.findIndex(function (_row) { return _row.index === rowIndex; });
        this.rows.splice(arrIndex, 1);
        if (this.currHighlighted && rowIndex === this.currHighlighted.index) {
            this.highlightRow(null);
        }
    };
    CtrDropdown.prototype.highlightRow = function (index) {
        var highlighted = this.rows.find(function (row) { return row.index === index; });
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* isNil */])(index) || index < 0) {
            if (this.currHighlighted) {
                this.currHighlighted.row.setHighlighted(false);
            }
            this.currHighlighted = undefined;
            this.completer.onHighlighted(null);
            return;
        }
        if (!highlighted) {
            return;
        }
        if (this.currHighlighted) {
            this.currHighlighted.row.setHighlighted(false);
        }
        this.currHighlighted = highlighted;
        this.currHighlighted.row.setHighlighted(true);
        this.completer.onHighlighted(this.currHighlighted.row.getDataItem());
        if (this.isScrollOn && this.currHighlighted) {
            var rowTop = this.dropdownRowTop();
            if (!rowTop) {
                return;
            }
            if (rowTop < 0) {
                this.dropdownScrollTopTo(rowTop - 1);
            }
            else {
                var row = this.currHighlighted.row.getNativeElement();
                if (this.dropdownHeight() < row.getBoundingClientRect().bottom) {
                    this.dropdownScrollTopTo(this.dropdownRowOffsetHeight(row));
                    if (this.el.nativeElement.getBoundingClientRect().bottom - this.dropdownRowOffsetHeight(row) < row.getBoundingClientRect().top) {
                        this.dropdownScrollTopTo(row.getBoundingClientRect().top - (this.el.nativeElement.getBoundingClientRect().top + parseInt(getComputedStyle(this.el.nativeElement).paddingTop, 10)));
                    }
                }
            }
        }
    };
    CtrDropdown.prototype.clear = function () {
        this.rows = [];
    };
    CtrDropdown.prototype.onSelected = function (item) {
        this.completer.onSelected(item);
    };
    CtrDropdown.prototype.rowMouseDown = function () {
        this._rowMouseDown = true;
    };
    CtrDropdown.prototype.selectCurrent = function () {
        if (this.currHighlighted) {
            this.onSelected(this.currHighlighted.row.getDataItem());
        }
        else if (this.rows.length > 0) {
            this.onSelected(this.rows[0].row.getDataItem());
        }
    };
    CtrDropdown.prototype.nextRow = function () {
        var nextRowIndex = 0;
        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index + 1;
        }
        this.highlightRow(nextRowIndex);
    };
    CtrDropdown.prototype.prevRow = function () {
        var nextRowIndex = -1;
        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index - 1;
        }
        this.highlightRow(nextRowIndex);
    };
    CtrDropdown.prototype.dropdownScrollTopTo = function (offset) {
        this.el.nativeElement.scrollTop = this.el.nativeElement.scrollTop + offset;
    };
    CtrDropdown.prototype.dropdownRowTop = function () {
        if (!this.currHighlighted) {
            return;
        }
        return this.currHighlighted.row.getNativeElement().getBoundingClientRect().top -
            (this.el.nativeElement.getBoundingClientRect().top +
                parseInt(getComputedStyle(this.el.nativeElement).paddingTop, 10));
    };
    CtrDropdown.prototype.dropdownHeight = function () {
        return this.el.nativeElement.getBoundingClientRect().top +
            parseInt(getComputedStyle(this.el.nativeElement).maxHeight, 10);
    };
    CtrDropdown.prototype.dropdownRowOffsetHeight = function (row) {
        var css = getComputedStyle(row.parentElement);
        return row.parentElement.offsetHeight +
            parseInt(css.marginTop, 10) + parseInt(css.marginBottom, 10);
    };
    CtrDropdown.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: "[ctrDropdown]",
                },] },
    ];
    /** @nocollapse */
    CtrDropdown.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__ctr_completer__["a" /* CtrCompleter */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    CtrDropdown.propDecorators = {
        'onMouseDown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ["mousedown", ["$event"],] },],
    };
    return CtrDropdown;
}());

//# sourceMappingURL=ctr-dropdown.js.map

/***/ }),

/***/ "../../../../ng2-completer/directives/ctr-input.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ctr_completer__ = __webpack_require__("../../../../ng2-completer/directives/ctr-completer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globals__ = __webpack_require__("../../../../ng2-completer/globals.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CtrInput; });





// keyboard events
var KEY_DW = 40;
var KEY_RT = 39;
var KEY_UP = 38;
var KEY_LF = 37;
var KEY_ES = 27;
var KEY_EN = 13;
var KEY_TAB = 9;
var KEY_BK = 8;
var KEY_SH = 16;
var KEY_CL = 20;
var KEY_F1 = 112;
var KEY_F12 = 123;
var CtrInput = (function () {
    function CtrInput(completer, ngModel, el) {
        var _this = this;
        this.completer = completer;
        this.ngModel = ngModel;
        this.el = el;
        this.clearSelected = false;
        this.clearUnselected = false;
        this.overrideSuggested = false;
        this.fillHighlighted = true;
        this.openOnFocus = false;
        this.openOnClick = false;
        this.selectOnClick = false;
        this.selectOnFocus = false;
        this.ngModelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._searchStr = "";
        this._displayStr = "";
        this.blurTimer = null;
        this.completer.selected.subscribe(function (item) {
            if (!item) {
                return;
            }
            if (_this.clearSelected) {
                _this.searchStr = "";
            }
            else {
                _this.searchStr = item.title;
            }
            _this.ngModelChange.emit(_this.searchStr);
        });
        this.completer.highlighted.subscribe(function (item) {
            if (_this.fillHighlighted) {
                if (item) {
                    _this._displayStr = item.title;
                    _this.ngModelChange.emit(item.title);
                }
                else {
                    _this._displayStr = _this.searchStr;
                    _this.ngModelChange.emit(_this.searchStr);
                }
            }
        });
        this.completer.dataSourceChange.subscribe(function () {
            _this.searchStr = "";
            _this.ngModelChange.emit(_this.searchStr);
        });
        if (this.ngModel.valueChanges) {
            this.ngModel.valueChanges.subscribe(function (value) {
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__globals__["a" /* isNil */])(value) && _this._displayStr !== value) {
                    if (_this.searchStr !== value) {
                        _this.completer.search(value);
                    }
                    _this.searchStr = value;
                }
            });
        }
    }
    CtrInput.prototype.keyupHandler = function (event) {
        if (event.keyCode === KEY_LF || event.keyCode === KEY_RT || event.keyCode === KEY_TAB) {
            // do nothing
            return;
        }
        if (event.keyCode === KEY_UP || event.keyCode === KEY_EN) {
            event.preventDefault();
        }
        else if (event.keyCode === KEY_DW) {
            event.preventDefault();
            this.completer.search(this.searchStr);
        }
        else if (event.keyCode === KEY_ES) {
            if (this.completer.isOpen) {
                this.restoreSearchValue();
                this.completer.clear();
                event.stopPropagation();
                event.preventDefault();
            }
        }
    };
    CtrInput.prototype.pasteHandler = function (event) {
        this.completer.open();
    };
    CtrInput.prototype.keydownHandler = function (event) {
        var keyCode = event.keyCode || event.which;
        if (keyCode === KEY_EN) {
            if (this.completer.hasHighlighted()) {
                event.preventDefault();
            }
            this.handleSelection();
        }
        else if (keyCode === KEY_DW) {
            event.preventDefault();
            this.completer.open();
            this.completer.nextRow();
        }
        else if (keyCode === KEY_UP) {
            event.preventDefault();
            this.completer.prevRow();
        }
        else if (keyCode === KEY_TAB) {
            this.handleSelection();
        }
        else if (keyCode === KEY_BK) {
            this.completer.open();
        }
        else if (keyCode === KEY_ES) {
            // This is very specific to IE10/11 #272
            // without this, IE clears the input text
            event.preventDefault();
            if (this.completer.isOpen) {
                event.stopPropagation();
            }
        }
        else {
            if (keyCode !== 0 && keyCode !== KEY_SH && keyCode !== KEY_CL &&
                (keyCode <= KEY_F1 || keyCode >= KEY_F12) &&
                !event.ctrlKey && !event.metaKey && !event.altKey) {
                this.completer.open();
            }
        }
    };
    CtrInput.prototype.onBlur = function (event) {
        var _this = this;
        // Check if we need to cancel Blur for IE
        if (this.completer.isCancelBlur()) {
            setTimeout(function () {
                // get the focus back
                _this.el.nativeElement.focus();
            }, 0);
            return;
        }
        if (this.completer.isOpen) {
            this.blurTimer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].timer(200).subscribe(function () { return _this.doBlur(); });
        }
    };
    CtrInput.prototype.onfocus = function () {
        if (this.blurTimer) {
            this.blurTimer.unsubscribe();
            this.blurTimer = null;
        }
        if (this.selectOnFocus) {
            this.el.nativeElement.select();
        }
        if (this.openOnFocus) {
            this.completer.open();
        }
    };
    CtrInput.prototype.onClick = function (event) {
        if (this.selectOnClick) {
            this.el.nativeElement.select();
        }
        if (this.openOnClick) {
            if (this.completer.isOpen) {
                this.completer.clear();
            }
            else {
                this.completer.open();
            }
        }
    };
    Object.defineProperty(CtrInput.prototype, "searchStr", {
        get: function () {
            return this._searchStr;
        },
        set: function (term) {
            this._searchStr = term;
            this._displayStr = term;
        },
        enumerable: true,
        configurable: true
    });
    CtrInput.prototype.handleSelection = function () {
        if (this.completer.hasHighlighted()) {
            this._searchStr = "";
            this.completer.selectCurrent();
        }
        else if (this.overrideSuggested) {
            this.completer.onSelected({ title: this.searchStr, originalObject: null });
        }
        else {
            if (this.clearUnselected) {
                this.searchStr = "";
                this.ngModelChange.emit(this.searchStr);
            }
            this.completer.clear();
        }
    };
    CtrInput.prototype.restoreSearchValue = function () {
        if (this.fillHighlighted) {
            if (this._displayStr != this.searchStr) {
                this._displayStr = this.searchStr;
                this.ngModelChange.emit(this.searchStr);
            }
        }
    };
    CtrInput.prototype.doBlur = function () {
        if (this.blurTimer) {
            this.blurTimer.unsubscribe();
            this.blurTimer = null;
        }
        if (this.overrideSuggested) {
            this.completer.onSelected({ title: this.searchStr, originalObject: null });
        }
        else {
            if (this.clearUnselected && !this.completer.hasSelected) {
                this.searchStr = "";
                this.ngModelChange.emit(this.searchStr);
            }
            else {
                this.restoreSearchValue();
            }
        }
        this.completer.clear();
    };
    CtrInput.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: "[ctrInput]",
                },] },
    ];
    /** @nocollapse */
    CtrInput.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__ctr_completer__["a" /* CtrCompleter */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgModel"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    CtrInput.propDecorators = {
        'clearSelected': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ["clearSelected",] },],
        'clearUnselected': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ["clearUnselected",] },],
        'overrideSuggested': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ["overrideSuggested",] },],
        'fillHighlighted': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ["fillHighlighted",] },],
        'openOnFocus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ["openOnFocus",] },],
        'openOnClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ["openOnClick",] },],
        'selectOnClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ["selectOnClick",] },],
        'selectOnFocus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ["selectOnFocus",] },],
        'ngModelChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'keyupHandler': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ["keyup", ["$event"],] },],
        'pasteHandler': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ["paste", ["$event"],] },],
        'keydownHandler': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ["keydown", ["$event"],] },],
        'onBlur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ["blur", ["$event"],] },],
        'onfocus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ["focus", [],] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ["click", ["$event"],] },],
    };
    return CtrInput;
}());

//# sourceMappingURL=ctr-input.js.map

/***/ }),

/***/ "../../../../ng2-completer/directives/ctr-list.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_timer__ = __webpack_require__("../../../../rxjs/add/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retryWhen__ = __webpack_require__("../../../../rxjs/add/operator/retryWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retryWhen___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retryWhen__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ctr_completer__ = __webpack_require__("../../../../ng2-completer/directives/ctr-completer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__globals__ = __webpack_require__("../../../../ng2-completer/globals.js");
/* unused harmony export CtrListContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CtrList; });







var CtrListContext = (function () {
    function CtrListContext(results, searching, searchInitialized, isOpen) {
        this.results = results;
        this.searching = searching;
        this.searchInitialized = searchInitialized;
        this.isOpen = isOpen;
    }
    return CtrListContext;
}());

var CtrList = (function () {
    function CtrList(completer, templateRef, viewContainer, cd) {
        this.completer = completer;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.ctrListMinSearchLength = __WEBPACK_IMPORTED_MODULE_6__globals__["b" /* MIN_SEARCH_LENGTH */];
        this.ctrListPause = __WEBPACK_IMPORTED_MODULE_6__globals__["c" /* PAUSE */];
        this.ctrListAutoMatch = false;
        this.ctrListAutoHighlight = false;
        this.ctrListDisplaySearching = true;
        // private results: CompleterItem[] = [];
        this.term = null;
        // private searching = false;
        this.searchTimer = null;
        this.clearTimer = null;
        this.ctx = new CtrListContext([], false, false, false);
        this._initialValue = null;
        this.viewRef = null;
    }
    CtrList.prototype.ngOnInit = function () {
        this.completer.registerList(this);
        this.viewRef = this.viewContainer.createEmbeddedView(this.templateRef, new CtrListContext([], false, false, false));
    };
    Object.defineProperty(CtrList.prototype, "dataService", {
        set: function (newService) {
            this._dataService = newService;
            this.dataServiceSubscribe();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CtrList.prototype, "initialValue", {
        set: function (value) {
            var _this = this;
            if (this._dataService && typeof this._dataService.convertToItem === "function") {
                setTimeout(function () {
                    var initialItem = _this._dataService.convertToItem(value);
                    if (initialItem) {
                        _this.completer.onSelected(initialItem, false);
                    }
                });
            }
            else if (!this._dataService) {
                this._initialValue = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    CtrList.prototype.search = function (term) {
        var _this = this;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__globals__["a" /* isNil */])(term) && term.length >= this.ctrListMinSearchLength && this.term !== term) {
            if (this.searchTimer) {
                this.searchTimer.unsubscribe();
                this.searchTimer = null;
            }
            if (!this.ctx.searching) {
                if (this.ctrListDisplaySearching) {
                    this.ctx.results = [];
                }
                this.ctx.searching = true;
                this.ctx.searchInitialized = true;
                this.refreshTemplate();
            }
            if (this.clearTimer) {
                this.clearTimer.unsubscribe();
            }
            this.searchTimer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].timer(this.ctrListPause).subscribe(function () {
                _this.searchTimerComplete(term);
            });
        }
        else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__globals__["a" /* isNil */])(term) && term.length < this.ctrListMinSearchLength) {
            this.clear();
            this.term = "";
        }
    };
    CtrList.prototype.clear = function () {
        var _this = this;
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
        }
        this.clearTimer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].timer(__WEBPACK_IMPORTED_MODULE_6__globals__["d" /* CLEAR_TIMEOUT */]).subscribe(function () {
            _this._clear();
        });
    };
    CtrList.prototype.open = function () {
        if (!this.ctx.searchInitialized) {
            this.search("");
        }
        this.refreshTemplate();
    };
    CtrList.prototype.isOpen = function (open) {
        this.ctx.isOpen = open;
    };
    CtrList.prototype._clear = function () {
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
            this.searchTimer = null;
        }
        if (this.dataService) {
            this.dataService.cancel();
        }
        this.viewContainer.clear();
        this.viewRef = null;
    };
    CtrList.prototype.searchTimerComplete = function (term) {
        // Begin the search
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__globals__["a" /* isNil */])(term) || term.length < this.ctrListMinSearchLength) {
            this.ctx.searching = false;
            return;
        }
        this.term = term;
        this._dataService.search(term);
    };
    CtrList.prototype.refreshTemplate = function () {
        // create the template if it doesn't exist
        if (!this.viewRef) {
            this.viewRef = this.viewContainer.createEmbeddedView(this.templateRef, this.ctx);
        }
        else if (!this.viewRef.destroyed) {
            // refresh the template
            this.viewRef.context.isOpen = this.ctx.isOpen;
            this.viewRef.context.results = this.ctx.results;
            this.viewRef.context.searching = this.ctx.searching;
            this.viewRef.context.searchInitialized = this.ctx.searchInitialized;
            this.viewRef.detectChanges();
        }
        this.cd.markForCheck();
    };
    CtrList.prototype.getBestMatchIndex = function () {
        var _this = this;
        if (!this.ctx.results || !this.term) {
            return null;
        }
        // First try to find the exact term
        var bestMatch = this.ctx.results.findIndex(function (item) { return item.title.toLowerCase() === _this.term.toLocaleLowerCase(); });
        // If not try to find the first item that starts with the term
        if (bestMatch < 0) {
            bestMatch = this.ctx.results.findIndex(function (item) { return item.title.toLowerCase().startsWith(_this.term.toLocaleLowerCase()); });
        }
        // If not try to find the first item that includes the term
        if (bestMatch < 0) {
            bestMatch = this.ctx.results.findIndex(function (item) { return item.title.toLowerCase().includes(_this.term.toLocaleLowerCase()); });
        }
        return bestMatch < 0 ? null : bestMatch;
    };
    CtrList.prototype.dataServiceSubscribe = function () {
        var _this = this;
        if (this._dataService) {
            this._dataService
                .catch(function (err) {
                console.error(err);
                console.error("Unexpected error in dataService: errors should be handled by the dataService Observable");
                return [];
            })
                .subscribe(function (results) {
                _this.ctx.searchInitialized = true;
                _this.ctx.searching = false;
                _this.ctx.results = results;
                if (_this.ctrListAutoMatch && results && results.length === 1 && results[0].title && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__globals__["a" /* isNil */])(_this.term) &&
                    results[0].title.toLocaleLowerCase() === _this.term.toLocaleLowerCase()) {
                    // Do automatch
                    _this.completer.onSelected(results[0]);
                    return;
                }
                if (_this._initialValue) {
                    _this.initialValue = _this._initialValue;
                    _this._initialValue = null;
                }
                _this.refreshTemplate();
                if (_this.ctrListAutoHighlight) {
                    _this.completer.autoHighlightIndex = _this.getBestMatchIndex();
                }
            });
            if (this._dataService.dataSourceChange) {
                this._dataService.dataSourceChange.subscribe(function () {
                    _this.term = null;
                    _this.ctx.searchInitialized = false;
                    _this.ctx.searching = false;
                    _this.ctx.results = [];
                    _this.refreshTemplate();
                    _this.completer.onDataSourceChange();
                });
            }
        }
    };
    CtrList.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                    selector: "[ctrList]",
                },] },
    ];
    /** @nocollapse */
    CtrList.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_5__ctr_completer__["a" /* CtrCompleter */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Host"] },] },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], },
    ]; };
    CtrList.propDecorators = {
        'ctrListMinSearchLength': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'ctrListPause': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'ctrListAutoMatch': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'ctrListAutoHighlight': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'ctrListDisplaySearching': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'dataService': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ["ctrList",] },],
        'initialValue': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ["ctrListInitialValue",] },],
    };
    return CtrList;
}());

//# sourceMappingURL=ctr-list.js.map

/***/ }),

/***/ "../../../../ng2-completer/directives/ctr-row.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ctr_dropdown__ = __webpack_require__("../../../../ng2-completer/directives/ctr-dropdown.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CtrRow; });


var CtrRow = (function () {
    function CtrRow(el, renderer, dropdown) {
        this.el = el;
        this.renderer = renderer;
        this.dropdown = dropdown;
        this.selected = false;
    }
    CtrRow.prototype.ngOnDestroy = function () {
        if (this._rowIndex) {
            this.dropdown.unregisterRow(this._rowIndex);
        }
    };
    Object.defineProperty(CtrRow.prototype, "ctrRow", {
        set: function (index) {
            this._rowIndex = index;
            this.dropdown.registerRow(new __WEBPACK_IMPORTED_MODULE_1__ctr_dropdown__["a" /* CtrRowItem */](this, this._rowIndex));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CtrRow.prototype, "dataItem", {
        set: function (item) {
            this._item = item;
        },
        enumerable: true,
        configurable: true
    });
    CtrRow.prototype.onClick = function (event) {
        this.dropdown.onSelected(this._item);
    };
    CtrRow.prototype.onMouseEnter = function (event) {
        this.dropdown.highlightRow(this._rowIndex);
    };
    CtrRow.prototype.onMouseDown = function (event) {
        this.dropdown.rowMouseDown();
    };
    CtrRow.prototype.setHighlighted = function (selected) {
        this.selected = selected;
        this.renderer.setElementClass(this.el.nativeElement, "completer-selected-row", this.selected);
    };
    CtrRow.prototype.getNativeElement = function () {
        return this.el.nativeElement;
    };
    CtrRow.prototype.getDataItem = function () {
        return this._item;
    };
    CtrRow.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: "[ctrRow]",
                },] },
    ];
    /** @nocollapse */
    CtrRow.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__ctr_dropdown__["b" /* CtrDropdown */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
    ]; };
    CtrRow.propDecorators = {
        'ctrRow': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dataItem': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ["click", ["$event"],] },],
        'onMouseEnter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ["mouseenter", ["$event"],] },],
        'onMouseDown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ["mousedown", ["$event"],] },],
    };
    return CtrRow;
}());

//# sourceMappingURL=ctr-row.js.map

/***/ }),

/***/ "../../../../ng2-completer/globals.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MAX_CHARS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MIN_SEARCH_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PAUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TEXT_SEARCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TEXT_NO_RESULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CLEAR_TIMEOUT; });
/* harmony export (immutable) */ __webpack_exports__["a"] = isNil;
var MAX_CHARS = 524288; // the default max length per the html maxlength attribute
var MIN_SEARCH_LENGTH = 3;
var PAUSE = 10;
var TEXT_SEARCHING = "Searching...";
var TEXT_NO_RESULTS = "No results found";
var CLEAR_TIMEOUT = 50;
function isNil(value) {
    return typeof value === "undefined" || value === null;
}
//# sourceMappingURL=globals.js.map

/***/ }),

/***/ "../../../../ng2-completer/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng2_completer_module__ = __webpack_require__("../../../../ng2-completer/ng2-completer.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ng2_completer_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_completer_cmp__ = __webpack_require__("../../../../ng2-completer/components/completer-cmp.js");
/* unused harmony reexport CompleterCmp */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_completer_list_item_cmp__ = __webpack_require__("../../../../ng2-completer/components/completer-list-item-cmp.js");
/* unused harmony reexport CompleterListItemCmp */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_completer_service__ = __webpack_require__("../../../../ng2-completer/services/completer-service.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__services_completer_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_completer_data_factory__ = __webpack_require__("../../../../ng2-completer/services/completer-data-factory.js");
/* unused harmony reexport localDataFactory */
/* unused harmony reexport LocalDataFactoryProvider */
/* unused harmony reexport remoteDataFactory */
/* unused harmony reexport RemoteDataFactoryProvider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_local_data__ = __webpack_require__("../../../../ng2-completer/services/local-data.js");
/* unused harmony reexport LocalData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_remote_data__ = __webpack_require__("../../../../ng2-completer/services/remote-data.js");
/* unused harmony reexport RemoteData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_completer_base_data__ = __webpack_require__("../../../../ng2-completer/services/completer-base-data.js");
/* unused harmony reexport CompleterBaseData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_ctr_completer__ = __webpack_require__("../../../../ng2-completer/directives/ctr-completer.js");
/* unused harmony reexport CtrCompleter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_ctr_dropdown__ = __webpack_require__("../../../../ng2-completer/directives/ctr-dropdown.js");
/* unused harmony reexport CtrDropdown */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_ctr_input__ = __webpack_require__("../../../../ng2-completer/directives/ctr-input.js");
/* unused harmony reexport CtrInput */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_ctr_list__ = __webpack_require__("../../../../ng2-completer/directives/ctr-list.js");
/* unused harmony reexport CtrList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_ctr_row__ = __webpack_require__("../../../../ng2-completer/directives/ctr-row.js");
/* unused harmony reexport CtrRow */













//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng2-completer/ng2-completer.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_completer_cmp__ = __webpack_require__("../../../../ng2-completer/components/completer-cmp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_completer_list_item_cmp__ = __webpack_require__("../../../../ng2-completer/components/completer-list-item-cmp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_completer_service__ = __webpack_require__("../../../../ng2-completer/services/completer-service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_completer_data_factory__ = __webpack_require__("../../../../ng2-completer/services/completer-data-factory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_ctr_completer__ = __webpack_require__("../../../../ng2-completer/directives/ctr-completer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_ctr_dropdown__ = __webpack_require__("../../../../ng2-completer/directives/ctr-dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_ctr_input__ = __webpack_require__("../../../../ng2-completer/directives/ctr-input.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_ctr_list__ = __webpack_require__("../../../../ng2-completer/directives/ctr-list.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_ctr_row__ = __webpack_require__("../../../../ng2-completer/directives/ctr-row.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ng2CompleterModule; });













var Ng2CompleterModule = (function () {
    function Ng2CompleterModule() {
    }
    Ng2CompleterModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_12__angular_common__["c" /* CommonModule */],
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
                        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */]
                    ],
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_4__components_completer_list_item_cmp__["a" /* CompleterListItemCmp */],
                        __WEBPACK_IMPORTED_MODULE_7__directives_ctr_completer__["a" /* CtrCompleter */],
                        __WEBPACK_IMPORTED_MODULE_8__directives_ctr_dropdown__["b" /* CtrDropdown */],
                        __WEBPACK_IMPORTED_MODULE_9__directives_ctr_input__["a" /* CtrInput */],
                        __WEBPACK_IMPORTED_MODULE_10__directives_ctr_list__["a" /* CtrList */],
                        __WEBPACK_IMPORTED_MODULE_11__directives_ctr_row__["a" /* CtrRow */],
                        __WEBPACK_IMPORTED_MODULE_3__components_completer_cmp__["a" /* CompleterCmp */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_3__components_completer_cmp__["a" /* CompleterCmp */],
                        __WEBPACK_IMPORTED_MODULE_4__components_completer_list_item_cmp__["a" /* CompleterListItemCmp */],
                        __WEBPACK_IMPORTED_MODULE_7__directives_ctr_completer__["a" /* CtrCompleter */],
                        __WEBPACK_IMPORTED_MODULE_8__directives_ctr_dropdown__["b" /* CtrDropdown */],
                        __WEBPACK_IMPORTED_MODULE_9__directives_ctr_input__["a" /* CtrInput */],
                        __WEBPACK_IMPORTED_MODULE_10__directives_ctr_list__["a" /* CtrList */],
                        __WEBPACK_IMPORTED_MODULE_11__directives_ctr_row__["a" /* CtrRow */]
                    ],
                    providers: [
                        __WEBPACK_IMPORTED_MODULE_5__services_completer_service__["a" /* CompleterService */],
                        __WEBPACK_IMPORTED_MODULE_6__services_completer_data_factory__["a" /* LocalDataFactoryProvider */],
                        __WEBPACK_IMPORTED_MODULE_6__services_completer_data_factory__["b" /* RemoteDataFactoryProvider */]
                    ]
                },] },
    ];
    /** @nocollapse */
    Ng2CompleterModule.ctorParameters = function () { return []; };
    return Ng2CompleterModule;
}());

//# sourceMappingURL=ng2-completer.module.js.map

/***/ }),

/***/ "../../../../ng2-completer/services/completer-base-data.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__("../../../../ng2-completer/globals.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleterBaseData; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CompleterBaseData = (function (_super) {
    __extends(CompleterBaseData, _super);
    function CompleterBaseData() {
        return _super.call(this) || this;
    }
    CompleterBaseData.prototype.cancel = function () { };
    CompleterBaseData.prototype.searchFields = function (searchFields) {
        this._searchFields = searchFields;
        return this;
    };
    CompleterBaseData.prototype.titleField = function (titleField) {
        this._titleField = titleField;
        return this;
    };
    CompleterBaseData.prototype.descriptionField = function (descriptionField) {
        this._descriptionField = descriptionField;
        return this;
    };
    CompleterBaseData.prototype.imageField = function (imageField) {
        this._imageField = imageField;
        return this;
    };
    CompleterBaseData.prototype.convertToItem = function (data) {
        var image = null;
        var formattedText;
        var formattedDesc = null;
        if (this._titleField) {
            formattedText = this.extractTitle(data);
        }
        else {
            formattedText = data;
        }
        if (typeof formattedText !== "string") {
            formattedText = JSON.stringify(formattedText);
        }
        if (this._descriptionField) {
            formattedDesc = this.extractValue(data, this._descriptionField);
        }
        if (this._imageField) {
            image = this.extractValue(data, this._imageField);
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* isNil */])(formattedText)) {
            return null;
        }
        return {
            title: formattedText,
            description: formattedDesc,
            image: image,
            originalObject: data
        };
    };
    CompleterBaseData.prototype.extractMatches = function (data, term) {
        var _this = this;
        var matches = [];
        var searchFields = this._searchFields ? this._searchFields.split(",") : null;
        if (this._searchFields !== null && this._searchFields !== undefined && term != "") {
            matches = data.filter(function (item) {
                var values = searchFields ? searchFields.map(function (searchField) { return _this.extractValue(item, searchField); }).filter(function (value) { return !!value; }) : [item];
                return values.some(function (value) { return value.toString().toLowerCase().indexOf(term.toString().toLowerCase()) >= 0; });
            });
        }
        else {
            matches = data;
        }
        return matches;
    };
    CompleterBaseData.prototype.extractTitle = function (item) {
        var _this = this;
        // split title fields and run extractValue for each and join with ' '
        return this._titleField.split(",")
            .map(function (field) {
            return _this.extractValue(item, field);
        })
            .reduce(function (acc, titlePart) { return acc ? acc + " " + titlePart : titlePart; });
    };
    CompleterBaseData.prototype.extractValue = function (obj, key) {
        var keys;
        var result;
        if (key) {
            keys = key.split(".");
            result = obj;
            for (var i = 0; i < keys.length; i++) {
                if (result) {
                    result = result[keys[i]];
                }
            }
        }
        else {
            result = obj;
        }
        return result;
    };
    CompleterBaseData.prototype.processResults = function (matches) {
        var i;
        var results = [];
        if (matches && matches.length > 0) {
            for (i = 0; i < matches.length; i++) {
                var item = this.convertToItem(matches[i]);
                if (item) {
                    results.push(item);
                }
            }
        }
        return results;
    };
    return CompleterBaseData;
}(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]));

//# sourceMappingURL=completer-base-data.js.map

/***/ }),

/***/ "../../../../ng2-completer/services/completer-data-factory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_data__ = __webpack_require__("../../../../ng2-completer/services/local-data.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__remote_data__ = __webpack_require__("../../../../ng2-completer/services/remote-data.js");
/* unused harmony export localDataFactory */
/* unused harmony export remoteDataFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalDataFactoryProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RemoteDataFactoryProvider; });



function localDataFactory() {
    return function () {
        return new __WEBPACK_IMPORTED_MODULE_1__local_data__["a" /* LocalData */]();
    };
}
function remoteDataFactory(http) {
    return function () {
        return new __WEBPACK_IMPORTED_MODULE_2__remote_data__["a" /* RemoteData */](http);
    };
}
var LocalDataFactoryProvider = { provide: __WEBPACK_IMPORTED_MODULE_1__local_data__["a" /* LocalData */], useFactory: localDataFactory };
var RemoteDataFactoryProvider = { provide: __WEBPACK_IMPORTED_MODULE_2__remote_data__["a" /* RemoteData */], useFactory: remoteDataFactory, deps: [__WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Http */]] };
//# sourceMappingURL=completer-data-factory.js.map

/***/ }),

/***/ "../../../../ng2-completer/services/completer-service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_data__ = __webpack_require__("../../../../ng2-completer/services/local-data.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__remote_data__ = __webpack_require__("../../../../ng2-completer/services/remote-data.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleterService; });



var CompleterService = (function () {
    function CompleterService(localDataFactory, // Using any instead of () => LocalData because on AoT errors
        remoteDataFactory // Using any instead of () => LocalData because on AoT errors
    ) {
        this.localDataFactory = localDataFactory;
        this.remoteDataFactory = remoteDataFactory; // Using any instead of () => LocalData because on AoT errors
    }
    CompleterService.prototype.local = function (data, searchFields, titleField) {
        if (searchFields === void 0) { searchFields = ""; }
        if (titleField === void 0) { titleField = ""; }
        var localData = this.localDataFactory();
        return localData
            .data(data)
            .searchFields(searchFields)
            .titleField(titleField);
    };
    CompleterService.prototype.remote = function (url, searchFields, titleField) {
        if (searchFields === void 0) { searchFields = ""; }
        if (titleField === void 0) { titleField = ""; }
        var remoteData = this.remoteDataFactory();
        return remoteData
            .remoteUrl(url)
            .searchFields(searchFields)
            .titleField(titleField);
    };
    CompleterService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    CompleterService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_1__local_data__["a" /* LocalData */],] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_2__remote_data__["a" /* RemoteData */],] },] },
    ]; };
    return CompleterService;
}());

//# sourceMappingURL=completer-service.js.map

/***/ }),

/***/ "../../../../ng2-completer/services/local-data.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__completer_base_data__ = __webpack_require__("../../../../ng2-completer/services/completer-base-data.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalData; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var LocalData = (function (_super) {
    __extends(LocalData, _super);
    function LocalData() {
        var _this = _super.call(this) || this;
        _this.dataSourceChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        return _this;
    }
    LocalData.prototype.data = function (data) {
        var _this = this;
        if (data instanceof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]) {
            var data$ = data;
            data$
                .catch(function () { return []; })
                .subscribe(function (res) {
                _this._data = res;
                if (_this.savedTerm) {
                    _this.search(_this.savedTerm);
                }
                _this.dataSourceChange.emit();
            });
        }
        else {
            this._data = data;
        }
        this.dataSourceChange.emit();
        return this;
    };
    LocalData.prototype.search = function (term) {
        if (!this._data) {
            this.savedTerm = term;
        }
        else {
            this.savedTerm = null;
            var matches = this.extractMatches(this._data, term);
            this.next(this.processResults(matches));
        }
    };
    LocalData.prototype.convertToItem = function (data) {
        return _super.prototype.convertToItem.call(this, data);
    };
    LocalData.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    LocalData.ctorParameters = function () { return []; };
    return LocalData;
}(__WEBPACK_IMPORTED_MODULE_3__completer_base_data__["a" /* CompleterBaseData */]));

//# sourceMappingURL=local-data.js.map

/***/ }),

/***/ "../../../../ng2-completer/services/remote-data.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__completer_base_data__ = __webpack_require__("../../../../ng2-completer/services/completer-base-data.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteData; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var RemoteData = (function (_super) {
    __extends(RemoteData, _super);
    function RemoteData(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.dataSourceChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this._urlFormater = null;
        _this._dataField = null;
        return _this;
    }
    RemoteData.prototype.remoteUrl = function (remoteUrl) {
        this._remoteUrl = remoteUrl;
        this.dataSourceChange.emit();
        return this;
    };
    RemoteData.prototype.urlFormater = function (urlFormater) {
        this._urlFormater = urlFormater;
    };
    RemoteData.prototype.dataField = function (dataField) {
        this._dataField = dataField;
    };
    /**
     * @deprecated Please use the requestOptions to pass headers with the search request
     */
    RemoteData.prototype.headers = function (headers) {
        this._headers = headers;
    };
    RemoteData.prototype.requestOptions = function (requestOptions) {
        this._requestOptions = requestOptions;
    };
    RemoteData.prototype.search = function (term) {
        var _this = this;
        this.cancel();
        // let params = {};
        var url = "";
        if (this._urlFormater) {
            url = this._urlFormater(term);
        }
        else {
            url = this._remoteUrl + encodeURIComponent(term);
        }
        /*
         * If requestOptions are provided, they will override anything set in headers.
         *
         * If no requestOptions are provided, a new RequestOptions object will be instantiated,
         * and either the provided headers or a new Headers() object will be sent.
         */
        if (!this._requestOptions) {
            this._requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]();
            this._requestOptions.headers = this._headers || new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        }
        this.remoteSearch = this.http.get(url, this._requestOptions.merge())
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var matches = _this.extractValue(data, _this._dataField);
            return _this.extractMatches(matches, term);
        })
            .catch(function () { return []; })
            .subscribe(function (matches) {
            var results = _this.processResults(matches);
            _this.next(results);
        });
    };
    RemoteData.prototype.cancel = function () {
        if (this.remoteSearch) {
            this.remoteSearch.unsubscribe();
        }
    };
    RemoteData.prototype.convertToItem = function (data) {
        return _super.prototype.convertToItem.call(this, data);
    };
    return RemoteData;
}(__WEBPACK_IMPORTED_MODULE_4__completer_base_data__["a" /* CompleterBaseData */]));

//# sourceMappingURL=remote-data.js.map

/***/ }),

/***/ "../../../../ngx-filter-pipe/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by vadimdez on 28/11/2016.
 */
__export(__webpack_require__("../../../../ngx-filter-pipe/dist/src/ngx-filter.module.js"));
__export(__webpack_require__("../../../../ngx-filter-pipe/dist/src/ngx-filter.pipe.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-filter-pipe/dist/src/ngx-filter.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by vadimdez on 28/11/2016.
 */
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ngx_filter_pipe_1 = __webpack_require__("../../../../ngx-filter-pipe/dist/src/ngx-filter.pipe.js");
var FilterPipeModule = (function () {
    function FilterPipeModule() {
    }
    return FilterPipeModule;
}());
FilterPipeModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [ngx_filter_pipe_1.FilterPipe],
                exports: [ngx_filter_pipe_1.FilterPipe]
            },] },
];
/** @nocollapse */
FilterPipeModule.ctorParameters = function () { return []; };
exports.FilterPipeModule = FilterPipeModule;
//# sourceMappingURL=ngx-filter.module.js.map

/***/ }),

/***/ "../../../../ngx-filter-pipe/dist/src/ngx-filter.pipe.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by vadimdez on 28/06/16.
 */
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.filterByString = function (filter) {
        if (filter) {
            filter = filter.toLowerCase();
        }
        return function (value) {
            return !filter || (value ? ('' + value).toLowerCase().indexOf(filter) !== -1 : false);
        };
    };
    FilterPipe.prototype.filterByBoolean = function (filter) {
        return function (value) {
            return Boolean(value) === filter;
        };
    };
    FilterPipe.prototype.filterByObject = function (filter) {
        var _this = this;
        return function (value) {
            for (var key in filter) {
                if (key === '$or') {
                    if (!_this.filterByOr(filter.$or)(_this.getValue(value))) {
                        return false;
                    }
                    continue;
                }
                var walker = value;
                var found = false;
                do {
                    if (walker.hasOwnProperty(key) || Object.getOwnPropertyDescriptor(walker, key)) {
                        found = true;
                        break;
                    }
                } while (walker = Object.getPrototypeOf(walker));
                if (!found) {
                    return false;
                }
                var val = _this.getValue(value[key]);
                var filterType = typeof filter[key];
                var isMatching = void 0;
                if (filterType === 'boolean') {
                    isMatching = _this.filterByBoolean(filter[key])(val);
                }
                else if (filterType === 'string') {
                    isMatching = _this.filterByString(filter[key])(val);
                }
                else if (filterType === 'object') {
                    isMatching = _this.filterByObject(filter[key])(val);
                }
                else {
                    isMatching = _this.filterDefault(filter[key])(val);
                }
                if (!isMatching) {
                    return false;
                }
            }
            return true;
        };
    };
    /**
     * Filter value by $or
     *
     * @param filter
     * @returns {(value:any)=>boolean}
     */
    FilterPipe.prototype.filterByOr = function (filter) {
        return function (value) {
            var hasMatch = false;
            var length = filter.length;
            var arrayComparison = function (i) {
                return value.indexOf(filter[i]) !== -1;
            };
            var otherComparison = function (i) {
                return value === filter[i];
            };
            var comparison = Array.isArray(value) ? arrayComparison : otherComparison;
            for (var i = 0; i < length; i++) {
                if (comparison(i)) {
                    hasMatch = true;
                    break;
                }
            }
            return hasMatch;
        };
    };
    /**
     * Checks function's value if type is function otherwise same value
     * @param value
     * @returns {any}
     */
    FilterPipe.prototype.getValue = function (value) {
        return typeof value === 'function' ? value() : value;
    };
    /**
     * Defatul filterDefault function
     *
     * @param filter
     * @returns {(value:any)=>boolean}
     */
    FilterPipe.prototype.filterDefault = function (filter) {
        return function (value) {
            return filter === undefined || filter == value;
        };
    };
    FilterPipe.prototype.isNumber = function (value) {
        return !isNaN(parseInt(value, 10)) && isFinite(value);
    };
    FilterPipe.prototype.transform = function (array, filter) {
        var type = typeof filter;
        if (!array) {
            return array;
        }
        if (type === 'boolean') {
            return array.filter(this.filterByBoolean(filter));
        }
        if (type === 'string') {
            if (this.isNumber(filter)) {
                return array.filter(this.filterDefault(filter));
            }
            return array.filter(this.filterByString(filter));
        }
        if (type === 'object') {
            return array.filter(this.filterByObject(filter));
        }
        if (type === 'function') {
            return array.filter(filter);
        }
        return array.filter(this.filterDefault(filter));
    };
    return FilterPipe;
}());
FilterPipe.decorators = [
    { type: core_1.Pipe, args: [{
                name: 'filterBy',
                pure: false
            },] },
    { type: core_1.Injectable },
];
/** @nocollapse */
FilterPipe.ctorParameters = function () { return []; };
exports.FilterPipe = FilterPipe;
//# sourceMappingURL=ngx-filter.pipe.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/do.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var do_1 = __webpack_require__("../../../../rxjs/operator/do.js");
Observable_1.Observable.prototype.do = do_1._do;
Observable_1.Observable.prototype._do = do_1._do;
//# sourceMappingURL=do.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/retryWhen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var retryWhen_1 = __webpack_require__("../../../../rxjs/operator/retryWhen.js");
Observable_1.Observable.prototype.retryWhen = retryWhen_1.retryWhen;
//# sourceMappingURL=retryWhen.js.map

/***/ }),

/***/ "../../../../rxjs/operator/do.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tap_1 = __webpack_require__("../../../../rxjs/operators/tap.js");
/* tslint:enable:max-line-length */
/**
 * Perform a side effect for every emission on the source Observable, but return
 * an Observable that is identical to the source.
 *
 * <span class="informal">Intercepts each emission on the source and runs a
 * function, but returns an output which is identical to the source as long as errors don't occur.</span>
 *
 * <img src="./img/do.png" width="100%">
 *
 * Returns a mirrored Observable of the source Observable, but modified so that
 * the provided Observer is called to perform a side effect for every value,
 * error, and completion emitted by the source. Any errors that are thrown in
 * the aforementioned Observer or handlers are safely sent down the error path
 * of the output Observable.
 *
 * This operator is useful for debugging your Observables for the correct values
 * or performing other side effects.
 *
 * Note: this is different to a `subscribe` on the Observable. If the Observable
 * returned by `do` is not subscribed, the side effects specified by the
 * Observer will never happen. `do` therefore simply spies on existing
 * execution, it does not trigger an execution to happen like `subscribe` does.
 *
 * @example <caption>Map every click to the clientX position of that click, while also logging the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var positions = clicks
 *   .do(ev => console.log(ev))
 *   .map(ev => ev.clientX);
 * positions.subscribe(x => console.log(x));
 *
 * @see {@link map}
 * @see {@link subscribe}
 *
 * @param {Observer|function} [nextOrObserver] A normal Observer object or a
 * callback for `next`.
 * @param {function} [error] Callback for errors in the source.
 * @param {function} [complete] Callback for the completion of the source.
 * @return {Observable} An Observable identical to the source, but runs the
 * specified Observer or callback(s) for each item.
 * @method do
 * @name do
 * @owner Observable
 */
function _do(nextOrObserver, error, complete) {
    return tap_1.tap(nextOrObserver, error, complete)(this);
}
exports._do = _do;
//# sourceMappingURL=do.js.map

/***/ }),

/***/ "../../../../rxjs/operator/retryWhen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var retryWhen_1 = __webpack_require__("../../../../rxjs/operators/retryWhen.js");
/**
 * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
 * calls `error`, this method will emit the Throwable that caused the error to the Observable returned from `notifier`.
 * If that Observable calls `complete` or `error` then this method will call `complete` or `error` on the child
 * subscription. Otherwise this method will resubscribe to the source Observable.
 *
 * <img src="./img/retryWhen.png" width="100%">
 *
 * @param {function(errors: Observable): Observable} notifier - Receives an Observable of notifications with which a
 * user can `complete` or `error`, aborting the retry.
 * @return {Observable} The source Observable modified with retry logic.
 * @method retryWhen
 * @owner Observable
 */
function retryWhen(notifier) {
    return retryWhen_1.retryWhen(notifier)(this);
}
exports.retryWhen = retryWhen;
//# sourceMappingURL=retryWhen.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map