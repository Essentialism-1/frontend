import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import {
  fetchValueById,
  postUserProject,
  getUserProjects,
  addEditProject
} from "../actions";

import {
  Badge,
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardHeader,
  UncontrolledTooltip
} from "reactstrap";

const Dashboard = props => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchValueById());
    dispatch(getUserProjects());
  }, []);

  const onSubmit = project => {
    console.log("results", project);
    dispatch(postUserProject(project));
  };

  const handleDelete = id => {
    axiosWithAuth()
      .delete(`/projects/${id}`)
      .then(res => {
        console.log(res);
        dispatch(getUserProjects());
      });
  };

  return (
    <Container>
      <h1>Dashboard</h1>
      <Row
        style={{
          justifyContent: "space-between"
        }}
      >
        {props.state.dataReducer.values.map(value => (
          <Col key={value.values_id}>
            <h4>
              <Badge
                color="primary"
                id={`UncontrolledTooltipExample${value.values_id}`}
                onMouseOver={event => {
                  console.log(event.target);
                  event.target.style.cursor = "pointer";
                }}
              >
                {value.value}
              </Badge>
            </h4>
            <UncontrolledTooltip
              placement="bottom"
              target={`UncontrolledTooltipExample${value.values_id}`}
            >
              {value.description}
            </UncontrolledTooltip>
          </Col>
        ))}
      </Row>

      <Row>
        <Col style={{ maxWidth: "450px", margin: "30px auto" }}>
          <Card
            style={{
              boxShadow:
                "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
            }}
            body
          >
            {props.state.dataReducer.values && (
              <form onSubmit={handleSubmit(onSubmit)}>
                <Row style={{ marginBottom: "20px" }}>
                  <Col>
                    <input
                      name="title"
                      placeholder="Project Title"
                      ref={register({
                        required: "Project Required!"
                      })}
                      style={{ width: "100%", borderRadius: "5px" }}
                    />
                  </Col>

                  <Col>
                    <select
                      name="user_values_id"
                      ref={register({
                        required: true
                      })}
                    >
                      {props.state.dataReducer.values.map(value => {
                        return <option value={value.id}>{value.value}</option>;
                      })}
                    </select>
                  </Col>
                </Row>

                <Row style={{ marginBottom: "10px" }}>
                  <Col>
                    <textarea
                      name="body"
                      ref={register({
                        required: "Project Description required"
                      })}
                      style={{
                        width: "100%",
                        height: "100px",
                        borderRadius: "5px"
                      }}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Button
                      type="submit"
                      color="success"
                      style={{ width: "100%", borderRadius: "5px" }}
                    >
                      Submit Projects
                    </Button>
                  </Col>
                </Row>
              </form>
            )}
          </Card>
        </Col>
        {props.state.dataReducer.projects.map(project => (
          <Col
            style={{
              maxWidth: "550px",
              minWidth: "350px",
              margin: "30px auto"
            }}
          >
            <Card
              key={project.id}
              style={{
                boxShadow:
                  "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
              }}
              body
            >
              <Badge color="dark">
                {props.state.dataReducer.values.map(value => {
                  if (value.id == project.user_values_id) {
                    return value.value;
                  }
                })}
              </Badge>
              <CardBody>
                <CardTitle>
                  <h3>
                    <Badge color="light">{project.title}</Badge>
                  </h3>
                </CardTitle>
                <CardText>{project.body}</CardText>
              </CardBody>
              {/* <p>{project.values_id}</p> */}
              <Button
                color="warning"
                style={{ marginBottom: "10px" }}
                onClick={() => {
                  let value = props.state.dataReducer.values.filter(
                    value => value.id == project.user_values_id
                  );
                  let valueName = value[0].value;
                  dispatch(
                    addEditProject({ ...project, valueName }, props.history)
                  );
                }}
              >
                Update Project
              </Button>
              <Button color="danger" onClick={() => handleDelete(project.id)}>
                Delete Project
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      {/* <button
        onClick={() => props.history.push('values-dashboard')}
      >
        Temp Values Dashboard Link
      </button> */}
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps, {
  fetchValueById,
  postUserProject,
  getUserProjects,
  addEditProject
})(Dashboard);
