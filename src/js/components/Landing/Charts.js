import React, { Component, PropTypes } from 'react';
import Distribution from 'grommet/components/Distribution';
import HorizontalBar from '../charts/HorizontalBar';

import Paragraph from 'grommet/components/Paragraph';
import AccordionPanel from 'grommet/components/AccordionPanel';
import axios from 'axios';

class Charts extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    axios.get('https://s3-us-west-2.amazonaws.com/juridica19s/accidents.json')
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { data } = this.state;
    if(data === null) return null;
    const series = data.map(v => {
      return { label: v.label, value: v.percentage };
    });
    return (
      <HorizontalBar
        className="column is-12"
        data={data.sort((b, a) => a.percentage - b.percentage)}
        xFn={d => d.percentage}
        yFn={d => d.label}
        keyFn={d => d.key}
        height={720}
      />
    );
  }
}

export default Charts;
            // <Accordion openMulti={true} pad="none">
            //   <AccordionPanel 
            //     heading='¿Qué obligaciones y derechos tengo si soy propietario de un inmueble que se dañó y que estaba dado en arrendamiento?' basis="full" alignContent="stretch"
            //     responsive
            //   >

