!function(e){"object"==typeof module&&"undefined"!=typeof module.exports?module.exports=e:e()}((function(){(window.webpackJsonpFusionCharts=window.webpackJsonpFusionCharts||[]).push([[11],{1225:function(e,t,a){"use strict";var i=a(219);t.__esModule=!0,t["default"]=void 0;var n=i(a(1226));t.OverlapperBar2D=n["default"];var l=i(a(1082)),o={name:"overlappedbar2d",type:"package",requiresFusionCharts:!0,extension:function(e){e.addDep(l["default"]),e.addDep(n["default"])}};t["default"]=o},1226:function(e,t,a){"use strict";var i=a(219);t.__esModule=!0,t["default"]=void 0;var n=i(a(1227))["default"];t["default"]=n},1227:function(e,t,a){"use strict";var i=a(219);t.__esModule=!0,t["default"]=void 0;var n=i(a(238)),l=i(a(564)),o=i(a(1228)),r=i(a(567)),s=i(a(1229)),d=function(e){function t(){var t;return(t=e.call(this)||this).isBar=!0,t.registerFactory("dataset",r["default"],["vCanvas"]),t}(0,n["default"])(t,e);var a=t.prototype;return a.__setDefaultConfig=function(){e.prototype.__setDefaultConfig.call(this);var t=this.config;t.friendlyName="Multi-series Bar Chart",t.hasLegend=!0,t.defaultDatasetType="bar2d"},a.getName=function(){return"OverlappedBar2D"},t.getName=function(){return"OverlappedBar2D"},a.getDSdef=function(){return o["default"]},a.getDSGroupdef=function(){return s["default"]},t}(l["default"]);t["default"]=d},1228:function(e,t,a){"use strict";var i=a(219);t.__esModule=!0,t["default"]=void 0;var n=i(a(238)),l=a(224),o=i(a(579)),r=l.preDefStr.visibleStr,s=l.preDefStr.hiddenStr,d=l.preDefStr.POSITION_MIDDLE,u=l.preDefStr.POSITION_START,h=l.preDefStr.POSITION_END,f=Math.max;function p(e,t){var a,i,n,l,o=e.x,r=e.width;for(a=0,i=t.length;a<i;a++)if(l=t[a].width,n=t[a].x,t[a].labelShown&&o+r>=n&&n+l>=o)return!0;return!1}var c=function(e){function t(){var t;return(t=e.call(this)||this)._labeldimensionMap={},t}return(0,n["default"])(t,e),t.prototype.drawLabel=function(){var e,t,a,i,n,o,c,b,g,v,m,S,D,_,w,x,y,k,C,N,T,M,O,I,A,F,L,B,P=this.getFromEnv("chart"),E=P.config,J=this.config,R=J.JSONData,G=this.getFromEnv("animationManager"),V=this.getFromEnv("toolTipController"),K=P.getChildren("canvas")[0].config,j=P.config.dataLabelStyle,q=R.data,z=P.config.categories,H=P.config.is3D,W=P.config.isstacked,Q=z&&z.length,U=q&&q.length,X=this.getData(),Y=P.getFromEnv("smartLabel"),Z=K.yDepth,$=K.xDepth,ee=P.getFromEnv("number-formatter"),te=l.BLANKSTRING,ae=E.placevaluesinside,ie=E.canvasWidth,ne=E.canvasLeft,le=this.getContainer("labelGroup"),oe=this.getSkippingInfo&&this.getSkippingInfo(),re=oe&&oe.skippingApplied,se=oe&&oe.labelDraw||[],de=se.length,ue=this.getJSONIndex(),he=this.getState("visible"),fe=function(){this.hide()},pe=function(){this.show()};for(he&&le.show(),Y.setStyle(j),e=re?de:Q<U?Q:U,n=0;n<e;n++)y=(T=(t=X[i=re?se[n]:n])&&t.config)&&T.setValue,void 0!==t&&null!=y&&!0!==T.labelSkip?(c=t.graphics)&&(o=q[i],_=t._yPos,w=t._xPos,y=ee.getCleanValue(o.value),D=(0,l.pluckNumber)(y)<0,b=t._height,x=t._width,g=T.valuePadding+2,k=W?d:D?ae?u:h:ae?h:u,te=T.displayValue,F=c.label,T.showValue&&null!=te&&te!==l.BLANKSTRING&&null!==y?(a={text:te,fill:j.color,"text-bound":[j.backgroundColor,j.borderColor,j.borderThickness,j.borderPadding,j.borderRadius,j.borderDash],"line-height":j.lineHeight,visibility:this.getState("visible")?r:s},C=(L=Y.getOriSize(te)).width,C+=g,N=g,v=_+.5*b,m=w+(D?0:x),S=D?w-ne:ne+ie-(w+x),ae?x>=C?(m+=D?N:-N,H&&(v+=Z,m-=$)):C<S?(m+=D?-N:N,k=D?h:u,H&&D&&(m-=$)):D?(m=w+x+f(C-w-x+ne,0)-N,k=h):(m=w-f(C-(ne+ie-w),0)+N,k=u):S>=C?(m+=D?-N:N,H&&D&&(m-=$,v+=$)):m+=D?N+C:-(N+C),(m>ne+ie||m<ne)&&(m=ne+4,k=u),a["text-anchor"]=k,a.x=m,a.y=v,a["text-bound"]=[j.backgroundColor,j.borderColor,j.borderThickness,j.borderPadding,j.borderRadius,j.borderDash],a.opacity=he?1:0,O=P.getDatasets().map((function(e){return e.getJSONIndex()<ue&&e._labeldimensionMap[n]})).filter(Boolean),A=p(I={x:m,y:v,width:L.width,height:L.height},O),this._labeldimensionMap[n]=I,A?c.label&&(c.label=G.setAnimation({el:c.label,component:this}),this._labeldimensionMap[n].labelShown=!1):((M=G.setAnimation({el:F||"text",container:le,component:this,attr:a,callback:he?pe:fe,label:"plotLabel"}))&&M.outlineText(J.showTextOutline,a.fill),E.showtooltip&&M.abbrArr&&M.abbrArr.length&&V.enableToolTip(M,void 0),F||(c.label=M)),this._labeldimensionMap[n].labelShown=!(!he||A)):c.label&&(c.label=G.setAnimation({el:c.label,component:this}),this._labeldimensionMap[n].labelShown=!1)):((B=t&&t.graphics)&&B.label&&B.label.hide(),T&&delete T.labelSkip)},t}(o["default"]);t["default"]=c}}])}));
//# sourceMappingURL=http://localhost:3052/3.18.0/map/eval/fusioncharts.overlappedbar2d.js.map