import React, {Component} from 'react';
import BossHeader from './components/BossHeader';

class App extends Component {
    state = {
        bosses: [
            {
                'name': 'Champion of the Light',
                'image': 'src/champion.png',
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
            {
                'name': 'Bowbi',
                'class': 10,
                'image': 'src/avatar.png'
            },
            {
                'name': 'Arwic',
                'class': 3,
                'image': 'src/avatar.png'
            },
            {
                'name': 'Monkaxd',
                'class': 12,
                'image': 'src/avatar.png'
            },
            {
                'name': 'Subduce',
                'class': 7,
                'image': 'src/avatar.png'
            },
            {
                'name': 'Brbteabreaktv',
                'class': 8,
                'image': 'src/avatar.png'
            },
            {
                'name': 'Shittytrial',
                'class': 1,
                'image': 'src/avatar.png'
            }
        ]
    };
    render() {
        let bossHeaders = [];
        for (var i = 0; i < this.state.bosses.length; i++) {
            bossHeaders.push(<BossHeader boss={this.state.bosses[i]} players={this.state.players} key={i} />)
        }

        return (
            <div className="container align-items-center">
                {bossHeaders}
            </div>
        );
    }
}

export default App;