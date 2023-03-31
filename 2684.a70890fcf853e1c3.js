"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2684],{2684:(P,g,i)=>{i.r(g),i.d(g,{Tab2Page:()=>x});var f=i(5861),o=i(6114),c=i(433),m=i(6895),l=i(6953);const T=(0,i(7423).fo)("Preferences",{web:()=>i.e(8359).then(i.bind(i,8359)).then(s=>new s.PreferencesWeb)});var e=i(8256);function b(s,d){if(1&s){const t=e.EpF();e.TgZ(0,"ion-item")(1,"ion-checkbox",6),e.NdJ("ionChange",function(a){const h=e.CHM(t).$implicit,u=e.oxw();return e.KtG(u.onCheckboxChange(a,h))}),e.TgZ(2,"ion-label"),e._uU(3),e.qZA()(),e._UZ(4,"ion-reorder",7),e.qZA()}if(2&s){const t=d.$implicit;e.xp6(3),e.Oqu(t)}}let x=(()=>{class s{constructor(){this.textInput="Olive the dog, oh what a sight,\n  With fur as soft as a cloud in flight.\n  Her wagging tail and playful bark,\n  Could light up even the dreariest of dark.\n  \n  She's always ready for a game,\n  Fetching a ball, she's never lame.\n  She'll run and jump, and never tire,\n  Her energy could never expire.\n  \n  But when the day is done and night draws near,\n  Olive will cuddle up, she has no fear.\n  For she knows that she's loved and adored,\n  And her family will always be there to afford.\n  \n  Olive, the faithful and loyal friend,\n  A companion that will stick to the end.\n  Through thick and thin, she'll be by your side,\n  A dog like Olive, is hard to find.\n  ",this.parsedLines=[],this.randomizedLines=[],this.isChecked=[],this.checkedValues=[]}onCheckboxChange(t,n){t.detail.checked?(console.log(n+" is checked."),this.checkedValues.push(n),console.log(this.checkedValues)):(console.log(n+" is unchecked."),this.checkedValues=this.checkedValues.filter(a=>a!==n),console.log(this.checkedValues))}getCheckedValue(){console.log(this.isChecked)}saveArrayToFileSystem(t){return(0,f.Z)(function*(){const n=new Date,S=`${n.getFullYear()}${String(n.getMonth()+1).padStart(2,"0")}${String(n.getDate()).padStart(2,"0")}_${String(n.getHours()).padStart(2,"0")}${String(n.getMinutes()).padStart(2,"0")}${String(n.getSeconds()).padStart(2,"0")}.txt`,k=JSON.stringify(t);if("granted"===(yield l.fy.requestPermissions()).publicStorage){const p=yield l.fy.writeFile({path:S,data:k,directory:l.tP.Documents,encoding:l.ez.UTF8});yield T.set({key:"filename",value:p.uri}),console.log(`File saved to ${p.uri}`)}else console.log("Permission to write to filesystem denied")})()}saveStanza(){var t=this;return(0,f.Z)(function*(){t.saveArrayToFileSystem(t.checkedValues)})()}parseInput(){this.parsedLines=this.textInput.split("\n")}randomizeLines(){const t=this.textInput.split("\n").filter(n=>""!==n.trim());for(let n=t.length-1;n>0;n--){const a=Math.floor(Math.random()*(n+1));[t[n],t[a]]=[t[a],t[n]]}this.randomizedLines=t}handleReorder(t){console.log("Dragged from index",t.detail.from,"to",t.detail.to),t.detail.complete()}logToConsole(t){console.log(t)}ngOnInit(){this.randomizeLines()}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-tab2"]],standalone:!0,features:[e.jDz],decls:19,vars:6,consts:[[3,"translucent"],[1,"center",3,"fullscreen"],["id","textAreaInput","type","text","aria-label","Input poem","placeholder","Your text here, split by line",3,"ngModel","autoGrow","ngModelChange","input"],[3,"click"],[3,"disabled","ionItemReorder"],[4,"ngFor","ngForOf"],[3,"ionChange"],["slot","end"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3," Line Mash "),e.qZA()()(),e.TgZ(4,"ion-content",1)(5,"ion-item")(6,"h1"),e._uU(7,"Enter your lines below"),e.qZA()(),e.TgZ(8,"ion-item")(9,"ion-textarea",2),e.NdJ("ngModelChange",function(r){return n.textInput=r})("input",function(){return n.randomizeLines()}),e.qZA()(),e.TgZ(10,"ion-item")(11,"h2"),e._uU(12,"Randomized Lines"),e.qZA(),e.TgZ(13,"ion-button",3),e.NdJ("click",function(){return n.saveStanza()}),e._uU(14,"Save Stanza"),e.qZA()(),e.TgZ(15,"ion-item")(16,"ion-list")(17,"ion-reorder-group",4),e.NdJ("ionItemReorder",function(r){return n.handleReorder(r)}),e.YNc(18,b,5,1,"ion-item",5),e.qZA()()()()),2&t&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(5),e.Q6J("ngModel",n.textInput)("autoGrow",!0),e.xp6(8),e.Q6J("disabled",!1),e.xp6(1),e.Q6J("ngForOf",n.randomizedLines))},dependencies:[o.Pc,o.YG,o.nz,o.W2,o.Gu,o.Ie,o.Q$,o.q_,o.Nh,o.oz,o.g2,o.wd,o.sr,o.w,o.j9,c.u5,c.JJ,c.On,m.ez,m.sg],styles:[".center[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}#textAreaInput[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content;width:60vw}"]}),s})()}}]);