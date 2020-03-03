import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchValues } from '../actions/';

const Values = () => {
  // const [values, setValues ] = useState([]);

  useEffect(() => {
    fetchValues();
  });

  return (
    <div className='value-list'>
      {values.map(value => {
        return (
          <div key={value.value_id} className='value-button'>
            <p>{value.description}</p>
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    state,
  };
};
// don't just return state -- fix this later.

export default connect(mapStateToProps, { fetchValues })(Values);

// Can I perform an axios.get request here, then import values.id into Value.js through props? I feel like there's a way.   