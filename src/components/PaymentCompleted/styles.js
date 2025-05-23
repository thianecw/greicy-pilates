import styled from "styled-components";

export const Container = styled.div`
background-color: #EAE6DF;
  backdrop-filter: blur(4px);
  height: auto;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;  flex-direction: column;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  height: 100vh;
  `;

export const Description = styled.p`
 color: #AA5C5C;
  font-size: 20px;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  margin-bottom: 20px;
  `;

export const WhatsApp = styled.img`
cursor: pointer;
`;
