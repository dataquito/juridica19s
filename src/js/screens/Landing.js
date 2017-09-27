import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Questions from '../components/Landing/Questions';
import Charts from '../components/Landing/Charts';

import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Anchor from 'grommet/components/Anchor';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import Footer from 'grommet/components/Footer';
import Quote from 'grommet/components/Quote';
import Map from 'grommet/components/Map';
import Image from 'grommet/components/Image';
import Columns from 'grommet/components/Columns';
import Card from 'grommet/components/Card';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Hero from 'grommet/components/Hero';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Notification from 'grommet/components/Notification';
import Paragraph from 'grommet/components/Paragraph';
import Value from 'grommet/components/Value';
import Meter from 'grommet/components/Meter';
import Spinning from 'grommet/components/icons/Spinning';
// import Edit from 'grommet/components/icons/Edit';
import Edit from 'grommet/components/icons/base/Edit';
import Section from 'grommet/components/Section';
import { getMessage } from 'grommet/utils/Intl';

import NavControl from '../components/NavControl';
import Infographic_1 from '../../images/flyer_red_probono.jpg';
import MapCases from '../../images/map_casos.jpg';

// import {
//   loadDashboard, unloadDashboard
// } from '../actions/dashboard';

import { pageLoaded } from './utils';

const Graph = props => {
  return (
    <Map vertical={true}
      data={{
        "categories": [
          {
            "id": "category-1",
            "label": "Pilar Informativo",
            "items": [
              {
                "id": "item-1-1",
                "label": "Infografías",
                "node": <Box colorIndex='brand'  pad='small'>Infografías</Box>
              },
              {
                "id": "item-1-2",
                "label": "Preguntas frecuentes",
                "node": <Box colorIndex='brand'  pad='small'>Preguntas Frecuentes</Box>
              }
            ]
          },
          {
            "id": "category-2",
            "label": "Pilar de Atención Directa",
            "items": [
              {
                "id": "item-2-1",
                "label": "Registro de Casos",
                "node": <Box colorIndex='brand'  pad='small'>Registro de Casos</Box>
              },
              {
                "id": "item-2-2",
                "label": "Vinculación Externa",
                "node": <Box colorIndex='brand'  pad='small'>Vinculación Externa</Box>
              }
            ]
          },
          {
            "id": "category-3",
            "label": "Análisis Post-Desastre",
            "items": [
              {
                "id": "item-3-1",
                "label": "Análisis Agregado",
                "node": <Box colorIndex='brand'  pad='small'>Análisis Agregado</Box>
              },
              {
                "id": "item-3-2",
                "label": "Fortalecimiento Jurídico",
                "node": <Box colorIndex='brand'  pad='small'>Fortalecimiento Jurídico</Box>
              }
            ]
          }
        ],
        "links": [
          {"parentId": "item-1-1", "childId": "item-2-2"},
          {"parentId": "item-1-2", "childId": "item-2-2"},
          {"parentId": "item-1-2", "childId": "item-2-1"},
          {"parentId": "item-2-2", "childId": "item-3-1"},
          {"parentId": "item-2-1", "childId": "item-3-2"}
        ]
      }} />
  );
};

class Landing extends Component {
  // componentDidMount() {
  //   pageLoaded('Dashboard');
  //   this.props.dispatch(loadDashboard());
  // }

  // componentWillUnmount() {
  //   this.props.dispatch(unloadDashboard());
  // }

