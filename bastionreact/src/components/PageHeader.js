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
                <div className="PageHeader unselectable bg-dark rounded d-flex mt-2 mx-2 align-items-center" onClick={this.onHeaderClick}>
                    <div className="container px-0">
                        <div className="row w-100 align-self-center d-flex justify-content-between mx-0">
                            <div className="col-2 align-self-end px-1">
                                <img className="yeetGif" src="src/dance.gif" height="32px" />
                            </div>
                            <div className="col-8 align-self-center">
                                <div className="input-group m-3">
                                    <div className="input-group-prepend">
                                        <button class="btn btn-outline-secondary searchBar" type="button">
                                            <i className="fas fa-arrow-down searchIcon"></i>
                                        </button>
                                    </div>
                                    <input type="text" className="form-control searchBar text-light" placeholder="Yeet" aria-label="Search" />
                                    <div className="input-group-append">
                                        <button class="btn btn-outline-secondary searchBar" type="button">
                                            <i className="fas fa-search searchIcon"></i>
                                        </button>
                                    </div>  
                                </div>
                            </div>
                            <div className="col">
                            </div>
                            <div className="col-auto px-0 align-self-end px-1">
                                <img className="yeetGif" src="src/ytho.gif" width="36px" />
                            </div>                   
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageHeader;