import React, {Component} from 'react';
import BossHeader from './components/BossHeader';
import axios from 'axios'

class App extends Component {

    state = {
        bosses: [
            {
                'name': 'Champion of the Light',
                'image': 'src/champion.png',
                'loot': [
                    {
                        'id': 165924,
                        'name': "High Tinker's Cape",
                        'image': 'src/item.jpg',
                        'upgrades': [

                        ]
                    },
                    {
                        'id': 165568,
                        'name': "Invocation of Yu'lon",
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 165567,
                        'name': 'Seal of the Zandalari Empire',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 165546,
                        'name': 'Slimy Kelpweavers',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 19019,
                        'name': 'Thunderfury, Blessed Blade of the Windseeker',
                        'image': 'src/item.jpg'
                    },
                ]
            },
            {
                'name': 'Jadefire Masters',
                'image': 'src/jadefire.png',
                'loot': [
                    {
                        'id': 1,
                        'name': 'cool item',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 2,
                        'name': 'cool item 2',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 3,
                        'name': 'cool item 3',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 4,
                        'name': 'cool item 4',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 5,
                        'name': 'cool item 5',
                        'image': 'src/item.jpg'
                    },
                ]
            },
            {
                'name': 'Grong, the Revenant',
                'image': 'src/grong.png',
                'loot': [
                    {
                        'id': 1,
                        'name': 'cool item',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 2,
                        'name': 'cool item 2',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 3,
                        'name': 'cool item 3',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 4,
                        'name': 'cool item 4',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 5,
                        'name': 'cool item 5',
                        'image': 'src/item.jpg'
                    },
                ]
            },
            {
                'name': 'Opulence',
                'image': 'src/opulence.png',
                'loot': [
                    {
                        'id': 1,
                        'name': 'cool item',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 2,
                        'name': 'cool item 2',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 3,
                        'name': 'cool item 3',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 4,
                        'name': 'cool item 4',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 5,
                        'name': 'cool item 5',
                        'image': 'src/item.jpg'
                    },
                ]
            },
            {
                'name': 'Conclave of the Chosen',
                'image': 'src/conclave.png',
                'loot': [
                    {
                        'id': 1,
                        'name': 'cool item',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 2,
                        'name': 'cool item 2',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 3,
                        'name': 'cool item 3',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 4,
                        'name': 'cool item 4',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 5,
                        'name': 'cool item 5',
                        'image': 'src/item.jpg'
                    },
                ]
            },
            {
                'name': 'King Rastakhan',
                'image': 'src/king.png',
                'loot': [
                    {
                        'id': 1,
                        'name': 'cool item',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 2,
                        'name': 'cool item 2',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 3,
                        'name': 'cool item 3',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 4,
                        'name': 'cool item 4',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 5,
                        'name': 'cool item 5',
                        'image': 'src/item.jpg'
                    },
                ]
            },
            {
                'name': 'High Tinker Mekkatorque',
                'image': 'src/tinker.png',
                'loot': [
                    {
                        'id': 1,
                        'name': 'cool item',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 2,
                        'name': 'cool item 2',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 3,
                        'name': 'cool item 3',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 4,
                        'name': 'cool item 4',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 5,
                        'name': 'cool item 5',
                        'image': 'src/item.jpg'
                    },
                ]
            },
            {
                'name': 'Stormwall Blockade',
                'image': 'src/blockade.png',
                'loot': [
                    {
                        'id': 1,
                        'name': 'cool item',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 2,
                        'name': 'cool item 2',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 3,
                        'name': 'cool item 3',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 4,
                        'name': 'cool item 4',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 5,
                        'name': 'cool item 5',
                        'image': 'src/item.jpg'
                    },
                ]
            },
            {
                'name': 'Lady Jaina Proudmoore',
                'image': 'src/jaina.png',
                'loot': [
                    {
                        'id': 1,
                        'name': 'cool item',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 2,
                        'name': 'cool item 2',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 3,
                        'name': 'cool item 3',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 4,
                        'name': 'cool item 4',
                        'image': 'src/item.jpg'
                    },
                    {
                        'id': 5,
                        'name': 'cool item 5',
                        'image': 'src/item.jpg'
                    },
                ]
            }
        ],
        players:[

        ]
    };

    componentDidMount(){
        axios.get('http://127.0.0.1:3000/1/character',{ crossdomain: true } )
            .then(response => this.setState({players: response.data}))
        console.log("got player list");
    }

    render() {
        let bossHeaders = [];
        for (var i = 0; i < this.state.bosses.length; i++) {
            bossHeaders.push(<BossHeader boss={this.state.bosses[i]} players={this.state.players} updatePlayerList={this.updatePlayerList} key={i} />)
        }
        return (
            <div className="container align-items-center">
                {bossHeaders}
            </div>
        );
    }
}

export default App;