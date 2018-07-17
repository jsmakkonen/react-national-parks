import React from 'react';
import PropTypes from 'prop-types';
import ParkRating from './ParkRating';

const ParkCard = (props) => (
    <div className="park-card">
        <div className="park-card card">
            <img className="card-img-top" src={props.parks.imageUrl} alt="" />
            <div className="card-body">
                <h4 className="card-title">{props.parks.title}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{props.parks.location}, {props.parks.region}</h6>
                <h6 className="card-subtitle mb-2 text-year">Perustettu vuonna {props.parks.year}</h6>
                <h6 className="card-subtitle mb-2 text-muted text-area">Puiston pinta-ala on {props.parks.area} km<sup>2</sup></h6>
                <h6 className="card-subtitle mb-2 text-area" style={{ fontSize: '15px' }}>Nähtävyyksiä: {props.parks.sights}</h6>
                <p className="text-justify" style={{ fontSize: '14px' }}>{props.parks.description}</p>
            </div>
            <div className="card-footer">
                <div className="clearfix">
                    <div className="float-left mt-1">
                        <ParkRating rating={props.parks.rating} />
                    </div>
                    <div className="card-footer-badge float-right badge badge-primary badge-pill">{props.parks.rating}</div>
                </div>
            </div>
        </div>
    </div>
);

ParkCard.defaultProps = {
    park: {}
};

ParkCard.propTypes = {
    park: PropTypes.object
};

export default ParkCard;