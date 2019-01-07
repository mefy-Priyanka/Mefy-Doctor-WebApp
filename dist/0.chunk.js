webpackJsonp([0],{

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

/***/ })

});
//# sourceMappingURL=0.chunk.js.map