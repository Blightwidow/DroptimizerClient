import React, {Component} from 'react';
import LootList from './LootList';
import PlayerModal from './PlayerModal';
import PlayerSearch from './PlayerSearch';
import axios from 'axios';

const API_UPDATE = "https://api.arwic.io/droptimizer/1/update/report/";

class PageHeader extends Component {
    constructor(props) {
        super();
        this.sBar = React.createRef();
        this.textReportID = React.createRef();
        this.state = {
            collapsed: true,
            noLoot : true,
            noPlayers : true,
            noAlert : true,
            alertText : '',
            searchTerm: '',
            items : [],
            players : [],
        }
    }

    getItems = (term) =>{
        let out = [];
        let playerList = [];
        for (var i = 0; i < this.props.bosses.length; i++) {
            for (var j = 0; j < this.props.bosses[i].loot.length; j++){
                //console.log(this.props.bosses[i].loot[j].name);
                let obj = JSON.stringify(this.props.bosses[i].loot[j].name);
                if(obj !== null && typeof obj !== 'undefined'){
                    obj = obj.toLowerCase();
                    let sstring = (term.toLowerCase()).split(" ");
                    let result = true;
                    for (var k = 0; k < sstring.length; k++){
                        if(sstring[k] !== ""){
                            if(obj.includes(sstring[k]) === false){
                                result = false;
                            }
                        }
                    }
                    if(result === true && out.indexOf(this.props.bosses[i].loot[j] === -1)){
                        out.push(this.props.bosses[i].loot[j]);
                    }
                }
            }
        }
        for (var x = 0; x < this.props.players.length; x++){
            let obj = JSON.stringify(this.props.players[x].name)
            if(obj !== null && typeof obj !== 'undefined'){
                obj = obj.toLowerCase();
                let sstring = (term.toLowerCase());
                if(obj.includes(sstring) === true){
                    playerList.push(this.props.players[x]);
                }
            }
        }
        out.sort();
        this.setState({items:out});
        this.setState({players:playerList})
        if(out.length > 0){
            this.setState({noLoot: false});
            this.props.setBossCollapse(true);
        }
        if(playerList.length > 0){
            this.setState({noPlayers: false});
            this.props.setBossCollapse(true);
        }
        if(out.length === 0){
            this.setState({noLoot: true});
        }
        if(playerList.length === 0){
            this.setState({noPlayers: true});
        }
        
        if(term === ''){
            this.setState({noLoot: true});
            this.setState({noPlayers: true});
            this.setState({collapsed: true});
            this.props.setBossCollapse(false);
        }
        if(playerList.length === 0 && out.length === 0){
            this.setState({noLoot: true});
            this.setState({noPlayers: true});
            this.setState({collapsed: true});
            this.props.setBossCollapse(true);
        }
    }

    updateInputValue(event){
        this.setState({searchTerm: event.target.value});
        if(event.target.value !== ''){
            this.setState({collapsed: false});
            this.props.setBossCollapse(true);
        }
        else{
            this.setState({collapsed: true});
            this.props.setBossCollapse(false);
        }
        this.getItems(event.target.value);

    }

    resetSearch = () =>{
        this.sBar.current.value = "";
        this.setState({noLoot: true});
        this.setState({noPlayers: true});
        this.props.setBossCollapse(false);
    }

    sortMyArray = () =>{
        if(this.state.upgrades !== []){
            var obj = [...this.state.upgrades];
            obj.sort((a,b) => a.mean < b.mean ? 1 : -1);
            this.setState({upgrades:obj});
        }
        for(let i = 0; i < this.state.upgrades.length; i++){
            let base = this.state.upgrades[i].base_dps_mean;
            let mean = this.state.upgrades[i].mean;
            let increaseDps = mean - base;
            let percent = increaseDps / base * 100;
            if(percent > this.state.boundaryH){
                this.setState({boundaryH : percent});
            }
            if(percent < this.state.boundaryL){
                this.setState({boundaryL : percent});
            }
        }
    }

    submitReport = () =>{
        let splitList = (this.textReportID.current.value).split("/");
        let reportID = splitList[splitList.length - 1];
        axios.get(API_UPDATE+reportID,{ crossdomain: true } )
            .then(response => {
                    this.setState({alertText: response.data});
                    this.setState({noAlert: false});
            }
        );
        this.textReportID.current.value = '';
    }

    closeAlert = () =>{
        setTimeout(function() {
            this.setState({noAlert:true});
            this.setState({alertText: ''});
        }.bind(this), 500)
    }
    

