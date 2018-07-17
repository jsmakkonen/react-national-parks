import React, { Component } from 'react';
import ParkList from './ParkList';
import ParksService from '../services/ParksService';

export default class Parks extends Component {
    constructor() {
        super();

        this.state = {
            parks: []
        };
    }

    componentDidMount() {
        this.setState(() => ({ parks: ParksService.getParks() }));
    }

    render() {
        return (
            <div className="container-fluid" style={{ marginLeft: '-15px' }}>
                <div className="d-flex flex-row">
                    <div className="col-sm-12">
                        <ParkList parks={this.state.parks} />
                    </div>
                </div>
            </div>
        );
    }
}