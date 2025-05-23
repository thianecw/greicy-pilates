import styled from "styled-components";

export const MainContainer = styled.section`
background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(4px);
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

`;

export const Content = styled.div`
display: flex;
`;

export const ContainerRight = styled.div`
display: flex;
flex-direction: column;
width: 100%;
text-align: end;
  justify-content: center;

p {
    font-size: 18px;
    margin: 10px;
    padding: 10px;
    line-height: 35px;
}
`;

export const ContainerLeft = styled.div`
display: flex;
  text-align: center;
  justify-content: center;
width: 100%;

img {
margin-top: 20px;
  max-height: 600px;
  max-width: 60%;
  border-radius: 20px;
  padding: 10px;
  object-fit: cover;
}
`;

export const Title = styled.h1`
 color: #AA5C5C;
  font-size: 50px;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  display: flex;
  justify-content: center;
  text-align: center;
  position: relative;
  margin: 0 auto;
  padding-bottom: 20px;`;
