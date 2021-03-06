(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"./src/utils/mq/mq.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return l});var s=t("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),a={},c="wrapper";function l(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(o.b)(c,Object.assign({},a,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"mq"},"mq"),Object(o.b)("p",null,"mq is a utility for handling media queries with styled-components."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import styled, { css } from 'styled-components'\nimport { mq } from 'polvokit'\n\nconst MyComponent = styled.div`\n  ${mq.above('medium', css`\n    display: block;\n  `)}\n\n  ${mq.between('small', 'medium', css`\n    display: flex;\n  `)}\n\n  ${mq.below('small', css`\n    display: none;\n  `)}\n`\n")),Object(o.b)("p",null,"These breakpoints are set in the theme, under the breakpoints key."),Object(o.b)("p",null,"However, you can use literal breakpoints too:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const MyComponent = styled.div`\n  ${mq.above('1200px', css`\n    background-color: hotpink;\n  `}\n`\n")),Object(o.b)("p",null,"If you want to get a breakpoint from props,\nyou can pass a function:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const MyComponent = styled.div`\n  ${mq.above(props => props.breakAt, css`\n    background-color: hotpink;\n  `}\n`\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/utils/mq/mq.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=src-utils-mq-mq.2a9f11b18318a102dbb7.js.map