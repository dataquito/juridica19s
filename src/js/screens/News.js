
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
import Headline from 'grommet/components/Headline';
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
import appleseed from '../../images/appleseed.png';
import fbm from '../../images/fbm.png';
import PROBONOMX from '../../images/PROBONOMX_blanco.png';
import probono1 from '../../images/probono1.jpg';
import guia_juridica from '../../images/guia_juridica.jpg';
import odv from '../../images/observatorio_de_vivienda_t.png';
import news from '../../images/news.svg';
import CloudIcon from 'grommet/components/icons/base/Cloud';
import ArticleIcon from 'grommet/components/icons/base/Article';



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
          float={true}
          colorIndex="brand"
          pad={{ horizontal: 'medium', between: 'small' }}
        >

          <Title><a href='/'> #Jurídica19S</a></Title>
            <Box flex={true}
              justify='end'
              direction='row'
              responsive={false}>
            </Box>

            <Box flex={true}
              justify='end'
              direction='row'
              responsive={false}>

              <Menu icon={<ArticleIcon />}>
                <Anchor href='/News'>
                  Noticias
                </Anchor>
              </Menu>
            </Box>
        </Header>

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
            margin="large"
            textAlign="left"
            colorIndex="light-1"
            direction="row"
            tag="div"
            focusable
            responsive
            pad="small"
          >
            <Box basis="1/2">

              <Headline aling="center" margin="small">Noticias Relacionadas</Headline>
              <Paragraph size="medium" width="large" z-index='1' >
                Noticias Relacionadas
              </Paragraph>

            </Box>


            <Box basis="1/2" margin="small" z-index='1' >
              <Paragraph  size="small" width="small" margin='none' align='end' >
                #Jurídica19S Powered by <a href='http://www.observatoriodevivienda.org' target='_blank' ><Image src={odv} style={{ height: 'auto', width: '30%' }}/></a> & Dataquito
              </Paragraph>
            </Box>
          </Box>



          <Box direction="row" z-index='1'>


            <Box basis='1/3'
              pad={{
                horizontal: "medium",
                vertical: "medium",
                between: "medium"
              }}
              announce={false}
              direction="column"
              justify="center"
              align="center"
              tag="div"
              margin='small'
              responsive
              focusable
              size="small"
              colorIndex="neutral-1">

              <Card thumbnail={
                <Image src={'http://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2017/10/05/afectados_sismo_4.jpg?itok=XoXc4obo'}/>}
                margin="small"
                contentPad="small"
                heading='Ofrecen asesoría jurídica por teléfono e internet a afectados por sismo'
                label='El Universal'
                description='Organizaciones civiles elaboraron una guía jurídica para los damnificados con el apoyo de más de 10 firmas de abogados.'

                link={<Anchor label='Ver Más'
                  target='_blank'
                  textSize ='small'
                  href='http://www.eluniversal.com.mx/metropoli/cdmx/ofrecen-asesoria-juridica-por-telefono-e-internet-afectados-por-sismo'
                  primary={true}
                  reverse={false}
                  disabled={false}
                  />}
                headingStrong={false} />
            </Box>



            <Box basis='1/3'
              pad={{
                horizontal: "medium",
                vertical: "medium",
                between: "medium"
              }}
              announce={false}
              direction="column"
              justify="center"
              align="center"
              tag="div"
              margin='small'
              responsive
              focusable
              size="small"
              colorIndex="neutral-1">

              <Card thumbnail={
                <Image src={'https://cdn.expansion.mx/dims4/default/4837bce/2147483647/crop/3500x1969%2B0%2B347/resize/800x450%5E/quality/75/?url=https%3A%2F%2Fcdn.expansion.mx%2Fc8%2Fc6%2F0363f5814c01a1cf5f003961afad%2F2017-09-21t221941z-526119277-rc123c1f3b40-rtrmadp-3-mexico-quake-1.JPG'}/>}
                margin="small"
                contentPad="small"
                heading='Qué hacer si tu condominio se dañó o se destruyó con el sismo'
                label='Expansión'
                description='Si tu departamento sufrió daños, revisa la póliza que por ley deben tener los administradores. En caso de destrucción total, puedes optar por otras alternativas.'

                link={<Anchor label='Ver Más'
                  target='_blank'
                  textSize ='small'
                  href='http://expansion.mx/dinero/2017/09/22/que-hacer-si-tu-condominio-se-dano-o-se-destruyo-con-el-sismo'
                  primary={true}
                  reverse={false}
                  disabled={false}
                  />}
                headingStrong={false} />
            </Box>




            <Box basis='1/3'
              pad={{
                horizontal: "medium",
                vertical: "medium",
                between: "medium"
              }}
              announce={false}
              direction="column"
              justify="center"
              align="center"
              tag="div"
              margin='small'
              responsive
              focusable
              size="small"
              colorIndex="neutral-1">

              <Card thumbnail={
                <Image src={'http://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2017/09/25/mapa.jpg?itok=z_9qUXWI'}/>}
                margin="small"
                textSize ='small'
                contentPad="small"
                heading='Estudiantes crean mapa de edificios en riesgo que no han sido revisados'
                label='El Universal'
                description='Trabajadorxs en Riesgo-MX se trata de una iniciativa de estudiantes que surgió después de ver cómo algunos de sus parientes y familiares estaban siendo obligados a regresar a sus empleos, a pesar de que no se sentían seguros en los inmuebles'

                link={<Anchor label='Ver Más'
                  href='http://www.eluniversal.com.mx/nacion/sociedad/estudiantes-crean-mapa-de-edificios-en-riesgo-que-no-han-sido-revisados'
                  target='_blank'
                  primary={true}
                  reverse={false}
                  disabled={false}
                  />}
                headingStrong={false} />
            </Box>

          </Box>




        </Box>



        <Box align="center"
          direction="column"
          tag="div"
          focusable
          responsive
          pad={{ vertical: 'small' }}
        >

          <Box className="columns-container"
            align="center"
            size={{ width: "xxlarge" }}
            pad={{ horizontal: "small" }}
            announce={false}
            direction="column"
            tag="div"
            responsive
            focusable
          >
            <Heading tag='h2' strong={false}>Alianza</Heading>
          </Box>
          <Box className="columns-container"
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
            pad={{ horizontal: "small" }}
            full="horizontal"
            direction="row"
            tag="div"
            responsive
            focusable
          >
            <Box basis="1/3" align="center" margin="large" justify="center">
              <img src={appleseed} style={{ height: 'auto', width: '70%' }}/>
            </Box>
            <Box basis="1/3" align="center" margin="large" justify="center">
              <img src={fbm} style={{ height: '150px', width: '70%' }}/>
            </Box>
            <Box basis="1/3" align="center" margin="large" justify="center">
              <img src={PROBONOMX} style={{ height: 'auto', width: '35%' }}/>
            </Box>
            <Box basis="1/3" align="center" margin="large" justify="center">
              <img src={probono1} style={{ height: 'auto', width: '70%' }}/>
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
            z-index='1'
            pad={{"between": "medium"}}>
              <Paragraph size="small" width="small" margin='none' align='end' >
              #Jurídica19S Powered by <a href='http://www.observatoriodevivienda.org' target='_blank' ><Image src={odv} style={{ height: 'auto', width: '20%' }}/></a> & Dataquito
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
