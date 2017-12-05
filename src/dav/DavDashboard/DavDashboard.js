import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DavTopo from './DavTopo';
import DavMenuPrincipal from './DavMenuPrincipal';
import DavConteudo from './DavConteudo';
import DavRodape from './DavRodape';
import DavAside from './DavAside';

export default class DavDashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
          _config: undefined
        };
    }

    render() {
        this.state._config = this.props.config;
        return (
            <div className="wrapper">
                <DavTopo config={this.state._config} />
                <DavMenuPrincipal config={this.state._config} />
                <DavConteudo config={this.state._config} />
                <DavRodape config={this.state._config} />
                <DavAside config={this.state._config} />
            </div>
        )
    }
}

DavDashboard.PropTypes = {
    config: PropTypes.any
}