(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{L6id:function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),o=function(){return function(){}}(),e=u("pMnS"),i=u("oBZk"),r=u("ZZ/e"),b=u("Ip0R"),c=u("fvl4"),a=function(){function n(n){this.firestore=n}return n.prototype.read_Students=function(){return this.firestore.collection("users").snapshotChanges()},n.ngInjectableDef=t.Mb({factory:function(){return new n(t.Nb(c.a))},token:n,providedIn:"root"}),n}(),d=function(){function n(n){this.crudService=n}return n.prototype.ngOnInit=function(){var n=this;this.crudService.read_Students().subscribe(function(l){n.students=l.map(function(n){return{id:n.payload.doc.id,isEdit:!1,Name:n.payload.doc.data().Name,Age:n.payload.doc.data().Age,Address:n.payload.doc.data().Address}}),console.log(n.students)})},n}(),s=t.rb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}"]],data:{}});function p(n){return t.Jb(0,[(n()(),t.tb(0,0,null,null,6,"ion-card",[],null,null,null,i.v,i.c)),t.sb(1,49152,null,0,r.j,[t.h,t.k,t.z],null,null),(n()(),t.tb(2,0,null,0,4,"ion-card-header",[],null,null,null,i.t,i.d)),t.sb(3,49152,null,0,r.l,[t.h,t.k,t.z],null,null),(n()(),t.tb(4,0,null,0,2,"ion-card-title",[],null,null,null,i.u,i.e)),t.sb(5,49152,null,0,r.n,[t.h,t.k,t.z],null,null),(n()(),t.Ib(6,0,["",""]))],null,function(n,l){n(l,6,0,l.context.$implicit.id)})}function f(n){return t.Jb(0,[(n()(),t.tb(0,0,null,null,6,"ion-header",[],null,null,null,i.x,i.g)),t.sb(1,49152,null,0,r.y,[t.h,t.k,t.z],null,null),(n()(),t.tb(2,0,null,0,4,"ion-toolbar",[],null,null,null,i.H,i.q)),t.sb(3,49152,null,0,r.yb,[t.h,t.k,t.z],null,null),(n()(),t.tb(4,0,null,0,2,"ion-title",[],null,null,null,i.G,i.p)),t.sb(5,49152,null,0,r.wb,[t.h,t.k,t.z],null,null),(n()(),t.Ib(-1,0,[" Ionic 4 Firestore CRUD Operation Demo "])),(n()(),t.tb(7,0,null,null,3,"ion-content",[["padding",""]],null,null,null,i.w,i.f)),t.sb(8,49152,null,0,r.r,[t.h,t.k,t.z],null,null),(n()(),t.ib(16777216,null,0,1,null,p)),t.sb(10,278528,null,0,b.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,10,0,l.component.students)},null)}function h(n){return t.Jb(0,[(n()(),t.tb(0,0,null,null,1,"app-home",[],null,null,null,f,s)),t.sb(1,114688,null,0,d,[a],null,null)],function(n,l){n(l,1,0)},null)}var C=t.pb("app-home",d,h,{},{},[]),g=u("gIcY"),m=u("ZYCi");u.d(l,"HomePageModuleNgFactory",function(){return k});var k=t.qb(o,[],function(n){return t.Bb([t.Cb(512,t.j,t.bb,[[8,[e.a,C]],[3,t.j],t.x]),t.Cb(4608,b.j,b.i,[t.u,[2,b.p]]),t.Cb(4608,g.c,g.c,[]),t.Cb(4608,r.a,r.a,[t.z,t.g]),t.Cb(4608,r.Cb,r.Cb,[r.a,t.j,t.q]),t.Cb(4608,r.Fb,r.Fb,[r.a,t.j,t.q]),t.Cb(1073742336,b.b,b.b,[]),t.Cb(1073742336,g.b,g.b,[]),t.Cb(1073742336,g.a,g.a,[]),t.Cb(1073742336,r.Ab,r.Ab,[]),t.Cb(1073742336,m.o,m.o,[[2,m.t],[2,m.m]]),t.Cb(1073742336,o,o,[]),t.Cb(1024,m.k,function(){return[[{path:"",component:d}]]},[])])})}}]);