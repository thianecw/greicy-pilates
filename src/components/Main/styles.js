import styled from "styled-components";

export const MainContainer = styled.div`
background-color: #EAE6DF;
  backdrop-filter: blur(4px);
  height: auto;
  display: flex;
  padding: 40px 20px;
  gap: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

img {
margin-top: 20px;
  max-height: 600px;
  max-width: 90%;
  border-radius: 20px;
  border: 4px solid #D4E3F0;
  padding: 5px;
  object-fit: cover;
}
`;

export const TitleWrapper = styled.div`
display: flex;
flex-direction: column;
margin: 40px 20px;
align-items: center;
justify-content: center;
`;

export const Title = styled.h1`
  color: #AA5C5C;
  font-size: 50px;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-align: center;
  display: inline-block;
  position: relative;
  margin: 0 auto;
  padding-bottom: 20px;
`;

export const TitleAfter = styled.h1`
  color: #AA5C5C;
  font-size: 50px;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-align: center;
  display: inline-block;
  position: relative;
  margin: 0 auto;
  padding-bottom: 20px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background-color: #6e4c50;
    border-radius: 2px;
  }
`;

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px;
  gap: 10px;

  p {
    font-size: 22px;
    font-weight: 500;
    color: #333;
    line-height: 1.4;
  }
`;

export const Description = styled.p`
font-size:20px;
font-weight: 300;
text-align: end;
margin-top: 30px;
`;

export const ContainerLeft = styled.div`
display: flex;
flex-direction: column;
width: 100%;

`;
export const ContainerRight = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`;
