
import React, { useState } from "react"
import './mensajes.css'
import {
	Text,
	Paper,
	Divider,
	Code,
	ScrollArea,
	Badge,
	Modal,
	Button,
	Group,
	Notification,
} from '@mantine/core';

const Mensajes =()=>{
    const[carta,setCarta]=useState([
        {id:1,titulo:'Andres Zamora',mensaje:"Hola jose buenas tardes, vas a poder participar hoy en el bingo de las 5:00 pm"},
        {id:2,titulo:'Jose Alvarez',mensaje:"Hola jose te recuerdo que la proxima semana empieza el cuchubal con el grupo de trabajo"},
        {id:3,titulo:'Valery Hernandez',mensaje:"Hola jose te queria comentar que ayer gane Q100 por medio de la pagina "}
    ])
    return(
        <div>
            {
                (carta.map(record =>{
                    return(
                        <Notification color="teal" title={record.titulo} disallowClose key={record.id} className="mensaje__individual">
                            {record.mensaje}
                        </Notification>
                    )
                }))
                
            }
        </div>
    )
}
export default Mensajes