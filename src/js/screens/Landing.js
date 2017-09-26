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
import Infographic_1 from '../../images/infojuridica1-1.jpg';
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
            "label": "Situación Actual",
            "items": [
              {
                "id": "item-1-1",
                "label": "Inmueble Dañado",
                "node": <Box colorIndex='brand'  pad='small'>Inmueble Dañado</Box>
              },
              {
                "id": "item-1-2",
                "label": "Perdida de Inmueble",
                "node": <Box colorIndex='brand'  pad='small'>Perdida de Inmueble</Box>
              },
              {
                "id": "item-1-3",
                "label": "Inmueble perdida de Escritura",
                "node": <Box colorIndex='brand'  pad='small'>Renta de Inmueble</Box>
              }
            ]
          },
          {
            "id": "category-2",
            "label": "Opciones de Ayuda",
            "items": [
              {
                "id": "item-2-1",
                "label": "Fourth item",
                "node": <Box colorIndex='brand'  pad='small'>¿Cuentas con Escrituras?</Box>
              },
              {
                "id": "item-2-2",
                "label": "Fifth item",
                "node": <Box colorIndex='brand'  pad='small'>¿Cuentas con Seguro de Casa</Box>
              }
            ]
          },
          {
            "id": "category-3",
            "label": "ProBono",
            "items": [
              {
                "id": "item-3-1",
                "label": "Sixth item",
                "node": <Box colorIndex='brand'  pad='small'>¿Has tenido contacto con tu aseguradora?</Box>
              },
              {
                "id": "item-3-2",
                "label": "Seventh item",
                "node": <Box colorIndex='brand'  pad='small'>Extra</Box>
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
        <Hero background={<Image src='http://grommet-primary-page-vanilla.grmmt.co/img/marquee.jpg'
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
                label="Label"
                heading="Herramientas jurídicas y necesidades post Sismo"
                description="#juridica19s es una plataforma que recolecta información y herramientas para atender cualquier tipo de necesidades legales ocasionadas por el sismo."
                link={<Anchor label='Solicita ayuda legal'
                  href='#'
                  primary={true}
                  reverse={false}
                  disabled={false}
                  path='/' />}
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
              <Paragraph size="medium" width="large" textSize="small">Vestibulum consectetur purus a egestas tempor. Mauris vel fermentum quam, eu sagittis velit. Morbi nec risus a diam efficitur imperdiet vitae eget eros. Vestibulum massa purus, vehicula in ultricies vel, tincidunt eu mi. In aliquam pulvinar nisl id semper. Fusce accumsan nulla enim, sed scelerisque elit fringilla sed. Aliquam sed leo et tellus pellentesque hendrerit. Fusce lobortis risus quis elit auctor, vel fringilla lectus cursus. Maecenas id diam vitae orci congue lobortis sit amet quis nunc. </Paragraph>
            </Box>
            <Box basis="1/2">
              <Graph/>
            </Box>
          </Box>
          <Box direction="row" basis="full" alignContent="stretch" pad="small">
            <Box basis='1/3' margin="small">
              <Heading tag="h3" strong margin="none">Situacion Actual</Heading>
              <Paragraph size="small" width="full" textSize="small">Vestibulum consectetur purus a egestas tempor. Mauris vel fermentum quam, eu sagittis velit. Morbi nec risus a diam efficitur imperdiet vitae eget eros. Vestibulum massa purus, vehicula in ultricies vel, tincidunt eu mi. In aliquam pulvinar nisl id semper. Fusce accumsan nulla enim, sed scelerisque elit fringilla sed. Aliquam sed leo et tellus pellentesque hendrerit. Fusce lobortis risus quis elit auctor, vel fringilla lectus cursus. Maecenas id diam vitae orci congue lobortis sit amet quis nunc. </Paragraph>
            </Box>
            <Box basis='1/3' margin="small">
              <Heading tag="h3" strong margin="none">Recomendaciones</Heading>
              <Paragraph size="small" width="full" textSize="small">Maecenas id diam vitae orci congue lobortis sit amet quis nunc. Donec sit amet faucibus sem, nec lacinia urna. Vestibulum sit amet metus diam. Curabitur auctor neque sit amet mi mollis, quis consectetur est molestie. Nam id auctor velit, quis maximus ipsum. Nullam non dictum est.</Paragraph>
            </Box>
            <Box basis='1/3' margin="small">
              <Heading tag="h3" strong margin="none">Acciones a Futuro</Heading>
              <Paragraph size="small" width="full" textSize="small">Mauris et mattis leo. Sed bibendum, massa nec lobortis facilisis, odio sem placerat augue, pulvinar lobortis diam lorem eget odio. Proin blandit fringilla condimentum. Phasellus efficitur sapien et lobortis commodo. Ut dolor mi, sollicitudin ut justo ac, suscipit bibendum est. Integer a felis lacus.</Paragraph>
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
              <Card thumbnail={<Image src={"https://previews.123rf.com/images/mayrum/mayrum1502/mayrum150200053/36964996-Character-lawyer-law-concept-Vector-illustration-flat-style-Stock-Vector.jpg"}/>}
                textAlign="center"
                margin="small"
                contentPad="small"
                label='Ayudar como Abogado'
                link={<Anchor label='Ver Más'
                  href='#'
                  primary={true}
                  reverse={false}
                  disabled={false}
                  path='/' />}
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
                <Image src={'https://previews.123rf.com/images/mayrum/mayrum1410/mayrum141000008/32651792-Character-student-education-concept-Vector-illustration--Stock-Photo.jpg'}/>}
                textAlign="center"
                margin="small"
                contentPad="small"
                label='Solicitar ayuda'
                link={<Anchor label='Ver Más'
                  href='#'
                  primary={true}
                  reverse={false}
                  disabled={false}
                  path='/' />}
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
                <Image src={'https://previews.123rf.com/images/mayrum/mayrum1410/mayrum141000042/32987898-Multitasking-character-programmer-Flat-style-vector-illustration-Stock-Vector.jpg'}/>}
                textAlign="center"
                margin="small"
                contentPad="small"
                label='Ayudar como ciudadano'
                link={<Anchor label='Ver Más'
                  href='#'
                  primary={true}
                  reverse={false}
                  disabled={false}
                  path='/' />}
                headingStrong={false} />

            </Box>
          </Box>
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
                label='Sample Label'
                headingStrong={false} />
              <Card thumbnail={<Image src={Infographic_1}
                  fit='cover'
                  full={true} />}
                margin="small"
                contentPad="medium"
                label='Sample Label'
                headingStrong={false} />

              <Card thumbnail={<Image src={Infographic_1}
                  fit='cover'
                  full={true} />}
                margin="small"
                contentPad="medium"
                label='Sample Label'
                headingStrong={false} />
            </Columns>
            <span style={{ fontSize: 10}}>La información contenida en esta guía o imagen es general y tiene carácter exclusivamente orientador; por lo tanto, no es y no deberá ser interpretado como una recomendación u opinión para llevar a cabo o abstenerse de llevar a cabo cualquier acción respecto a los temas discutidos en la misma. Esta guía o imagen no sustituye a la asesoría jurídica especializada que, para cada caso, las usuarios deberán obtener antes de actuar sobre uno o más de los temas discutidos en la misma. Los abogados y organizaciones involucradas en la preparación de esta guía general, no emiten ninguna opinión o juicio sobre, y asimismo, de manera expresa, no se hacen responsables de la exactitud de la información contenida en la misma.</span>
          </Box>
        </Box>
        <Box pad='medium'
          basis="full"
          direction="column">
          <Box basis="full" direction="row">
            <Box basis="1/2">
              <Heading tag='h3' strong={true}>SOY ABOGADO/ABOGADA ¿CÓMO AYUDAR?</Heading>
              <Paragraph size='xxlarge'>¿Eres abogado/a o perteneces a una firma de abogados y están interesados en realizar trabajo pro bono?</Paragraph>
              <Paragraph size='xxlarge'>Vestibulum massa purus, vehicula in ultricies vel, tincidunt eu mi. In aliquam pulvinar nisl id semper. Fusce accumsan nulla enim, sed scelerisque elit fringilla sed. Aliquam sed leo et tellus pellentesque hendrerit. Fusce lobortis risus quis elit auctor, vel fringilla lectus cursus. Maecenas id diam vitae orci congue lobortis sit amet quis nunc. Donec sit amet faucibus sem, nec lacinia urna. Vestibulum sit amet metus diam. Curabitur auctor neque sit amet mi mollis, quis consectetur est molestie. Nam id auctor velit, quis maximus ipsum. Nullam non dictum est. Interdum et malesuada fames ac ante ipsum primis in faucibus.</Paragraph>
              <Anchor icon={<Edit />}
                label='Comienza a ayudar'
                href='#'
                primary={true} />
            </Box>
            <Box basis="1/2" alignContent="center" align="center" alignSelf="center">
              <Quote credit='Janet Reno'>
                <Paragraph>I think lawyers who engage in pro bono service to protect those who cannot help themselves are truly the heroes and the heroines of the legal profession.</Paragraph>
              </Quote>
            </Box>
          </Box>
          <Box basis="full" pad="large">
            <span style={{ fontSize: 10}}>La información contenida en esta guía o imagen es general y tiene carácter exclusivamente orientador; por lo tanto, no es y no deberá ser interpretado como una recomendación u opinión para llevar a cabo o abstenerse de llevar a cabo cualquier acción respecto a los temas discutidos en la misma. Esta guía o imagen no sustituye a la asesoría jurídica especializada que, para cada caso, las usuarios deberán obtener antes de actuar sobre uno o más de los temas discutidos en la misma. Los abogados y organizaciones involucradas en la preparación de esta guía general, no emiten ninguna opinión o juicio sobre, y asimismo, de manera expresa, no se hacen responsables de la exactitud de la información contenida en la misma.</span>
          </Box>
        </Box>
        <hr/>
        <Box pad="small">
          <Charts/>
          <Image src='https://cdn2.slidemodel.com/wp-content/uploads/0052-01-flat-infographic-charting-elements-for-powerpoint-16x9-2.jpg'
            margin="small"
            fit='cover'
            full={true} />
        </Box>
        <Box>
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
              © 2016
            </Paragraph>
            <Menu direction='row'
              size='small'
              dropAlign={{"right": "right"}}>
              <Anchor href='#'>
                Support
              </Anchor>
              <Anchor href='#'>
                Contact
              </Anchor>
              <Anchor href='#'>
                About
              </Anchor>
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