    render() {
        let player = [];
        let propPlayers = this.props.players;
        if(propPlayers !== []){
            var obj = [...propPlayers];
            obj.sort((a,b) => a.name > b.name ? 1 : -1);
            propPlayers = obj;
        }
        for (let i = 0; i < propPlayers.length; i++){
            player.push(<PlayerModal player={propPlayers[i]} key={i} />)
        }
        var half_length = Math.ceil(player.length / 2);    
        var leftPlayer = player.splice(0,half_length);
        var rightPlayer = player;

        let playerSpawns = [];
        for (var i = 0; i < this.state.players.length; i++){
            playerSpawns.push(<PlayerSearch player={this.state.players[i]} key={i} />)
        }
        
        return (
            
            <div>  
                              
                <div className="modal fade " id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog " role="document">
                        <div className="modal-content bg-dark text-light">
                            <div className="modal-header ">
                                <h5 className="modal-title align-self-center d-flex" id="exampleModalLongTitle">{"Bastion Raid Roster - " + (leftPlayer.length + rightPlayer.length)+ " Players"}</h5>
                                <button type="button" className="btn btn-outline-secondary searchBar" data-dismiss="modal" aria-label="Close">
                                    Close
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row d-flex">
                                    <div className="col p-0 pl-2 mb-1 mx-1">
                                        {leftPlayer}
                                    </div>
                                    <div className="col p-0 pr-2 mb-1 mx-1">
                                        {rightPlayer}
                                    </div>
                                </div>
                                <div className="row d-flex">
                                { this.state.noAlert ? null : <div className="alertWrapper mb-3"><div className="alert alert-success alert-dismissible fade show" role="alert">
                                    <strong>Success!</strong> {this.state.alertText}
                                    <button type="button" className="close" onClick={this.closeAlert} data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div></div> }
                                    <div className="input-group w-75 px-3 mx-auto my-2">
                                        <div className="input-group-prepend">
                                            <button className="btn wowBtn btn-outline-secondary searchBar disabled" type="button">
                                                <img className="wowIco" src="src/rb3.png" alt="" />
                                            </button>
                                        </div>
                                        <input type="text" className="form-control searchBar text-light" ref={this.textReportID} placeholder="New Report ID" aria-label="Report ID" />
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-secondary searchBar" onClick={this.submitReport} type="button">
                                                <i className="fas fa-sync-alt searchIcon"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                    <div className="col-2 d-flex mx-auto justify-content-center align-self-center px-1">
                                        <a href="https://discord.gg/vqdAkGR" title="Guild Discord" target="_blank">
                                            <img className="yeetGif" src="src/discord.png" alt="" height="32px" />
                                        </a>
                                    </div>
                                    <div className="col-2 d-flex mx-auto justify-content-center align-self-center px-1">
                                        <a href="https://www.wowprogress.com/guild/us/frostmourne/Bastion" title="Guild WoW Progress" target="_blank">
                                            <img className="yeetGif" src="src/wowprog.png" alt="" height="32px" />
                                        </a>
                                    </div>
                                    <div className="col-2 d-flex mx-auto justify-content-center align-self-center px-1">
                                        <a href="https://www.warcraftlogs.com/guild/us/frostmourne/bastion" title="Guild Logs" target="_blank">
                                            <img className="yeetGif" src="src/wclogs.png" alt="" height="32px" />
                                        </a>
                                    </div>
                                    <div className="col-2 d-flex mx-auto justify-content-center align-self-center px-1">
                                        <a href="https://raider.io/guilds/us/frostmourne/Bastion" title="Guild Raider.io" target="_blank">
                                            <img className="yeetGif" src="src/raiderio.png" alt="" height="32px" />
                                        </a>
                                    </div>
                                    <div className="col-2 d-flex mx-auto justify-content-center align-self-center px-1">
                                        <a href="https://www.youtube.com/playlist?list=PL6b8NnRTTfiT1XUdUuoXPYG1gWmMU_o2P" title="Guild Kill Videos" target="_blank">
                                            <img className="yeetGif" src="src/youtube.png" alt="" width="32px" />
                                        </a>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                
                
                <div className="PageHeaderWrapper align-items-center">
                    <div className="PageHeader unselectable bg-dark rounded d-flex mt-2 mx-2 align-items-center" onClick={this.onHeaderClick}>
                        <div className="container px-0">
                            <div className="row w-100 align-self-center d-flex justify-content-between mx-0">
                                <div className="col">
                                </div>
                                <div className="col-12 col-lg-11 col-xl-9 align-self-center">
                                    <div className="input-group my-3">
                                        <div className="input-group-prepend">
                                            <button className="btn wowBtn btn-outline-secondary searchBar" data-toggle="modal" data-target="#exampleModalLong" type="button">
                                                <img className="wowIco" src="src/wowico.png" alt="" />
                                            </button>
                                        </div>
                                        <input type="text" onChange={event => this.updateInputValue(event)} ref={this.sBar} className="form-control searchBar text-light" placeholder="Search" aria-label="Search" />
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-secondary searchBar" onClick={this.resetSearch} type="button">
                                                <i className="fas fa-times searchIcon"></i>
                                            </button>
                                        </div>  
                                    </div>
                                </div>  
                                <div className="col">
                                </div>             
                            </div>
                        </div>
                    </div>
                    { this.state.noLoot ? null : <LootList loot={this.state.items} players={this.props.players}/> }
                    { this.state.noPlayers ? null : playerSpawns }

                </div>
            </div>
            
        );
    }
}

export default PageHeader;