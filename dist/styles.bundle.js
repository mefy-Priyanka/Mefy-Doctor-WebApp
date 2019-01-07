webpackJsonp([6],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* registration modal starts */\n\n\nbody {\n    overflow-x: hidden;\n}\n\n.regbackground {\n    background: #a465f4;\n    background: linear-gradient(to right, #5a78fa, #a465f4);\n    height: 400px;\n}\n\n.regbackground h3 {\n    text-align: center;\n    font-size: 36px;\n    font-family: 'Roboto', sans-serif;\n    color: #fff;\n}\n\n.regbackground p {\n    text-align: left;\n    color: #fff;\n    font-family: 'Roboto', sans-serif;\n    font-size: 20px;\n    font-weight: 300;\n    margin: 10% 7% 0 10%;\n}\n\n/*img#logopng {\n    height: 70px;\n    margin: 13% 0% 11% 23%;\n}*/\n/* reg modal ends */\n/* form css start */\n\n#msform {\n    width: 93%;\n    margin-top: 11%;\n    /* margin: 50px auto; */\n    text-align: center;\n    /* position: relative; */\n}\n\n#msform fieldset {\n    background: white;\n    border: 0 none;\n    width: 84% !important;\n    margin-left: 19px;\n    margin: 0 auto;\n}\n/*Hide all except first fieldset*/\n\n#msform fieldset:not(:first-of-type) {\n    display: none;\n}\n/*inputs*/\n\n#msform textarea {\n    /* padding: 15px; */\n    border: none;\n    border-bottom: 1px solid #ccc;\n\n    margin-bottom: 10px;\n    width: 100%;\n    text-indent: 9%;\n    box-sizing: content-box;\n    font-family: 'Roboto', sans-serif;\n    color: #2C3E50;\n    font-size: 14px;\n    outline: none;\n    margin-left: 4px;\n    margin-left: 24px;\n}\n/*buttons*/\ninput.ng2-tag-input__text-input:-ms-input-placeholder {\n    color: #615d5d;\n    font-family: lato;\n}\ninput.ng2-tag-input__text-input::placeholder {\n    color: #615d5d;\n    font-family: lato;\n}\n#msform .action-button {\n    width: 100px;\n    background: #a465f4;\n    background: linear-gradient(to right, #5a78fa, #a465f4);\n    font-weight: bold;\n    color: white;\n    border: 0 none;\n    line-height: 26px;\n    \n    border-radius: 1px;\n    font-size: 13px;\n    cursor: pointer;\n    padding: 7px 10px 7px 0px;\n    border-radius: 4px;\n      margin-left: 23px;\n}\n#msform .action-button5 {\n    width: 100px;\n    background: #a465f4;\n    background: linear-gradient(to right, #5a78fa, #a465f4);\n    line-height: 25px;\n    font-weight: bold;\n    color: white;\n    border: 0 none;\n    padding: 0 1em;\n    border-radius: 1px;\n    font-size: 13px;\n    cursor: pointer;\n    padding: 7px 10px 7px 0px;\n    border-radius: 4px;\n    margin-left: 24px;\n}\n#msform .action-button8 {\n    /* width: 100px; */\n    background: #a465f4;\n    background: linear-gradient(to right, #5a78fa, #a465f4);\n    line-height: 45px;\n    font-weight: bold;\n    color: white;\n    border: 0 none;\n    padding: 0 1em;\n    border-radius: 1px;\n    font-size: 13px;\n    cursor: pointer;\n    /* padding: 13px 10px 13px 0px; */\n    border-radius: 4px;\n    margin-left: 24px;\n}\n#msform .action-button7{\n    position: absolute;\n    right: 59px;\n    bottom: 161px;\n    /* width: 68px;\n    height: 29px; */\n    background: transparent;\n    outline: none;\n    /* text-decoration: underline; */\n    border: navajowhite;\n    color: #a465f4;\n    /* border: 1px solid #9E9E9E; */\n    /* border-radius: 1px; */\n    font-size: 13px;\n    cursor: pointer;\n    /* padding: 13px 10px 13px 0px; */\n    /* border-radius: 4px; */\n    /* margin-left: 24px; */\n}\n#msform .action-button7:hover{\n    /* border:none;\n    background: #9E9E9E;\n    color: #fff; */\n  text-decoration: underline;\n}\n\n#msform .action-button4 {\n    width: 100px;\n    background: #a465f4;\n    background: linear-gradient(to right, #5a78fa, #a465f4);\n    font-weight: bold;\n    color: white;\n    border: 0 none;\n    border-radius: 1px;\n    cursor: pointer;\n    padding: 7px 10px 7px 0px;\n    border-radius: 4px;\n      margin-left: 23px;\n}\n\n\n#msform .action-button1 {\n    width: 100px;\n    background: transparent;\n    font-weight: bold;\n    color: blue;\n    border: 0 none;\n    border-radius: 1px;\n    cursor: pointer;\n    padding: 11px 00;\n    margin: 10px 50px;\n    border-radius: 4px;\n    margin-right: 24px;\n}\n/*headings*/\n\n.fs-title {\n    font-size: 19px;\n    color: #233d7d;\n    text-align: left;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 400;\n    margin: 2em 0 1em 2em;\n}\n\n.fs-title1 {\n    font-size: 20px;\n    color: #233d7d;\n    text-align: center;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 500;\n    margin-bottom: 10px;\n}\n\n.fs-subtitle {\n    font-weight: normal;\n    font-size: 13px;\n    color: #666;\n    margin-bottom: 20px;\n}\n\n.fs-subtitle1 {\n    font-weight: normal;\n    font-size: 19px;\n    color: #2d3c7d;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 400;\n\n    margin-bottom: 20px;\n}\n\nh4.subtlte3 {\n    color: #2356a9;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 300;\n    line-height: 26px;\n    font-size: 15px;\n}\n/*progressbar*/\n\n#progressbar {\n    margin-bottom: 30px;\n    overflow: hidden;\n    /*CSS counters to number the steps*/\n    counter-reset: step;\n   \n}\n\n#progressbar li {\n    list-style-type: none;\n    color: white;\n    text-transform: uppercase;\n    font-size: 9px;\n    width: 33.33%;\n    float: left;\n    position: relative;\n}\n\n#progressbar li:before {\n        content: counter(step);\ncounter-increment: step;\nwidth: 30px;\nheight: 30px;\nline-height: 30px;\ndisplay: block;\nfont-size: 10px;\ncolor: black;\nbackground: white;\nborder-radius: 50%;\nbackground: beige;\nborder: 1px solid gray;\nz-index: 1;\n}\n/*progressbar connectors*/\n\n#progressbar li:after {\n  content: '';\nheight: 2px;\nbackground: #c1bebe;\nposition: absolute;\nleft: -100%;\ntop: 50%;\nz-index: -1;\nwidth: 100%;\n}\n\n#progressbar li:first-child:after {\n    /*connector not needed before the first step*/\n    content: none;\n}\n/*marking active/completed steps green*/\n/*The number of the step and the connector before it = green*/\n\n#progressbar li.active:before,\n#progressbar li.active:after {\n    background: #a465f4;\n    color: white;\n}\n\n.displaycell {\n    display: table-cell !important;\n    padding-bottom: 1em;\n}\n\ninput.dob {\n    width: 67% !important;\n}\n\ninput[type=\"text\"]:-ms-input-placeholder {\n    color: #5c77fa;\n}\n\ninput[type=\"text\"]::placeholder {\n    color: #5c77fa;\n}\n\nli.genderheight {\n    vertical-align: top;\n}\n\n.gendermargin {\n    padding: 0 !important;\n    margin-top: 13px;\n}\n/* form css end */\n\nspan.aligngender {\n    margin-right: 48%;\n    color: #5c77fa;\n}\n\nspan.dob_color {\n    color: #5c77fa;\n}\n\nspan.genderradio {\n    color: #9E9E9E;\n}\nspan.gender {\nfont-size: 17px;\nopacity: 0.7;\n/* text-align: left; */\n}\n\n#msform .action-button2 {\n    width: 100px;\n    background: transparent;\n    font-weight: bold;\n    color: blue;\n    border: 2px solid #7b70f7;\n    border-radius: 1px;\n    cursor: pointer;\n    padding: 7px 10px 7px 0px;\n    /* margin: 10px 50px; */\n    /*margin: 35px 77px 0 0px;*/\n    border-radius: 4px;\n    margin-right: 24px;\n}\n.verify {\nbackground-color:red; /* Green */\nborder: none;\ncolor: white;\npadding: 15px 32px;\ntext-align: center;\ntext-decoration: none;\ndisplay: inline-block;\nfont-size: 16px;\n}\n.resend1 {\nbackground-color:red; /* Green */\nborder: none;\ncolor: white;\npadding: 15px 32px;\ntext-align: center;\ntext-decoration: none;\ndisplay: inline-block;\nfont-size: 16px;\n}\n/* materialise css start */\n\n.material-icons {\n    font-family: 'Material Icons';\n    font-weight: normal;\n    font-style: normal;\n    font-size: 24px;\n    line-height: 1;\n    letter-spacing: normal;\n    text-transform: none;\n    display: inline-block;\n    white-space: nowrap;\n    word-wrap: normal;\n    direction: ltr;\n    -webkit-font-feature-settings: 'liga';\n    -webkit-font-smoothing: antialiased;\n}\n\n/* ul:not(.browser-default) {\n/* \nul:not(.browser-default) {\n    padding-left: 34px !important;\n    list-style-type: none;\n} */\n\n.paddingleft {\n    padding-left: 0 !important;\n}\n.genallgn {\nmargin: 17px 0 17px 0;\n}\n#partitioned {\npadding-left: 15px;\nletter-spacing: 42px;\nborder: 0;\nbackground-image: linear-gradient(to left, black 70%, rgba(255, 255, 255, 0) 0%);\nbackground-position: bottom;\nbackground-size: 50px 1px;\nbackground-repeat: repeat-x;\nbackground-position-x: 35px;\nwidth: 220px;\n}\n.input-field .prefix {\n    position: absolute;\n    width: 3rem;\n    font-size: 2rem;\n    transition: color .2s;\n}\n.image_centerlogo{\n    margin: 0 auto;\n    padding-top: 12em;\n    width: 140px;\n}\n/* materialise end css */\n[type=\"radio\"]:not(:checked)+label, [type=\"radio\"]:checked+label {\npadding-left: 27px !important;\nheight: 23px !important;\nfont-size: 13px !important;\n}\ninput#email {\n\nmargin-right: 38px;\n}\ninput#icon_telephone {\n\nmargin-right: 38px;\n}\ninput#icon_prefix {\n\nmargin-right: 20px;\n}\ndiv#file_btn {\n    /* background: red; */\n    background: linear-gradient(to right, #5a78fa, #a465f4);\n    font-weight: bold;\n    color: white;\n    border: 0 none;\n    border-radius: 1px;\n    cursor: pointer;\n    /* padding: 13px 10px 13px 0px; */\n    border-radius: 4px;\n}\n\n/*progressbar*/\n\n#progressbar1 {\n    margin-bottom: 30px;\n    overflow: hidden;\n    /*CSS counters to number the steps*/\n    counter-reset: step;\n   \n}\n\n#progressbar1 li {\n    list-style-type: none;\n    color: white;\n    text-transform: uppercase;\n    font-size: 9px;\n    width: 23.33%;\n    float: left;\n    position: relative;\n}\n\n#progressbar1 li:before {\n        content: counter(step);\ncounter-increment: step;\nwidth: 30px;\nheight: 30px;\nline-height: 30px;\ndisplay: block;\nfont-size: 10px;\ncolor: black;\nbackground: white;\nborder-radius: 50%;\nbackground: beige;\nborder: 1px solid gray;\nz-index: 1;\n}\n/*progressbar1 connectors*/\n\n#progressbar1 li:after {\n  content: '';\nheight: 2px;\nbackground: #c1bebe;\nposition: absolute;\nleft: -100%;\ntop: 50%;\nz-index: -1;\nwidth: 100%;\n}\n\n#progressbar1 li:first-child:after {\n    /*connector not needed before the first step*/\n    content: none;\n}\n/*marking active/completed steps green*/\n/*The number of the step and the connector before it = green*/\n\n#progressbar1 li.active:before,\n#progressbar1 li.active:after {\n    background: #a465f4;\n    color: white;\n}\n\n.abc {\n    background: #a465f4;\n    background: linear-gradient(to right, #5a78fa, #a465f4);\n    height: 629px;\n}\ninput.ng2-tag-input__text-input:-ms-input-placeholder {\n    color: #444 !important;\n}\ninput.ng2-tag-input__text-input::placeholder {\n    color: #444 !important;\n}\nbutton.spclbtn {\n    position: absolute;\n    right: 0;\n    top: 0;\n    height: 36px;\n    width: 36px;\n    color: white;\n    font-size: 27px;\n    border: none;\n    border-radius: 50%;\n    background: #a465f4;\n    outline: none;\n}\n.closebtna {\n    cursor: pointer;\n    font-size: 21px;\n    vertical-align: middle;\n}\n.btnplus {\n    float: left;\n    margin-left:0em;\n    width: auto;\n    display: inline-block;\n    margin-bottom: 2px;\n    background: #f1f1f1;\n    padding-bottom: 2px;\n    padding: 7px 18px 7px 18px;\n    border-radius: 50px;\n}\n\n.posi{\n    position: relative;\n}\ninput.file-path.validate.up_image {     \n       border: 1px solid black;     \n          width: 96px;    \n              border-radius: 50%;    \n                  height: 96px;  \n                  }  \n                  .btngenerate {\n                    margin-bottom: 3em;\n                \n                } \n                img.placeimg {\n                    border-radius: 50%;\n                    height: 142px;\n                    width: 142px;\n                }\n                   .file-field .btn, .file-field .btn-large{   \n                            float: none; \n                           }\n                           .overflowclass {\n                            height: 400px;\n                            overflow-y: scroll;\n                        }\n                     /* selectprofilecss */\n                     .individualbackground {\n                        background: white;\n                        padding-top:5em;\n                        height: 400px;\n                    }\n                    .individualbackground p {\n                        font-size: 20px;\n                    font-weight: 500;\n                    color: #41e992;\n                        font-family: 'Roboto', sans-serif;\n                        text-align: center;\n                    }\n                    .doctorbackground p {\n                        font-size: 20px;\n                    font-weight: 500;\n                    color: white;\n                        font-family: 'Roboto', sans-serif;\n                        text-align: center;\n                    }\n                \n                    .doctorbackground {\n                        background: #41e992;\n                        padding-top:5em;\n                        height: 400px;\n                        \n                    }\n                    .individualbackground button a{                   \n                        color: white;\n                    }\n                    .doctorbackground button a{                   \n                        color: #41e992;\n                    }\n                    button.sign_up {\n                    color: white;\n                    border-radius: 50px;\n                    outline: none;\n                    border: none;\n                    padding: 10px 17px 10px 17px;\n                    font-size: 17px;\n                    font-weight: 500;\n                    font-family: 'Roboto', sans-serif;\n                    background: #41e992;\n                }\n                button.sign_up1 {\n                    color: #41e992;\n                    border-radius: 50px;\n                    outline: none;\n                    border: none;\n                    padding: 10px 17px 10px 17px;\n                    font-size: 17px;\n                    font-weight: 500;\n                    font-family: 'Roboto', sans-serif;\n                    background: white;\n                }\n                p_top{\n                    padding-top:1em;\n                }\n                .error {\n                    color: #FF0000;\n                    text-shadow: 2px 2px #efe0e0;\n                    color: red;\n                    font-size: 19px;\n                }\n                    .padding {\n                        padding: 0px;\n                    }\n                    @media only screen and (min-width: 320px) and (max-width:1024px){\n                    \n            #msform fieldset {\n                overflow-x:hidden;\n                \n            }\n               \n}\n                     /* selectprofilecss */\n                     select.drpdwn1 {\n                        opacity: 1;\n                        width: 93%;\n                        /* background: grey; */\n                        position: absolute;\n                        left: 38px;\n                        height: 29px;\n                        top: 4px;\n                        pointer-events: auto;\n                        border-bottom: 1px solid #9e9e9e;\n                    }\n\n                    svg#rsvg {\n                        height: 20px;\n                        width: 20px;\n                    }\n\n\n                    .bs-datepicker-container {\n                        padding: 0;\n                    }\n                    .bs-datepicker-body {\n                        border-top: 1px solid #e9edf0;\n                    }\n                    .theme-green .bs-datepicker-body table td.week span {\n                        color: #a9a4a4;\n                        font-size: 13px;\n                        font-weight: 800;\n                        font-family: 'Roboto', sans-serif;\n                    }\n                    .bs-datepicker-body table td {\n                        color: #000;\n                        font-family: 'Roboto', sans-serif;\n                        font-weight: bold;\n                        font-size: 6px !important;\n                    }\n                    .bs-datepicker-body table th {\n                        font-size: 14px;\n                        font-family: 'Roboto', sans-serif;\n                        color: #999;\n                        font-weight: 600;\n                        \n                    }\n\n                    .theme-green .bs-datepicker-head {\n                        background-color: #ffffff !important;\n                    }\n                    .bs-datepicker-head button {\n                        color: #000 !important;\n                        font-weight: 600 !important;\n                        font-family: 'Roboto', sans-serif !important;\n                    }\n                    .theme-green .bs-datepicker-body table td span.selected {\n                        background: linear-gradient(to right, #7b74ff, #b16cfd);\n                    }\n                    input[type=\"radio\"]{\n                        -webkit-appearance: radio;\n                    }\n\n\n                    input.form-control.text-center.bs-timepicker-field {\n                        margin-bottom: 0px!important;\n                        border-bottom: 1px solid rgba(90, 146, 240, 0.39);\n                        color: rgb(132, 132, 132);\n                        font-family: 'Lato', sans-serif;\n                        font-weight: 400;\n                        font-size: 14px;\n                    }\n                    input.form-control.text-center.bs-timepicker-field:-ms-input-placeholder {\n                        color: rgb(132, 132, 132);\n                        font-family: 'Lato', sans-serif;\n                        font-weight: 400;\n                        font-size: 14px;\n                    }\n                    input.form-control.text-center.bs-timepicker-field::placeholder {\n                        color: rgb(132, 132, 132);\n                        font-family: 'Lato', sans-serif;\n                        font-weight: 400;\n                        font-size: 14px;\n                    }\n                    timepicker button {\n                        background-color: transparent !important;\n                        color: #9c9898 !important;\n                        font-weight: 500 !important;\n                        box-shadow: none !important;\n                        outline:none !important; \n                    }\n                    p.errormessage {\n                        color: red;\n                        margin: 0;\n                        font-weight: 500;\n                        font-style: italic;\n                        position: absolute;\n                        left: 30px;\n                    }\n\n                    .ng2-tag-input {\n                        border-bottom: none !important;\n                    }\n                    input.ng2-tag-input__text-input.ng-pristine.ng-valid {\n                        width: 327px;\n                    }\n/* loader */\n.sk-circle {\n    margin: 0 auto;\n    width: 40px;\n    height: 40px;\n    position: relative;\n  }\n  .sk-circle .sk-child {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n  }\n  .sk-circle .sk-child:before {\n    content: '';\n    display: block;\n    margin: 0 auto;\n    width: 15%;\n    height: 15%;\n    background-color: #fff;\n    border-radius: 100%;\n    animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n  }\n  .sk-circle .sk-circle2 {\n    transform: rotate(30deg); }\n  .sk-circle .sk-circle3 {\n    transform: rotate(60deg); }\n  .sk-circle .sk-circle4 {\n    transform: rotate(90deg); }\n  .sk-circle .sk-circle5 {\n    transform: rotate(120deg); }\n  .sk-circle .sk-circle6 {\n    transform: rotate(150deg); }\n  .sk-circle .sk-circle7 {\n    transform: rotate(180deg); }\n  .sk-circle .sk-circle8 {\n    transform: rotate(210deg); }\n  .sk-circle .sk-circle9 {\n    transform: rotate(240deg); }\n  .sk-circle .sk-circle10 {\n    transform: rotate(270deg); }\n  .sk-circle .sk-circle11 {\n    transform: rotate(300deg); }\n  .sk-circle .sk-circle12 {\n    transform: rotate(330deg); }\n  .sk-circle .sk-circle2:before {\n    animation-delay: -1.1s; }\n  .sk-circle .sk-circle3:before {\n    animation-delay: -1s; }\n  .sk-circle .sk-circle4:before {\n    animation-delay: -0.9s; }\n  .sk-circle .sk-circle5:before {\n    animation-delay: -0.8s; }\n  .sk-circle .sk-circle6:before {\n    animation-delay: -0.7s; }\n  .sk-circle .sk-circle7:before {\n    animation-delay: -0.6s; }\n  .sk-circle .sk-circle8:before {\n    animation-delay: -0.5s; }\n  .sk-circle .sk-circle9:before {\n    animation-delay: -0.4s; }\n  .sk-circle .sk-circle10:before {\n    animation-delay: -0.3s; }\n  .sk-circle .sk-circle11:before {\n    animation-delay: -0.2s; }\n  .sk-circle .sk-circle12:before {\n    animation-delay: -0.1s; }\n  \n  @keyframes sk-circleBounceDelay {\n    0%, 80%, 100% {\n      transform: scale(0);\n    } 40% {\n      transform: scale(1);\n    }\n  }\n  .loading {\n    position: fixed;\n    z-index: 999;\n    height: 2em;\n    width: 2em;\n    overflow: show;\n    margin: auto;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n  \n  /* Transparent Overlay */\n  .loading:before {\n    content: '';\n    display: block;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,0.3);\n  }\n  \n  /* loader */\n\n  h5.ng-star-inserted {\n    font-size: 15px;\n}\n/**********BUTTON*************/\nbutton.plus:hover{\n    background: linear-gradient(to bottom, #5451e8, rgba(56, 145, 239, 0.82));\n}\nbutton.plus {\n    border-radius: 50%;\n    outline: none;\n    cursor: pointer;\n    border: none;\n    font-size: 20px;\n    height: 40px;\n    width: 40px;\n    color: #fff;\n    background: linear-gradient(to bottom, #20de9e, #08b9b1);\n}\n/********** END OF BUTTON*************/\n\n/************************************** modal css ***************************/\nsection.del_modal {\n    height: 100vh;\n    text-align: center;\n}\nbutton.cance_l:hover {\n    background: rgba(158, 158, 158, 0.32);\n}\nbutton.dele_te:hover {\n    background: rgba(216, 30, 46, 0.28);\n}\np.dele_test2 {\n    padding-left: 6px;\n    font-family: 'Lato', sans-serif;\n    color: rgba(0, 0, 0, 0.71);\n    font-weight: 500;\n    font-size: 24px;\n    /* margin-bottom: 1em; */\n    /* line-height: 8px; */\n}\np.dele_test {\n    padding-left: 6px;\n    font-family: 'Lato', sans-serif;\n    color: rgba(0, 0, 0, 0.78);\n    font-weight: 500;\n    font-size: 14px;\n}\nsvg#del_svg {\n    height: 45px;\n    width: 40px;\n    vertical-align: middle;\n    fill: #d80027;\n}\ndiv#sidenavdel .modal-body {\n    padding:0em 1em;\n\n}\ndiv#sidenavdel .modal-content {\n    padding: 0;\n    box-shadow: none;\n    border: none;\n}\ndiv#sidenavdel button.close {\n    margin: 8px 8px 0 0;\n    color: rgba(0, 0, 0, 0.4); \n    opacity: 1;\n}\ndiv#sidenavdel .modal-content h4 {\n    font-family: 'Lato', sans-serif;\n    font-size: 23px;\n    text-align: center;\n}\ndiv#sidenavdel .modal-footer {\n    border:none;\n    border-radius:5px;\n    padding-bottom: 4em;\n    /* margin-bottom: 10px; */\n    background-color: #ffffff;\n    text-align:center;\n}\n.text_modal {\n    text-align: center;\n    margin: 0 auto;\n    margin-bottom: 26px;\n}\n.modal-content {\n    /* Bootstrap sets the size of the modal in the modal-dialog class, we need to inherit it */\n    width:inherit;\n    height:inherit;\n    /* To center horizontally */\n    margin: 0 auto;\n}\n.modal {\n    display: none;\n    position: fixed;\n    left: 0;\n    right: 0;\n    background-color: transparent;\n    padding: 0;\n    max-height: 70%;\n    width: 55%;\n    margin: auto;\n    overflow-y: auto;\n    border-radius: 5px;\n    will-change: top, opacity;\n    box-shadow: none;\n}\ndiv#sidenavdel .modal-header {\n    border: none;\n    padding:0;\n    /* background: linear-gradient(to right,rgba(86, 127, 251, 1), rgba(182, 108, 245, 1)); */\n    border-radius: 5px 5px 0 0;\n    font-family: 'Lato', sans-serif;\n    color: #fff;\n}\nbutton.dele_te {\n    outline: none;\n    border: 1px solid#e02748;\n    font-family: 'Lato', sans-serif;\n    font-weight: 500;\n    cursor: pointer;\n    border-radius: 50px;\n    color: #e02748;\n    background: transparent;\n    height: 30px;\n    width: 69px;\n}\nbutton.btn_delde {\n    margin: 10em 0;\n    height: 42px;\n    width: 120px;\n    background: #4f5ae8;\n    border: none;\n    color: #fff;\n}\nbutton.cance_l {\n    border: 1px solid rgb(123, 122, 122);\n    cursor: pointer;\n    color: #676464;\n    font-family: 'Lato', sans-serif;\n    height: 30px;\n    font-weight: 500;\n    background: transparent;\n    margin-right: 14px;\n    width: 69px;\n    border-radius: 50px;\n}\nfooter ul li {\n    outline: none;\n}\n\n\n                   \ninput.ng2-tag-input__text-input.ng-pristine.ng-valid {\n    width: 65%;\n    border: 1px solid #f1ecf9;\n    border-radius: 50px;\n    padding:0 4px;\n    text-align: center;\n    height: 34px;\n    margin: 0px auto;\n    background: #eae6e6;\n    margin-top: 0px !important;\n}\ninput.ng2-tag-input__text-input.ng-valid.ng-dirty.ng-touched\n{\n    width: 65%;\n    border: 1px solid #f1ecf9;\n    border-radius: 50px;\n    padding-left: 15px;\n    text-align: center;\n    height: 34px;\n    margin: 0px auto;\n    background: #eae6e6;\n}\ntag {\n    background: #c079e8 !important;\n    color: #ffffff !important;\n    text-align: center !important;\n    padding: 0 15px !important;\n    box-shadow: 0 2px 3px 1px #d4d1d1;\n    margin-bottom: 8px !important;\n   \n}\ninput.ng2-tag-input__text-input {\n    border: 1px solid white !important;\n    box-shadow:none !important;\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[3]);
//# sourceMappingURL=styles.bundle.js.map