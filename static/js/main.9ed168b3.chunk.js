(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t(44)},23:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var s=t(0),r=t.n(s),n=t(15),i=t.n(n),l=(t(23),t(1)),c=t(2),o=t(4),d=t(3),m=t(5),p=t(16),u=function(e){function a(){var e,t;Object(l.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(t=Object(o.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).updateState=function(e){""!==e.data&&(t.setState({upgrade:e.data}),console.log(e.data))},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){if(!1===this.props.noPlayers){var e="class"+this.props.player.class,a=this.props.player.mean,t=this.props.player.base_dps_mean,s=a-t;0===t&&(t=1);var n=s/t*100,i=this.props.boundaryH,l=this.props.boundaryL,c=n-l;c=100*(.7*(c/=i-l)+.3),isNaN(c)&&(c=70,c=65,console.log(.3));var o="";switch(this.props.value+1){case 1:o="rank1";break;case 2:o="rank2";break;case 3:o="rank3"}return r.a.createElement("div",{className:"PlayerListItem rounded"},r.a.createElement("div",{className:"PlayerWrapper unselectable"},r.a.createElement("div",{className:"PlayerHeader align-items-center row p-2"},r.a.createElement("div",{className:"col-3 align-self-center"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",{className:"PlayerRank text-center pt-1 ml-2 "+o},this.props.value+1),r.a.createElement("a",{className:"armoryLink",href:"https://worldofwarcraft.com/en-us/character/"+this.props.player.realm+"/"+this.props.player.name,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col d-flex align-middle align-items-center"},r.a.createElement("img",{className:"PlayerImage rounded mr-2 align-items-center ",alt:"",src:"http://render-"+this.props.player.region+".worldofwarcraft.com/character/"+this.props.player.thumbnail}),r.a.createElement("h5",{className:"PlayerName pt-1 "+e},this.props.player.name)))))),r.a.createElement("div",{className:"col-4 align-self-center"},r.a.createElement("div",{className:"row justify-content-between px-3"},r.a.createElement("h5",{className:"PlayerSim pt-1 mx-1 text-muted "},t.toFixed(0)+" dps"),r.a.createElement("i",{class:"fas fa-arrow-right text-muted pt-2"}),r.a.createElement("h5",{className:"PlayerSim pt-1 mx-1 text-muted "},a.toFixed(0)+" dps"),r.a.createElement("h5",{className:"PlayerSim pt-1 mx-1 ml-2 text-success "},"+"+s.toFixed(0)+" dps"))),r.a.createElement("div",{className:"col"}),r.a.createElement("div",{className:"col-3 align-self-center mr-3",height:"20px"},r.a.createElement("svg",{className:"graphSVG",width:"100%",height:"12px"},r.a.createElement("rect",{className:"svgLine1",width:"100%",y:"30%",height:"2px",rx:"2",ry:"2"}),r.a.createElement("rect",{className:"svgLine2",x:c-30+"%",width:"30%",y:"27%",height:"3px",rx:"2",ry:"2"}),r.a.createElement("circle",{className:"svgCircle",r:"4",cx:c-15+"%",cy:"42%"}))),r.a.createElement("div",{className:"col"}),r.a.createElement("div",{className:"col-1"},r.a.createElement("div",{className:"row justify-content-end mr-1"},r.a.createElement("h4",{className:"text-success percentText"},n.toFixed(2)+"%"))))))}return r.a.createElement("div",{className:"PlayerListItem"},r.a.createElement("div",{className:"PlayerWrapper pr-auto w-50"},r.a.createElement("div",{className:"PlayerHeader d-flex align-items-center py-2"},r.a.createElement("h5",{className:"pl-3 pt-1 text-muted"},"No Player Data"))))}}]),a}(s.Component),h=t(7),g=t.n(h),y=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(d.a)(a).call(this))).sortMyArray=function(){if(t.state.upgrades!==[]){var e=Object(p.a)(t.state.upgrades);e.sort(function(e,a){return e.mean<a.mean?1:-1}),t.setState({upgrades:e})}for(var a=0;a<t.state.upgrades.length;a++){var s=t.state.upgrades[a].base_dps_mean,r=(t.state.upgrades[a].mean-s)/s*100;r>t.state.boundaryH&&t.setState({boundaryH:r}),r<t.state.boundaryL&&t.setState({boundaryL:r}),console.log(t.state.upgrades[a].mean)}},t.componentDidMount=function(){for(var e=[],a=[],s=0;s<t.props.players.length;s++){var r="http://127.0.0.1:3000/1/upgrade/"+t.props.players[s].region+"/"+t.props.players[s].realm+"/"+t.props.players[s].name+"/"+t.props.item.id;a.push(r)}for(var n=0;n<a.length;n++)e.push(g.a.get(a[n],{crossdomain:!0}));g.a.all(e).then(g.a.spread(function(){for(var e=arguments.length,a=new Array(e),s=0;s<e;s++)a[s]=arguments[s];for(var r=0;r<a.length;r++)if(""!==a[r].data){var n=t.state.upgrades.slice();n.push(a[r].data),t.setState({upgrades:n}),console.log(a[r].data)}t.sortMyArray()}))},t.state={upgrades:[],boundaryH:0,boundaryL:100},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=[];console.log(e);for(var a=0;a<this.state.upgrades.length;a++){for(var t=0;t<this.props.players.length;t++)this.props.players[t].name===this.state.upgrades[a].name&&(this.props.players[t],console.log("Found player "+this.props.players[t].name));e.push(r.a.createElement(u,{player:this.state.upgrades[a],boundaryH:this.state.boundaryH,boundaryL:this.state.boundaryL,key:a,value:a,item:this.props.item,noPlayers:!1}))}return 0===e.length&&(console.log("No players!"),e.push(r.a.createElement(u,{player:null,key:a,value:a,item:this.props.item,noPlayers:!0}))),r.a.createElement("div",{className:"col-12 playerScroller rounded"},r.a.createElement("div",{className:"PlayerList rounded-bottom m-auto"},e))}}]),a}(s.Component),f=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(d.a)(a).call(this))).onHeaderClick=function(e){t.setState({collapsed:!t.state.collapsed})},t.componentDidMount=function(){for(var e=[],a=0;a<t.props.players.length;a++){var s="http://127.0.0.1:3000/1/item/"+t.props.loot.id;e.push(s)}g.a.get("http://127.0.0.1:3000/1/item/"+t.props.loot.id,{crossdomain:!0}).then(function(e){if(console.log(e),""!==e.data){var a=e.data;t.setState({itemData:a}),console.log(e.data)}})},t.state={collapsed:!0,itemData:[{icon:"",id:"123456",itemLevel:0,name:".",quality:1}]},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"LootHeader row bg-dark m-2 rounded"},r.a.createElement("div",{className:"col unselectable d-flex align-items-start p-1",onClick:this.onHeaderClick},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 d-flex align-items-center pl-3"},r.a.createElement("a",{className:"lootLink d-flex align-items-center",href:"#","data-wowhead":"item="+this.props.loot.id+"&ilvl=415","data-wh-rename-link":"true"},r.a.createElement("img",{className:"LootImage mr-2 ml-1 my-1 rounded",alt:"",src:"https://render-us.worldofwarcraft.com/icons/56/"+this.state.itemData.icon+".jpg"}),r.a.createElement("h4",{className:"LootName itemText"},"["+this.state.itemData.name+"]"))))),this.state.collapsed?null:r.a.createElement(y,{players:this.props.players,item:this.props.loot}))}}]),a}(s.Component),v=function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){for(var e=[],a=0;a<this.props.loot.length;a++)e.push(r.a.createElement(f,{loot:this.props.loot[a],players:this.props.players,key:a}));return r.a.createElement("div",{className:"LootList rounded-bottom m-auto pb-1 pt-2 px-2"},e)}}]),a}(s.Component),b=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(d.a)(a).call(this))).onHeaderClick=function(e){t.setState({collapsed:!t.state.collapsed})},t.state={collapsed:!0},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"BossWrapper align-items-center"},r.a.createElement("div",{className:"BossHeader unselectable bg-dark rounded d-flex pt-2 px-2 mt-2 mx-2 align-items-center",onClick:this.onHeaderClick},r.a.createElement("img",{className:"BossImage",alt:"",src:this.props.boss.image}),r.a.createElement("h3",{className:"BossName text-light align-middle"},this.props.boss.name)),this.state.collapsed?null:r.a.createElement(v,{loot:this.props.boss.loot,players:this.props.players}))}}]),a}(s.Component),E=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(d.a)(a).call(this))).onHeaderClick=function(e){t.setState({collapsed:!t.state.collapsed})},t.state={collapsed:!0},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"BossWrapper align-items-center"},r.a.createElement("div",{className:"PageHeader unselectable bg-dark rounded d-flex mt-2 mx-2 align-items-center",onClick:this.onHeaderClick},r.a.createElement("div",{className:"container px-0"},r.a.createElement("div",{className:"row w-100 align-self-center d-flex justify-content-between mx-0"},r.a.createElement("div",{className:"col-2 align-self-end px-1"},r.a.createElement("img",{className:"yeetGif",src:"src/dance.gif",height:"32px"})),r.a.createElement("div",{className:"col-8 align-self-center"},r.a.createElement("div",{className:"input-group m-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("button",{class:"btn btn-outline-secondary searchBar",type:"button"},r.a.createElement("i",{className:"fas fa-arrow-down searchIcon"}))),r.a.createElement("input",{type:"text",className:"form-control searchBar text-light",placeholder:"Yeet","aria-label":"Search"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{class:"btn btn-outline-secondary searchBar",type:"button"},r.a.createElement("i",{className:"fas fa-search searchIcon"}))))),r.a.createElement("div",{className:"col"}),r.a.createElement("div",{className:"col-auto px-0 align-self-end px-1"},r.a.createElement("img",{className:"yeetGif",src:"src/ytho.gif",width:"36px"}))))))}}]),a}(s.Component),N=function(e){function a(){var e,t;Object(l.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(t=Object(o.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={bosses:[{name:"Champion of the Light",image:"src/champion.png",loot:[{id:165517},{id:165501},{id:165550},{id:165519},{id:165549},{id:165586},{id:165919},{id:165834},{id:165514},{id:165533},{id:165921},{id:165584},{id:165569}]},{name:"Jadefire Masters",image:"src/jadefire.png",loot:[{id:165565},{id:165500},{id:165521},{id:165552},{id:165531},{id:165548},{id:165568},{id:165503},{id:165516},{id:165540},{id:165587}]},{name:"Grong, the Revenant",image:"src/grong.png",loot:[{id:165920},{id:165534},{id:165588},{id:165922},{id:165582},{id:165515},{id:165574},{id:165589},{id:165499},{id:165513},{id:165535},{id:165555},{id:165551},{id:165525}]},{name:"Opulence",image:"src/opulence.png",loot:[{id:165524},{id:165591},{id:165541},{id:165561},{id:165526},{id:165821},{id:165818},{id:165573},{id:165820},{id:165592},{id:165538},{id:165593},{id:165571},{id:165504}]},{name:"Conclave of the Chosen",image:"src/conclave.png",loot:[{id:165594},{id:165560},{id:165595},{id:166418},{id:165532},{id:165579},{id:165502},{id:165512},{id:165507},{id:165599},{id:165562},{id:165833}]},{name:"King Rastakhan",image:"src/king.png",loot:[{id:165832},{id:165577},{id:165536},{id:165597},{id:165596},{id:165537},{id:165578},{id:165523},{id:165558},{id:165567},{id:165498}]},{name:"High Tinker Mekkatorque",image:"src/tinker.png",loot:[{id:165825},{id:165497},{id:165924},{id:165508},{id:165522},{id:165830},{id:165580},{id:165598},{id:165543},{id:165600},{id:165572}]},{name:"Stormwall Blockade",image:"src/blockade.png",loot:[{id:165585},{id:165822},{id:165602},{id:165590},{id:165528},{id:165557},{id:165603},{id:165546},{id:165601},{id:165556},{id:165923},{id:165819},{id:165506}]},{name:"Lady Jaina Proudmoore",image:"src/jaina.png",loot:[{id:165824},{id:165604},{id:165527},{id:165570},{id:165831},{id:165583},{id:165823},{id:165559},{id:165542},{id:165566},{id:165505},{id:165576}]}],players:[]},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get("http://127.0.0.1:3000/1/character",{crossdomain:!0}).then(function(a){return e.setState({players:a.data})}),console.log("got player list")}},{key:"render",value:function(){for(var e=[],a=0;a<this.state.bosses.length;a++)e.push(r.a.createElement(b,{boss:this.state.bosses[a],players:this.state.players,updatePlayerList:this.updatePlayerList,key:a}));return r.a.createElement("div",{className:"container align-items-center"},r.a.createElement(E,{bosses:this.state.bosses,players:this.state.players}),e)}}]),a}(s.Component);i.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[17,2,1]]]);
//# sourceMappingURL=main.9ed168b3.chunk.js.map