import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DavRodape extends Component {
    render () {
        let _config = this.props.config;
        return (
            <footer className="main-footer">
                <div className="pull-right hidden-xs">
                    <b>Version</b> 2.4.0
                </div>
                <strong>Copyright &copy; 2014-2016 <a href="https://adminlte.io">Almsaeed Studio</a>.</strong> All rights reserved.
            </footer>
        );
    }
}

DavRodape.propTypes = {
    config: PropTypes.any
}