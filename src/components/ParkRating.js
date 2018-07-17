import React from 'react';
import PropTypes from 'prop-types';

const width = 110;

const styles = {
    innerStars: {
        width: `${width}px`
    },

    innerStarsEmpty: {
        position: 'absolute',
        width: `${width}px`
    },

    outerStars: {
        overflow: 'hidden'
    },

    star: {
        padding: '1px'
    }
};

const cropWidth = (rating) => {
    return Math.floor(rating * width / 5);
};

const ParkRating = (props) => {
    const containerStyle = { width: `${cropWidth(props.rating)}px` };

    return (
        <div>
            <div style={styles.outerStars}>
                <div style={containerStyle}>
                    <div style={styles.innerStarsEmpty}>
                        <i className="fa fa-star-o fa-lg" style={styles.star}></i>
                        <i className="fa fa-star-o fa-lg" style={styles.star}></i>
                        <i className="fa fa-star-o fa-lg" style={styles.star}></i>
                        <i className="fa fa-star-o fa-lg" style={styles.star}></i>
                        <i className="fa fa-star-o fa-lg" style={styles.star}></i>
                    </div>
                    <div style={styles.innerStars}>
                        <i className="fa fa-star fa-lg" style={styles.star}></i>
                        <i className="fa fa-star fa-lg" style={styles.star}></i>
                        <i className="fa fa-star fa-lg" style={styles.star}></i>
                        <i className="fa fa-star fa-lg" style={styles.star}></i>
                        <i className="fa fa-star fa-lg" style={styles.star}></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

ParkRating.defaultProps = {
    rating: 0
};

ParkRating.propTypes = {
    rating: PropTypes.number
};

export default ParkRating;