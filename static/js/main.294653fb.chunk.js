(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(47)},24:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),l=a(16),n=a.n(l),i=(a(24),a(1)),o=a(2),c=a(4),p=a(3),m=a(5),d=a(8),h=a(17),u=a.n(h),g=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(p.a)(t).call(this))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"rbTooltip rounded bg-dark"},r.a.createElement("div",{className:"d-flex col-auto m-2  justify-self-center "},r.a.createElement("div",{className:"row mx-auto text-light rbttText"},r.a.createElement(u.a,{fromNow:!0},this.props.player.lastModified))))}}]),t}(s.Component),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this))).updateState=function(e){""!==e.data&&a.setState({upgrade:e.data})},a.raidbotsEnter=function(){a.setState({hideTooltip:!1})},a.raidbotsLeave=function(){a.setState({hideTooltip:!0}),console.log("left")},a.state={hideTooltip:!0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){if(!0===this.props.noPlayers&&!1===this.props.hasAnyone)return r.a.createElement("div",{className:"PlayerListItem"},r.a.createElement("div",{className:"PlayerWrapper pr-auto"},r.a.createElement("div",{className:"PlayerHeader d-flex justify-content-center align-items-center py-2"},r.a.createElement("h5",{className:"pl-3 pt-2 mx-2 text-muted"},"No Player Data"))));if(!1===this.props.noPlayers){var e="class"+this.props.player.class,t=this.props.player.mean,a=this.props.player.base_dps_mean,s=t-a,l=s/a*100,n=0;0===a&&(a=1),this.props.isPercent?(n=l/this.props.boundaryH*98.5,isNaN(n)&&(n=98.5)):(n=s/this.props.boundaryH*98.5,isNaN(n)&&(n=98.5));var i="+",o="positive";s<=0&&(i="",o="negative",n*=-1);var c="";switch(this.props.value+1){case 1:c="rank1";break;case 2:c="rank2";break;case 3:c="rank3"}var p="",m="";return this.props.isPercent?(m=l.toFixed(2)+"%",p=i+s.toFixed(0)+" dps"):(m=i+s.toFixed(0),p=l.toFixed(2)+"%"),r.a.createElement("div",{className:"PlayerListItem rounded"},r.a.createElement("div",{className:"PlayerWrapper unselectable"},r.a.createElement("div",{className:"PlayerHeader align-items-center row p-2"},r.a.createElement("div",{className:"col-3 pr-0 align-self-center"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",{className:"PlayerRank text-center pt-1 ml-2 "+c},this.props.value+1),r.a.createElement("a",{className:"armoryLink",href:"https://worldofwarcraft.com/en-us/character/"+this.props.player.realm+"/"+this.props.player.name,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col d-flex align-middle align-items-center"},r.a.createElement("img",{className:"PlayerImage rounded mr-2 align-items-center ",alt:"",src:"https://render-"+this.props.player.region+".worldofwarcraft.com/character/"+this.props.player.thumbnail}),r.a.createElement("h5",{className:"PlayerName pt-1 "+e},this.props.player.name)))),r.a.createElement("div",{className:"col d-flex p-0 justify-content-center"},r.a.createElement("a",{onMouseEnter:this.raidbotsEnter,onMouseLeave:this.raidbotsLeave,className:"d-flex align-items-center mx-2 mb-1",href:"https://raidbots.com/simbot/report/"+this.props.player.reportID,target:"_blank"},r.a.createElement("img",{className:"rbIco ",src:"src/"+this.props.rbIco,alt:"",height:"30px"})),this.state.hideTooltip?null:r.a.createElement(g,{player:this.props.player,key:1})))),r.a.createElement("div",{className:"col-4 pl-2 mx-4 ml-2 align-self-center"},r.a.createElement("div",{className:"row justify-content-between"},r.a.createElement("h5",{className:"PlayerSim pt-1 mx-1 text-muted "},a.toFixed(0)+" dps"),r.a.createElement("i",{className:"fas fa-arrow-right text-muted pt-2"}),r.a.createElement("h5",{className:"PlayerSim pt-1 mx-1 text-muted "},t.toFixed(0)+" dps"),r.a.createElement("h5",{className:"PlayerSim pt-1 mx-1 ml-2 "+o},p))),r.a.createElement("div",{className:"col-3 align-self-center p-0 mr-3",height:"20px"},r.a.createElement("svg",{className:"graphSVG",width:"100%",height:"12px"},r.a.createElement("rect",{className:"svgLine1",width:"100%",y:"30%",height:"2px",rx:"2",ry:"2"}),r.a.createElement("rect",{className:"svgLine2 "+o,x:0,width:n+"%",y:"27%",height:"3px",rx:"2",ry:"2"}),r.a.createElement("circle",{className:"svgCircle",r:"3.5",cx:n+"%",cy:"42%"}))),r.a.createElement("div",{className:"col-1 pr-0"},r.a.createElement("div",{className:"row justify-content-end ml-1 mr-1"},r.a.createElement("h4",{className:"percentText "+o},m))))))}return r.a.createElement("div",{className:"PlayerListItem"},r.a.createElement("div",{className:"PlayerWrapper pr-auto"},r.a.createElement("div",{className:"PlayerHeader d-flex justify-content-center align-items-center py-2"},r.a.createElement("img",{src:"src/spinner.svg",alt:"",height:"40px"}))))}}]),t}(s.Component),y=a(7),b=a.n(y),v="https://api.arwic.io/droptimizer/1/upgrade/",E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this))).sortMyArray=function(){if(a.state.upgrades!==[]){var e=Object(d.a)(a.state.upgrades);return e.sort(function(e,t){return a.props.isPercent?(e.mean-e.base_dps_mean)/e.base_dps_mean*100<(t.mean-t.base_dps_mean)/t.base_dps_mean*100?1:-1:e.mean-e.base_dps_mean<t.mean-t.base_dps_mean?1:-1}),e}},a.getBoundaries=function(e){for(var t=0,s=1e3,r=0;r<e.length;r++){var l=e[r].base_dps_mean,n=e[r].mean-l;if(a.props.isPercent){var i=n/l*100;i>t&&(t=i),i<s&&(s=i)}else n>t&&(t=n),n<s&&(s=n)}return[t,s]},a.componentDidMount=function(){for(var e=[],t=[],s=0;s<a.props.players.length;s++){var r=v+a.props.players[s].region+"/"+a.props.players[s].realm+"/"+a.props.players[s].name+"/"+a.props.item.id;t.push(r)}for(var l=0;l<t.length;l++)e.push(b.a.get(t[l],{crossdomain:!0}));b.a.all(e).then(b.a.spread(function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];for(var r=0;r<t.length;r++)if(""!==t[r].data){var l=a.state.upgrades.slice();l.push(t[r].data),a.setState({upgrades:l}),a.props.filter(!1)}else a.setState({hasPlayer:!1});a.sortMyArray()}))},a.state={upgrades:[],boundaryH:0,boundaryL:100,hasPlayer:!0,showFilter:!1,filterClicked:!1,icons:["rb1.png","rb2.png","rb3.png","rb4.png","rb5.png","rb6.png","rb7.png"]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){for(var e=[],t=this.sortMyArray(),a=this.getBoundaries(t),s=0;s<this.state.upgrades.length;s++){var l=this.state.icons[Math.floor(Math.random()*this.state.icons.length)];e.push(r.a.createElement(f,{player:t[s],isPercent:this.props.isPercent,boundaryH:a[0],boundaryL:a[1],key:s,value:s,item:this.props.item,rbIco:l,noPlayers:!1}))}return 0===e.length&&e.push(r.a.createElement(f,{player:null,key:s,value:s,item:this.props.item,noPlayers:!0,hasAnyone:this.state.hasPlayer})),r.a.createElement("div",{className:"col-12 playerScroller rounded"},r.a.createElement("div",{className:"PlayerList rounded-bottom m-auto"},e))}}]),t}(s.Component),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this))).onHeaderClick=function(e){!1===a.state.collapsed&&a.setState({hideFilter:!0}),a.setState({collapsed:!a.state.collapsed})},a.onFilterClick=function(e){a.setState({filterClicked:!a.state.filterClicked})},a.toggleFilter=function(e){a.setState({hideFilter:e})},a.state={collapsed:!0,hideFilter:!0,filterClicked:!0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"LootHeader row bg-dark my-2 mx-1 rounded"},r.a.createElement("div",{className:"col unselectable d-flex align-items-start p-1"},r.a.createElement("div",{className:"col-12 p-0 d-flex align-items-center"},r.a.createElement("div",{className:"col p-0",onClick:this.onHeaderClick},r.a.createElement("div",{className:"col p-0"},r.a.createElement("a",{className:"lootLink d-inline-flex align-items-center pr-2",href:"#","data-wowhead":"item="+this.props.loot.id+"&ilvl=415","data-wh-rename-link":"true"},r.a.createElement("img",{className:"LootImage mr-2 ml-1 my-1 rounded",alt:"",src:"https://render-us.worldofwarcraft.com/icons/56/"+this.props.loot.icon+".jpg"}),r.a.createElement("h4",{className:"LootName itemText"},"["+this.props.loot.name+"]"))),r.a.createElement("div",{className:"col-7 flex-grow-1"})),this.state.hideFilter?null:r.a.createElement("button",{className:"btn filterBtn ml-auto mx-2 btn-secondary justify-self-end p-1 text-muted",onClick:this.onFilterClick},r.a.createElement("i",{className:"fas fa-filter"})))),this.state.collapsed?null:r.a.createElement(E,{players:this.props.players,item:this.props.loot,isPercent:this.state.filterClicked,filter:this.toggleFilter,key:1}))}}]),t}(s.Component),x=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.loot.length;t++)e.push(r.a.createElement(N,{loot:this.props.loot[t],players:this.props.players,key:t}));return r.a.createElement("div",{className:"LootList rounded-bottom m-auto pb-1 pt-2 px-2"},e)}}]),t}(s.Component),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this))).onHeaderClick=function(e){a.setState({collapsed:!a.state.collapsed})},a.state={collapsed:!0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"BossWrapper align-items-center"},r.a.createElement("div",{className:"BossHeader unselectable bg-dark rounded d-flex pt-2 px-2 mt-2 mx-2 align-items-center",onClick:this.onHeaderClick},r.a.createElement("img",{className:"BossImage",alt:"",src:this.props.boss.image}),r.a.createElement("h3",{className:"BossName text-light align-middle"},this.props.boss.name)),this.state.collapsed?null:r.a.createElement(x,{loot:this.props.boss.loot,players:this.props.players}))}}]),t}(s.Component),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this))).onHeaderClick=function(e){a.setState({collapsed:!a.state.collapsed})},a.state={collapsed:!0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.bosses.length;t++)e.push(r.a.createElement(w,{boss:this.props.bosses[t],players:this.props.players,key:t}));return r.a.createElement("div",{className:"BossWrapper align-items-center"},e)}}]),t}(s.Component),j=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(p.a)(t).call(this))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e="class"+this.props.player.class;return r.a.createElement("div",{className:"PlayerModalWrapper align-items-center"},r.a.createElement("a",{className:"armoryLink",href:"https://worldofwarcraft.com/en-us/character/"+this.props.player.realm+"/"+this.props.player.name,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("div",{className:"LootHeader p-1 unselectable bg-dark rounded d-flex align-items-center",onClick:this.onHeaderClick},r.a.createElement("div",{className:"col-3 align-self-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col d-flex align-middle align-items-center"},r.a.createElement("img",{className:"PlayerModalImage rounded mr-2 align-items-center ",alt:"",src:"https://render-"+this.props.player.region+".worldofwarcraft.com/character/"+this.props.player.thumbnail}),r.a.createElement("h5",{className:"PlayerName pt-1 "+e},this.props.player.name))))))))}}]),t}(s.Component),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this))).raidbotsEnter=function(){a.setState({hideTooltip:!1})},a.raidbotsLeave=function(){a.setState({hideTooltip:!0})},a.state={collapsed:!0,hideTooltip:!0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e="class"+this.props.player.class;return r.a.createElement("div",{className:"psWrapper px-5 mx-3 align-items-center"},r.a.createElement("div",{className:"psHeader unselectable bg-dark rounded d-flex pt-2 px-2 mt-2 mx-2 align-items-center",onClick:this.onHeaderClick},r.a.createElement("div",{className:"col p-0"},r.a.createElement("a",{className:"armoryLink d-flex align-items-center",href:"https://worldofwarcraft.com/en-us/character/"+this.props.player.realm+"/"+this.props.player.name,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{className:"psImage rounded mr-2 mb-2",alt:"",src:"https://render-"+this.props.player.region+".worldofwarcraft.com/character/"+this.props.player.thumbnail}),r.a.createElement("h4",{className:"psName text-light align-middle pr-2 pl-2 mb-2 pb-1 "+e},this.props.player.name),r.a.createElement("p",{className:"psGuild text-light align-bottom pr-3 mt-2 "}," - "+this.props.player.guild+" ("+this.props.player.realm+" "+this.props.player.region.toUpperCase()+")"))),r.a.createElement("div",{className:"col-auto"}),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col d-flex p-0 align-self-center justify-content-end"},r.a.createElement("a",{className:"d-flex align-items-center px-2 mb-1",href:"https://www.wowprogress.com/character/"+this.props.player.region+"/"+this.props.player.realm+"/"+this.props.player.name,target:"_blank"},r.a.createElement("img",{className:"wowprog rounded",src:"src/wowprog.png",alt:"",title:"WoW Progress",height:"30px"})),r.a.createElement("a",{className:"d-flex align-items-center px-2 mb-1",href:"https://www.warcraftlogs.com/character/"+this.props.player.region+"/"+this.props.player.realm+"/"+this.props.player.name,target:"_blank"},r.a.createElement("img",{className:"wclogs rounded",src:"src/wclogs.png",alt:"",title:"Warcraft Logs",height:"30px"})),r.a.createElement("a",{className:"d-flex align-items-center px-2 mb-1",href:"https://raider.io/characters/"+this.props.player.region+"/"+this.props.player.realm+"/"+this.props.player.name,target:"_blank"},r.a.createElement("img",{className:"raiderio rounded",src:"src/raiderio.png",alt:"",title:"Raider.io",height:"30px"})),r.a.createElement("a",{className:"d-flex align-items-center px-2 mb-1",href:"https://worldofwarcraft.com/en-us/character/"+this.props.player.realm+"/"+this.props.player.name,target:"_blank"},r.a.createElement("img",{className:"armory rounded",src:"src/wowico.png",alt:"",title:"Armory",height:"30px"})),this.state.hideTooltip?null:r.a.createElement(g,{player:this.props.player,key:1}))))))}}]),t}(s.Component),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this))).getItems=function(e){for(var t=[],s=[],r=0;r<a.props.bosses.length;r++)for(var l=0;l<a.props.bosses[r].loot.length;l++){var n=JSON.stringify(a.props.bosses[r].loot[l].name);if(null!==n&&"undefined"!==typeof n){n=n.toLowerCase();for(var i=e.toLowerCase().split(" "),o=!0,c=0;c<i.length;c++)""!==i[c]&&!1===n.includes(i[c])&&(o=!1);!0===o&&t.indexOf(-1===a.props.bosses[r].loot[l])&&t.push(a.props.bosses[r].loot[l])}}for(var p=0;p<a.props.players.length;p++){var m=JSON.stringify(a.props.players[p].name);if(null!==m&&"undefined"!==typeof m){m=m.toLowerCase();var d=e.toLowerCase();!0===m.includes(d)&&s.push(a.props.players[p])}}if("shit dps"===e.toLowerCase())for(var h=0;h<a.props.players.length;h++)"Arwic"===a.props.players[h].name&&s.push(a.props.players[h]);if("toxic"===e.toLowerCase())for(h=0;h<a.props.players.length;h++)"Sadwoofer"===a.props.players[h].name&&s.push(a.props.players[h]);if("subs kid"===e.toLowerCase())for(h=0;h<a.props.players.length;h++)"Monkaxd"===a.props.players[h].name&&s.push(a.props.players[h]);t.sort(),a.setState({items:t}),a.setState({players:s}),t.length>0&&(a.setState({noLoot:!1}),a.props.setBossCollapse(!0)),s.length>0&&(a.setState({noPlayers:!1}),a.props.setBossCollapse(!0)),0===t.length&&a.setState({noLoot:!0}),0===s.length&&a.setState({noPlayers:!0}),""===e&&(a.setState({noLoot:!0}),a.setState({noPlayers:!0}),a.setState({collapsed:!0}),a.props.setBossCollapse(!1)),0===s.length&&0===t.length&&(a.setState({noLoot:!0}),a.setState({noPlayers:!0}),a.setState({collapsed:!0}),a.props.setBossCollapse(!0))},a.resetSearch=function(){a.sBar.current.value="",a.setState({noLoot:!0}),a.setState({noPlayers:!0}),a.props.setBossCollapse(!1)},a.sortMyArray=function(){if(a.state.upgrades!==[]){var e=Object(d.a)(a.state.upgrades);e.sort(function(e,t){return e.mean<t.mean?1:-1}),a.setState({upgrades:e})}for(var t=0;t<a.state.upgrades.length;t++){var s=a.state.upgrades[t].base_dps_mean,r=(a.state.upgrades[t].mean-s)/s*100;r>a.state.boundaryH&&a.setState({boundaryH:r}),r<a.state.boundaryL&&a.setState({boundaryL:r})}},a.sBar=r.a.createRef(),a.state={collapsed:!0,noLoot:!0,noPlayers:!0,searchTerm:"",items:[],players:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"updateInputValue",value:function(e){this.setState({searchTerm:e.target.value}),""!==e.target.value?(this.setState({collapsed:!1}),this.props.setBossCollapse(!0)):(this.setState({collapsed:!0}),this.props.setBossCollapse(!1)),this.getItems(e.target.value)}},{key:"render",value:function(){var e=this,t=[],a=this.props.players;if(a!==[]){var s=Object(d.a)(a);s.sort(function(e,t){return e.name>t.name?1:-1}),a=s}for(var l=0;l<a.length;l++)t.push(r.a.createElement(j,{player:a[l],key:l}));for(var n=Math.ceil(t.length/2),i=t.splice(0,n),o=t,c=[],p=0;p<this.state.players.length;p++)c.push(r.a.createElement(O,{player:this.state.players[p],key:p}));return r.a.createElement("div",null,r.a.createElement("div",{className:"modal fade ",id:"exampleModalLong",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog ",role:"document"},r.a.createElement("div",{className:"modal-content bg-dark text-light"},r.a.createElement("div",{className:"modal-header "},r.a.createElement("h5",{className:"modal-title align-self-center d-flex",id:"exampleModalLongTitle"},"Raid Roster - "+(i.length+o.length)+" Players"),r.a.createElement("button",{type:"button",className:"btn btn-outline-secondary searchBar","data-dismiss":"modal","aria-label":"Close"},"Close")),r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"row d-flex"},r.a.createElement("div",{className:"col p-0 pl-2 mb-1 mx-1"},i),r.a.createElement("div",{className:"col p-0 pr-2 mb-1 mx-1"},o))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("div",{className:"col-2 d-flex mx-auto justify-content-center align-self-center px-1"},r.a.createElement("a",{href:"https://discord.gg/vqdAkGR",title:"Guild Discord",target:"_blank"},r.a.createElement("img",{className:"yeetGif",src:"src/discord.png",alt:"",height:"32px"}))),r.a.createElement("div",{className:"col-2 d-flex mx-auto justify-content-center align-self-center px-1"},r.a.createElement("a",{href:"https://www.wowprogress.com/guild/us/frostmourne/Bastion",title:"Guild WoW Progress",target:"_blank"},r.a.createElement("img",{className:"yeetGif",src:"src/wowprog.png",alt:"",height:"32px"}))),r.a.createElement("div",{className:"col-2 d-flex mx-auto justify-content-center align-self-center px-1"},r.a.createElement("a",{href:"https://www.warcraftlogs.com/guild/us/frostmourne/bastion",title:"Guild Logs",target:"_blank"},r.a.createElement("img",{className:"yeetGif",src:"src/dance.gif",alt:"",height:"32px"}))),r.a.createElement("div",{className:"col-2 d-flex mx-auto justify-content-center align-self-center px-1"},r.a.createElement("a",{href:"https://raider.io/guilds/us/frostmourne/Bastion",title:"Guild Raider.io",target:"_blank"},r.a.createElement("img",{className:"yeetGif",src:"src/raiderio.png",alt:"",height:"32px"}))),r.a.createElement("div",{className:"col-2 d-flex mx-auto justify-content-center align-self-center px-1"},r.a.createElement("a",{href:"https://www.youtube.com/playlist?list=PL6b8NnRTTfiT1XUdUuoXPYG1gWmMU_o2P",title:"Guild Kill Videos",target:"_blank"},r.a.createElement("img",{className:"yeetGif",src:"src/youtube.png",alt:"",width:"32px"}))))))),r.a.createElement("div",{className:"PageHeaderWrapper align-items-center"},r.a.createElement("div",{className:"PageHeader unselectable bg-dark rounded d-flex mt-2 mx-2 align-items-center",onClick:this.onHeaderClick},r.a.createElement("div",{className:"container px-0"},r.a.createElement("div",{className:"row w-100 align-self-center d-flex justify-content-between mx-0"},r.a.createElement("div",{className:"col"}),r.a.createElement("div",{className:"col-9 align-self-center"},r.a.createElement("div",{className:"input-group my-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("button",{className:"btn wowBtn btn-outline-secondary searchBar","data-toggle":"modal","data-target":"#exampleModalLong",type:"button"},r.a.createElement("img",{className:"wowIco",src:"src/wowico.png",alt:""}))),r.a.createElement("input",{type:"text",onChange:function(t){return e.updateInputValue(t)},ref:this.sBar,className:"form-control searchBar text-light",placeholder:"Search","aria-label":"Search"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-outline-secondary searchBar",onClick:this.resetSearch,type:"button"},r.a.createElement("i",{className:"fas fa-times searchIcon"}))))),r.a.createElement("div",{className:"col"})))),this.state.noLoot?null:r.a.createElement(x,{loot:this.state.items,players:this.props.players}),this.state.noPlayers?null:c))}}]),t}(s.Component),S="https://api.arwic.io/droptimizer/1/item/",P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var s=arguments.length,r=new Array(s),l=0;l<s;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={bosses:[{name:"Champion of the Light",image:"src/champion.png",loot:[{id:165517},{id:165501},{id:165550},{id:165519},{id:165549},{id:165586},{id:165919},{id:165834},{id:165514},{id:165533},{id:165921},{id:165584},{id:165569}]},{name:"Jadefire Masters",image:"src/jadefire.png",loot:[{id:165565},{id:165500},{id:165521},{id:165552},{id:165531},{id:165548},{id:165568},{id:165503},{id:165516},{id:165540},{id:165587}]},{name:"Grong, the Revenant",image:"src/grong.png",loot:[{id:165920},{id:165534},{id:165588},{id:165922},{id:165582},{id:165515},{id:165574},{id:165589},{id:165499},{id:165513},{id:165535},{id:165555},{id:165551},{id:165525}]},{name:"Opulence",image:"src/opulence.png",loot:[{id:165524},{id:165591},{id:165541},{id:165561},{id:165526},{id:165821},{id:165818},{id:165573},{id:165820},{id:165592},{id:165538},{id:165593},{id:165571},{id:165504}]},{name:"Conclave of the Chosen",image:"src/conclave.png",loot:[{id:165594},{id:165560},{id:165595},{id:166418},{id:165532},{id:165579},{id:165502},{id:165512},{id:165507},{id:165599},{id:165562},{id:165833}]},{name:"King Rastakhan",image:"src/king.png",loot:[{id:165832},{id:165577},{id:165536},{id:165597},{id:165596},{id:165537},{id:165578},{id:165523},{id:165558},{id:165567},{id:165498}]},{name:"High Tinker Mekkatorque",image:"src/tinker.png",loot:[{id:165825},{id:165497},{id:165924},{id:165508},{id:165522},{id:165830},{id:165580},{id:165598},{id:165543},{id:165600},{id:165572}]},{name:"Stormwall Blockade",image:"src/blockade.png",loot:[{id:165585},{id:165822},{id:165602},{id:165590},{id:165528},{id:165557},{id:165603},{id:165546},{id:165601},{id:165556},{id:165923},{id:165819},{id:165506}]},{name:"Lady Jaina Proudmoore",image:"src/jaina.png",loot:[{id:165824},{id:165604},{id:165527},{id:165570},{id:165831},{id:165583},{id:165823},{id:165559},{id:165542},{id:165566},{id:165505},{id:165576}]}],players:[],bossCollapsed:!1},a.updateItemState=function(e,t){b.a.get(S+a.state.bosses[e].loot[t].id,{crossdomain:!0}).then(function(s){a.setState(function(a){return a.bosses[e].loot[t]=s.data,a})})},a.setBossCollapse=function(e){a.setState({bossCollapsed:e})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://api.arwic.io/droptimizer/1/character",{crossdomain:!0}).then(function(t){return e.setState({players:t.data})});for(var t=0;t<this.state.bosses.length;t++)for(var a=0;a<this.state.bosses[t].loot.length;a++)this.updateItemState(t,a)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container align-items-center"},r.a.createElement(C,{bosses:this.state.bosses,players:this.state.players,setBossCollapse:this.setBossCollapse}),this.state.bossCollapsed?null:r.a.createElement(k,{bosses:this.state.bosses,players:this.state.players}))}}]),t}(s.Component);n.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[18,2,1]]]);
//# sourceMappingURL=main.294653fb.chunk.js.map