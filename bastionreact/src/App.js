import React, {Component} from 'react';
import BossHeader from './components/BossHeader';

class App extends Component {
    state = {
        bosses: [
            {
                'name': 'Champion of the Light',
                'image': 'src/champion.png',
                'collapsed': true,
            },
            {
                'name': 'Jadefire Masters',
                'image': 'src/jadefire.png',
                'collapsed': true,
            },
            {
                'name': 'Grong, the Revenant',
                'image': 'src/grong.png',
                'collapsed': true,
            },
            {
                'name': 'Opulence',
                'image': 'src/opulence.png',
                'collapsed': true,
            },
            {
                'name': 'Conclave of the Chosen',
                'image': 'src/conclave.png',
                'collapsed': true,
            },
            {
                'name': 'King Rastakhan',
                'image': 'src/king.png',
                'collapsed': true,
            },
            {
                'name': 'High Tinker Mekkatorque',
                'image': 'src/tinker.png',
                'collapsed': true,
            },
            {
                'name': 'Stormwall Blockade',
                'image': 'src/blockade.png',
                'collapsed': true,
            },
            {
                'name': 'Lady Jaina Proudmoore',
                'image': 'src/jaina.png',
                'collapsed': true,
            }
        ]
    };
    render() {
        let bossHeaders = [];
        for (var i = 0; i < this.state.bosses.length; i++) {
            bossHeaders.push(<BossHeader boss={this.state.bosses[i]} key={i} />)
        }

        return (
            <div className="container align-items-center">
                {bossHeaders}
            </div>
        );
    }
}

export default App;