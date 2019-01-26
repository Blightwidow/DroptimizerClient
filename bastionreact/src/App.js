import React, {Component} from 'react';
import BossWrapper from './components/BossWrapper';
import PageHeader from './components/PageHeader';
import axios from 'axios'

const API_CHARACTER = 'https://api.arwic.io/droptimizer/1/character';
const API_ITEM = 'https://api.arwic.io/droptimizer/1/item/'

class App extends Component {

    state = {
        players:[

        ],
        bossCollapsed : false,
    };
    bosses = [
        {
            'name': 'Champion of the Light',
            'image': 'src/champion.png',
            'loot': [
                {
                    'id': 165517,
                    'searchTerms': ["Leather","Wrist","Crit","Vers","Versatility"]
                },
                {
                    'id': 165501,
                    'searchTerms': ["Cloth","Wrist","haste","Vers","versatility"]
                },
                {
                    'id': 165550,
                    'searchTerms': ["Plate","Chest","azerite"]
                },
                {
                    'id': 165519,
                    'searchTerms': ["Leather","Helm","Helmet","Head","azerite"]
                },
                {
                    'id': 165549,
                    'searchTerms': ["Plate","Hands","Gloves","crit","haste"]
                },
                {
                    'id': 165586,
                    'searchTerms': ["Weapon","Sword","2h","Two-Hand","Strength","str","haste","mastery"]
                },
                {
                    'id': 165919,
                    'searchTerms': ["Weapon","Dagger","1h","One-Hand","Intellect","int","crit","vers","versatility"]
                },
                {
                    'id': 165834,
                    'searchTerms': ["Cloth","chest","azerite"]
                },
                {
                    'id': 165514,
                    'searchTerms': ["Leather","Hands","Gloves","crit","haste"]
                },
                {
                    'id': 165533,
                    'searchTerms': ["Mail","feet","boots","crit","mastery"]
                },
                {
                    'id': 165921,
                    'searchTerms': ["mail","shoulder","azerite"]
                },
                {
                    'id': 165584,
                    'searchTerms': ["shield","offhand","off-hand","crit","haste"]
                },
                {
                    'id': 165569,
                    'searchTerms': ["trinket","intellect","int","healing","healer"]
                }
            ]
        },
        {
            'name': 'Jadefire Masters',
            'image': 'src/jadefire.png',
            'loot': [
                {
                    'id': 165565,
                    'searchTerms': ["ring","finger","crit","vers","versatility"]
                },
                {
                    'id': 165500,
                    'searchTerms': ["cloth","head","helmet","helm","azerite"]
                },
                {
                    'id': 165521,
                    'searchTerms': ["leather","legs","pants","haste","vers","versatility"]
                },
                {
                    'id': 165552,
                    'searchTerms': ["plate","belt","waist","crit","versatility","vers"]
                },
                {
                    'id': 165531,
                    'searchTerms': ["mail","gloves","hands","haste","mastery"]
                },
                {
                    'id': 165548,
                    'searchTerms': ["head","helm","helmet","plate","azerite"]
                },
                {
                    'id': 165568,
                    'searchTerms': ["agility","trinket","dps","aoe","agi"]
                },
                {
                    'id': 165503,
                    'searchTerms': ["cloth","gloves","hands","crit","haste"]
                },
                {
                    'id': 165516,
                    'searchTerms': ["leather","azerite","shoulders"]
                },
                {
                    'id': 165540,
                    'searchTerms': ["mail","chest","azerite"]
                },
                {
                    'id': 165587,
                    'searchTerms': ["weapon","staff","2h","two-hand","crit","mastery","int","intellect"]
                },
            ]
        },
        {
            'name': 'Grong, the Revenant',
            'image': 'src/grong.png',
            'loot': [
                {
                    'id': 165920,
                },
                {
                    'id': 165534,
                },
                {
                    'id': 165588,
                },
                {
                    'id': 165922,
                },
                {
                    'id': 165582,
                },
                {
                    'id': 165515,
                },
                {
                    'id': 165574,
                },
                {
                    'id': 165589,
                },
                {
                    'id': 165499,
                },
                {
                    'id': 165513,
                },
                {
                    'id': 165535,
                },
                {
                    'id': 165555,
                },
                {
                    'id': 165551,
                },
                {
                    'id': 165525,
                },
                
            ]
        },
        {
            'name': 'Opulence',
            'image': 'src/opulence.png',
            'loot': [
                {
                    'id': 165524,
                },
                {
                    'id': 165591,
                },
                {
                    'id': 165541,
                },
                {
                    'id': 165561,
                },
                {
                    'id': 165526,
                },
                {
                    'id': 165821,
                },
                {
                    'id': 165818,
                },
                {
                    'id': 165573,
                },
                {
                    'id': 165820,
                },
                {
                    'id': 165592,
                },
                {
                    'id': 165538,
                },
                {
                    'id': 165593,
                },
                {
                    'id': 165571,
                },
                {
                    'id': 165504,
                },
            ]
        },
        {
            'name': 'Conclave of the Chosen',
            'image': 'src/conclave.png',
            'loot': [
                {
                    'id': 165594,
                },
                {
                    'id': 165560,
                },
                {
                    'id': 165595,
                },
                {
                    'id': 166418,
                },
                {
                    'id': 165532,
                },
                {
                    'id': 165579,
                },
                {
                    'id': 165502,
                },
                {
                    'id': 165512,
                },
                {
                    'id': 165507,
                },
                {
                    'id': 165599,
                },
                {
                    'id': 165562,
                },
                {
                    'id': 165833,
                }
            ]
        },
        {
            'name': 'King Rastakhan',
            'image': 'src/king.png',
            'loot': [
                {
                    'id': 165832,
                },
                {
                    'id': 165577,
                },
                
                {
                    'id': 165536,
                },
                
                {
                    'id': 165597,
                },
                
                {
                    'id': 165596,
                },
                
                {
                    'id': 165537,
                },
                
                {
                    'id': 165578,
                },
                
                {
                    'id': 165523,
                },
                
                {
                    'id': 165558,
                },
                
                {
                    'id': 165567,
                },
                
                {
                    'id': 165498,
                }
            ]
        },
        {
            'name': 'High Tinker Mekkatorque',
            'image': 'src/tinker.png',
            'loot': [
                {
                    'id': 165825,
                },
                {
                    'id': 165497,
                },
                {
                    'id': 165924,
                },
                {
                    'id': 165508,
                },
                {
                    'id': 165522,
                },
                {
                    'id': 165830,
                },
                {
                    'id': 165580,
                },
                {
                    'id': 165598,
                },
                {
                    'id': 165543,
                },
                {
                    'id': 165600,
                },
                {
                    'id': 165572,
                }
            ]
        },
        {
            'name': 'Stormwall Blockade',
            'image': 'src/blockade.png',
            'loot': [
                {
                    'id': 165585,
                },
                {
                    'id': 165822,
                },
                {
                    'id': 165602,
                },
                {
                    'id': 165590,
                },
                {
                    'id': 165528,
                },
                {
                    'id': 165557,
                },
                {
                    'id': 165603,
                },
                {
                    'id': 165546,
                },
                {
                    'id': 165601,
                },
                {
                    'id': 165556,
                },
                {
                    'id': 165923,
                },
                {
                    'id': 165819,
                },
                {
                    'id': 165506,
                },  
            ]
        },
        {
            'name': 'Lady Jaina Proudmoore',
            'image': 'src/jaina.png',
            'loot': [
                {
                    'id': 165824,
                },
                {
                    'id': 165604,
                },
                {
                    'id': 165527,
                },
                {
                    'id': 165570,
                },
                {
                    'id': 165831,
                },
                {
                    'id': 165583,
                },
                {
                    'id': 165823,
                },
                {
                    'id': 165559,
                },
                {
                    'id': 165542,
                },
                {
                    'id': 165566,
                },
                {
                    'id': 165505,
                },
                {
                    'id': 165576,
                }  
            ]
        }
    ]
    items = [];
    loading = true;

