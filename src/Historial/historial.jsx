
import React, { useState } from "react"
import './historial.css'
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

const Historial =()=>{
    const[carta,setCarta]=useState([
        {id:1,titulo:'Cuchubal',mensaje:"Participataste con exito en el cucubal con numero 61231313",monto:"Q1000"},
        {id:2,titulo:'Bingo',mensaje:"Participataste con exito en el Bingo con numero 61231313",monto:"Q500"},
        {id:2,titulo:'Poker',mensaje:"Participataste con exito en el juego de Poker con numero 61231313",monto:"Q200"}
    ])
    return(
        <div>
            {
                (carta.map(record =>{
                    return(
                        <Notification color="indigo" title={record.titulo} disallowClose key={record.id} className="mensaje__individual">
                            {record.mensaje}
                            <Divider my="sm"  variant="dashed"/>
                            <Badge color="teal">{record.monto}</Badge>
                        </Notification>
                    )
                }))
                
            }
        </div>
    )
}
export default Historial