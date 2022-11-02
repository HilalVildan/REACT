import styled from 'styled-components';

const ButonStyle = styled.button`
  background-color:${({hilal}) => hilal ? "blue" : "orange"};
  color: pink;
  cursor: pointer;
  padding: 1rem 1.5rem;
  border: 2px solid green;
  border-radius: 5px;
  font-family: "tahoma";
  &:hover {
    transform: scale(0.95);
  }
`;



export const ButonStyle2 = styled(ButonStyle)`

color: ${({hilmi}) => hilmi ? "yellow" : "green"};
background-color:aquamarine;
border: 3px solid red;



`;






export default ButonStyle;
