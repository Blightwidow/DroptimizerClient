import React, {Component} from 'react';


class PageHeader extends Component {
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
        return (
            <div className="BossWrapper align-items-center">
                <div className="PageHeader unselectable bg-dark rounded d-flex p-1 pt-2 mt-2 mx-2 align-items-center" onClick={this.onHeaderClick}>
                    <img className="BossImage" alt="" />
                    <h3 className="BossName text-light align-middle">Header</h3>
                </div>
            </div>
        );
    }
}

export default PageHeader;