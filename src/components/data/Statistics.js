import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const generateRandomColor = () => {
  const colors = ['#f55d3e', '#4287f5', '#34c75a', '#f5c542', '#8134f5'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const Section = styled.section`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  text-transform: uppercase;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const StatList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 20px;
  padding-left: 20px;
`;

const StatLabel = styled.span`
  font-size: 18px;
  color: #555555;
`;

const StatPercentage = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const Statistics = ({ title, stats }) => {
  return (
    <Section className="statistics">
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map((stat) => (
          <StatItem
            key={stat.id}
            style={{ backgroundColor: generateRandomColor() }}
          >
            <StatLabel>{stat.label}</StatLabel>
            <StatPercentage>{stat.percentage}%</StatPercentage>
          </StatItem>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
