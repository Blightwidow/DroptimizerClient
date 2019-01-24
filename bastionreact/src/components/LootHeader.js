import React, {Component} from 'react';
import PlayerList from './PlayerList';

class LootHeader extends Component {
    constructor(props) {
        super();
        this.state = {
            collapsed: true,
            hideFilter: true,
            filterClicked : true,
        }
    }

    onHeaderClick = (event) => {
        if(this.state.collapsed === false){
            this.setState({hideFilter : true});
        }
        this.setState({
            collapsed: !this.state.collapsed
        });
        
    }
    onFilterClick = (event) => {
        this.setState({filterClicked : !this.state.filterClicked});
    }
    toggleFilter = (boo) =>{
        this.setState({hideFilter : boo});
    }

    

    render() {
        return (
            <div className="LootHeader row bg-dark my-2 mx-1 rounded">
                <div className="col unselectable d-flex align-items-start p-1">
                    <div className="col-12 p-0 d-flex align-items-center">
                        <div className="col p-0"  onClick={this.onHeaderClick}>
                            <div className="col p-0">
                                <a className="lootLink d-inline-flex align-items-center pr-2" href="#" data-wowhead={"item="+this.props.loot.id+"&ilvl=415"} data-wh-rename-link="true">
                                    <img className="LootImage mr-2 ml-1 my-1 rounded" alt="" src={"https://render-us.worldofwarcraft.com/icons/56/"+this.props.loot.icon+".jpg"} />
                                    <h4 className="LootName itemText" >{"["+this.props.loot.name+"]"}</h4>
                                </a>
                            </div>
                            <div className="col-7 flex-grow-1">

                            </div>
                        </div>
                        { this.state.hideFilter ? null : <button className="btn filterBtn ml-auto mx-2 btn-secondary justify-self-end p-1 text-muted" onClick={this.onFilterClick}><i className="fas fa-filter"></i></button> } 
                    </div>
                </div>
                { this.state.collapsed ? null : <PlayerList players={this.props.players} item={this.props.loot} isPercent={this.state.filterClicked} filter={this.toggleFilter} key={1}/> } 
            </div>
        );
    }
}

export default LootHeader;