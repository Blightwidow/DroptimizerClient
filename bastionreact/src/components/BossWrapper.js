import React, {Component} from 'react';
import BossHeader from './BossHeader';


class BossWrapper extends Component {
    constructor(props) {
        super();
        this.state = {
            collapsed: true,
        }
    }

    onHeaderClick = (event) => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        let bossHeaders = [];
        for (var i = 0; i < this.props.bosses.length; i++) {
            bossHeaders.push(<BossHeader boss={this.props.bosses[i]} players={this.props.players} key={i} />)
        }
        return (
            <div className="BossWrapper align-items-center">
                {bossHeaders}
            </div>
        );
    }
}

export default BossWrapper;