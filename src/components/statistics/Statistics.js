import React from 'react';
import PropTypes from 'prop-types';
import {
  Section,
  Title,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} from './Statistics.styles';
import { generateRandomColor } from '../../helpers/RandomColor';

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
