import React from 'react';
import PropTypes from 'prop-types';
import ParkCard from './ParkCard';

const getParks = (parks) => {
    return (
        <div className="card-deck">
            {
                parks.map(parks => <ParkCard key={parks.id} parks={parks} />)
            }
        </div>
    );
};

const ParkList = (props) => (
    <div>
        {getParks(props.parks)}
    </div>
);

ParkList.defaultProps = {
    parks: []
};

ParkList.propTypes = {
    parks: PropTypes.array
};

export default ParkList;