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
                        'name': 'cool item'
                    },
                    {
                        'id': 2,
                        'name': 'cool item 2'
                    },
                    {
                        'id': 3,
                        'name': 'cool item 3'
                    },
                    {
                        'id': 4,
                        'name': 'cool item 4'
                    },
                    {
                        'id': 5,
                        'name': 'cool item 5'
                    },
                ]
            },
            {
                'name': 'Jadefire Masters',
                'image': 'src/jadefire.png',
                'loot': [
                    {
                        'id': 1,
                        'name': 'cool item'
                    },
                    {
                        'id': 2,
                        'name': 'cool item 2'
                    },
                    {
                        'id': 3,
                        'name': 'cool item 3'
                    },
                    {
                        'id': 4,
                        'name': 'cool item 4'
                    },
                    {
                        'id': 5,
                        'name': 'cool item 5'
                    },
                ]
            },
            {
                'name': 'Grong, the Revenant',
                'image': 'src/grong.png',
                'loot': [
                    {
                        'id': 1,
                        'name': 'cool item'
                    },
                    {
                        'id': 2,
                        'name': 'cool item 2'
                    },
                    {
                        'id': 3,
                        'name': 'cool item 3'
                    },
                    {
                        'id': 4,
                        'name': 'cool item 4'
                    },
                    {
                        'id': 5,
                        'name': 'cool item 5'
                    },
                ]
            },
            {
                'name': 'Opulence',
                'image': 'src/opulence.png',
                'loot': [
                    {
                        'id': 1,
                        'name': 'cool item'
                    },
                    {
                        'id': 2,
                        'name': 'cool item 2'
                    },
                    {
                        'id': 3,
                        'name': 'cool item 3'
                    },
                    {
                        'id': 4,
                        'name': 'cool item 4'
                    },
                    {
                        'id': 5,
                        'name': 'cool item 5'
                    },
                ]
            },
            {
                'name': 'Conclave of the Chosen',
                'image': 'src/conclave.png',
                'loot': [
                    {
                        'id': 1,
                        'name': 'cool item'
                    },
                    {
                        'id': 2,
                        'name': 'cool item 2'
                    },
                    {
                        'id': 3,
                        'name': 'cool item 3'
                    },
                    {
                        'id': 4,
                        'name': 'cool item 4'
                    },
                    {
                        'id': 5,
                        'name': 'cool item 5'
                    },
                ]
            },
            {
                'name': 'King Rastakhan',
                'image': 'src/king.png',
                'loot': [
                    {
                        'id': 1,
                        'name': 'cool item'
                    },
                    {
                        'id': 2,
                        'name': 'cool item 2'
                    },
                    {
                        'id': 3,
                        'name': 'cool item 3'
                    },
                    {
                        'id': 4,
                        'name': 'cool item 4'
                    },
                    {
                        'id': 5,
                        'name': 'cool item 5'
                    },
                ]
            },
            {
                'name': 'High Tinker Mekkatorque',
                'image': 'src/tinker.png',
                'loot': [
                    {
                        'id': 1,
                        'name': 'cool item'
                    },
                    {
                        'id': 2,
                        'name': 'cool item 2'
                    },
                    {
                        'id': 3,
                        'name': 'cool item 3'
                    },
                    {
                        'id': 4,
                        'name': 'cool item 4'
                    },
                    {
                        'id': 5,
                        'name': 'cool item 5'
                    },
                ]
            },
            {
                'name': 'Stormwall Blockade',
                'image': 'src/blockade.png',
                'loot': [
                    {
                        'id': 1,
                        'name': 'cool item'
                    },
                    {
                        'id': 2,
                        'name': 'cool item 2'
                    },
                    {
                        'id': 3,
                        'name': 'cool item 3'
                    },
                    {
                        'id': 4,
                        'name': 'cool item 4'
                    },
                    {
                        'id': 5,
                        'name': 'cool item 5'
                    },
                ]
            },
            {
                'name': 'Lady Jaina Proudmoore',
                'image': 'src/jaina.png',
                'loot': [
                    {
                        'id': 1,
                        'name': 'cool item'
                    },
                    {
                        'id': 2,
                        'name': 'cool item 2'
                    },
                    {
                        'id': 3,
                        'name': 'cool item 3'
                    },
                    {
                        'id': 4,
                        'name': 'cool item 4'
                    },
                    {
                        'id': 5,
                        'name': 'cool item 5'
                    },
                ]
            }
        ]
    };
    render() {
        let bossHeaders = [];
        for (var i = 0; i < this.state.bosses.length; i++) {
            bossHeaders.push(<BossHeader boss={this.state.bosses[i]} key={i} />)
        }

        return (
            <div className="container">
                {bossHeaders}
            </div>
        );
    }
}

export default App;