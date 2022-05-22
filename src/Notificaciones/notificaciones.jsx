
import React, { useState } from "react"
import './notificaciones.css'
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

import { ReportMoney } from 'tabler-icons-react';
import { Inbox } from 'tabler-icons-react';

const Notificaciones =()=>{
    const[carta,setCarta]=useState([
        {id:1,estado:true,informacion:"Ya has realizado tu pago del juego de poker con codigo 121333",categoria:"poker"},
        {id:2,estado:false,informacion:"No has realizado tu pago del juego de bingo con codigo 12sd33",categoria:"dinero"},
        {id:3,estado:true,informacion:"Participa en el nuevo juego del casino por tiempo limitado",categoria:"poker"}
    ])
    return(
        <div>
            {
                (carta.map(record =>{
                    return(
                        <Notification 
                            color={record.estado ? 'green':'red'}
                            title={record.estado ? 'Completado':'Error'} 
                            disallowClose 
                            key={record.id} 
                            className="mensaje__individual">
                            {record.informacion}
                            <Divider my="sm" variant="dashed"/>
                            {(record.categoria==='poker')
                                ?
                                <div >
                                    <Inbox className='icono__notificacion'
                                        size={20}
                                        strokeWidth={2}
                                        color={'#194b4d'}
                                    />
                                </div>
                                :
                                <div>
                                    <ReportMoney className="icono__notifiacion"
                                        size={20}
                                        strokeWidth={2}
                                        color={'#194b4d'}
                                    />
                                </div>
                            }
                            
                        </Notification>
                    )
                }))
                
            }
        </div>
    )
}
export default Notificaciones