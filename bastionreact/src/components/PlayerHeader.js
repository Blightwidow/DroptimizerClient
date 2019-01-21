import React, {Component} from 'react';

class PlayerHeader extends Component {

    updateState = (response) =>{
        if(response.data !== ''){
            this.setState({upgrade : response.data})
            console.log(response.data);
        }

    }

    render() {
        if(this.props.noPlayers == false){
            let cls = "class" + this.props.player.class;
            let upgradeMean = this.props.player.mean;
            return (
                <div className="PlayerListItem">
                    <div className="PlayerWrapper unselectable">  
                        <div className="PlayerHeader col align-items-center row py-2">
                            <h4 className="PlayerRank text-center">{this.props.value+1}</h4>
                            <a className="armoryLink" href={"https://worldofwarcraft.com/en-us/character/frostmourne/"+this.props.player.name } target="_blank">
                                <div className="row">
                                    <div className="col d-flex align-middle align-items-center">
                                        <img className="PlayerImage rounded mr-2 align-items-center " alt="" src={"http://render-"+this.props.player.region+".worldofwarcraft.com/character/"+this.props.player.thumbnail}/>
                                        <h5 className={"PlayerName pt-1 " + cls}>{this.props.player.name}</h5>
                                    </div>
                                </div>
                            </a>
                            <h5 className={"PlayerSim pl-3 pt-1 text-light "}>{upgradeMean.toFixed(0)+" dps"}</h5>
                        </div>
                    </div>
                </div>
            );
        }
        else{
        return (
            <div className="PlayerListItem">
                <div className="PlayerWrapper pr-auto w-50">
                    <div className="PlayerHeader d-flex align-items-center py-2">
                        <h5 className="pl-3 pt-1 text-muted">No Player Data</h5>
                    </div>
                </div>
            </div>
        );
        }
        
    }
}

export default PlayerHeader;