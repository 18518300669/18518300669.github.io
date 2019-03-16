(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{209:function(e,s,t){"use strict";t.r(s);var a=t(0),r=Object(a.a)({},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"content"},[e._m(0),e._v(" "),t("p",[e._v("我们都知道，在react项目当中state和prop是常用的属性，state是组件内部的状态，而prop是外部传递给组件的数据。对于对props的属性校验，一般会引入propTypes。")]),e._v(" "),t("p",[e._v("首先我先大致说一下propTypes检查。在react中既然props是组件的对外接口，那么就应该以某种方式让组件声明自己的接口规范。react通过propTypes来支持这个功能，来约束这个组件支持哪些prop，每个prop应该是什么样的格式。")]),e._v(" "),t("p",[e._v("在es6方法定义的组件类中，可以通过增加类的propTypes属性来定义prop规格，这不只是声明，而且是一种限制，在运行时和静态代码检查时，都可以根据propTypes判断外部世界是否正确的使用来了组件属性。")]),e._v(" "),t("p"),e._v(" "),t("p",[e._v("比如：")]),e._v(" "),e._m(1),t("p",[e._v("其中要求caption必须是string类型，initValue必须是number类型。isRequired表示Counter组件必须指定caption，如果没有isRequired表示如果没有也没有关系。")]),e._v(" "),t("p",[e._v("可以验证一下，这里就不做了。")]),e._v(" "),t("hr"),e._v(" "),t("p",[t("font",{attrs:{color:"red"}},[e._v("那么问题就来了，如果组件根本就没有定义propTypes会怎么样呢？")]),e._v("并不会怎样，组件依然能正常工作，而且，即使定义了propTypes，在propTypes检查出错的情况下，组件依然能工作，也就是说，这只是个辅助开发的功能，并不会改变组件的行为。")],1),e._v(" "),t("p",[e._v("在开发环境中，这一操作会帮助我们避免犯错，避免一些不必要的麻烦，但是当咱们开发完成之后，这一操作就显得没有必要了，在生产环境中，咱们其实并不需要这一步操作了，那么，咱们就应该在生产环境中将它去掉。")]),e._v(" "),t("hr"),e._v(" "),e._m(2),e._v(" "),t("p",[e._v("关于这个问题，create-react-app有个issue也讨论过，可供参考："),t("a",{attrs:{href:"https://github.com/facebookin",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/facebookin"),t("OutboundLink")],1),e._v("...")]),e._v(" "),t("p",[e._v("现在babel-plugin-transform-react-remove-prop-types就具有这种功能，通过npm安装，并且应该确保只在发布代码时使用它。")]),e._v(" "),t("p",[e._v("in:")]),e._v(" "),e._m(3),t("p",[e._v("out:")]),e._v(" "),e._m(4),t("p",[e._v("可以选择CLI和Node API还有.babelrc配置，作者推荐使用.babelrc。（什么是.babelrc：这个文件是用来设置转码的规则和插件的，熟悉linux的同学一定知道，rc结尾的文件通常代表运行时自动加载的文件，配置等等，类似bashrc,zshrc。而且在babel6中，这个文件必不可少）")]),e._v(" "),t("p",[e._v("那么，在项目根目录中找到.babelrc文件，打开")]),e._v(" "),t("p",[e._v("如果不需要配置项的话这么写：")]),e._v(" "),e._m(5),t("p",[e._v("如果需要加一些配置项的话就这么写：")]),e._v(" "),e._m(6),e._m(7),e._v(" "),t("p",[e._v("1.      mode：remove (default)/wrap/unsafe-wrap")]),e._v(" "),t("p",[e._v("2.     removeIemport：true/false(default)")]),e._v(" "),t("p",[e._v("3.     ignoreFilenames ：[ ' node_modules ' ]   该过滤器生成正则表达式。任何包含数组字符串的文件名都将被忽略。默认情况下，匹配所有。")]),e._v(" "),t("p",[e._v("4.     additionalLibraries ：[ ' react-immutable-proptypes ' ]默认情况下只会删除引入的propTypes，比如在从' prop-types '导入PropTypes和从' react-immutable-proptypes '中导入ImmutablePropTypes时，要同时删除后者，那么就添加这项配置。")]),e._v(" "),t("p",[e._v("5.     classNameMatchers ：[ “ BaseComponent ” ] 使用此选项可以使此插件在扩展不同于React.Component的类的组件上运行,比如")]),e._v(" "),t("p",[e._v("class MyComponent extends BaseComponent    {")]),e._v(" "),t("p",[e._v("...")]),e._v(" "),t("p",[e._v("}")]),e._v(" "),t("p",[e._v("好了，大家可以去试验下了。")]),e._v(" "),t("Valine")],1)},[function(){var e=this.$createElement,s=this._self._c||e;return s("h1",{attrs:{id:"关于react项目当中proptypes应该在生产环境中去掉的做法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于react项目当中proptypes应该在生产环境中去掉的做法","aria-hidden":"true"}},[this._v("#")]),this._v(" 关于react项目当中propTypes应该在生产环境中去掉的做法")])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("Counter.propTypes = {\n\tcaption: PropTypes.string.isRequired,\n\tinitValue: PropsTypes.number\n};\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br"),s("span",{staticClass:"line-number"},[this._v("3")]),s("br"),s("span",{staticClass:"line-number"},[this._v("4")]),s("br")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("h3",{attrs:{id:"下面咱们介绍如何用一种自动方式将proptypes在生产环境中去掉。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下面咱们介绍如何用一种自动方式将proptypes在生产环境中去掉。","aria-hidden":"true"}},[this._v("#")]),this._v(" 下面咱们介绍如何用一种自动方式将propTypes在生产环境中去掉。")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("        const Baz = (props) => (\n                 <div {...props} />\n       );\n        Baz.propTypes = {\n                  className: PropTypes.string\n         };\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("         const Baz = (props) => (\n                <div {...props} />\n       );\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br"),s("span",{staticClass:"line-number"},[this._v("3")]),s("br")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n  "env": {\n    "production": {\n      "plugins": ["transform-react-remove-prop-types"]\n    }\n  }\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n  "env": {\n    "production": {\n      "plugins": [\n        ["transform-react-remove-prop-types", {\n          "mode": "wrap",\n          "ignoreFilenames": ["node_modules"]\n        }]\n      ]\n    }\n  }\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("h3",{attrs:{id:"有这么几个配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有这么几个配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 有这么几个配置:")])}],!1,null,null,null);s.default=r.exports}}]);