!function(){function i(i,t,n){return t in i?Object.defineProperty(i,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[t]=n,i}function t(i,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,r.key,r)}}(self.webpackChunkion_tk_social_network=self.webpackChunkion_tk_social_network||[]).push([[1864],{51864:function(n,r,e){"use strict";e.r(r),e.d(r,{ion_progress_bar:function(){return m}});var a=e(52322),s=e(47505),o=e(71843),c=e(44843),m=function(){function n(i){!function(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(0,a.r)(this,i),this.type="determinate",this.reversed=!1,this.value=0,this.buffer=1}var r,e,o;return r=n,(e=[{key:"render",value:function(){var t,n=this.color,r=this.type,e=this.reversed,o=this.value,m=this.buffer,l=s.c.getBoolean("_testing"),u=(0,s.b)(this);return(0,a.h)(a.H,{role:"progressbar","aria-valuenow":"determinate"===r?o:null,"aria-valuemin":"0","aria-valuemax":"1",class:(0,c.c)(n,(t={},i(t,u,!0),i(t,"progress-bar-".concat(r),!0),i(t,"progress-paused",l),i(t,"progress-bar-reversed","rtl"===document.dir?!e:e),t))},"indeterminate"===r?b():f(o,m))}}])&&t(r.prototype,e),o&&t(r,o),n}(),b=function(){return(0,a.h)("div",{part:"track",class:"progress-buffer-bar"},(0,a.h)("div",{class:"indeterminate-bar-primary"},(0,a.h)("span",{part:"progress",class:"progress-indeterminate"})),(0,a.h)("div",{class:"indeterminate-bar-secondary"},(0,a.h)("span",{part:"progress",class:"progress-indeterminate"})))},f=function(i,t){var n=(0,o.j)(0,i,1),r=(0,o.j)(0,t,1);return[(0,a.h)("div",{part:"progress",class:"progress",style:{transform:"scaleX(".concat(n,")")}}),(0,a.h)("div",{class:{"buffer-circles-container":!0,"ion-hide":1===r},style:{transform:"translateX(".concat(100*r,"%)")}},(0,a.h)("div",{class:"buffer-circles-container",style:{transform:"translateX(-".concat(100*r,"%)")}},(0,a.h)("div",{part:"stream",class:"buffer-circles"}))),(0,a.h)("div",{part:"track",class:"progress-buffer-bar",style:{transform:"scaleX(".concat(r,")")}})]};m.style={ios:":host{--background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.3);--progress-background:var(--ion-color-primary, #3880ff);--buffer-background:var(--background);display:block;position:relative;width:100%;contain:strict;direction:ltr;overflow:hidden}.progress,.progress-indeterminate,.indeterminate-bar-primary,.indeterminate-bar-secondary,.progress-buffer-bar{left:0;right:0;top:0;bottom:0;position:absolute;width:100%;height:100%}.buffer-circles-container,.buffer-circles{left:0;right:0;top:0;bottom:0;position:absolute}.buffer-circles{right:-10px;left:-10px;}.progress,.progress-buffer-bar,.buffer-circles-container{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 150ms linear;transition:-webkit-transform 150ms linear;transition:transform 150ms linear;transition:transform 150ms linear, -webkit-transform 150ms linear}.progress,.progress-indeterminate{background:var(--progress-background);z-index:2}.progress-buffer-bar{background:var(--buffer-background);z-index:1}.buffer-circles-container{overflow:hidden}.indeterminate-bar-primary{top:0;right:0;bottom:0;left:-145.166611%;-webkit-animation:primary-indeterminate-translate 2s infinite linear;animation:primary-indeterminate-translate 2s infinite linear}.indeterminate-bar-primary .progress-indeterminate{-webkit-animation:primary-indeterminate-scale 2s infinite linear;animation:primary-indeterminate-scale 2s infinite linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.indeterminate-bar-secondary{top:0;right:0;bottom:0;left:-54.888891%;-webkit-animation:secondary-indeterminate-translate 2s infinite linear;animation:secondary-indeterminate-translate 2s infinite linear}.indeterminate-bar-secondary .progress-indeterminate{-webkit-animation:secondary-indeterminate-scale 2s infinite linear;animation:secondary-indeterminate-scale 2s infinite linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.buffer-circles{background-image:radial-gradient(ellipse at center, var(--buffer-background) 0%, var(--buffer-background) 30%, transparent 30%);background-repeat:repeat-x;background-position:5px center;background-size:10px 10px;z-index:0;-webkit-animation:buffering 450ms infinite linear;animation:buffering 450ms infinite linear}:host(.progress-bar-reversed){-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.progress-paused) .indeterminate-bar-secondary,:host(.progress-paused) .indeterminate-bar-primary,:host(.progress-paused) .buffer-circles{-webkit-animation-play-state:paused;animation-play-state:paused}:host(.ion-color) .progress-buffer-bar{background:rgba(var(--ion-color-base-rgb), 0.3)}:host(.ion-color) .buffer-circles{background-image:radial-gradient(ellipse at center, rgba(var(--ion-color-base-rgb), 0.3) 0%, rgba(var(--ion-color-base-rgb), 0.3) 30%, transparent 30%)}:host(.ion-color) .progress,:host(.ion-color) .progress-indeterminate{background:var(--ion-color-base)}@-webkit-keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}100%{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}@keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}100%{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}@-webkit-keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);-webkit-transform:scaleX(0.661479);transform:scaleX(0.661479)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);-webkit-transform:scaleX(0.661479);transform:scaleX(0.661479)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@-webkit-keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%)}100%{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}@keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%)}100%{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}@-webkit-keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);-webkit-transform:scaleX(0.457104);transform:scaleX(0.457104)}44.15%{-webkit-animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);-webkit-transform:scaleX(0.72796);transform:scaleX(0.72796)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);-webkit-transform:scaleX(0.457104);transform:scaleX(0.457104)}44.15%{-webkit-animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);-webkit-transform:scaleX(0.72796);transform:scaleX(0.72796)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@-webkit-keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}@keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}:host{height:3px}",md:":host{--background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.3);--progress-background:var(--ion-color-primary, #3880ff);--buffer-background:var(--background);display:block;position:relative;width:100%;contain:strict;direction:ltr;overflow:hidden}.progress,.progress-indeterminate,.indeterminate-bar-primary,.indeterminate-bar-secondary,.progress-buffer-bar{left:0;right:0;top:0;bottom:0;position:absolute;width:100%;height:100%}.buffer-circles-container,.buffer-circles{left:0;right:0;top:0;bottom:0;position:absolute}.buffer-circles{right:-10px;left:-10px;}.progress,.progress-buffer-bar,.buffer-circles-container{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 150ms linear;transition:-webkit-transform 150ms linear;transition:transform 150ms linear;transition:transform 150ms linear, -webkit-transform 150ms linear}.progress,.progress-indeterminate{background:var(--progress-background);z-index:2}.progress-buffer-bar{background:var(--buffer-background);z-index:1}.buffer-circles-container{overflow:hidden}.indeterminate-bar-primary{top:0;right:0;bottom:0;left:-145.166611%;-webkit-animation:primary-indeterminate-translate 2s infinite linear;animation:primary-indeterminate-translate 2s infinite linear}.indeterminate-bar-primary .progress-indeterminate{-webkit-animation:primary-indeterminate-scale 2s infinite linear;animation:primary-indeterminate-scale 2s infinite linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.indeterminate-bar-secondary{top:0;right:0;bottom:0;left:-54.888891%;-webkit-animation:secondary-indeterminate-translate 2s infinite linear;animation:secondary-indeterminate-translate 2s infinite linear}.indeterminate-bar-secondary .progress-indeterminate{-webkit-animation:secondary-indeterminate-scale 2s infinite linear;animation:secondary-indeterminate-scale 2s infinite linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.buffer-circles{background-image:radial-gradient(ellipse at center, var(--buffer-background) 0%, var(--buffer-background) 30%, transparent 30%);background-repeat:repeat-x;background-position:5px center;background-size:10px 10px;z-index:0;-webkit-animation:buffering 450ms infinite linear;animation:buffering 450ms infinite linear}:host(.progress-bar-reversed){-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.progress-paused) .indeterminate-bar-secondary,:host(.progress-paused) .indeterminate-bar-primary,:host(.progress-paused) .buffer-circles{-webkit-animation-play-state:paused;animation-play-state:paused}:host(.ion-color) .progress-buffer-bar{background:rgba(var(--ion-color-base-rgb), 0.3)}:host(.ion-color) .buffer-circles{background-image:radial-gradient(ellipse at center, rgba(var(--ion-color-base-rgb), 0.3) 0%, rgba(var(--ion-color-base-rgb), 0.3) 30%, transparent 30%)}:host(.ion-color) .progress,:host(.ion-color) .progress-indeterminate{background:var(--ion-color-base)}@-webkit-keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}100%{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}@keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}100%{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}@-webkit-keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);-webkit-transform:scaleX(0.661479);transform:scaleX(0.661479)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);-webkit-transform:scaleX(0.661479);transform:scaleX(0.661479)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@-webkit-keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%)}100%{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}@keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%)}100%{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}@-webkit-keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);-webkit-transform:scaleX(0.457104);transform:scaleX(0.457104)}44.15%{-webkit-animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);-webkit-transform:scaleX(0.72796);transform:scaleX(0.72796)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);-webkit-transform:scaleX(0.457104);transform:scaleX(0.457104)}44.15%{-webkit-animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);-webkit-transform:scaleX(0.72796);transform:scaleX(0.72796)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@-webkit-keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}@keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}:host{height:4px}"}}}])}();