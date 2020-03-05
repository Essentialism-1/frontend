import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  DescribeValuesTitle,
  DescribeValuesContainer,
  TextAreaContainer,
  TextArea,
  SubmitDescriptions,
  ValueName
} from '../styled/styledComponents';
import { Button } from 'reactstrap';

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
    <DescribeValuesContainer>
      <DescribeValuesTitle>Describe Your Values</DescribeValuesTitle>
      {/* {props.selectedValues} */}
      <TextAreaContainer onSubmit={handleSubmit(onSubmit)}>
        <ValueName>Value 1</ValueName>
        <TextArea
          name='description1'
          ref={register({
            required: 'Description required!',
          })}
        />
        <ValueName>Value 2</ValueName>
        <TextArea
          name='description2'
          ref={register({
            required: 'Description required!',
          })}
        />
        <ValueName>Value 3</ValueName>
        <TextArea
          name='description3'
          ref={register({
            required: 'Description required!',
          })}
        />

        <SubmitDescriptions
          type='submit'
          color='secondary'>
          Add Descriptions
      </SubmitDescriptions>
      </TextAreaContainer>
    </DescribeValuesContainer>
  )
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, { fetchValueById, postUserValues })(ValuesDashboard);