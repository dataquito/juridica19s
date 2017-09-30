
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
import Video from 'grommet/components/Video';


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
                label="#Jurídica19S"
                heading="Herramientas jurídicas y necesidades post Sismo"
                description="Esta plataforma surge como respuesta de la comunidad jurídica a la emergencia provocada por los sismos de septiembre de 2017 para orientar a las víctimas en sus necesidades legales."
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

              <Heading tag="h2" strong margin="small">Jurídica 19-S</Heading>
              <Paragraph size="medium" width="large" z-index='1' >
                    La <b>Fundación Appleseed México</b>, La <b>Fundación Barra Mexicana</b> y el <b>Centro Mexicano Pro Bono</b> unen esfuerzos para brindar esta orientación a través de sus alianzas con universidades, abogados, abogadas y firmas comprometidas con este esfuerzo.
                    Se invita a las universidades, demás Organizaciones de la Sociedad Civil, Colegios de Abogados y abogadas de todo el país y sociedad en general a unirse a este esfuerzo y compartir información verídica y útil para las personas en necesidad.
              </Paragraph>

            </Box>


            <Box basis="1/2" margin="small" z-index='1' >

              <Graph/>

              <Paragraph  align='end' size="small" >
                #Jurídica19S Powered by <a href='http://www.observatoriodevivienda.org' target='_blank' ><Image src={odv} style={{ height: 'auto', width: '35%' }}/></a> & Dataquito.
              </Paragraph>

            </Box>

          </Box>



          <Box direction="row" margin="large" basis="full" pad="small" colorIndex='grey-4-a' z-index='1' >
            <Box basis='1/3' margin="small">
              <Heading tag="h3" strong margin="none">Pilar Informativo</Heading>
              <Paragraph size="small" > Información para el público en general y para abogadas y abogados en las que se responden a las preguntas legales principales derivadas de afectaciones por sismo.</Paragraph>
            </Box>
            <Box basis='1/3' margin="small">
              <Heading tag="h3" strong margin="none">Pilar de Atención Directa</Heading>
              <Paragraph size="small" > Pide una jornada para tu comunidad en la que abogadas y abogados asistan a orientarte en tus necesidades legales. O, llena el formulario para que se te asigne un asesor o asesora jurídica quien te contactará por teléfono o email para darte orientación.</Paragraph>
            </Box>
            <Box basis='1/3' margin="small">
              <Heading tag="h3" strong margin="none">Análisis Post-Desastre</Heading>
              <Paragraph size="small" >Consulta los resultados de las diversas iniciativas y sus planes de seguimiento.</Paragraph>
            </Box>
          </Box>



          <Box direction="row" z-index='1'>
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
                label='Ayudar como Abogada/Abogado'
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
                label='Solicita una Jornada de Asesoría Legal'
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
            margin="large"
            direction="column"
            alignContent="stretch"
            responsive
            z-index='1'
	    basis="full">
            <Heading tag="h3" strong margin="none">Conoce tus obligaciones y derechos de manera sencilla.</Heading>
            <Questions/>
          </Box>


        <Box align="center"
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
            <Heading tag='h2' strong={false}>Infografías y Documentos de Interés</Heading>
          </Box>
          <Box className="columns-container"
            pad={{ horizontal: "large" }}
            full="horizontal"
            announce={false}
            direction="row"
            tag="div"
            responsive
            focusable>
          </Box>

          <Box className="columns-container"
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
              maxCount={10}
              contentPad="medium"
              masonry
              responsive
            >
              <Card thumbnail={
                <a href='https://s3.amazonaws.com/www.juridica19s.org/utils/ayuda_juridica.jpg' target='_blank' >
                <Image src={Infographic_1}
                  z-index='1'
		  fit='cover'
                  full={true} />
                </a>
                }
                margin="small"
                contentPad="medium"
                label='Apoyo Jurídico'
                headingStrong={false} />

              <Card thumbnail={
                <a href='https://s3.amazonaws.com/www.juridica19s.org/utils/Gui%CC%81a_Juri%CC%81dica_Consolidada_v2_26.09.2017.pdf' target='_blank' >
                <Image src={guia_juridica}
                  fit='cover'
	          z-index='1'
                  target='_blank'
                  full={true} />
                </a>
                }
                margin="small"
                contentPad="medium"
                label='Guía Jurídica'
                headingStrong={false} />

              <Card thumbnail={
                <a href='https://s3.amazonaws.com/www.juridica19s.org/utils/infografia1-A-01.jpg' target='_blank' >
                <Image src={'https://s3.amazonaws.com/www.juridica19s.org/utils/infografia1-A-01.jpg'}
                  fit='cover'
	          z-index='1'
                  target='_blank'
                  full={true} />
                </a>
                }
                margin="small"
                contentPad="medium"
                label='Daño Edificio - Propietario'
                headingStrong={false} />

              <Card thumbnail={
                <a href='https://s3.amazonaws.com/www.juridica19s.org/utils/infografia1-B-01.jpg' target='_blank' >
                <Image src={'https://s3.amazonaws.com/www.juridica19s.org/utils/infografia1-B-01.jpg'}
                  fit='cover'
	          z-index='1'
                  target='_blank'
                  full={true} />
                </a>
                }
                margin="small"
                contentPad="medium"
                label='Daño Edificio - Ocupante'
                headingStrong={false} />

            </Columns>

            <span style={{ fontSize: 10}}>La información contenida en esta guía o imagen es general y tiene carácter exclusivamente orientador; por lo tanto, no es y no deberá ser interpretado como una recomendación u opinión para llevar a cabo o abstenerse de llevar a cabo cualquier acción respecto a los temas discutidos en la misma. Esta guía o imagen no sustituye a la asesoría jurídica especializada que, para cada caso, las usuarios deberán obtener antes de actuar sobre uno o más de los temas discutidos en la misma. Los abogados y organizaciones involucradas en la preparación de esta guía general, no emiten ninguna opinión o juicio sobre, y asimismo, de manera expresa, no se hacen responsables de la exactitud de la información contenida en la misma.</span>
          </Box>
        </Box>



        <hr/>
        <Box pad="small"  margin="large" >
          <Heading tag='h3' strong={true}>Casos en Números</Heading>
          <Box direction="row" margin="large" >
            <Box basis="1/2" >
              <Heading tag='h4' strong={true}>Tipos de Casos: </Heading>
              <Paragraph width="large">En la siguiente tabla se observan los tipos de casos recibidos hasta la fecha. </Paragraph>
              <Charts/>
            </Box>
            <Box basis="1/2">
              <Heading tag='h4' strong={true}>Ubicación Espacial: </Heading>
              <Paragraph width="large">En el siguiente mapa se observa la localización por zona de los casos recibidos. </Paragraph>
              <Box justify="center" alignContent="center" align="center">
                <iframe width="100%" height="700" frameborder="0" src="https://observatoriodevivienda.carto.com/viz/1978ae39-1a68-45b5-87a3-c5bc4405bd2b/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
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
            <Box basis="1/3">
              <Heading tag='h3' strong={true}>Solicita una Jornada de Asesoría Legal:</Heading>
              <Paragraph>
              ¿Tienes un grupo de 15 a 25 personas que necesiten asesoría directa en un mismo sitio? Llámanos para organizar una visita a tu localidad.
              </Paragraph>
              <Paragraph>
              Se requiere que la persona solicitante pueda ser contacto directo para organizar a las personas y la logística de la visita. Bienvenidas las solicitudes de organizaciones.
              </Paragraph>

              <Anchor icon={<Edit />}
                label='Solicítala Aquí'
                href='https://goo.gl/forms/ERX7XRPJETbxxj4f1'
                target='_blank'
                primary={true} />
            </Box>
            <Box basis="1/3" alignContent="center" align="center" alignSelf="center">
              <Quote >
                <Paragraph>La palabra Pro Bono deriva del latín pro bono publico que quiere decir “por el bien público” o “por el bien común”. A nivel mundial la comunidad legal entiende por actividad Pro Bono, el trabajo de asesoramiento y/o representación jurídica gratuita en beneficio de la sociedad.</Paragraph>
              </Quote>
            </Box>
            <Box basis="1/3" alignContent="center" align="center" alignSelf="center">
              <Image src={'https://image.flaticon.com/icons/svg/568/568883.svg'}/>
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
            <Box basis="1/4" align="center" margin="large" justify="center">
              <img src={appleseed} style={{ height: 'auto', width: '70%' }}/>
            </Box>
            <Box basis="1/4" align="center" margin="large" justify="center">
              <img src={fbm} style={{ height: '150px', width: '70%' }}/>
            </Box>
            <Box basis="1/4" align="center" margin="large" justify="center">
              <img src={PROBONOMX} style={{ height: 'auto', width: '35%' }}/>
            </Box>
            <Box basis="1/4" align="center" margin="large" justify="center">
              <img src={probono1} style={{ height: 'auto', width: '70%' }}/>
            </Box>

          </Box>
          <Box className="columns-container"
            align="center"
            size={{ width: "xxlarge" }}
            pad={{ horizontal: "small" }}
            announce={false}
            direction="column"
            tag="div"
            responsive
            focusable
            margin="large"
          >
            <Heading tag='h2' strong={false}>Firmas y Profesionales</Heading>
           <Paragraph style={{ fontSize: 20}} ><b>Firmas y profesionales:</b> Baker McKenzie; Basham, Ringe y Correa; Bufete Jurídico Gratuito Universidad Panamericana; Bufete Sánchez Navarro BSN; Chevez Ruiz, Zamarripa; Creel, García-Cuéllar, Aiza y Enriquez; Dla Piper; Greenberg Traurig; Hogan Lovells BSTL; Holland and Knight; Jauregui y Del Valle; Jones Day; Ritch Muller; Sánchez DeVanny; Notaría 92; Notaría 250;
            <b>Abogadas y abogados independientes:</b> Angeles Anaya; Carmen Segura; Dina Moreno; Marco Antonio Vaca; Sandra Segura; Valeria Ponce Najera; <b>Diseño de infografías</b>: Raúl Espino;
            </Paragraph>

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
              <Paragraph size="small" width="small" margin='none' >
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
