import React, { Component, PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import Accordion from 'grommet/components/Accordion';
import Paragraph from 'grommet/components/Paragraph';
import AccordionPanel from 'grommet/components/AccordionPanel';
import axios from 'axios';

class Questions extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      sections: null
    };
  }
  componentDidMount() {
    axios.get('https://s3-us-west-2.amazonaws.com/juridica19s/questions.json')
      .then(res => {
        this.setState({ sections: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { sections } = this.state;
    if(sections === null) return null;
    const TabbedContent = sections.map((section, index) => {
      return (
        <Tab key={index} title={section.key.toUpperCase()}>
          <Accordion openMulti={true} pad="none">
            {section.values.map(({ answer, question, category }, i) => {
              return (
                <AccordionPanel key={`${category}-${i}`} heading={question} basis="full" alignContent="stretch">
                  <Box basis="full"
                    justify='between'
                    align="stretch"
                    responsive
                    direction="row"
                    alignContent="stretch">
                    <p className="answer__paragraph">{answer}</p>
                  </Box>
                </AccordionPanel>
              );
            })}
          </Accordion>
        </Tab>
      );
    });
    return (
      <Tabs>
        {TabbedContent}
      </Tabs>
    );
  }
}

export default Questions;
            // <Accordion openMulti={true} pad="none">
            //   <AccordionPanel 
            //     heading='¿Qué obligaciones y derechos tengo si soy propietario de un inmueble que se dañó y que estaba dado en arrendamiento?' basis="full" alignContent="stretch"
            //     responsive
            //   >

