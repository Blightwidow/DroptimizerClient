import React, {Component} from 'react';
import PlayerList from './PlayerList';

class LootHeader extends Component {
    constructor(props) {
        super();
        this.state = {
            collapsed: true,
        }
    }

    onHeaderClick = (event) => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
                <div className="LootHeader row bg-dark m-2 rounded">
                    <div className="col unselectable d-flex align-items-start p-3" onClick={this.onHeaderClick}>
                        <div className="row">
                            <div className="col-12 d-flex align-items-center pl-3">
                                <img className="LootImage mr-3 rounded" alt="" src={this.props.loot.image} />
                                <a className="lootLink" href="#" data-wowhead={"item="+this.props.loot.id} data-wh-rename-link="true"><h4 className="LootName itemText" >{"["+this.props.loot.name+"]"}</h4></a>
                                
                            </div>
                        </div>
                    </div>
                    { this.state.collapsed ? null : <PlayerList players={this.props.players} item={this.props.loot}/> } 
                </div>

        );
    }
}

export default LootHeader;