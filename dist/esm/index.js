import t,{useState as e,useEffect as n}from"react";import"dayjs";import"recharts";function r(t,e,n){if(n||2===arguments.length)for(var r,a=0,i=e.length;a<i;a++)!r&&a in e||(r||(r=Array.prototype.slice.call(e,0,a)),r[a]=e[a]);return t.concat(r||Array.prototype.slice.call(e))}function a(a){var i=e((function(){var t=localStorage.getItem("rt_database");return null!==t?JSON.parse(t):{listOfAttempts:[],bestAttempts:[],averageOfAllAttemps:0}})),s=i[0],o=i[1],m=e(0),c=m[0],l=m[1],p=e(0),u=p[0],f=p[1],A=e("Click the box when Red Turns Green"),T=A[0],g=A[1],d=e(0),b=d[0],h=d[1],w=e(void 0),O=w[0],v=w[1],y=a.waitTime?a.waitTime:5e3,D=void 0===a.needInstruction||a.needInstruction;return n((function(){localStorage.setItem("rt_database",JSON.stringify(s))}),[s]),t.createElement("div",{className:"".concat(a.className," ").concat(0===c||4===c?"bg-cyan-500":1===c?"bg-red-500":"bg-green-500"),onClick:function(){0===c?(l(1),g("wait for it"),v(setTimeout((function(){l(2),f(Date.now()),g("press now!")}),Math.floor(Math.random()*(y-1e3+1)+1e3)))):1===c?(clearTimeout(O),a.onReactionTimeChange(0),g("You Pressed Early"),l(0)):(h(Date.now()-u),a.onReactionTimeChange(Date.now()-u),g("Nice Job!"),b>0&&(b<Math.min.apply(Math,s.bestAttempts.map((function(t){return t.reactionTime})))?o({listOfAttempts:r(r([],s.listOfAttempts,!0),[{reactionTime:b,testTime:Date.now()}],!1),averageOfAllAttemps:s.listOfAttempts.map((function(t){return t.reactionTime})).reduce((function(t,e,n,r){return t+e/r.length}),0),bestAttempts:r(r([],s.bestAttempts,!0),[{reactionTime:b,testTime:Date.now()}],!1)}):void 0!==s.bestAttempts[s.bestAttempts.length-1].reactionTime&&o({listOfAttempts:r(r([],s.listOfAttempts,!0),[{reactionTime:b,testTime:Date.now()}],!1),averageOfAllAttemps:s.listOfAttempts.map((function(t){return t.reactionTime})).reduce((function(t,e,n,r){return t+e/r.length}),0),bestAttempts:r(r([],s.bestAttempts,!0),[{reactionTime:s.bestAttempts[s.bestAttempts.length-1].reactionTime,testTime:Date.now()}],!1)})),l(0))}},D&&t.createElement("p",{className:a.instructionsClassName},T),a.children)}"function"==typeof SuppressedError&&SuppressedError;export{a as ReactionTime};
//# sourceMappingURL=index.js.map
