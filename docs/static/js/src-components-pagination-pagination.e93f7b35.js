(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/components/Icon/index.js":function(e,n,t){"use strict";var o=t("./node_modules/@fortawesome/fontawesome-svg-core/index.es.js"),a=t("./node_modules/@fortawesome/free-solid-svg-icons/index.es.js"),A=t("./node_modules/@fortawesome/free-brands-svg-icons/index.es.js"),r=t("./node_modules/@fortawesome/react-fontawesome/index.es.js");o.b.add(a.a,A.a),n.a=r.a},"./src/components/Pagination/Pagination.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/react/index.js"),a=t.n(o),A=t("./node_modules/@mdx-js/tag/dist/index.js"),r=t("./node_modules/docz/dist/index.m.js"),i=t("./node_modules/react-values/lib/react-values.es.js"),c=t("./src/components/Icon/index.js"),s=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),l=t("./node_modules/styled-tools/dist/es/index.js"),g=t("./src/utils/theme.js");function u(){var e=h(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n  font-family: ",";\n  font-size: 16px;\n  flex-grow: 1;\n  width: 150px;\n  height: ",";\n  border-left: 1px solid ",";\n  border-right: 1px solid ",";\n"]);return u=function(){return e},e}function m(){var e=h(["\n  cursor: pointer;\n  height: ",";\n  padding: 0 10px;\n  border: none;\n  background-color: transparent;\n  color: ",";\n\n  &[disabled] {\n    cursor: not-allowed;\n    color: ",";\n  }\n\n  &:not([disabled]):hover,\n  &:not([disabled]):active {\n    background-color: ",";\n  }\n\n  &:not([disabled]):active {\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125)\n  }\n"]);return m=function(){return e},e}function p(){var e=h(["\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 3px;\n"]);return p=function(){return e},e}function d(){var e=h(["\n  ","\n"]);return d=function(){return e},e}function h(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var B=s.b.div(d(),Object(l.b)("center","text-align: center;")),E=s.b.div(p(),Object(g.a)("colors.control")),C=s.b.button.attrs({type:"button"})(m(),Object(g.a)("dimensions.controlHeight"),Object(g.a)("colors.primary"),Object(g.a)("colors.control"),Object(g.a)("colors.light")),b=s.b.div(u(),Object(g.a)("colors.text"),Object(g.a)("fonts.primary"),Object(g.a)("dimensions.controlHeight"),Object(g.a)("colors.control"),Object(g.a)("colors.control"));function w(e){var n=e.page,t=e.total,o=e.onChange,A=e.center,r=e.format,i=1===n,s=n===t;return a.a.createElement(B,{center:A},a.a.createElement(E,null,a.a.createElement(C,{onClick:function(){return!i&&o(n-1)},disabled:i},a.a.createElement(c.a,{icon:"chevron-left"})),a.a.createElement(b,null,r(n,t)),a.a.createElement(C,{onClick:function(){return!s&&o(n+1)},disabled:s},a.a.createElement(c.a,{icon:"chevron-right"}))))}w.defaultProps={format:function(e,n){return"".concat(e," / ").concat(n)},center:!1};var D=w;function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},A=Object.keys(e);for(o=0;o<A.length;o++)t=A[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(o=0;o<A.length;o++)t=A[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function k(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function I(e,n){return!n||"object"!==f(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,n){return(R=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}w.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{format:{defaultValue:{value:"(page, total) => `${page} / ${total}`",computed:!1},type:{name:"func"},required:!1,description:"Format the display"},center:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Centers the pagination"},page:{type:{name:"number"},required:!0,description:"Current page"},total:{type:{name:"number"},required:!0,description:"Total of pages"},onChange:{type:{name:"func"},required:!0,description:"onChange callback"}}},t.d(n,"default",function(){return O});var O=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=I(this,M(n).call(this,e))).layout=null,t}var t,o,c;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&R(e,n)}(n,a.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components,t=Y(e,["components"]);return a.a.createElement(A.MDXTag,{name:"wrapper",components:n},a.a.createElement(A.MDXTag,{name:"h1",components:n,props:{id:"pagination"}},"Pagination"),a.a.createElement(r.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgHYAA5UIiECAQADV4kZdh5DdE0FXNC1WFQ-B_QFe0pgABVcZ5UGiAZzGNOV2k9OABHIQEnWofQ4EkMiKKo6hCMg9ggylTC6LNJU7Q1dhoM0HwMNo-UAAEYCIERqJYrp2nBVBdFRY5TgAL2cAhEmxdhuEk9YogECirnaAAGdhkxmLB2n3GsZk7FhZxsgAWJz2AANiclz1jAECADEfWgRIbP4ZxDkRR1MHYEihH4JZlJ-OB3MRYKa1CmhnAgPTLnYABGbzXPkTTtKmABBOZTPYSNoPIGwoHQcN0M5UyxCamMZHYVFjJgbhgEPAyjOxeRt1rYBWugDrggAMiW8ZEnmShmnm9rOu4Pb5TAUItJ7VB2nYAB-DYFvDSNuqubbFtQKqaykGRq3fMxYQkzAwDCKAplunq-pe-qVxrRNBIIHAwsyFJrwIGbazrOCEIyFCoDQn6_oIdHGVG0rptXJHgGa9g8IxmAljgMcuqB6NwaR2tGC4tAePMCICHifHbIw9y0lG8nGQw6h7D8WcRuAamCAwrcidrTlnsZutJBRxDcZgRHlch6HYfhmapFB96zG_EBGOYz4NxoDiWcok7JFUbAAK0CgQP0BgiIkyHhNNLUNNQD2HRSygZksdb4G99oB2Di0jPmOA_YDqYGl0COcE9ZPePEh1gHWRwaFcNAMlciwbeiYVi_YG9wgiVAK_sPpw1EJ7U8kIbsT9sxDuO6jkvI1mTqa6C-cp4dOagJYRbFtIlkRPQBCWUKBCiKZ5G6nOaxq45bFcDxYBSmAODM4fTP20r1k3lgKl3mAYOwKYj_I7o9rMjn4k0iwugIPpzHppHGDzzmhcjiz1oAIUaICMiEwZomUuEQBCaz_lXG41A5ZIxFlAWI2xRqA24L1AAhJfHee8ugcBWnsVAot3BpEjMfC0ZUFaoNrIQ6-PAxrb2vvvVgislbsAQYzRgGc6S6G4O0VqB8hCoAtLAMAr52Cy2gUzSQSCa58MTPXAQjdVGzUXsvGhj8livygAwhRO51GaMYYwZRKCTG1nQZg7B3VcHsAIew2At8sBTDIZPKhMA9FpHYAAanodwnhW8r6wFYcwtxd8QmMy0YmQRnBhGiM2KwCRFp-gpEIGdeRoSpBWNQHwqQsDhSaykAAguLp4HrHfM9MwsDqI4CjiHMOdgzLrwsMYIwDgG6umPrydYw8rhBxaXHHAqB4KIRwLYcUABHUIEAuiLHfnIkwVgRB9k2v2R-dgBk1kMcMwcocxkTNRgIaZcA5kLKWa5dYXTyGUPFqsBIHhJS7D2RYbx4tDnB2OfAHAXdyAXKuYs7Ityaz3PsPoDIdgJjdD5v3HuHyejQvLMlI5rScBeEoOPFZ9ywrCmXgSbol9ySuGSMinR0QfmjP-YCswdTUANOoDgLGoR_ojLaeZPKhLqVNWHgYjZRigbFAACTAGHjLdg4rDHyGKBXCBaLfpQGpgyzSX0HRsv-r3biJ1jZKFNkxFiGZ2KSEEfbCMGhnbAT0GBCCxFJLsAwR4TIAhkiyXdO0eSi9OYjHgJEGAkh8q-v9ceC0cBWApAtFQdSWcoJGn8OhCO3qNSuD9XAANQaugwHDTirg4bI0WliNQeOcbHW_Q8EmuSXqfVptDYGmUQQLQusqHAAtUbi2oFLf7fi0ECU0FqumgNiSPVYRTSKOtGbjySFEpaYNk6A0d1QM611iQcAeUjL9OAC8d4fRdFgB1Wqpj9oIIO-tgj9XKDNsay2BBrZ91tqpNu_zALaF0KBAw4FE6DUmnmatz70DRtYpmO9Cde2cDACMqtnqAMx2ECqsDDq4XHlTp6NOkhwjQA4shmAS6NVTE3hUoBjUAOsrYMUdY4qICQcHE-RVLl5S0A8RaeIEAUioHuqi5Ub5noUYDPuh1m8SlHDMqRmQfGLCkqgOSq4aAMEugtGAWAWBVQ1lY-xottAiD3BRXPVTFgvACGnFcUqfkM0YJyDKzYx46M4uFHAD4IEhBQB4_p9ghnpwZM7BAPIVxHIqbMHxz6B6JKbwKSR396AsXVxZdENEcBmrrFjiVdoHgYunQZZyCTPQ-gZrRUKNAoC3ObDY4QK4VmlK-PaCwa8-QS2OZoM5gAEjAUrr4FZufcl2AoVx7KlVsk5NzHmMhXB-C6IbbyUhCCOoBqgUBhRXDRO4LKrhG5ubmwt6VwAcO2fmwIBzA4BSrcSK5lZS0ADaUTsgAF1uVI16PtzbPxLTxHm369AbmLAbbRRVmzoi7P7Ya2iHFp2ayMosEtRAz3IyXdcTdzkiBhisCLusSH0PYfhPh4gc0bBugdNrK8nYU22gYCA3t8r23rNVe-w5jBWT2vyDc-D9gaORAw6u-ga7COcfI7uwT7w4a_AnBGLJrtNN7L-fYAAVj8lZV5kZbJLEV-wZXOBSoACYpfvgsLx9VIWHSEd6VmUTkWyOsGy1JmTRplNufU5Il4SkdOKrc-oPIMQwCJCA7aggnG9PnwBxTnb_29sOaYwztzwbFORSSIHqnT5g0Hf6JZE7HWQogXDUVEqpVAoBbyspi0xORdlTc7idAEwTNS4G7niwJX6ex8q0-GrdA6tdqB811r9PQcGeFJ56RPuypmbzZZynDfg_2bbyD1PNZhsCAyW1kzg-LNbaDzTifLmp98ZNtezDKrJA4adkBd9bsv38UoB4dQWwCBkULNWs_F-pQWnchMRDEkcOob31TvD-uphHqatsGA600QeABimQXaOijUgsT8vUkBjiM0S2YBhKv8ti5-l-1-eAp4Y4SBSMOGFcSM_-gBEwq42u7A74W-Rq--r6Ls3uDA-GxwMAv07KUE_uIeVw-Okm9B2MNkAAxOgKVOgAABwwC2S5RIyHbJ7cHJjeSShCEiG1hiHHYAAy8-8oXBcQYA6uYAYAshFgDI5AiIcAOm7QXBtkUu5A3k_kHg2h-Yq2_sXkKhmhrg_BtkpUVh6APiaKRhMAHgGhtk_kVhdOZWKhXhwRlhuBRYjWOK3BvB0RLhYRHO3BYApUiRiRVhYeEhyYGRGRqRd8ShdeKhAA7FLoUYUVYWSoiMMO1CNioQAJy1F1FWH5CYCvIeFcFhTeRhRS5hT5ENFcBeGrYFKODk4qGZGZE9FNH9HpY3j0HCgwCDGbZGEjFZFhEjA2C0AJGaF-w67gqSYCjN7UQ6ZsHhHA5QAtbKHtDeRV5jF9ECAADqXA5e8o6uFxQU6wSgKyCerBq48hbqNkAAqmljQB0K8dse5maNsAVlbJ8QzFgHAFEAkD5LZJcWEbCa9jZP5IiUFGEceCwPBDZE4UiauNJlZClv1hic5Mib0c0TZKSZccCSsqiG8gcauDYFklcHUXUVidkD5kQFcPwXyfyWEW9iZqVGfGDmqqgCbNlNsI_E7NQIfq7HavjvwJRMePwFcPwECMSFUN4BkBaL-OSEyCABXPwMjvttRGqewPwLZDgNabZGlOsPwOUOQP0DMHqkgJaSALVINERLADCFgD6AaXQeSJQIkHmHkAUJOFqEBuUCCDqQIPaTWPwFEGgBafwA7FagmRYI6TAPMBGFpBAPABaYcfwLOqmSAAAHrZ44D8E4Dq6Zm1gllRmQFwBlnlnWnJg4DJj1lZkgDNIxytKtmlRS44D5G1ndkenjohpToNogQLphoRpRoxqGnqkVmlS1lq5S7jn8CTlzkNrZq5oWbtpFraStnDmjl1lGmrjbm1pDrTqNo5otoYBtoLnHklqnkjljmXkMzXmpq3mBqzqKazl_mtnWlrneRbmmyRZAYmpWytneRq6dkQWwYRA4otnun8CVkflnxflIz8B36X6P5AEgVq5gUQUAXWiDn-TVmfmvEMpb6xm4C6CQApCykSlvoKmfogA5wgBaZkq0Bqkalmi0AZJRmzAzD8DyAKDyDyBAA",__position:0,__code:"<NumberValue defaultValue={1}>\n  {({ value, set }) => <Pagination total={10} page={value} onChange={set} />}\n</NumberValue>",__scope:{props:this?this.props:t,NumberValue:i.a,Pagination:D}},a.a.createElement(i.a,{defaultValue:1},function(e){var n=e.value,t=e.set;return a.a.createElement(D,{total:10,page:n,onChange:t})})),a.a.createElement(A.MDXTag,{name:"p",components:n},"Centralized:"),a.a.createElement(r.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgHYAA5UIiECAQADV4kZdh5DdE0FXNC1WFQ-B_QFe0pgABVcZ5UGiAZzGNOV2k9OABHIQEnWofQ4EkMiKKo6hCMg9ggylTC6LNJU7Q1dhoM0HwMNo-UAAEYCIERqJYrp2nBVBdFRY5TgAL2cAhEmxdhuEk9YogECirnaAAGdhkxmLB2n3GsZk7FhZxsgAWJz2AANiclz1jAECADEfWgRIbP4ZxDkRR1MHYEihH4JZlJ-OB3MRYKa1CmhnAgPTLnYABGbzXPkTTtKmABBOZTPYSNoPIGwoHQcN0M5UyxCamMZHYVFjJgbhgEPAyjOxeRt1rYBWugDrggAMiW8ZEnmShmnm9rOu4Pb5TAUItJ7VB2nYAB-DYFvDSNuqubbFtQKqaykGRq3fMxYQkzAwDCKAplunq-pe-qVxrRNBIIHAwsyFJrwIGbazrOCEIyFCoDQn6_oIdHGVG0rptXJHgGa9g8IxmAljgMcuqB6NwaR2tGC4tAePMRE9COCICHifHbIw9y0lG8nGQw6h7D8WcRuAamCAwrcidrTlnsZutJBRxDcZgRG1ch6HYfhmapFB96zG_EBGOYz4NxoDiWcok7JFUbAAK0CgQP0BgiIkyHhNNLUNNQb2HRSygZksdb4D99oBzDi0jPmOBA-DqYGl0aOcE9NPePEh1gHWRwaFcNAMlcix7eiYUy_YG9wgiVBq_sPpw1EJ6M8kIbsUDsxDuO6jkvI1mTqa6DBcp4ceagJZxcltIlg52gBCWUKBCiKZ5G6_Oaxq45bFcDxYBSmAODMsfTP20r1h3lgKgPmAYOwKZT_I7o9rM7n4k0iwugIPpzHppGjBC48xLkcBeGRRrgIEITBmiYK4RAEDrQBtcbjUEVkjcWUBYjbFGoDbgvUACEN996Hy6BwFaexUAS3cGkSMZ8LRlWVug2sxC748DGnvO-R9WAq1VuwJBjNGDZzpLobg7RWrHyEKgC0sAwCvnYArWBTNJAoPrgIxMTcBAt3UbNFea86EvyWB_KATClE7k0do5hjBVFoLMbWTB2DcHdXwewIhnDYAPywFMChM8aEwAMWkdgABqRhvC-G71vrAdhrCPGPzCYzHRiZhGcFEeIzYrApEWn6CkQgZ1FHhKkDY1AAipDwOFDrKQwDi4ukQesd8z0zDwOojgWO4dI52DMlvCwxgjAOGbq6M-vJ1hjyuKHNpiccCoHgohHAthxQAEdQgQC6IsL-CiTBWBEH2Ta_YX52CGTWYxozBwRwmVM1GAhZlwAWUslZrl1g9ModQqWqwEgeElLsA5FhfFS2OWHU58AcC93IFcm5yzsj3JrI8-w-gMh2AmN0QWQ9-5fJ6LC8syUTntJwF4SgU81mPLCsKNeBJug33JK4ZIqK9HRD-eMwFwKzANNQE06gOAsahH-mMjp5k8rEtpU1MeRitkmKBsUAAJMAMe8t2CSuMfIYo1coFXF-lAamTLNJfQdBy_6A9uInTNkoC2TEWIZnYpIYRTsIwaDdsBPQYEILEUkuwLBHhMgCGSLJd07R5Irx5iMeAkQYCSHyv6wNx4LRwFYCkC0VB1K5ygkafw6Fo6-o1K4ANcAg0hq6DASNeKuCRujRaWI1Ak4Judb9DwKa5I-r9Rm8NwaZRBAtG6yocAi0xtLagctQd-LQSJTQWqmag3JK9VhNNIoG1ZuPJIUSlpQ3TqDd3VArr3WJBwB5SMv04DL33h9F0WAnU6qmIOggw7G3CMNcoS2pqbYEDtoPB2qlO6AsAtoXQoEDDgRToNSaeZa2vvQLG1imYH3J37ZwMAYya3eqA_HYQaqINOoRceDOnpM6SHCNADiqGYArq1VMHeVTQGNSA-ytgxR1iSogNBwcT4oEuXlLQLxFp4gQBSKge66LlRvmelRgMh6nU7zKUcMy5GZACYsOSqAlKrhoCwS6C0YBYBYFVDWdjnGS20CIPcNFnN1MWC8AIacVxSp-SzVgnIcrNjHgY3i4UcAPggSEFAPjhn2DGenFkzsEA8hXEcmpswAnPpHokjvIpZH_3oBxXXNl0Q0RwGausBOJV2geDi6dJlnIpM9D6FmjFQo0CLw85sDjhArg2aUv49oLBrz5DLc5mgrmAASMByuvmVh59yXYChXHsqVWyTkPNeYyFcH4LoRsfJSEII6wGqBQGFFcNE7gsquBbh5hbS3ZXADw_ZxbAgnMDgFOtxI7m1lLQANoxOyAAXV5UjXoh3ts_EtPERbAb0AeYsFtjFVW7PiIc4dpraI8XnZrMyiwS1ECvcjNd9xd3OSIGGKwUu6xoew_h5ExHiBzRsG6F02s7ydgzbaBgEDB3Ku7dszV37TmsE5M6_IDzkP2AY5EHDm76BbtI7x6jh7RPvCRr8CcEY8me003soF9gABWPyVl3mRlsksZX7BVc4FKgAJhl--Cw_HNVhYdMR_pWZxPRYo6wXLMm5NGlUx5zT0iXhKT01Ajz6g8gxDAIkED9qCDcYM1fIHVO9uA4O05ljTOPOhuU5FJIweadPlDUd_olkztdZCiBSNRUSqlUCkFvKqmLSk7F2VDzuJ0ATDMzLob-eLBlcZ_H6rT46t0Aaz2kHrX2uM_B0Z4U3nZF-7KhZgt1nqdN9D45jvYP081lGwILJHWzPD6sztkPdOp9uZnwJ82t7sNqskHh12QFP2ex_fxSgHh1BbAIGRQstaL9X6lBadyExkMSTw-hg_NOCOG6mCepq2wMA600QeARimQPaeijUIsr8vU0BziM0K2EBxKAC9il-1-t-eAp4Y4KBSMeG1cSMgBwBEwq4uu7A74O-Jqh-767svuDAhGxwMAv0nKUEgeYeVwhO0mjB2MNkAAxOgKVOgAABwwC2S5RIzHap68HJjeSSgiFiG1gSGnYAAyi-8oPBcQYAmuYAYA8hFgDI5AiIcAem7QPBtkMu5A3k_kHguh-Y62QcXkah2hrgghtkpUNh6AfiGKJhMAHgWhtk_kNhDOFWahPhoR1h-BRYzWeKvB_BsRbhERXOvBYApUyRyRNhEeUhyYWRWR6Rj8KhDeahAA7DLsUcUTYRSoiMMO1GNmoQAJz1ENE2H5CYDvJeE8FhTeRhQy5hSFFNFcA-HrZFKOCU5qHZHZF9EtGDGZY3iMHCgwDDHbYmFjE5EREjA2C0BJHaGBx66QrSYCit7UR6YcGRGg5QBtaqHtDeQ14TEDECAADqXAle8omuVxQU6wSgaySe7Bq4ihHqNkAAqhljQB0O8bsZ5maNsEVrbN8QzFgHAFEAkD5LZNcREfCe9jZP5MiUFBEceCwPBDZC4SiauLJlZGloNlic5Kif0a0TZOSdcaCWsqiB8kcauDYDklcA0Q0TidkH5kQFcIIQKYKRER9mZqVJfBDhqqgObNlNsC_K7NQMfh7A6oTvwJRMePwFcPwECMSFUN4BkBaL-OSEyCANXPwKjodtRBqewPwLZDgLabZGlOsPwOUOQP0DMAakgNaSALVINERLADCFgD6EaQweSJQIkHmHkAUJOFqCBuUCCHqQII6TWPwFEGgFafwM7DakmRYM6TAPMBGFpBAPAFaccfwPOumSAAAHq544CCE4Ca7Zm1hlkxnQFwAVmVm2nJg4DJiNk5kgCtLxztLtmlQy44CFH1m9lemTphozpNogRLoRpRoxpxrGmalVmlT1ka4y6Tn8DTkLlNq5r5pWadolraTtmjnjkNkmmri7n1ojqzrNp5ptoYAdpLmnllrnljkTnXkMy3npr3nBrzrKbzkAXtm2kbneQ7kWzRYgZmq2ztneQa7dlQXwYRB4ptmen8DVlfmXw_lIz8AP7X7P4gFgUa4QVQVAXWjDn-S1nfnvFMo77xm4C6CQApDylSkfpKnfogD5wgA6YUq0Aalalmi0BZIxmzAzD8DyAKDyDyBAA",__position:1,__code:"<NumberValue defaultValue={1}>\n  {({ value, set }) => (\n    <Pagination center total={10} page={value} onChange={set} />\n  )}\n</NumberValue>",__scope:{props:this?this.props:t,NumberValue:i.a,Pagination:D}},a.a.createElement(i.a,{defaultValue:1},function(e){var n=e.value,t=e.set;return a.a.createElement(D,{center:!0,total:10,page:n,onChange:t})})),a.a.createElement(A.MDXTag,{name:"h2",components:n,props:{id:"usage"}},"Usage"),a.a.createElement(A.MDXTag,{name:"pre",components:n},a.a.createElement(A.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import { Pagination } from 'polvokit'\n\nfunction Example () {\n  return (\n    <Pagination\n      page={2} // current page\n      total={12} // total of pages\n      onChange={page => console.log(page)} // change handler\n    />\n  )\n}\n")),a.a.createElement(A.MDXTag,{name:"h2",components:n,props:{id:"props"}},"Props"),a.a.createElement(r.f,{of:D}))}}])&&k(t.prototype,o),c&&k(t,c),n}();O.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/theme.js":function(e,n,t){"use strict";n.a={colors:{default:"#d1d8e0",primary:"#34ace0",primaryLight:"#caf2ff",success:"#05c46b",warning:"#ffa801",danger:"#eb2f06",light:"#ebebeb",control:"#d1d1d1",disabled:"#f1f1f1",text:"#333333",textLight:"#757575",placeholder:"#999999",sidebar:"#F4F5F7",sidebarButtonColor:"#333333",sidebarButtonBeforeColor:"#333333",white:"#fff"},dimensions:{controlHeight:"40px",sidebarWidth:"240px"},fonts:{primary:"Ubuntu"},breakpoints:{xsmall:"400px",small:"600px",medium:"800px",large:"1000px",sidebar:"1000px"},stacks:{high:999999,medium:888888,low:111}}},"./src/utils/theme.js":function(e,n,t){"use strict";var o=t("./node_modules/object-path/index.js"),a=t.n(o),A=t("./src/theme.js");n.a=function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e})(a.a.get(A.a,e))}}}]);
//# sourceMappingURL=src-components-pagination-pagination.4e34b38ba6d8122798bf.js.map