  render() {
    const { error } = this.props;
    const { intl } = this.context;
    return (
      <Article primary={true}>
        <Header
          fixed
          size="small"
          colorIndex="brand"
          pad={{ horizontal: 'medium', between: 'small' }}
        >
          <Title>Júridica 19-S</Title>
          <Box flex={true}
            justify='end'
            direction='row'
            responsive={false}>
          </Box>
        </Header>
        <Hero background={<Image src='http://assets.tiempo.com.mx/uploads/imagen/imagen/135208/Cientos-personas-colapsados-Ciudad-Mexico_MILIMA20170919_0481_3.jpg'
            fit='cover'
            full={true} />}
          backgroundColorIndex='dark'
          size='large'>
          <Box direction='row'
            justify='center'
            align='center'>
            <Box basis='1/2'
              align='end'
              pad='medium' />
            <Box basis='1/2'
              pad={{
                horizontal: "large",
                vertical: "large",
                between: "medium"
              }}
              announce={false}
              direction="column"
              tag="div"
              responsive
              focusable
              size="large"
              colorIndex="light-1">
              <Card
                textSize="small"
                size="large"
                contentPad="medium"
                headingStrong
                label="#Juridica19S"
                heading="Herramientas jurídicas y necesidades post Sismo"
                description="#juridica19s es una plataforma que recolecta información y herramientas para atender cualquier tipo de necesidades legales ocasionadas por el sismo."
                link={<Anchor label='Solicita ayuda legal'
                  href='https://goo.gl/forms/LB3B1uiXdpkBKhI53'
                  target='_blank'
                  primary={true}
                  reverse={false}
                  disabled={false}
                   />}
              >
              </Card>
            </Box>
          </Box>
        </Hero>
        <Box
          colorIndex="light-1"
          direction="column"
          tag="div"
          focusable
          responsive
          pad={{ vertical: 'large' }}
        >
          <Box
            alignContent="stretch"
            basis="full"
            textAlign="left"
            colorIndex="light-1"
            direction="row"
            tag="div"
            focusable
            responsive
            pad="small"
            margin="small"
          >
            <Box basis="1/2">
              <Heading tag="h2" strong margin="none">Jurídica 19-S</Heading>
              <Paragraph size="medium" width="large" textSize="small"></Paragraph>
            </Box>
            <Box basis="1/2">
              <Graph/>
            </Box>
          </Box>

          <Box direction="row" basis="full" alignContent="stretch" pad="small" colorIndex='grey-4-a'
>

            <Box basis='1/3' margin="small">
              <Heading tag="h3" strong margin="none">Pilar Informativo</Heading>
              <Paragraph size="small" width="full" textSize="small"> Información para el público en general y para abogadas y abogados en las que se responden a las preguntas legales principales derivadas de afectaciones por sismo.</Paragraph>
            </Box>
            <Box basis='1/3' margin="small">
              <Heading tag="h3" strong margin="none">Pilar de Atención Directa</Heading>
              <Paragraph size="small" width="full" textSize="small"> Pide una jornada para tu comunidad en la que abogadas y abogados asistan a orientarte en tus necesidades legales. O, llena el formulario para que se te asigne un asesor o asesora jurídica quien te contactará por teléfono o email para darte orientación.</Paragraph>
            </Box>
            <Box basis='1/3' margin="small">
              <Heading tag="h3" strong margin="none">Análisis Post-Desastre</Heading>
              <Paragraph size="small" width="full" textSize="small">Consulta los resultados de las diversas iniciativas y sus planes de seguimiento.</Paragraph>
            </Box>
          </Box>

          <Box direction="row">
              <Box basis='1/3'
              pad={{
                horizontal: "large",
                vertical: "large",
                between: "medium"
              }}
              announce={false}
              direction="column"
              justify="center"
              align="center"
              tag="div"
              responsive
              focusable
              size="large"
              colorIndex="light-1">
              <Card thumbnail={<Image src={"https://image.flaticon.com/icons/svg/265/265667.svg"}/>}
                textAlign="center"
                margin="small"
                contentPad="small"
                label='Ayudar como Abogado'
                link={<Anchor label='Ver Más'
                  href='https://docs.google.com/forms/d/16va-w1Xu_08GDOl1R0hWKD9r1VNU9uU7gLAHm61jF3Y/viewform?ts=561c096c&edit_requested=true'
                  primary={true}
                  reverse={false}
                  disabled={false}
                  />}
                headingStrong={false} />

            </Box>
            <Box basis='1/3'
              pad={{
                horizontal: "large",
                vertical: "large",
                between: "medium"
              }}
              announce={false}
              direction="column"
              justify="center"
              align="center"
              tag="div"
              responsive
              focusable
              size="large"
              colorIndex="light-1">
              <Card thumbnail={
                <Image src={'https://image.flaticon.com/icons/svg/554/554866.svg'}/>}
                textAlign="center"
                margin="small"
                contentPad="small"
                label='Solicitar ayuda'
                link={<Anchor label='Ver Más'
                  href='https://goo.gl/forms/8I3L0raWCUnCxlE62'
                  primary={true}
                  reverse={false}
                  disabled={false}
                  />}
                headingStrong={false} />

            </Box>

            <Box basis='1/3'
              pad={{
                horizontal: "large",
                vertical: "large",
                between: "medium"
              }}
              announce={false}
              direction="column"
              justify="center"
              align="center"
              tag="div"
              responsive
              focusable
              size="large"
              colorIndex="light-1">
              <Card thumbnail={
                <Image src={'https://image.flaticon.com/icons/svg/568/568883.svg'}/>}
                textAlign="center"
                margin="small"
                contentPad="small"
                label='Suma tu proyecto'
                link={<Anchor label='Ver Más'
                  href='https://goo.gl/forms/ERX7XRPJETbxxj4f1'
                  primary={true}
                  reverse={false}
                  disabled={false}
                  />}
                headingStrong={false} />

            </Box>
          </Box>
        </Box>

          <Box
            colorIndex='grey-4-a'
            pad='small'
            direction="column"
            alignContent="stretch"
            responsive
            basis="full">
            <Heading tag="h3" strong margin="none">Conoce tus obligaciones y derechos de manera sencilla.</Heading>
            <Questions/>
          </Box>


        <Box align="center"
          colorIndex="light-2"
          direction="column"
          tag="div"
          focusable
          responsive
          pad={{ vertical: 'large' }}
        >

          <Box className="columns-container"
            align="center"
            size={{ width: "xxlarge" }}
            pad={{ horizontal: "large" }}
            announce={false}
            direction="column"
            tag="div"
            responsive
            focusable
          >
            <Heading tag='h2' strong={false}>Infografías</Heading>
          </Box>
          <Box className="columns-container"
            colorIndex="light-2"
            pad={{ horizontal: "large" }}
            full="horizontal"
            announce={false}
            direction="row"
            tag="div"
            responsive
            focusable
          >
          </Box>
          <Box className="columns-container"
            colorIndex="light-2"
            pad={{ horizontal: "large" }}
            full="horizontal"
            announce={false}
            direction="column"
            tag="div"
            responsive
            focusable
          >
            <Columns size="medium"
              justify="center"
              maxCount={3}
              contentPad="medium"
              masonry
              responsive
            >
              <Card thumbnail={<Image src={Infographic_1}
                  fit='cover'
                  full={true} />}
                margin="small"
                contentPad="medium"
                label='Apoyo Jurídico'
                headingStrong={false} />
            </Columns>

            <span style={{ fontSize: 10}}>La información contenida en esta guía o imagen es general y tiene carácter exclusivamente orientador; por lo tanto, no es y no deberá ser interpretado como una recomendación u opinión para llevar a cabo o abstenerse de llevar a cabo cualquier acción respecto a los temas discutidos en la misma. Esta guía o imagen no sustituye a la asesoría jurídica especializada que, para cada caso, las usuarios deberán obtener antes de actuar sobre uno o más de los temas discutidos en la misma. Los abogados y organizaciones involucradas en la preparación de esta guía general, no emiten ninguna opinión o juicio sobre, y asimismo, de manera expresa, no se hacen responsables de la exactitud de la información contenida en la misma.</span>
          </Box>
        </Box>



        <hr/>
        <Box pad="small">
          <Heading tag='h3' strong={true}>Estadísticas</Heading>
          <Box direction="row">
            <Box basis="1/2">
              <Heading tag='h4' strong={true}>Explicar</Heading>
              <Paragraph width="large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dui ligula, rutrum sit amet nisl sed, ornare egestas orci. Quisque ornare dui eu ligula pharetra ornare. Proin a lacinia libero. Sed euismod, lacus non rhoncus feugiat, nisi mauris iaculis mi, id tincidunt enim est et sem. Suspendisse sagittis sapien tellus, pretium porta dui blandit non. Praesent tincidunt eros diam, malesuada iaculis ipsum dapibus ut. Nam pretium est consectetur urna ultrices cursus. Aenean lobortis molestie diam nec vehicula. Suspendisse enim diam, sagittis vitae mi ac, fringilla eleifend nisl. Curabitur lacinia at ligula ac posuere. Vestibulum cursus bibendum lacinia.</Paragraph>
              <Charts/>
            </Box>
            <Box basis="1/2">
              <Heading tag='h4' strong={true}>Explicar</Heading>
              <Paragraph width="large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dui ligula, rutrum sit amet nisl sed, ornare egestas orci. Quisque ornare dui eu ligula pharetra ornare. Proin a lacinia libero. Sed euismod, lacus non rhoncus feugiat, nisi mauris iaculis mi, id tincidunt enim est et sem. Suspendisse sagittis sapien tellus, pretium porta dui blandit non. Praesent tincidunt eros diam, malesuada iaculis ipsum dapibus ut. Nam pretium est consectetur urna ultrices cursus. Aenean lobortis molestie diam nec vehicula. Suspendisse enim diam, sagittis vitae mi ac, fringilla eleifend nisl. Curabitur lacinia at ligula ac posuere. Vestibulum cursus bibendum lacinia.</Paragraph>
              <Box justify="center" alignContent="center" align="center">
                <Image src={MapCases} full/>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
        </Box>

        <Box pad='medium'
          basis="full"
          colorIndex="light-2"
          direction="column">
          <Box basis="full" direction="row">
            <Box basis="1/2">
              <Heading tag='h3' strong={true}>SOY ABOGADO/ABOGADA ¿CÓMO AYUDAR?</Heading>
              <Paragraph size='xxlarge'>¿Eres abogado/a o perteneces a una firma de abogados y están interesados en realizar trabajo pro bono?</Paragraph>
              <Anchor icon={<Edit />}
                label='Comienza a ayudar'
                href='https://docs.google.com/forms/d/16va-w1Xu_08GDOl1R0hWKD9r1VNU9uU7gLAHm61jF3Y/viewform?ts=561c096c&edit_requested=true'
                target='_blank'
                primary={true} />
            </Box>
            <Box basis="1/2" alignContent="center" align="center" alignSelf="center">
              <Quote >
                <Paragraph>La palabra Pro Bono deriva del latín pro bono publico que quiere decir “por el bien público” o “por el bien común”. A nivel mundial la comunidad legal entiende por actividad Pro Bono, el trabajo de asesoramiento y/o representación jurídica gratuita en beneficio de la sociedad.</Paragraph>
              </Quote>
            </Box>
          </Box>
        </Box>


        <Footer justify='between'
          pad="small"
          size='large'>
          <Title>
            Jurídica 19-S
          </Title>
          <Box direction='row'
            align='center'
            pad={{"between": "medium"}}>
            <Paragraph margin='none'>
              © 2017 #Juridica19S
            </Paragraph>
            <Menu direction='row'
              size='small'
              dropAlign={{"right": "right"}}>
            </Menu>
          </Box>
        </Footer>

      </Article>
    );
  }
}

// Landing.defaultProps = {
//   error: undefined,
//   tasks: []
// };

// Landing.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   error: PropTypes.object,
//   tasks: PropTypes.arrayOf(PropTypes.object)
// };

Landing.contextTypes = {
  intl: PropTypes.object
};

export default Landing;

// const select = state => ({ ...state.dashboard });

// export default connect(select)(Dashboard);
