import React, {Component} from 'react';
import LootHeader from './LootHeader';

class LootList extends Component {
    render() {
        let lootHeaders = [];
        for (var i = 0; i < this.props.loot.length; i++) {
            lootHeaders.push(<LootHeader loot={this.props.loot[i]} key={i} />)
        }
        return (
            <div className="LootList bg-dark rounded d-flex p-3 m-2 align-items-center">
                {lootHeaders}
            </div>
        );
    }
}

export default LootList;