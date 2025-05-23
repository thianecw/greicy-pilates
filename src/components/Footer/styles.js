import styled from "styled-components";

export const Container = styled.div`
background-color: #EAE6DF;
  padding: 20px;
    box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
    text-align: center;
    justify-content: center;

`;

export const Description = styled.p`
  font-family: ${(props) => props.theme.poppinsFont};
  color: #4a4a4a;
  font-weight: bold;
`;
