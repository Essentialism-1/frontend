import React from 'react';
import { useForm } from 'react-hook-form';
import { connect, useDispatch } from 'react-redux';
import { editProject } from '../actions';

const EditProject = props => {
  const { handleSubmit, register, errors } = useForm();
  const dispatch = useDispatch();
  const onSubmit = project => {
    console.log(project)
    dispatch(editProject(project, props.project.id, props.history))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name='title'
        ref={register({
          required: 'Project Required!'
        })}
      />

      {/* <select
        name='user_values_id'
        ref={register({
          required: true
        })}
      >
        {props.state.dataReducer.values.map(value => {
          return (
          <option
            value={value.values_id}
          >
            {value.value}
          </option>
          )
        })}
      </select> */}

      <textarea
        name='body'
        ref={register({
          required: 'Project Description required'
        })}
      />
        
      <button type='submit'>Submit Projects</button>
      <button></button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    project: state.dataReducer.projectToUpdate,
  }
}

export default connect (mapStateToProps, { editProject })(EditProject);