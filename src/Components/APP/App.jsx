import { useState } from 'react'
import './App.css'
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  ScrollArea,
  Accordion,
  Group,
  Divider,
  Card,
  Image,
  Button,
  Badge,
} from '@mantine/core';
import { BiBell } from 'react-icons/bi';
import { FaHistory } from 'react-icons/fa'
import { RiMessage3Line } from 'react-icons/ri'
import Historial from '../../Historial/historial';
import Notificaciones from '../../Notificaciones/notificaciones';
import Mensajes from '../../Mensajes/mensajes';
import HeaderComponent from '../../Header/header'
import ContentComponent from '../Content/content';

import img1 from '../imagenesC/img1.jpg'
import img2 from '../imagenesC/img2.jpg'

import img3 from '../imagenesC/panitos.jpg'
import img4 from '../imagenesC/uvg.jpg'

function App() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 400 }}>
          <ScrollArea style={{ height: 1000 }} scrollbarSize={0}>
            <div className='navbar_area_acordation'>
              <Accordion iconPosition='right' iconSize={26} multiple>
                <Accordion.Item label={
                <Group noWrap>
                  <BiBell />
                  <div>
                    <Text>Notificaciones</Text>
                  </div>
                </Group>
              }>
                <ScrollArea style={{ height: 450 }} scrollbarSize={0}>
                  <Notificaciones/>
                </ScrollArea>

              </Accordion.Item>

              <Accordion.Item label={
                <Group noWrap>
                  <FaHistory />
                  <div>
                    <Text>Historial</Text>
                  </div>
                </Group>
              }>
                <ScrollArea style={{ height: 270 }} scrollbarSize={0}>
                  <Historial></Historial>
                </ScrollArea>
              </Accordion.Item>
              <Accordion.Item label={
							<Group noWrap>
								<RiMessage3Line />
								<div>
									<Text>Mensajes</Text>
								</div>
							</Group>
              }>
                <ScrollArea style={{ height: 220 }} scrollbarSize={0}>
                  <Mensajes/>
                </ScrollArea>
              </Accordion.Item>
            </Accordion>
            <Text 
              className='ofertas__activas__text'
              weight={700}
              align="center"
              variant='gradient'
              gradient={{from:'#276955',to:'#8cb4ac',deg:45}}
              >Avisos
            </Text>
            <Divider my="sm" variant="dotted"/>
            <div style={{width:340,margin:"auto",marginTop:'10px'}}>
              <Card shadow="sm" p="lg">
                <Card.Section>
                  <Image src={img1} height={160} alt="img1" className='imagen_prueba'/>
                </Card.Section>
                <Group position='apart' className='infor__recomendacion__individual' style={{ marginBottom: 5}}>
                  <Text weight={500} >Dia de ruleta</Text>
                  <Badge color="pink" variant="light">Viernes</Badge>
                </Group>
                <Text size='sm'>
                  Te invitamos a que nos acompañes este viernes a los juegos de ruleta
                </Text>
              </Card>
            </div>
            <div style={{width:340,margin:"auto",marginTop:'10px'}}>
              <Card shadow="sm" p="lg">
                <Card.Section>
                  <Image src={img2} height={160} alt="img1" className='imagen_prueba'/>
                </Card.Section>
                <Group position='apart' className='infor__recomendacion__individual' style={{ marginBottom: 5}}>
                  <Text weight={500} >Dia de Poker</Text>
                  <Badge color="pink" variant="light">Martes</Badge>
                </Group>
                <Text size='sm'>
                  Te esperamos este martes en el dia de poker no faltes!
                </Text>
              </Card>
            </div>

            </div>
          </ScrollArea>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
          <Text 
              className='ofertas__activas__text'
              weight={700}
              align="center"
              variant='gradient'
              gradient={{from:'#276955',to:'#8cb4ac',deg:45}}
              >Publicidad</Text>
              <Divider my="sm" variant="dotted"/>
              <div style={{width:200,margin:"auto",marginTop:'10px'}}>
              <Card shadow="sm" p="lg">
                <Card.Section>
                  <Image src={img3} height={160} alt="img1" className='imagen_prueba'/>
                </Card.Section>
                <Group position='apart' className='infor__recomendacion__individual' style={{ marginBottom: 5}}>
                  <Text weight={500} >Panitos</Text>
                  <Badge color="pink" variant="light">Comida</Badge>
                </Group>
                <Text size='sm'>
                  Ven a probar nuestro nuevo pan delicioso de 3 quesos!
                </Text>
              </Card>
            </div>
            <div style={{width:200,margin:"auto",marginTop:'10px'}}>
              <Card shadow="sm" p="lg">
                <Card.Section>
                  <Image src={img4} height={160} alt="img1" className='imagen_prueba'/>
                </Card.Section>
                <Group position='apart' className='infor__recomendacion__individual' style={{ marginBottom: 5}}>
                  <Text weight={500} >Uvg</Text>
                  <Badge color="pink" variant="light">Universidades</Badge>
                </Group>
                <Text size='sm'>
                  Ven a estudiar a la mejor universidad de Centroamerica
                </Text>
              </Card>
            </div>

          </Aside>
        </MediaQuery>
      }
      footer={
        <Footer height={60} p="md">
          <Text 
              className='ofertas__activas__text'
              weight={700}
              align="center"
              variant='gradient'
              gradient={{from:'#276955',to:'#8cb4ac',deg:45}}
              >
                Grow your money
            </Text>
        </Footer>
      }
      header={
        <HeaderComponent setOpened={setOpened} opened={opened}/>
      }
    >
      <ContentComponent/>
    </AppShell>
    
  )
}

export default App
