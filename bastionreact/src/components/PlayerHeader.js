import React, {Component} from 'react';

class PlayerHeader extends Component {

    updateState = (response) =>{
        if(response.data !== ''){
            this.setState({upgrade : response.data})
            console.log(response.data);
        }
    }

    render() {
        if(this.props.noPlayers === true && this.props.hasAnyone == false){
            return (
                <div className="PlayerListItem">
                    <div className="PlayerWrapper pr-auto">
                        <div className="PlayerHeader d-flex justify-content-center align-items-center py-2">
                        <h5 className="pl-3 pt-2 mx-2 text-muted">No Player Data</h5>
                        </div>
                    </div>
                </div>
            );
        }
        if(this.props.noPlayers === false){
            let cls = "class" + this.props.player.class;
            let upgradeMean = this.props.player.mean;
            let baseDps = this.props.player.base_dps_mean;
            let increaseDps = upgradeMean - baseDps;
            if(baseDps === 0){
                baseDps = 1;
            }
            let myPercent = increaseDps / baseDps * 100;

            let upperBound = this.props.boundaryH;
            let lowerBound = this.props.boundaryL;
            let lowestPercent = 0.3;

            let sign = '+';
            let signCls = "positive"

            if(increaseDps <= 0){
                sign = '';
                signCls = "negative";
            }

            let upper = upperBound - lowerBound;
            let perc = myPercent -lowerBound;
            perc = perc / upper;
            perc = ((perc * (1-lowestPercent)) + lowestPercent)*100;
            if(isNaN(perc)){
                perc = (1-lowestPercent) * 100;
                perc= 65;
                console.log(lowestPercent);
            }

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
                <div className="PlayerListItem rounded">
                    <div className="PlayerWrapper unselectable">  
                        <div className="PlayerHeader align-items-center row p-2">
                            <div className="col-3 pr-0 align-self-center">
                                <div className="row">
                                    <h4 className={"PlayerRank text-center pt-1 ml-2 "+rankCls}>{this.props.value+1}</h4>
                                    <a className="armoryLink" href={"https://worldofwarcraft.com/en-us/character/"+this.props.player.realm+"/"+this.props.player.name } rel="noopener noreferrer" target="_blank">
                                        <div className="row">
                                            <div className="col d-flex align-middle align-items-center">
                                                <img className="PlayerImage rounded mr-2 align-items-center " alt="" src={"https://render-"+this.props.player.region+".worldofwarcraft.com/character/"+this.props.player.thumbnail}/>
                                                <h5 className={"PlayerName pt-1 " + cls}>{this.props.player.name}</h5>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="col d-flex p-0 justify-content-center">
                                        <a className="d-flex align-items-center mb-1" href={"https://raidbots.com/simbot/report/"+this.props.player.reportID} target="_blank">
                                            <img className="rbIco mx-2" src={'src/'+this.props.rbIco} alt="" height="30px" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='col-4 pl-2 mx-4 align-self-center'>
                                <div className='row justify-content-between'>
                                    <h5 className={"PlayerSim pt-1 mx-1 text-muted "}>{baseDps.toFixed(0) + " dps"}</h5>
                                    <i className="fas fa-arrow-right text-muted pt-2"></i>
                                    <h5 className={"PlayerSim pt-1 mx-1 text-muted "}>{upgradeMean.toFixed(0)+" dps"}</h5>
                                    <h5 className={"PlayerSim pt-1 mx-1 ml-2 "+signCls}>{sign+increaseDps.toFixed(0)+ " dps"}</h5>
                                    
                                </div>
                            </div>
                            
                            <div className="col-3 align-self-center p-0 mr-3" height="20px">
                                <svg className="graphSVG" width={100+"%"}  height="12px">
                                    <rect className="svgLine1" width="100%" y="30%" height="2px" rx="2" ry="2"></rect>
                                    <rect className="svgLine2" x={perc-30+"%"} width={30+"%"} y="27%" height="3px" rx="2" ry="2"></rect>
                                    <circle className="svgCircle" r="4" cx={perc-15+"%"} cy="42%"></circle> 
                                </svg>
                            </div>
                            
                            <div className="col-1 pr-0">
                                <div className="row justify-content-end ml-1 mr-1">
                                    <h4 className={"percentText "+signCls}>{myPercent.toFixed(2)+"%"}</h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            );
        }
        else{
            return (
                <div className="PlayerListItem">
                    <div className="PlayerWrapper pr-auto">
                        <div className="PlayerHeader d-flex justify-content-center align-items-center py-2">
                        <img src="src/spinner.svg" height="40px" />

                        </div>
                    </div>
                </div>
            );
        }

        
        
        
        
    }
}

export default PlayerHeader;