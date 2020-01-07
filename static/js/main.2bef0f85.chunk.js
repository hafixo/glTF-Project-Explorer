(this["webpackJsonpproject-explorer"]=this["webpackJsonpproject-explorer"]||[]).push([[0],{28:function(e,t,r){e.exports=r(49)},39:function(e,t,r){},40:function(e,t,r){},41:function(e,t,r){},42:function(e,t,r){},43:function(e,t,r){},44:function(e,t,r){},45:function(e,t,r){},46:function(e,t,r){},49:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(14),l=r.n(c),u=r(9),i=r(7),s=r(23),o=r(27),f=(r(39),r(40),r(41),function(e){var t=e.header,r=e.items;return r?a.a.createElement("div",{className:"project-card-details"},a.a.createElement("h2",null,t),a.a.createElement("ul",null,r.map((function(e){return a.a.createElement("li",{key:e},e)})))):null}),E=function(e){var t=e.project;return a.a.createElement("h1",null,t.link?a.a.createElement("a",{href:t.link},t.name):t.name)},p=(r(42),r(6)),b=r(24),m=r.n(b),d=r(25),O=r.n(d),g=function(e){var t=e.className,r=e.body,c=Object(n.useState)({__html:""}),l=Object(p.a)(c,2),u=l[0],i=l[1];return Object(n.useEffect)((function(){var e;(e=r,new Promise((function(t,r){m()(e,(function(e,n){e&&r(e),t(O.a.sanitize(n))}))}))).then((function(e){return i({__html:e})}))}),[r]),a.a.createElement("div",{className:t,dangerouslySetInnerHTML:u})},S=function(e){return e&&e.length>0},v=function(e){var t=e.project;return a.a.createElement("div",{className:"project-card"},a.a.createElement(E,{project:t}),a.a.createElement("div",{className:"project-card-content"},t.description&&a.a.createElement(g,{className:"project-card-description",body:t.description}),S(t.task)&&a.a.createElement(f,{header:"Task",items:t.task}),S(t.license)&&a.a.createElement(f,{header:"License",items:t.license}),S(t.language)&&a.a.createElement(f,{header:"Supported Languages",items:t.language}),S(t.type)&&a.a.createElement(f,{header:"Type",items:t.type}),S(t.inputs)&&a.a.createElement(f,{header:"Input Methods",items:t.inputs}),S(t.outputs)&&a.a.createElement(f,{header:"Output Methods",items:t.outputs})))};var j,T,y=Object(u.b)((function(e){return{projects:e.results.values}}))((function(e){var t=e.projects;return a.a.createElement(a.a.Fragment,null,t&&t.map((function(e){return a.a.createElement(v,{project:e,key:e.id})})))}));function h(e,t,r,n,a,c){return{type:j.UPDATE_FILTERS,tasks:e,types:t,licenses:r,languages:n,tags:a,titleSubstring:c}}function F(e){return e=new Set(e),{type:j.UPDATE_SELECTED_FILTERS,selected:e}}function P(e,t){return{dimension:e,value:t}}!function(e){e.UPDATE_FILTERS="UPDATE_FILTERS",e.UPDATE_SELECTED_FILTERS="UPDATE_SELECTED_FILTERS",e.UPDATE_TITLE_SUBSTRING_FILTER="UPDATE_TITLE_SUBSTRING_FILTER",e.PERFORM_SEARCH="PERFORM_SEARCH"}(j||(j={})),function(e){e.Task="task",e.Type="type",e.License="license",e.Language="language",e.Tags="tags"}(T||(T={}));var R=function(e){switch(e.dimension){case T.Type:return"type-filter";case T.Task:return"task-filter";case T.License:return"license-filter";case T.Language:return"language-filter";case T.Tags:return"tags-filter";default:return""}},w=(r(43),function(e){var t=e.filters,r=e.label,c=e.addAction,l=Object(n.useState)(!1),u=Object(p.a)(l,2),i=u[0],s=u[1],o=Object(n.useCallback)((function(){s(!i)}),[i,s]);return a.a.createElement(a.a.Fragment,null,t.length>0&&a.a.createElement("div",{className:"filter-bar-options"},a.a.createElement("h2",{onClick:o},r," ",i?"\u25b2":"\u25bc"),a.a.createElement("div",{className:i?"":"hide"},a.a.createElement("ul",null,t.map((function(e){return a.a.createElement("li",{key:e.value},a.a.createElement("button",{className:R(e),onClick:c(e)},e.value))}))),a.a.createElement("p",{className:"instructions"},"Click to add"))))}),_=(r(44),r(45),function(e){var t=e.selectedFilters,r=e.removeAction,n=e.resetAction,c=Array.from(t);return a.a.createElement("div",{className:"filter-bar-selected"},a.a.createElement("h2",null,"Selected Filters"),a.a.createElement("ul",null,c.length>0?a.a.createElement(a.a.Fragment,null,c.map((function(e){return a.a.createElement("li",{key:e.value},a.a.createElement("button",{className:R(e),onClick:r(e)},e.value," ",a.a.createElement("span",{className:"clear-cross"},"\u2715")))})),a.a.createElement("li",null,a.a.createElement("button",{className:"clear-all-filters",onClick:n},"Clear All Filters"))):a.a.createElement("li",null,a.a.createElement("p",{className:"no-filters-message"},"No filters selected."))))});var L={updateSelectedFilters:F},k=Object(u.b)((function(e){var t=e.filters;return{taskFilters:t.tasks,typeFilters:t.types,licenseFilters:t.licenses,languageFilters:t.languages,tagFilters:t.tags,selectedFilters:t.selected}}),L)((function(e){var t=e.taskFilters,r=e.typeFilters,c=e.licenseFilters,l=e.languageFilters,u=e.selectedFilters,i=e.tagFilters,s=e.updateSelectedFilters,o=Object(n.useState)(!1),f=Object(p.a)(o,2),E=f[0],b=f[1],m=Object(n.useCallback)((function(){b(!E)}),[E,b]),d=Object(n.useCallback)((function(e){return function(t){u.add(e),s(u)}}),[u,s]),O=Object(n.useCallback)((function(e){return function(t){u.delete(e),s(u)}}),[u,s]),g=Object(n.useCallback)((function(e){u.clear(),s(u)}),[u,s]);return a.a.createElement("div",{className:"filter-bar"},a.a.createElement("div",{className:"filter-bar-header"},a.a.createElement("h1",{onClick:m},"Filter Results ",E?"\u25b2":"\u25bc")),a.a.createElement("div",{className:E?"filter-bar-expando":"hide"},a.a.createElement(_,{selectedFilters:u,removeAction:O,resetAction:g}),a.a.createElement(w,{filters:i,label:"Filter by Tag",addAction:d}),a.a.createElement(w,{filters:t,label:"Filter by Task",addAction:d}),a.a.createElement(w,{filters:r,label:"Filter by Type",addAction:d}),a.a.createElement(w,{filters:c,label:"Filter by License",addAction:d}),a.a.createElement(w,{filters:l,label:"Filter by Language",addAction:d})))}));r(46);var C,U,D={updateTitleSubstringFilter:function(e){return{type:j.UPDATE_TITLE_SUBSTRING_FILTER,titleSubstring:e}}},A=Object(u.b)((function(e){return{titleSubstring:e.filters.titleSubstring}}),D)((function(e){var t=e.titleSubstring,r=e.updateTitleSubstringFilter,c=Object(n.useCallback)((function(e){var t=e.target.value;r(t)}),[r]);return a.a.createElement("div",{className:"search-bar"},a.a.createElement("h1",null,"Search by Title"),a.a.createElement("input",{placeholder:"Type to search",value:t,onChange:c}))})),x=r(26),I=r.n(x),N=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"header"},a.a.createElement("img",{src:"./glTF_RGB_June16.svg",alt:"glTF"}),a.a.createElement("h1",null,"Project Explorer")),a.a.createElement("div",{className:"content"},a.a.createElement(A,null),a.a.createElement(k,null),a.a.createElement(y,null)),a.a.createElement(I.a,{position:"right",color:"white",href:"https://github.com/KhronosGroup/glTF-Project-Explorer"},"Fork us on GitHub"))},J=r(12);function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(r,!0).forEach((function(t){Object(J.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(r,!0).forEach((function(t){Object(J.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}!function(e){e.PROJECTS_REQUESTED="PROJECTS_REQUESTED",e.PROJECTS_SUCCESSFUL="PROJECTS_SUCCESSFUL",e.PROJECTS_FAILED="PROJECTS_FAILED"}(C||(C={})),function(e){e.RECALCULATE_RESULTS="RECALCULATE_RESULTS",e.STORE_RESULTS="STORE_RESULTS"}(U||(U={}));var z=Object(i.combineReducers)({projects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetchingProjects:!1,values:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C.PROJECTS_REQUESTED:return G({},e,{isFetchingProjects:!0});case C.PROJECTS_SUCCESSFUL:return G({},e,{values:t.projects,isFetchingProjects:!1});case C.PROJECTS_FAILED:return G({},e,{isFetchingProjects:!1});default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{tasks:[],types:[],licenses:[],languages:[],tags:[],titleSubstring:"",selected:new Set},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.UPDATE_FILTERS:return Q({},e,{tasks:t.tasks,types:t.types,licenses:t.licenses,languages:t.languages,tags:t.tags,titleSubstring:t.titleSubstring});case j.UPDATE_SELECTED_FILTERS:return Q({},e,{selected:t.selected});case j.UPDATE_TITLE_SUBSTRING_FILTER:return Q({},e,{titleSubstring:t.titleSubstring});default:return e}},results:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{values:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U.STORE_RESULTS:return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(r,!0).forEach((function(t){Object(J.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{values:t.results});default:return e}}}),K=r(5),W=r.n(K),q=r(4);function V(){return fetch("./data/glTF-projects-data.json").then((function(e){return e.json()})).catch((function(e){return console.error("Error fetching data. Reason: ".concat(e))}))}function X(e){return{type:C.PROJECTS_SUCCESSFUL,projects:e}}var Y=W.a.mark($),Z=W.a.mark(ee);function $(){var e,t;return W.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(q.b)(V);case 3:return e=r.sent,t=0,r.next=7,Object(q.e)(X(e.map((function(e){return e.id=t++,e}))));case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(0),r.next=13,Object(q.e)((n=r.t0,{type:C.PROJECTS_FAILED,error:n}));case 13:case"end":return r.stop()}var n}),Y,null,[[0,9]])}function ee(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.g)(C.PROJECTS_REQUESTED,$);case 2:case"end":return e.stop()}}),Z)}var te=r(13),re=function(e){return e.projects.values},ne=W.a.mark(fe),ae=W.a.mark(Ee),ce="";function le(e){return Object(te.a)(new Set(e.flatMap((function(e){return e.task})).filter((function(e){return e})))).map((function(e){return P(T.Task,e)}))}function ue(e){return Object(te.a)(new Set(e.flatMap((function(e){return e.type})).filter((function(e){return e})))).map((function(e){return P(T.Type,e)}))}function ie(e){return Object(te.a)(new Set(e.flatMap((function(e){return e.license})).filter((function(e){return e})))).map((function(e){return P(T.License,e)}))}function se(e){return Object(te.a)(new Set(e.flatMap((function(e){return e.language})).filter((function(e){return e})))).map((function(e){return P(T.Language,e)}))}function oe(e){return Object(te.a)(new Set(e.flatMap((function(e){return e.tags})).filter((function(e){return e})))).map((function(e){return P(T.Tags,e)}))}function fe(){var e,t,r,n,a,c,l,u;return W.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Object(q.f)(re);case 2:return e=i.sent,i.next=5,Object(q.a)([Object(q.b)(le,e),Object(q.b)(ue,e),Object(q.b)(ie,e),Object(q.b)(se,e),Object(q.b)(oe,e)]);case 5:return t=i.sent,r=Object(p.a)(t,5),n=r[0],a=r[1],c=r[2],l=r[3],u=r[4],i.next=14,Object(q.e)(h(n,a,c,l,u,ce));case 14:return i.next=16,Object(q.e)(F(new Set));case 16:case"end":return i.stop()}}),ne)}function Ee(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.g)(C.PROJECTS_SUCCESSFUL,fe);case 2:case"end":return e.stop()}}),ae)}var pe=r(19),be=function(e){return e.filters},me=Object(pe.a)(be,(function(e){return e.selected})),de=Object(pe.a)(be,(function(e){return e.titleSubstring}));function Oe(e){return{type:U.STORE_RESULTS,results:e}}var ge=W.a.mark(Fe),Se=W.a.mark(Pe),ve=["Khronos Official","Staff Picks"],je="UNTAGGED";function Te(e,t){if(t.size<1)return e;var r=Object.values(T),n=Array.from(t).reduce((function(e,t){return e[t.dimension]||(e[t.dimension]=[]),e[t.dimension].push(t),e}),{});return e.filter((function(e){var t=!1,a=!0,c=!1,l=void 0;try{var u=function(){var r=i.value;return n[r]?(t=n[r].some((function(t){return!!e[r]&&e[r].some((function(e){return e===t.value}))})))?void 0:"break":"continue"};e:for(var i,s=r[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){switch(u()){case"continue":continue;case"break":break e}}}catch(o){c=!0,l=o}finally{try{a||null==s.return||s.return()}finally{if(c)throw l}}return t}))}function ye(e,t){if(!t)return e;var r=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(r)}))}function he(e){var t={},r=!0,n=!1,a=void 0;try{for(var c,l=ve[Symbol.iterator]();!(r=(c=l.next()).done);r=!0){t[c.value]=[]}}catch(v){n=!0,a=v}finally{try{r||null==l.return||l.return()}finally{if(n)throw a}}t[je]=[];var u=!0,i=!1,s=void 0;try{for(var o,f=e[Symbol.iterator]();!(u=(o=f.next()).done);u=!0){var E=o.value;if(E.tags){var b=!0,m=!1,d=void 0;try{for(var O,g=E.tags[Symbol.iterator]();!(b=(O=g.next()).done);b=!0){var S=O.value;t[S]?t[S].push(E):t[je].push(E)}}catch(v){m=!0,d=v}finally{try{b||null==g.return||g.return()}finally{if(m)throw d}}}else t[je].push(E)}}catch(v){i=!0,s=v}finally{try{u||null==f.return||f.return()}finally{if(i)throw s}}return Object.entries(t).flatMap((function(e){var t=Object(p.a)(e,2);t[0];return t[1].sort((function(e,t){return e.name.localeCompare(t.name)}))}))}function Fe(){var e,t,r,n,a,c,l,u;return W.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Object(q.a)([Object(q.f)(re),Object(q.f)(me),Object(q.f)(de)]);case 2:return e=i.sent,t=Object(p.a)(e,3),r=t[0],n=t[1],a=t[2],c=Te(r,n),l=ye(c,a),u=he(l),i.next=12,Object(q.e)(Oe(u));case 12:case"end":return i.stop()}}),ge)}function Pe(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.g)(j.UPDATE_SELECTED_FILTERS,Fe);case 2:return e.next=4,Object(q.c)(500,j.UPDATE_TITLE_SUBSTRING_FILTER,Fe);case 4:case"end":return e.stop()}}),Se)}var Re=W.a.mark(_e),we=W.a.mark(Le);function _e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.e)({type:C.PROJECTS_REQUESTED});case 2:case"end":return e.stop()}}),Re)}function Le(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.d)(_e);case 2:return e.next=4,Object(q.d)(ee);case 4:return e.next=6,Object(q.d)(Ee);case 6:return e.next=8,Object(q.d)(Pe);case 8:case"end":return e.stop()}}),we)}var ke=Object(o.a)({}),Ce=Object(i.createStore)(z,{},Object(s.composeWithDevTools)(Object(i.applyMiddleware)(ke)));ke.run(Le),l.a.render(a.a.createElement(u.a,{store:Ce},a.a.createElement(N,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.2bef0f85.chunk.js.map