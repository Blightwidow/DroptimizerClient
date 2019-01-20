import React, {Component} from 'react';
import BigBox from './BigBox';

class App extends Component {
    state = {
        bosses: [
            {
                'name': 'Champion of the Light',
                'image': 'src/champion.png',
                'hidden': true,
            },
            {
                'name': 'Jadefire Masters',
                'image': 'src/jadefire.png',
                'hidden': true,
            },
            {
                'name': 'Grong, the Revenant',
                'image': 'src/grong.png',
                'hidden': true,
            },
            {
                'name': 'Opulence',
                'image': 'src/opulence.png',
                'hidden': true,
            },
            {
                'name': 'Conclave of the Chosen',
                'image': 'src/conclave.png',
                'hidden': true,
            },
            {
                'name': 'King Rastakhan',
                'image': 'src/king.png',
                'hidden': true,
            },
            {
                'name': 'High Tinker Mekkatorque',
                'image': 'src/tinker.png',
                'hidden': true,
            },
            {
                'name': 'Stormwall Blockade',
                'image': 'src/blockade.png',
                'hidden': true,
            },
            {
                'name': 'Lady Jaina Proudmoore',
                'image': 'src/jaina.png',
                'hidden': true,
            }
        ]

    };
    render() {
        return (
            <div className="container">
                <BigBox bossData={this.state.bosses} />
            </div>
        );
    }
    removeCharacter = index => {
        const { bosses } = this.state;
    
        this.setState({
            bosses: bosses.filter((character, i) => { 
                return i !== index;
            })
        });
    }
}



export default App;