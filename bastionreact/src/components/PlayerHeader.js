import React, {Component} from 'react';

class PlayerHeader extends Component {

    updateState = (response) =>{
        if(response.data !== ''){
            this.setState({upgrade : response.data})
            console.log(response.data);
        }
    }

    render() {
        if(this.props.noPlayers === false){
            let cls = "class" + this.props.player.class;
            let upgradeMean = this.props.player.mean;

            let upperBound = 20;
            let lowerBound = 0;
            let myPercent = 20;
            let lowestPercent = 0.5;


            let upper = upperBound - lowerBound;
            let perc = myPercent -lowerBound;
            perc = perc / upper;
            perc = ((perc * (1-lowestPercent)) + lowestPercent)*100;

            let rankCls = "";
            switch(this.props.value+1){
                case 1:{
                    rankCls = "rank1";
                    break;
                }
                case 2:{
                    rankCls = "rank2";
                    break;
                }
                case 3:{
                    rankCls = "rank3";
                    break;
                } 
                default:{
                    break;
                }              
            }

            return (
                <div className="PlayerListItem">
                    <div className="PlayerWrapper unselectable">  
                        <div className="PlayerHeader col align-items-center row py-2">
                            <div className="col">
                            <div className="row">
                                <h4 className={"PlayerRank text-center pt-1 "+rankCls}>{this.props.value+1}</h4>
                                <a className="armoryLink" href={"https://worldofwarcraft.com/en-us/character/"+this.props.player.realm+"/"+this.props.player.name } rel="noopener noreferrer" target="_blank">
                                    <div className="row">
                                        <div className="col d-flex align-middle align-items-center">
                                            <img className="PlayerImage rounded mr-2 align-items-center " alt="" src={"http://render-"+this.props.player.region+".worldofwarcraft.com/character/"+this.props.player.thumbnail}/>
                                            <h5 className={"PlayerName pt-1 " + cls}>{this.props.player.name}</h5>
                                        </div>
                                    </div>
                                </a>
                                <div className='row align-items-center'>
                                    <h5 className={"PlayerSim pl-3 pt-1 mx-1 text-muted "}>{"baseDPS"}</h5>
                                    <h5 className={"PlayerSim pl-3 pt-1 mx-1 text-muted "}>{upgradeMean.toFixed(0)+" dps"}</h5>
                                    <h5 className={"PlayerSim pl-3 pt-1 mx-1 text-success "}>{"+000 dps"}</h5>
                                </div>
                                
                                </div>
                            </div>
                            <div className="col-5 d-flex pr-3" height="20px">
                                <svg className="graphSVG" width={perc+"%"}  height="12px">
                                    <rect className="svgLine1" width="100%" y="30%" height="2px" rx="2" ry="2"></rect>
                                    <rect className="svgLine2" x={50-(15)+"%"} width={30+"%"} y="27%" height="3px" rx="2" ry="2"></rect>
                                    <circle className="svgCircle" r="4" cx="50%" cy="42%"></circle> 
                                </svg>
                                
                            </div>
                                <h4 className="text-success pl-3">{myPercent+"%"}</h4>
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