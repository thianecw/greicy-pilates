import styled from "styled-components";

export const FeedbackSection = styled.section`
background-color: #EAE6DF;
  padding: 40px 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  font-family: ${(props) => props.theme.poppinsFont};
  color: #4a4a4a;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 30px;
  color: ${(props) => props.theme.secondTitle};
`;

export const FeedbackList = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const FeedbackCard = styled.div`
  background-color: ${(props) => props.theme.bg};
  padding: 20px;
  box-shadow: 0 2px 4px ${(props) => props.theme.mainBorder};
  font-size: 0.95rem;
  line-height: 1.4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
border-radius: 16px;
padding: 25px;
background-color: #eee;
`;

export const QuoteIcon = styled.img`
align-self: flex-end;
  margin-bottom: 10px;
`;

export const Footer = styled.div`
  margin-top: auto; /* empurra para o fim da caixa */
`;

export const Name = styled.p`
  font-weight: 700;
  margin-top: 15px;
  color: ${(props) => props.theme.mainGreen};
`;

export const Location = styled.p`
  font-size: 0.85rem;
  color: #888;
`;
