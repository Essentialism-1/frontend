import styled from 'styled-components';
// import { Link } from 'react-router-dom';

const WhiteP = styled.p`
  color: white;
`;

const RedError = styled.p`
  color: red;
  font-size: 1rem;
`
const SelectValuesContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: 	#bac1c9;
`
const ValuesButtonContainer = styled.div`
  height: 5vh;
  width: 20%;
  padding: 2rem;
  margin: auto;
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  background-color:#545b63;
  border-radius: 15px;
`
const ValuesTitle = styled.h1`
border: 1px solid red;
  width: 40%;
  margin: 2% auto;
  background-color: #545b63;
  color:white;
  padding:1%;
  border-radius: 15px;
`

const Values = styled.div`
  width: 40%;
  height: 70vh;
  margin:auto;
  display:flex;
  flex-wrap: wrap;
  align-items:center;
  justify-content: space-evenly;
  background-color:	 #545b63;
  margin-bottom:2%;
  border-radius: 15px;
`
const ValuesBtns = styled.div`
  margin: 25px;
`
export {
  WhiteP,
  RedError,
  SelectValuesContainer,
  ValuesButtonContainer,
  Values,
  ValuesBtns,
  ValuesTitle
};