import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { fetchValueById } from '../actions';

const SelectValues = props => {
  const [values, setValues] = useState([]);
  const [selectedValues, setSelectedValues] = useState({
    values: [],
  });

  // const id = localStorage.getItem('userId');

  useEffect(() => {
    axiosWithAuth()
    .get('/values')
    .then(res => {
      console.log('get values', res.data);
      setValues(res.data);
    })
    .catch(err => console.log('get values error', err))
  }, []);

  // const fetchId = id => {
  //   axiosWithAuth()
  //   .get(`/values/${id}`)
  //   .then(res => {
  //     console.log('values/id.then', res);
  //     setValues(res.data);
  //   })
  // }

  // useEffect(() => {
  //   fetchValueById();
  //   console.log('id')
  // })

  // useEffect(() => {
  //   console.log('test')
  //   fetchId(props.match.params.id)
  // })

  //`/uservalues/${id}` on next page!!!!

  const addSelectedValues =( id, value ) => {
    if(selectedValues.values.length >= 3) {
      alert('Values capped at three.');
    } else {
      // filter over value and look at last sprint 
      // const myValue = e.target.value;
      // const selected = values.filter(clicked => myValue === clicked.value);
      // setSelectedValues(selectedValues.concat(selected));
      console.log('values/id', {values: [...selectedValues.values, { id }]});
      console.log('values', values);
      setSelectedValues({values: [...selectedValues.values, {id}]}) 
      console.log('value added!', id)
    };
  };

  const resetSelected = e => {
    e.preventDefault();
    setSelectedValues([]);
  }

  // selectedValues.forEach(value => {
  //   value.user_id = localStorage.getItem('user_id')
  // })
  console.log('selectedValues', selectedValues)

  return(
    <div className='select-values-container'>
      <h2>Select Three Values</h2>
      <div className='value-list'>
        {values.map(value => (
          <div key={value.id} className='value-button-div'>
            <button
              className='value-button'
              onClick={() => addSelectedValues(value.id)}
            >
              {value.value}
            </button>
          </div>
          ))}
      </div>
      <br />
      <button
        onClick={() => props.history.push('/values-dashboard')}
      >
        Continue
      </button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    state,
  };
};
// don't just return state -- fix this later.

export default connect(mapStateToProps, { fetchValueById })(SelectValues);