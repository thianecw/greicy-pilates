import styled from "styled-components";

export const PlansSection = styled.section`
  background-color: ${(props) => props.theme.lightPink};
  padding: 40px 20px;
  border-radius: 12px;
  font-family: ${(props) => props.theme.poppinsFont};
  color: ${(props) => props.theme.mainGreen};
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  color: ${(props) => props.theme.secondTitle};
`;

export const Description = styled.div`
  font-size: 1.1rem;
  margin: 10px;
  line-height: 1.6;
    color: ${(props) => props.theme.secondTitle};
text-align: center;
`;

export const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
`;

export const PlanCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;  /* Distribui de forma uniforme */
  border-radius: 12px;
  background-color: ${(props) => props.theme.bg};
  box-shadow: 0 4px 8px ${(props) => props.theme.mainBorder};
  color: #7a7c68;
  box-sizing: border-box;
  height: 100%;  /* Usa toda a altura disponível */
  min-height: 400px;  /* Define um mínimo para controlar o espaço */
`;

export const PlanTitle = styled.h3`
  width: 100%;         
  padding: 12px 15px;     
  margin: 0 0 15px 0;     
  color: #8a8f7f;        
  font-weight: 600;  
  font-size: 25px ;
  border-radius: 8px 8px 0 0;
  box-sizing: border-box;
background-color: ${(props) => props.theme.darkPink};
text-align: center;
`;

export const PlanItem = styled.p`
  margin: 10px 0;
  font-weight: 500;
  font-size: 1rem;
`;

export const PriceItem = styled.p`
  margin: 8px 0;
  font-weight: 600;
font-size: 40px;
  margin: 30px;
text-align: center;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.mainGreen};
  color: ${(props) => props.theme.bg};
  font-size: 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  text-transform: uppercase;
  margin-top: auto;
  text-decoration: none;
 border: 1px solid transparent; 
   transition: all 0.3s ease;
  box-sizing: border-box;
  margin-bottom: 10px;
  
&:hover {
     transform: scale(1.05);
    background-color: transparent;
    color: ${(props) => props.theme.mainGreen};
border: 1px solid ${(props) => props.theme.mainGreen}; /* Borda visível */


  }

  &:active {
    background-color: transparent;
    transform: translateY(0);
  }
`;
