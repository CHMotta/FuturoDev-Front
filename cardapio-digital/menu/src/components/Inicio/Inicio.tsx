import './inicio.css' 
import logo from '../../img/logoMassas.png'

export default function Inicio(){
    return (
        <section id='inicio' className='mainPag'>
            <div>
                <h1 id='frase_inicio'>Servindo massas à mais de 70 anos</h1>
                <h4 className='h4'>Qualidade passada por gerações</h4>
            </div>
            <img src={logo} alt="Logo Mamamia Massas" className='imgLogo' />
        </section>
    )
}