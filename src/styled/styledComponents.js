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
  height: 110vh;
  width: 100%;
  background-color: #bac1c9;
  padding-top:2%;
  @media (max-width: 820px) {
    height: 100vh;
  }
`
const ValuesButtonContainer = styled.div`
  height: 10%;
  width: 50%;
  padding: 2rem;
  margin: auto;
  display:flex;
  justify-content: space-evenly;
  align-items:center;
  background-color:#545b63;
  border-radius: 15px;
  @media (max-width: 820px) {
    width: 80%;
    height: 6%;
    padding: 2rem;
  }
`
const ValuesTitle = styled.h1`
  width: 40%;
  margin: 0 auto;
  background-color: #545b63;
  color:white;
  padding:2%;
  border-radius: 15px;

  @media (max-width: 820px) {
    font-size:1.2rem;
    width: 65%;
    height: 5%;
    margin-top:3%;
  }
`

const Values = styled.div`
  width: 50%;
  height: 70%;
  padding:2%;
  margin:auto;
  display:flex;
  flex-wrap: wrap;
  align-items:center;
  justify-content: space-evenly;
  background-color:	 #545b63;
  margin: 2% auto;
  border-radius: 15px;
  @media (max-width: 820px) {
  width: 90%;
  padding: 2%;
  height: 70%;
  margin-top: 5%;
  margin-bottom:5%;
}
`;

const ValuesBtns = styled.div`
 padding: 2%; 
 @media (max-width: 820px) {
   padding: 2%;
  }
`
const ResetContinueBtn = styled.span`
  padding:2rem;
  @media( max-width:820px){
    font-size:.8rem;
    padding: 1rem;
  }
`

const Btn = styled.button`
  width: 110%;
  margin: 0 auto;
  background-color:#8abcd9;
  border-radius: 8px;
  color: white;
  text-align: center;
  padding:6%;
  font-size: 1.2rem;
  transition-duration: 0.4s;
  color:white;

  &:hover{
  background-color:	#3a5072;
  color:  #8abcd9;
  }
  @media (max-width: 820px) {
    font-size: 1rem;
    padding: 3%;
  }
`

// Describe your values

const DescribeValuesContainer = styled.div`
  height: 120vh;
  width: 100%;
  background-color:#bac1c9;
  padding:2%;
 `

const DescribeValuesTitle = styled.h1`
  width: 40%;
  margin: 2% auto;
  padding: 1%;
  background-color: #545b63;
  border-radius: 15px;
  color: white;
  font-size: 2rem;
  @media (max-width: 950px) {
    font-size:1.1rem;
    width: 70%;
    margin-top:6%; 
    margin-bottom:6%;
  }
`;
const TextAreaContainer = styled.form`
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
  @media (max-width: 950px) {
    width: 80%;
    padding:4%;
  }
`

const TextArea = styled.textarea`
  width: 50%;
  margin: 0 auto;
  margin-bottom: 2%;
  border-radius: 15px;
  height:100%;
  background-color:#f3f4f6;
  @media (max-width: 950px) {
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

  @media (max-width: 950px) {
    font-size:1rem;
    width: 60%;
    height: 5vh;
    margin-bottom: 5%;
  }
`
const ValueName = styled.h2`
  color:white;
  @media (max-width: 950px) {
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
  ValueName,
  Btn,
  ResetContinueBtn
};