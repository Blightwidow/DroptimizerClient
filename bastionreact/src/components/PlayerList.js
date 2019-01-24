import React, {Component} from 'react';
import PlayerHeader from './PlayerHeader';
import axios from 'axios';

const API_UPGRADE = 'https://api.arwic.io/droptimizer/1/upgrade/';

class PlayerList extends Component {

    constructor(props) {
        super();
        this.state = {
            upgrades : [],
            boundaryH : 0,
            boundaryL : 100,
            hasPlayer : true,
            icons : ['rb1.png','rb2.png','rb3.png','rb4.png','rb5.png','rb6.png','rb7.png']
        }
    }

    sortMyArray = () =>{
        if(this.state.upgrades !== []){
            var obj = [...this.state.upgrades];
            obj.sort((a,b) => {
                let aPercent = (a.mean - a.base_dps_mean) / a.base_dps_mean * 100;
                let bPercent = (b.mean - b.base_dps_mean) / b.base_dps_mean * 100;
                if(aPercent < bPercent){
                    return 1;
                }
                else return -1;
            });
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
            let url = API_UPGRADE+this.props.players[i].region+'/'+this.props.players[i].realm+'/'+this.props.players[i].name+'/'+this.props.item.id;
            requests.push(url);
        }
        for(let i = 0; i < requests.length; i++){
            promises.push(axios.get(requests[i], {crossdomain: true}));
        }
        axios.all(promises).then(axios.spread((...args) => {
            for(let i = 0; i < args.length; i++){
                if(args[i].data !== ''){
                    var newUpgrades = this.state.upgrades.slice();
                    newUpgrades.push(args[i].data);  
                    this.setState({upgrades:newUpgrades})
                    console.log(args[i].data);
                }
                else{
                    this.setState({hasPlayer : false})
                }
            }
            this.sortMyArray();

        }));
        
        //this.quick_Sort(this.state.upgrades.slice(0));

    }

    render() {
        
        let playerHeaders = [];
        
        for (var i = 0; i < this.state.upgrades.length; i++) {
            let rand = this.state.icons[Math.floor(Math.random()*this.state.icons.length)];
            playerHeaders.push(<PlayerHeader player={this.state.upgrades[i]} boundaryH={this.state.boundaryH} boundaryL={this.state.boundaryL} key={i} value={i} item={this.props.item} rbIco={rand} noPlayers={false} />)
        }
        if(playerHeaders.length === 0){
            playerHeaders.push(<PlayerHeader player={null} key={i} value={i} item={this.props.item} noPlayers={true} hasAnyone={this.state.hasPlayer}/>)
        }
        return (
            <div className="col-12 playerScroller rounded">
                <div className="PlayerList rounded-bottom m-auto">
                    {playerHeaders}
                </div>
            </div>
        );
    }
}

export default PlayerList;