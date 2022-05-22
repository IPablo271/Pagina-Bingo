import React from 'react'
import Bingo from './Bingo/Bingo';
import Inicio from './Inicio/inicio';
import { useState } from 'react'

import {
	Text,
	Tabs,
} from '@mantine/core';

function ContentComponent(){
    return (
		<div className="content__container">
			<Tabs grow position="apart" variant="outline">
				<Tabs.Tab label="Inicio" >
                    <Bingo/>
				</Tabs.Tab>
				<Tabs.Tab label="Actividades" >
                    <Inicio/>
				</Tabs.Tab>
			</Tabs>
		</div>
	)
}
export default ContentComponent