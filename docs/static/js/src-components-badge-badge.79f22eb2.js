(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./src/components/Badge/Badge.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),c=n("./node_modules/docz/dist/index.m.js"),s=(n("./src/theme.js"),n("./node_modules/styled-components/dist/styled-components.browser.esm.js")),i=n("./src/utils/theme.js");function A(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: inline-block;\n  padding: 3px 5px;\n  border-radius: 5px;\n  background-color: ",";\n  color: ",";\n  font-size: 14px;\n  font-weight: bold;\n  text-transform: uppercase;\n\n  & + & {\n    margin-left: 5px;\n  }\n"]);return A=function(){return e},e}var u=s.b.div(A(),function(e){return Object(i.a)("colors.".concat(e.appearance))},function(e){return Object(i.a)("colors.".concat(e.color))});function p(e){return r.a.createElement(u,e)}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}p.defaultProps={appearance:"primary",color:"white"},p.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{appearance:{defaultValue:{value:"'primary'",computed:!1},type:{name:"enum",computed:!0,value:"Object.keys(theme.colors)"},required:!1,description:"Background color"},color:{defaultValue:{value:"'white'",computed:!1},type:{name:"enum",computed:!0,value:"Object.keys(theme.colors)"},required:!1,description:"Text color"}}},n.d(t,"default",function(){return b});var b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=g(this,f(t).call(this,e))).layout=null,n}var n,o,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.components,n=d(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"badge"}},"Badge"),r.a.createElement(c.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKYb07NI3RNdpPTgARyEBJ1qH0OBJGg9A0n9AV7U1c04LlBVzXaO0NXYYB2E0Hx5GI-UAAEYCIEQBlQVCunIgNUF0VFjlOAAvZwCESbF2G4Kj1iiARnlQK52gABnYZMZiwdp9xrGZOxYWcFIAFjU9gADY1I09YwBAgAxH1oESBT-GcQ5EUdTB2AABSEfgllYn44G0xFzJrSyaGcCBBMudgAEZ9M0-RwV46h-IAQTmCT2EjajyBsKB0HDdh5E5CSxAymMZHYVExJgbhgEPYTROxeRt1rYBsugPLggAMk68ZEnmShmja3L8u4Ub5TAUJeJ7VB2nYAB-DZ2vDSMiquIaOtQeKaykGRq3fMxYUozAwDCKAphW4rSu21KVxrRMgylHArMyFJrwIZrazrbC0jEb6YCkP6PtrRg_pCOYJUyXjqv4BlyEROA4HEZxQjh-A4ABmCYCBxNQdmeZXEhxE-BAdB3DSARxAaVBWHiLgMZwrHVykB6CCel63uaqQbr2sxvxAJCUM-DcaEwv7JFUbAAK0CgQP0Bh8MolmGNIpUKIdTzKBmSw-vgZWB01i1RPmOBuIVh0JhY7pjRInBPVtyQLePU3IKox0aFcNAMgK5XEIa-BuIOrACOOGATtCM6jUmqV2PYUHI31u4iuAdYugIPpzGjO61xAj2XSOYBbZwBO4Hord1nfLazD-ovB21430uTmtjCMWPJW2FIhEmnIqCgYV2F5dY8Yh9xESuDWtZ1uAcHQ3UwEzz7dQ8dQtlZ7YYESOBI0d_8e-FOB3wsTlNPWZurGwKZd6OAea0vsfa8n6eXVn-fa0X5fHrXjet82Y8PkoXuBD73LmYSuqBq7HVOgQcedhJKNwsEPAmI9IrtAHAKAmiQgoWFvvKEYNhaDcS2nzAWDsf7_kAtoXQoEDDgUOg6CB4cphwKLAA-4Uks70LOgpAAxOgKK6AAAcMBFKYNrKgmS9l5RcOTPpSUQiREWDEeggAMhAFIhBuFxDAAAJjAGAeRFUUbw1Ye0LhikACs5B9LGQ8PokYBNUAFG4bo1w_DFJRX0aTWcGRuEwA8DoxSxl9FQFUeoyRvjwk2M0p9ShQgoDcN4Qk9xUTawsAqB4WA6AnFRTANkpJq5aBYAINw5MJTSn6IKQQFRaiimSIAOxmPqfU_R5JZHDFyt4yRABObpPT9H5EwB4Am3CrL6SsmYqytS-lcF8QTG84QIioEcAA4ppSSlTIGbM-Z1Abyh2FDAJZwoVmrNsXg5BXDdF6PWEoBKFgWDXnyElK4TCsEgViQACRgCEmp7R9KKTMskiw_SZkCAAOpcAmApLRvyzJXOPsFECrDnn9n6OIhSABVDwk007cQsNcniFgPBmm2EKNABBEWriwHAKICQDKKT-epAFFVqVxPlMZOl_zVzHhYKEIgClXH0qCQTNICkop0oFYyoFgzyzylFey9SsKbkVQIG3clWcbBqKuD0npjKuUQB5VcfhhqjWMt7iMK4UULVXJAbzJQ_NkKoQzBhLCmNJCVWxFLIClC5bgTNlMN1eZrbyn9egC0Qt0Ii2dsHbePs7aenCNATC28A4uiDpRPiUxHDu09kcSSwacAyGKOsVJLSJFoGCS6C06TTjbFVFpHSjiVJGTMWpWtBLhTTgtJkblrDm1YFbewQZOwO5tAwKG_-hz2AABJgAzEutvSMpRx2AJwNOmYOAEGExgPIYonJ5D9uwauudpCF2Xynquv-ADt27v7SFS0-QIrmsMn2iyIELQjE-dUq4Xhcr9oqYbSGcBLICF5bkcGyFKS1vWD1AA1OwHqSKZJyQtLAMANTe39q2oW1ARD7XxqgIm0hHqKGyzAhBYOlAl4r3ctEfEgb2gUffpabSExI2UWjXR-2SaEq0KmBw86n9mN4CWGidwgHhRykkjTKAjJLpScZEVbgzUROoDE8Bl-FgGNUZo6eMc6nazb0ZRYATNHVwH3YO-PmAVtiuDSFLagnqSPUJAEw_gqAfRMiQOwfgQJiRVG8BkC0v5yQeeSfwVgGQHkBk8_wRSOBYuKW8usfg5RyD9BmNNfgVx-DJQqvhWAMIsA-mCyHcklBEh5jyAUScWox3lBBP5imIBQsgCiGgTLXmVARg0IjJrSWSYwHmBGXiEB4DtaRfwM0Up2v8AAHpRWMjgfhOAtGJazvwBOhtJ7TZAHNsxOBanLdW59GGfsQ1hszGS7bM39I4CijgZMR3az8E01KC0gmruxYtTgfSj2LATZq9aK783FuHZAFazaRD6u4F0JAFIdnsPEb0KR5OIBaC-iyJl7zZpaCdpq3jfg8gFDyHkEAA",__position:0,__code:'<Badge>Badge</Badge>\n<Badge appearance="success">Success</Badge>\n<Badge appearance="danger">Invalid</Badge>',__scope:{props:this?this.props:n,Badge:p}},r.a.createElement(p,null,"Badge"),r.a.createElement(p,{appearance:"success"},"Success"),r.a.createElement(p,{appearance:"danger"},"Invalid")),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"usage"}},"Usage"),r.a.createElement(a.MDXTag,{name:"pre",components:t},r.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import { Badge } from 'polvokit'\n")),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),r.a.createElement(c.f,{of:p}))}}])&&m(n.prototype,o),s&&m(n,s),t}();b.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/theme.js":function(e,t,n){"use strict";t.a={colors:{default:"#d1d8e0",primary:"#34ace0",primaryLight:"#caf2ff",success:"#05c46b",warning:"#ffa801",danger:"#eb2f06",light:"#ebebeb",control:"#d1d1d1",disabled:"#f1f1f1",text:"#333333",textLight:"#757575",placeholder:"#999999",sidebar:"#F4F5F7",sidebarButtonColor:"#333333",sidebarButtonBeforeColor:"#333333",white:"#fff"},dimensions:{controlHeight:"40px",sidebarWidth:"240px"},fonts:{primary:"Ubuntu"},breakpoints:{xsmall:"400px",small:"600px",medium:"800px",large:"1000px",sidebar:"1000px"},stacks:{high:999999,medium:888888,low:111}}},"./src/utils/theme.js":function(e,t,n){"use strict";var o=n("./node_modules/object-path/index.js"),r=n.n(o),a=n("./src/theme.js");t.a=function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e})(r.a.get(a.a,e))}}}]);
//# sourceMappingURL=src-components-badge-badge.4e34b38ba6d8122798bf.js.map