import styled from "styled-components";

export const PlansSection = styled.section`
  background-color: ${(props) => props.theme.lightPink};
  padding: 40px 20px;
  font-family: ${(props) => props.theme.poppinsFont};
  color: ${(props) => props.theme.mainGreen};
  padding: 50px;
      box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  color: ${(props) => props.theme.secondTitle};
`;

export const Description = styled.div`
  font-size: 1.1rem;
font-weight: bold;
  margin: 10px;
  line-height: 1.6;
  color: ${(props) => props.theme.secondTitle};
text-align: justify;
`;

export const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
`;

export const PlanCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background-color: ${(props) => props.theme.bg};
  box-shadow: 0 4px 8px ${(props) => props.theme.mainBorder};
  color: #7a7c68;
  box-sizing: border-box;
  height: 100%;
  min-height: 400px; 
box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
padding: 10px 30px;
  position: relative;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: space-between;
  margin-top: auto;
    `;

export const PlanTitle = styled.h3`
  width: 100%;         
  padding: 12px 15px;     
  margin: 0 0 15px 0;     
  color: #8a8f7f;        
  font-weight: 600;  
  border-radius: 8px 8px 0 0;
  box-sizing: border-box;
text-align: center;
font-size: 1.5rem;
color: ${(props) => props.theme.mainGreen};
border-bottom: 1px solid ${(props) => props.theme.mainGreen};
`;

export const PlanItem = styled.p`
  margin: 10px 0;
  font-weight: 500;
  font-size: 1rem;
`;

export const PriceItem = styled.p`
 margin: 0 0 10px 0;
   font-weight: 600;
text-align: center;
color: ${(props) => props.theme.mainGreen};
font-size: 2rem;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.mainGreen};
  color: ${(props) => props.theme.bg};
  font-size: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
padding: 12px 24px;
  text-transform: uppercase;
  margin-top: auto;
  text-decoration: none;
 border: 1px solid transparent; 
   transition: all 0.3s ease;
   font-weight: bold;
  box-sizing: border-box;
  margin-bottom: 10px;
  width: 200px;

  &:focus {
  outline: 2px solid ${(props) => props.theme.mainGreen};
  outline-offset: 2px;
}
  
&:hover {
     transform: scale(1.05);
    background-color: transparent;
    color: ${(props) => props.theme.mainGreen};
border: 1px solid ${(props) => props.theme.mainGreen};
  }

  &:active {
    background-color: transparent;
    transform: translateY(0);
  }
`;
