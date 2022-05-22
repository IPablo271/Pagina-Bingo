import React from 'react'

import './header.css'

import LogoGYM from '../Components/imagenesC/logo.png'

import {
	Header,
	Text,
	MediaQuery,
	Burger,
	Code,
	Avatar,
	Menu,
	Divider,
} from '@mantine/core';

import { Settings, Search, Photo, MessageCircle, Trash, UserMinus } from 'tabler-icons-react';
const HeaderComponent =({setOpened,opened}) =>{
    return(
        <Header height={60} p="md" className='header__container'>
            <div style={{display:'flex',alignItems: 'center', height: '100%'}}>
                <MediaQuery largerThan="sm" styles={{display:"none"}}>
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        size="sm"
                        mr="xl"
                    />
                </MediaQuery>
                <div className='header__area__aplicacion'>
                    <img src={LogoGYM} alt="logo_aplicacion" className="logo__aplicacion"/>
                    <div className='area__avatar__aplicacion'>
                    <Text className='nombre__avatar__aplicacion'>Andres Zamora</Text>
                        <Menu control={<Avatar color="green" radius="x1" className="logo__avatar__aplicacion">AZ</Avatar>}>
                            <Menu.Label>Aplicacion</Menu.Label>
                            <Menu.Item icon={<Settings size={14} />}>Configuracion</Menu.Item>
                            <Menu.Item icon={<MessageCircle size={14} />}>Messages</Menu.Item>
                            <Divider/>
                            <Menu.Label>Cuenta</Menu.Label>
                            <Menu.Item color="red" icon={<UserMinus size={14} />}>Cerrar sesion</Menu.Item>
                        </Menu>
                    </div>
                </div>
            </div>
        </Header>
    )
}
export default HeaderComponent;