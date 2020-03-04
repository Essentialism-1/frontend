// Moved everything into SelectValues.js

// ^^^^
// import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
// import { fetchValues } from '../actions/';
// import { axiosWithAuth } from '../utils/axiosWithAuth';

// const Values = () => {
//   const [values, setValues ] = useState([]);

//   // useEffect(() => {
//   //   fetchValues(setValues);
//   // });
//   // how can I add setValues to fetchValues when it's setup in an action creator?
  
//   useEffect(() => {
//     axiosWithAuth()
//     .get('/values')
//     .then(res => {
//       // console.log('get values', res.data);
//       setValues(res.data);
//     })
//     .catch(err => console.log('get values error', err))
//   }, []);

//   return (
//     <div className='value-list'>
//       {values.map(value => (
//         <div key={value.id} className='value-button'>
//           <button>{value.value}</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     state,
//   };
// };
// // don't just return state -- fix this later.

// export default connect(mapStateToProps, { fetchValues })(Values);

// // Can I perform an axios.get request here, then import values.id into Value.js through props? I feel like there's a way.   