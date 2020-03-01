import React from 'react';
import { connect } from 'react-redux';

const Values = () => {

  return (
    <div className='value-list'>

    </div>
  )
}

const mapStateToProps = state => {
  return {
    state,
  };
};
// don't just return state -- fix this later.

export default connect(mapStateToProps, {})(Values);

// Can I perform an axios.get request here, then import values.id into Value.js through props? I feel like there's a way.   