    updateItemState = () =>{
        let promises = [];
        let requests = [];
        for(let i = 0; i < this.bosses.length; i++){
            for (var j = 0; j < this.bosses[i].loot.length; j++){
                let url = API_ITEM+this.bosses[i].loot[j].id;
                requests.push(url);
            }
            
        }
        for(let i = 0; i < requests.length; i++){
            promises.push(axios.get(requests[i], {crossdomain: true}));
        }
        axios.all(promises).then(axios.spread((...args) => {
            this.items = [];
            for(let i = 0; i < args.length; i++){
                if(args[i].data !== ''){
                    for(let m = 0; m < this.bosses.length; m++){
                        let bItems = this.bosses[m].loot;
                        let out = {};
                        for(let k = 0; k < bItems.length; k++){
                            if(bItems[k].id === args[i].data.id){
                                let terms = [];
                                terms.push(args[i].data.name);

                                let result = args[i].data;
                                if(typeof(bItems[k].searchTerms) !== 'undefined'){
                                    for(let n = 0; n < bItems[k].searchTerms.length; n++){
                                        terms.push(bItems[k].searchTerms[n]);
                                        
                                    }
                                }
                                result.searchTerms = terms;
                                out = result;
                            }
                        }
                        if(Object.keys(out).length > 0){
                            this.items.push(out);
                        }
                    }
                }
                else{
                }
            }
            this.loading = false;

        }));
    } 

    componentDidMount(){
        this.updateItemState();
        axios.get(API_CHARACTER,{ crossdomain: true } )
        .then(response => this.setState({players: response.data}))
    }

    setBossCollapse = (boo) =>{
        this.setState({bossCollapsed : boo});
    }

    render() {
        if(this.loading === false){
            return (
                <div className="container-fluid align-items-center">
                    <PageHeader loading={this.loading}  bosses={this.bosses} items={this.items} players={this.state.players} update={this.updateItemState} setBossCollapse = {this.setBossCollapse} />
                    { this.state.bossCollapsed ? null : <BossWrapper loading={this.loading} bosses={this.bosses} items={this.items} update={this.updateItemState} players={this.state.players} /> }
                </div>
            );
        }
        else{
            return (
                <div className="container-fluid align-items-center">
                    <PageHeader loading={this.loading} bosses={this.bosses} items={this.items} players={this.state.players} update={this.updateItemState} setBossCollapse = {this.setBossCollapse} />
                    { this.state.bossCollapsed ? null : <BossWrapper loading={this.loading} bosses={this.bosses} items={this.items} update={this.updateItemState} players={this.state.players} /> }
                </div>
            );
        }
        
    }
}

export default App;