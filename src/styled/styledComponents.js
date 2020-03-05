import styled from 'styled-components';
// import { Link } from 'react-router-dom';

const WhiteP = styled.p`
  color: white;
`;

const RedError = styled.p`
  color: red;
  font-size: 1rem;
`
// Select 3 Values Page

const SelectValuesContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bac1c9;
  border: 1px solid green;
  padding-top: 2%;
`
const ValuesButtonContainer = styled.div`
  height: 5vh;
  width: 20%;
  padding: 2rem;
  margin: auto;
  display:flex;
  justify-content: space-evenly;
  align-items:center;
  background-color:#545b63;
  border-radius: 15px;
`
const ValuesTitle = styled.h1`
  border: 1px solid red;
  width: 40%;
  margin: 0 auto;
  background-color: #545b63;
  color:white;
  padding:1%;
  border-radius: 15px;

  @media (max-width: 900px) {
    font-size:1.2rem;
    width: 60%;
    height: 5vh;
    padding: 2%;
  }
`

const Values = styled.div`
  width: 40%;
  height: 65%;
  padding:3%;
  margin:auto;
  display:flex;
  flex-wrap: wrap;
  align-items:center;
  justify-content: space-evenly;
  background-color:	 #545b63;
  margin: 2% auto;
  border-radius: 15px;
  @media (max-width: 900px) {
  width: 80%;
}
`;
const ValuesBtns = styled.div`
 padding:10px; 
`
// Describe your values

const DescribeValuesContainer = styled.div`
  border: 1px solid red;
  height: 120vh;
  width: 100%;
  background-color:#bac1c9;
 `

const DescribeValuesTitle = styled.h1`
  border:1px solid green;
  width: 40%;
  margin: 2% auto;
  padding: 1%;
  background-color: #545b63;
  border-radius: 15px;
  color: white;
  font-size: 2rem;
  @media (max-width: 900px) {
    font-size:1.1rem;
    width: 70%;
    margin-top:6%; 
    margin-bottom:6%;
  }
`;
const TextAreaContainer = styled.form`
  border: 1px solid pink;
  height: 80%;
  margin: 0 auto;
  width: 50%;
  margin-top: 2%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content:space-evenly;
  background-color:#545b63;
  border-radius: 15px;
  @media (max-width: 900px) {
    width: 80%;
    padding:4%;
  }
`

const TextArea = styled.textarea`
  border: 1px solid green;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 2%;
  border-radius: 15px;
  height:100%;
  background-color:#f3f4f6;
  @media (max-width: 900px) {
    width: 80%;
    margin-bottom: 10%;
    margin-top:2%;
  }
`

const SubmitDescriptions = styled.button`
  width:30%;
  margin: 0 auto;
  background-color:#8c99a6;
  border-radius: 5px;
  color: white;
  text-align: center;
  font-size: 1.2rem;
  transition-duration: 0.4s;

  &:hover{
  background-color:	#bac1c9;
  color:#545b63;}

  @media (max-width: 900px) {
    font-size:1rem;
    width: 60%;
    height: 5vh;
    margin-bottom: 5%;
  }
`
const ValueName = styled.h2`
  color:white;
  @media (max-width: 900px) {
    font-size: 1.2rem;
    margin: 4% 0;
  }
`

export {
  WhiteP,
  RedError,
  SelectValuesContainer,
  ValuesButtonContainer,
  Values,
  ValuesBtns,
  ValuesTitle,
  DescribeValuesTitle,
  DescribeValuesContainer,
  TextAreaContainer,
  TextArea,
  SubmitDescriptions,
  ValueName
};