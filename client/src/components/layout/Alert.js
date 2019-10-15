// to display alert in the ui

import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    // unique key for jsx list
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

// to fetch alert state array into this component from the store
const mapStateToProps = state => ({ alerts: state.alert });
// state.alert - alert reducer inside root reducer (to get alerts prop)

export default connect(mapStateToProps)(Alert);
