import React, {Component} from 'react';
import PlayerList from './PlayerList';
import axios from 'axios';

class LootHeader extends Component {
    constructor(props) {
        super();
        this.state = {
            collapsed: true,
            itemData: [
                {
                'icon': '',
                'id': '123456',
                'itemLevel': 0,
                'name': '.',
                'quality': 1
            }
            ]
        }
    }

    onHeaderClick = (event) => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    componentDidMount = () => {
        /*
        for (var i = 0; i < this.props.players.length; i++) {
            axios.get('http://127.0.0.1:3000/1/upgrade/'+this.props.players[i].region+'/'+this.props.players[i].realm+'/'+this.props.players[i].name+'/'+this.props.item.id,{ crossdomain: true } )
            .then(response => this.updateState(response));
        }
        */

        let promises = [];
        let requests = [];
        for(let i = 0; i < this.props.players.length; i++){
            let url = 'http://127.0.0.1:3000/1/item/'+this.props.loot.id;
            requests.push(url);
        }

        axios.get('http://127.0.0.1:3000/1/item/'+this.props.loot.id,{ crossdomain: true } )
            .then(response => {
                console.log(response);
                if(response.data !== ""){
                    var item = response.data;
                    this.setState({itemData:item})
                    console.log(response.data);
                    
                }
            });
    }

    render() {
        return (
                <div className="LootHeader row bg-dark m-2 rounded">
                    <div className="col unselectable d-flex align-items-start p-1" onClick={this.onHeaderClick}>
                        <div className="row">
                            <div className="col-12 d-flex align-items-center pl-3">
                                <a className="lootLink d-flex align-items-center" href="#" data-wowhead={"item="+this.props.loot.id+"&ilvl=415"} data-wh-rename-link="true">
                                    <img className="LootImage mr-2 ml-1 my-1 rounded" alt="" src={"https://render-us.worldofwarcraft.com/icons/56/"+this.state.itemData.icon+".jpg"} />
                                    <h4 className="LootName itemText" >{"["+this.state.itemData.name+"]"}</h4>
                                </a>
                            </div>
                        </div>
                    </div>
                    { this.state.collapsed ? null : <PlayerList players={this.props.players} item={this.props.loot}/> } 
                </div>

        );
    }
}

export default LootHeader;