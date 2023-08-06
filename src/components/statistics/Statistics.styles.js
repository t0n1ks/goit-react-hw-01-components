import styled from 'styled-components';


export const Section = styled.section`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  text-transform: uppercase;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const StatList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 20px;
  padding-left: 20px;
`;

export const StatLabel = styled.span`
  font-size: 18px;
  color: #555555;
`;

export const StatPercentage = styled.span`
  font-size: 24px;
  font-weight: bold;
`;
