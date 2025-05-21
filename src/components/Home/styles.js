import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
flex-direction: column;

`;

export const Section1 = styled.div`
background-color: ${(props) => props.theme.lightPink};
display: flex;
align-items: center;
justify-content: center;
padding: 30px;
`;

export const Section2 = styled.div`
align-items: center;
justify-content: center;
padding: 20px;
background-color: ${(props) => props.theme.mainGreen};
border: ${(props) => props.theme.secondBorder};
`;

export const Section3 = styled.div`
background-color: ${(props) => props.theme.lightPink};
padding: 20px;
text-align: center;

  & > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin: 30px;
  }
`;

export const BenefitBox = styled.div`
background-color: ${(props) => props.theme.bg}; 
padding: 20px;
font-weight: 600;
line-height: 30px;
border-radius: 8px;
text-align: center;
box-shadow: 0 4px 6px ${(props) => props.theme.mainBorder};

 &:hover {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); /* sombra mais forte */
    transform: scale(1.05); /* leve zoom */
    cursor: pointer;
  }
`;

export const Info = styled.div`
`;

export const ContainerImg = styled.div`
display: flex;

   img {
    width: 300px;
    height: 350px;
    margin-left: 40px;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border: 0.1rem solid rgba(153, 155, 132, 0.3);
    }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2em;
  margin: 0 20px 20px;
  color:  ${(props) => props.theme.title};
  `;

export const SecondTitle = styled.h1`
  text-align: center;
  font-size: 2em;
  margin: 0 20px 20px;
  color:  ${(props) => props.theme.secondTitle};
`;

export const InfoParagraph = styled.p`
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  font-size: 1.2em;
  `;

export const Paragraph = styled.p`
display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  font-size: 1.2em;
  color:  ${(props) => props.theme.bg};
`;
