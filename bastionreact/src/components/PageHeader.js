import React, {Component} from 'react';
import LootList from './LootList';
import PlayerModal from './PlayerModal';


class PageHeader extends Component {
    constructor(props) {
        super();
        this.state = {
            collapsed: true,
            searchTerm: '',
            items : [],
        }
    }

    getItems = (term) =>{
        let out = [];
        for (var i = 0; i < this.props.bosses.length; i++) {
            for (var j = 0; j < this.props.bosses[i].loot.length; j++){
                //console.log(this.props.bosses[i].loot[j].name);
                let obj = JSON.stringify(this.props.bosses[i].loot[j].name);
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
        out.sort();
        this.setState({items:out});
        if(out.length === 0){
            this.setState({collapsed: true});
            this.props.setBossCollapse(false);
        }
        console.log(out);
        
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
            console.log(this.state.upgrades[i].mean)
        }

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
        
        return (
            <div>                
                <div className="modal fade " id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog " role="document">
                    <div className="modal-content bg-dark text-light">
                    <div className="modal-header ">
                        <h5 className="modal-title align-self-center d-flex" id="exampleModalLongTitle">{"Players - " + (leftPlayer.length + rightPlayer.length)}</h5>
                        <button type="button" className="btn btn-outline-secondary searchBar" data-dismiss="modal" aria-label="Close">
                            Close
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row d-flex">
                            <div className="col p-0 mx-1">
                                {leftPlayer}
                            </div>
                            <div className="col p-0 mx-1">
                                {rightPlayer}
                            </div>
                        </div>
                        
                    </div>
                    
                    </div>
                </div>
                </div>
                <div className="PageHeaderWrapper align-items-center">
                    <div className="PageHeader unselectable bg-dark rounded d-flex mt-2 mx-2 align-items-center" onClick={this.onHeaderClick}>
                        <div className="container px-0">
                            <div className="row w-100 align-self-center d-flex justify-content-between mx-0">
                                <div className="col-2 align-self-end px-1">
                                    <img className="yeetGif" src="src/dance.gif" alt="" height="32px" />
                                </div>
                                <div className="col-8 align-self-center">
                                    <div className="input-group m-3">
                                        <div className="input-group-prepend">
                                            <button className="btn wowBtn btn-outline-secondary searchBar" data-toggle="modal" data-target="#exampleModalLong" type="button">
                                                <img className="wowIco" src="src/wowico.png" alt="" />
                                            </button>
                                        </div>
                                        <input type="text" onChange={event => this.updateInputValue(event)} className="form-control searchBar text-light" placeholder="Yeet" aria-label="Search" />
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-secondary searchBar" type="button">
                                                <i className="fas fa-search searchIcon"></i>
                                            </button>
                                        </div>  
                                    </div>
                                </div>
                                <div className="col">
                                </div>
                                <div className="col-auto px-0 align-self-end px-1">
                                    <img className="yeetGif" src="src/ytho.gif" alt="" width="36px" />
                                </div>                   
                            </div>
                        </div>
                    </div>
                    { this.state.collapsed ? null : <LootList loot={this.state.items} players={this.props.players}/> }
                </div>
            </div>
            
        );
    }
}

export default PageHeader;