import React, {Component} from 'react';
import PlayerHeader from './PlayerHeader';

class PlayerList extends Component {
    render() {
        let playerHeaders = [];
        for (var i = 0; i < this.props.players.length; i++) {
            playerHeaders.push(<PlayerHeader player={this.props.players[i]} key={i} />)
        }
        return (
            <div className="col-6 playerScroller rounded">
                <div className="PlayerList rounded-bottom m-auto p-3">
                    {playerHeaders}
                </div>
            </div>
        );
    }
}

export default PlayerList;