(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{172:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ReactComponent",(function(){return SvgChevron}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{fill:"rgba(12, 12, 13, .8)",d:"M8 12a1 1 0 01-.707-.293l-5-5a1 1 0 011.414-1.414L8 9.586l4.293-4.293a1 1 0 011.414 1.414l-5 5A1 1 0 018 12z"}),SvgChevron=function SvgChevron(props){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",_extends({width:16,height:16},props),_ref)};__webpack_exports__.default=__webpack_require__.p+"static/media/chevron.0a25d57b.svg"},173:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_circleci_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(279),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),react_transition_group__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(281);__webpack_require__(679);__webpack_exports__.a=function Survey(_ref){var surveyURL=_ref.surveyURL,_ref$surveyComplete=_ref.surveyComplete,surveyComplete=void 0!==_ref$surveyComplete&&_ref$surveyComplete,_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),_useState2=Object(_home_circleci_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),inProp=_useState2[0],setInProp=_useState2[1],surveyCompleteElement=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"survey-complete-msg","data-testid":"survey-complete-msg"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{className:"emoji"},"✅ 👍 💖"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,"Thank you for your input."),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{className:"small"},"This survey will close automatically.")),iframe=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe",{className:"survey-iframe",src:surveyURL,frameBorder:"0",onLoad:function onLoad(){return setInProp(!0)},width:"320",height:"360","data-testid":"survey-iframe"});return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_2__.a,{in:inProp,timeout:200,classNames:"survey-inner"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section",{className:"survey-component","data-testid":"survey-component","aria-hidden":"true"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_2__.a,{in:inProp,timeout:100,classNames:"button-inner"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"survey-control",onClick:function onClick(){return setInProp(!inProp)}})),surveyComplete?surveyCompleteElement:iframe))}},277:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.a=function AppErrorDialog(_ref){_ref.error;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"bg-grey-20 flex items-center flex-col justify-center h-screen"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"text-center max-w-lg"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",{className:"text-grey-600 font-header text-lg font-bold mb-3","data-testid":"error-loading-app"},"General application error"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"text-grey-400"},"Something went wrong. Please try again later.")))}},278:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.a=function LinkExternal(_ref){var className=_ref.className,href=_ref.href,children=_ref.children;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",Object.assign({"data-testid":"link-external",target:"_blank",rel:"noopener noreferrer"},{className:className},{href:href}),children)}},280:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),react_default=__webpack_require__.n(react);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var spinner_ref=react_default.a.createElement("linearGradient",{id:"spinner_svg__a",x1:"93.093%",x2:"68.513%",y1:"52.773%",y2:"119.326%"},react_default.a.createElement("stop",{offset:0,stopColor:"#0a84ff",stopOpacity:0}),react_default.a.createElement("stop",{offset:.694,stopColor:"#0a84ff"}),react_default.a.createElement("stop",{offset:1,stopColor:"#0a84ff"}),react_default.a.createElement("stop",{offset:1,stopColor:"#2484c6",stopOpacity:.005}),react_default.a.createElement("stop",{offset:1,stopColor:"#2484c6",stopOpacity:0})),_ref2=react_default.a.createElement("mask",{id:"spinner_svg__b",fill:"#fff"},react_default.a.createElement("path",{d:"M0 0h48v60H0z",fillRule:"evenodd"})),_ref3=react_default.a.createElement("g",{fill:"none",fillRule:"evenodd"},react_default.a.createElement("path",{d:"M41.8 73.8c-19.9 0-36-16.1-36-36 0-19.7 15.8-35.6 35.3-36h.7c2.8.4 5 2.7 5 5.5s-2.2 5.2-5 5.4c-13.8.1-25 11.3-25 25.1s11.2 25 25 25 25-11.2 25-25h11c0 19.9-16.1 36-36 36z",fill:"url(#spinner_svg__a)",transform:"translate(-5 -1)"}),react_default.a.createElement("path",{d:"M41.8 73.8c-19.9 0-36-16.1-36-36 0-19.7 15.8-35.6 35.3-36h.7c2.8.4 5 2.7 5 5.5s-2.2 5.2-5 5.4c-13.8.1-25 11.3-25 25.1s11.2 25 25 25 25-11.2 25-25h11c0 19.9-16.1 36-36 36z",fill:"#0a84ff",mask:"url(#spinner_svg__b)",transform:"translate(-5 -1)"})),spinner_SvgSpinner=function SvgSpinner(props){return react_default.a.createElement("svg",_extends({height:73,width:73},props),spinner_ref,_ref2,_ref3)};__webpack_require__.p,__webpack_exports__.a=function LoadingSpinner(_ref){var className=_ref.className;return react_default.a.createElement("div",Object.assign({className:className},{"data-testid":"loading-spinner"}),react_default.a.createElement(spinner_SvgSpinner,{className:"spinner-image w-10 h-10 animate-rotate animate-timing-linear animate-duration-800 animate-repeat-infinite",role:"img","aria-label":"Loading..."}))}},283:function(module,exports,__webpack_require__){__webpack_require__(284),__webpack_require__(430),module.exports=__webpack_require__(431)},348:function(module,exports){},431:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(26);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(674)],module)}.call(this,__webpack_require__(78)(module))},674:function(module,exports,__webpack_require__){var map={"./components/AppErrorDialog/index.stories.tsx":675,"./components/LinkExternal/index.stories.tsx":676,"./components/LoadingSpinner/index.stories.tsx":677,"./components/Survey/index.stories.tsx":678};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=674},675:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(26),_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(277);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("components/AppErrorDialog",module).add("basic",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.a,{error:new Error("Uh oh!")})}))}.call(this,__webpack_require__(78)(module))},676:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(26),_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(278);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("components/LinkExternal",module).add("basic",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.a,{href:"https://mozilla.org"},"Keep the internet open and accessible to all.")}))}.call(this,__webpack_require__(78)(module))},677:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(26),_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(280);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("components/LoadingSpinner",module).add("basic",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.a,null)}))}.call(this,__webpack_require__(78)(module))},678:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(26),_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(173),surveyURL="https://www.surveygizmo.com/s3/5541940/pizza";Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("components/Survey",module).add("default",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.a,{surveyURL:surveyURL})})).add("complete",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({surveyURL:surveyURL},{surveyComplete:!0}))}))}.call(this,__webpack_require__(78)(module))},679:function(module,exports,__webpack_require__){var content=__webpack_require__(680);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(683)(content,options);content.locals&&(module.exports=content.locals)},680:function(module,exports,__webpack_require__){var escape=__webpack_require__(681);(module.exports=__webpack_require__(682)(!1)).push([module.i,".survey-component{align-items:flex-end;background:#f9f9fa;border-radius:4px 4px 0 0;bottom:-360px;box-shadow:0 12px 18px 2px rgba(34,0,51,0.04),0 6px 22px 4px rgba(7,48,114,0.12),0 6px 10px -4px rgba(14,13,26,0.12);display:flex;flex-direction:column;height:400px;overflow:hidden;position:fixed;right:10%;transition:bottom 250ms ease-out;width:320px}.survey-control{align-items:center;background:50% no-repeat url("+escape(__webpack_require__(172))+");background-color:transparent;border:0;cursor:pointer;display:flex;height:40px;justify-content:center;margin:0;padding:0;width:40px}.survey-control:focus{box-shadow:none}.survey-control:hover{background:50% no-repeat url("+escape(__webpack_require__(172))+");background-color:rgba(12,12,13,0.05)}.survey-control:active{background:50% no-repeat url("+escape(__webpack_require__(172))+");background-color:rgba(12,12,13,0.1)}.survey-complete-msg{align-items:center;background:white;display:flex;flex-direction:column;height:360px;justify-content:center;width:100%}.survey-complete-msg p{margin:5px}.survey-complete-msg .emoji{font-size:2.4em;margin:0}.survey-complete-msg .small{clear:both;color:#737373;font-size:14px;line-height:1.5;margin:6px 0 24px}.survey-complete-msg,.survey-iframe{box-shadow:0 -1px 0 rgba(12,12,13,0.1)}.survey-inner-enter{bottom:-360px}.survey-inner-enter-active{bottom:0;transition:bottom 250ms ease-out;transition-duration:250ms}.survey-inner-enter-done{bottom:0}.survey-inner-exit{bottom:0}.survey-inner-exit-active{bottom:-360px;transition:bottom 250ms ease-out;transition-duration:250ms}.button-inner-enter,.button-inner-exit-done{transform:rotate(180deg)}.button-inner-exit,.button-inner-enter-done,.button-inner-enter-active{transform:rotate(0deg)}\n",""])}},[[283,1,2]]]);
//# sourceMappingURL=main.7478c6527b7bf697f4db.bundle.js.map