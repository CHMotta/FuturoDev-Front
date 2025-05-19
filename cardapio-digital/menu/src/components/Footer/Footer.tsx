import './Footer.css'
import LogoInsta from '../../img/icons8-instagram-16.png'

export default function Footer () {
    return (
        <footer id="footer">
            <div>
                <p>Centro</p>
                <p>Abdon Batista 90</p>
                <p>Joinville-SC</p>
            </div>
            <div>
                <p>Horario de funcionamento.</p>
                <p>Segunda a Quinta: 11h30 - 22h00</p>
                <p>Sexta e Sábado: 11h30 - 23h00</p>
            </div>
            <div>
                <p>Reserva: (47) 99999-9999</p>
                <p>Nos siga no instagram <a href="https://www.instagram.com"><img src={LogoInsta} alt="" /></a></p>
            </div>
        </footer>
    )
}