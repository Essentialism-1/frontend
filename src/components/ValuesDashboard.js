import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { fetchValueById, postUserValues } from '../actions';

const ValuesDashboard = props => {
  const dispatch = useDispatch();
  // console.log(props)
  // console.log(fetchValueById);
  const { handleSubmit, register, errors } = useForm();

  //if state.dataReducer, don't dispatch inside useEffect

  // console.log('2', props)

  const onSubmit = descriptions => {
    // console.log('values', props.state);
    // console.log('descriptions', descriptions)
    const newValues = props.state.dataReducer.values;
    // console.log('newvalues', newValues)
    newValues.values[0].description = descriptions.description1
    newValues.values[1].description = descriptions.description2
    newValues.values[2].description = descriptions.description3
    // console.log('new values', newValues)
    dispatch(postUserValues(newValues, props.history));
  }

  return (
    <div>
      <h1>Testing</h1>
      {/* {props.selectedValues} */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          name='description1'
          ref={register({
            required: 'Description required!',
          })}
        />
        <textarea
          name='description2'
          ref={register({
            required: 'Description required!',
          })}
        />
        <textarea
          name='description3'
          ref={register({
            required: 'Description required!',
          })}
        />
      
      <button type='submit'>
        Add Descriptions
      </button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, { fetchValueById, postUserValues }) (ValuesDashboard);