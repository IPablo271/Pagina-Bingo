import React,{useState} from 'react'
import './Bingo.css'
import img1 from "./Bingoimg/bin1.jpg"
import { Calendar } from '@mantine/dates';
function Bingo(){
    const [value, setValue] = useState(null);
    return(
        
        <div className='container'>
            <div className="Bingo">
                <h1 className='h1_b'>Fechas</h1>
                <div className='divc'>
                    <Calendar value={value} onChange={setValue} />
                </div>
            </div>
            <div className="Cuchubal">
                <h1 className='h1_a'>Cuchubal</h1>
                <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
                <div className='datos1'>
                    <div class="form__group">
                        <input type="text" class="form__input" id="name" placeholder="Monto" required="" />
                        <label for="name" class="form__label">Monto</label>
                    </div>
                </div>
                <div className='datos2'>
                    <div class="form__group">
                        <input type="text" class="form__input" id="name" placeholder="Nombre-Usuario" required="" />
                        <label for="name" class="form__label">Nombre-Usuario</label>
                    </div>
                </div>
                <div className='datos3'>
                    <div class="form__group">
                        <input type="text" class="form__input" id="name" placeholder="Fecha-limite" required="" />
                        <label for="name" class="form__label">Fecha-limite</label>
                    </div>
                </div>
                <button className='button-3' role="Button">Enviar</button>
            </div>
            
        </div>
    )

}
export default Bingo
