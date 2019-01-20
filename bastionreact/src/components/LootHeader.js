import React, {Component} from 'react';

class BossHeader extends Component {
    render() {
        return (
            <div className="LootHeader bg-dark rounded">
                <img className="LootImage" alt="" src={this.props.loot.image} />
                <h2 className="ItemName text-light">{this.props.loot.name}</h2>
            </div>
        );
    }
}

export default BossHeader;