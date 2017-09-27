import React from 'react';
import { format } from 'd3-format';
import withSize from '../hocs/withSize';
import { scaleLinear, scaleBand } from 'd3-scale';
import { max, min } from 'd3-array';

const HorizontalBarChartComponent = ({
  height,
  width,
  data,
  margin,
  xFn,
  yFn,
  keyFn,
}) => {
  let adjustedWidth = width - margin.left - margin.right;
  let adjustedHeight = height - margin.top - margin.bottom;
  if (data.length === 0 || width === 0) return null;
  const minValue = min(data, xFn),
    maxValue = max(data, xFn);
  const y = scaleBand()
    .domain(data.map(keyFn))
    .rangeRound([0, adjustedHeight])
    .padding(0.2);
  const x = scaleLinear()
    .domain([0, maxValue])
    .range([0, adjustedWidth]);

  const rects = data.map((d, i) => {
    const key = keyFn(d);
    const value = xFn(d);
    return (
      <rect
        key={i + key}
        fill="#ffc751"
        y={y(key)}
        height={y.bandwidth()}
        x={0}
        data-value={value}
        width={x(value)}
      />
    );
  });
  const yTicks = data.map((d, index) => {
    const value = yFn(d);
    const key = keyFn(d);
    const yPos = y(key) + y.bandwidth() / 2;
    const valueToArray = value.split(' ');
    const firstBreak = valueToArray.slice(0, valueToArray.length / 2).join(' ');
    const secondBreak = valueToArray.slice(valueToArray.length / 2, valueToArray.length).join(' ');
    if(firstBreak.length === 0) {
      return (
        <g key={index} transform={`translate(0,${yPos})`}>
          <text
            y={5}
            dx="0.5em"
            dy="0.25em"
            x={0}
            fill="#4a4a4a"
            style={{ textAnchor: 'start', fontSize: '10px', textTransform: 'uppercase' }}
          >
            <tspan x="0" y="0">{secondBreak}</tspan>
          </text>
        </g>
      );
    }
    return (
      <g key={index} transform={`translate(0,${yPos})`}>
        <text
          y={5}
          dx="0.5em"
          dy="-0.1em"
          x={0}
          fill="#4a4a4a"
          style={{ textAnchor: 'start', fontSize: '10px', textTransform: 'uppercase' }}
        >
          <tspan x="0" y="0">{firstBreak}</tspan>
          <tspan x="5" y="0" dy={'1.1em'}>{secondBreak}</tspan>
        </text>
      </g>
    );
  });
  const xTicks = x.ticks().map((d, index) => {
    return (
      <g key={index} transform={`translate(${x(d)},0)`}>
        <line
          y2={adjustedHeight}
          style={{
            fill: 'none',
            stroke: '#f5f5f5',
            shapeRendering: 'crispEdges',
          }}
        />
        <text
          y={adjustedHeight + margin.bottom}
          x={0}
          fill="#717171"
          style={{ textAnchor: 'middle', fontSize: '10px' }}
        >
          {format('.2s')(d)}
        </text>
      </g>
    );
  });

  return (
    <svg
      className="bar-component"
      preserveAspectRatio="none"
      height={height}
      width={width}
    >
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <g>{xTicks}</g>
        {rects}
        <g>{yTicks}</g>
      </g>
      <g />
    </svg>
  );
};

HorizontalBarChartComponent.defaultProps = {
  height: 50,
  width: 200,
  data: [],
  colors: [
    '#ffffe5',
    '#f7fcb9',
    '#d9f0a3',
    '#addd8e',
    '#78c679',
    '#41ab5d',
    '#238443',
    '#006837',
    '#004529',
  ],
  margin: {
    top: 10,
    right: 20,
    bottom: 10,
    left: 10,
  },
};

export default withSize(HorizontalBarChartComponent);
