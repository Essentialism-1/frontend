import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { fetchValueById, postUserProject, getUserProjects } from '../actions';

const Dashboard = props => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchValueById());
    dispatch(getUserProjects());
  }, []);

  const onSubmit = project => {
    console.log('results', project);
    dispatch(postUserProject(project))
  }

  return(
    <div>
      <h1>Dashboard</h1>
      {props.state.dataReducer.values.map(value => 
        <div key={value.values_id}>
          <h3>{value.value}</h3>
          <p>{value.description}</p>
        </div>
      )}
    
      {props.state.dataReducer.values && (
              <form onSubmit={handleSubmit(onSubmit)}>
              <input
                name='title'
                ref={register({
                  required: 'Project Required!'
                })}
              />

              <select
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
              </select>

              <textarea
                name='body'
                ref={register({
                  required: 'Project Description required'
                })}
              />
                
              <button type='submit'>Submit Projects</button>
            </form>
      )}

      {props.state.dataReducer.projects.map(project => 
        <div key={project.id} >
          <h4>{project.title}</h4>
          <p>{project.body}</p>
          {/* <p>{project.values_id}</p> */}
        </div>
      )}
      
      {/* <button
        onClick={() => props.history.push('values-dashboard')}
      >
        Temp Values Dashboard Link
      </button> */}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, { fetchValueById, postUserProject, getUserProjects })(Dashboard);