(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(7),i=a.n(s),o=(a(13),a(1)),l=a(2),c=a(4),u=a(3),p=a(5),m=(a(14),function(t){function e(){var t,a;Object(o.a)(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={error:"",errorCheck:!1},a.changeValuesInputs=function(t){var e={maxVal:t.currentTarget[0].value.trim(),minVal:t.currentTarget[1].value.trim()};e.maxVal>10?a.setState({error:"Max 10",errorCheck:!0}):e.maxVal<0?a.setState({error:"Min 0",errorCheck:!0}):e.minVal<0?a.setState({error:"Min 0",errorCheck:!0}):e.minVal>10?a.setState({error:"Max 10",errorCheck:!0}):e.minVal==e.maxVal?a.setState({error:"Min != Max",errorCheck:!0}):a.props.changeStartMaxValue(e)},a}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=this.props.counter===this.props.maxVal?"Max: "+this.props.maxVal:this.props.counter;return r.a.createElement("div",{className:"ShowCounter"},this.state.errorCheck?r.a.createElement("div",null,r.a.createElement("div",null,this.state.error),r.a.createElement("button",{className:"errorButtonInDisplay",onClick:function(){return t.setState({errorCheck:!1})}},"OK")):r.a.createElement("div",null,this.props.setVisibleSettings?r.a.createElement("div",null,r.a.createElement("form",{onChange:this.changeValuesInputs},"Max value: ",r.a.createElement("input",{type:"number",value:this.props.maxVal}),"Start value: ",r.a.createElement("input",{type:"number",value:this.props.minVal}))):e))}}]),e}(r.a.Component)),h=function(t){function e(){return Object(o.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement("button",{className:this.props.button.counter===this.props.maxVal?"buttonColor":"",disabled:!!this.props.button.isDisabled,onClick:function(){return t.props.button.onFunc(!0)}},this.props.button.isDisabled?this.props.button.disabled:this.props.button.title))}}]),e}(r.a.Component),b=function(t){function e(){return Object(o.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=[{title:"INC",isDisabled:this.props.isDisabled,onFunc:this.props.incrementCounter,disabled:"DISABLED",counter:this.props.counter},{title:"RESET",isDisabled:this.props.counter===this.props.minVal,onFunc:this.props.resetCounter,disabled:"DISABLED"},{title:"SET",onFunc:this.props.setFunc,isDisabled:this.props.counter>this.props.minVal,disabled:"DISABLED"}];return r.a.createElement("div",null,this.props.setVisibleSettings?r.a.createElement("div",null,r.a.createElement("button",{className:"SET",onClick:function(){return t[2].onFunc(!1)}},"SET")):r.a.createElement("div",{className:"Buttons"},r.a.createElement(h,Object.assign({},this.props,{button:t[0]})),r.a.createElement(h,Object.assign({},this.props,{button:t[1]})),r.a.createElement(h,Object.assign({},this.props,{button:t[2]}))))}}]),e}(r.a.Component),d=function(t){function e(){var t,a;Object(o.a)(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={counter:0,isDisabled:!1,maxVal:5,minVal:0,setVisibleSettings:!1},a.incrementCounter=function(){a.state.counter===a.state.maxVal-1&&a.setState({isDisabled:!0}),a.setState({counter:++a.state.counter})},a.changeStartMaxValue=function(t){a.setState({maxVal:parseInt(t.maxVal),minVal:parseInt(t.minVal)})},a.resetCounter=function(){a.setState({counter:0,isDisabled:!1})},a.setFunc=function(t){a.setState({setVisibleSettings:t,counter:a.state.minVal})},a}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"Wrapper"},r.a.createElement("div",{className:"Display"},r.a.createElement(m,{changeStartMaxValue:this.changeStartMaxValue,setVisibleSettings:this.state.setVisibleSettings,counter:this.state.counter,maxVal:this.state.maxVal,minVal:this.state.minVal})),r.a.createElement("div",null,r.a.createElement(b,{className:"Controls",setVisibleSettings:this.state.setVisibleSettings,setFunc:this.setFunc,counter:this.state.counter,maxVal:this.state.maxVal,minVal:this.state.minVal,isDisabled:this.state.isDisabled,incrementCounter:this.incrementCounter,resetCounter:this.resetCounter}))))}}]),e}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},8:function(t,e,a){t.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.590ae327.chunk.js.map