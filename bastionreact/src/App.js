import React, {Component} from 'react';
import BigBox from './BigBox';

class App extends Component {
    state = {
        bosses: [
            {
                'name': 'Champion of the Light',
                'image': 'src/champion.png',
            },
            {
                'name': 'Jadefire Masters',
                'image': 'src/jadefire.png',
            },
            {
                'name': 'Grong, the Revenant',
                'image': 'src/grong.png',
            },
            {
                'name': 'Opulence',
                'image': 'src/opulence.png',
            },
            {
                'name': 'Conclave of the Chosen',
                'image': 'src/conclave.png',
            },
            {
                'name': 'King Rastakhan',
                'image': 'src/king.png',
            },
            {
                'name': 'High Tinker Mekkatorque',
                'image': 'src/tinker.png',
            },
            {
                'name': 'Stormwall Blockade',
                'image': 'src/blockade.png',
            },
            {
                'name': 'Lady Jaina Proudmoore',
                'image': 'src/jaina.png',
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