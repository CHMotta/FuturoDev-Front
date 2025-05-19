import FotoGnocchiEspinafre from '../../img/gnocchi_espinafre.png'
import FotoGnocchiBatata from '../../img/gnocchi_batata.png'
import FotoGnocchiBeterraba from '../../img/gnocchi_beterraba.png'
import FotoGnocchiCenoura from '../../img/gnocchi_cenoura.png'
import './Gnocchi.css'

export default function Gnocchi (){
    return(
        <section >
            <h1 id='gnocchi'>Gnocchis</h1>
            <section className='ListaGnocchi'>
                <div className="card-corpo">
                    <img src={FotoGnocchiBatata} alt="Gnocchi de batata" className='imgBatata'/>
                    <h3>Gnocchi de BATATA</h3>
                    <p>R$ 89,90</p>
                </div>
                <div className="card-corpo">
                    <img src={FotoGnocchiCenoura} alt="Gnocchi de Cenoura" className='imgBatata'/>
                    <h3>Gnocchi de CENOURA</h3>
                    <p>R$ 89,90</p>
                </div>
                <div className="card-corpo">
                    <img src={FotoGnocchiBeterraba} alt="Gnocchi de Beterraba" className='imgBatata'/>
                    <h3>Gnocchi de BETERRABA</h3>
                    <p>R$ 89,90</p>
                </div>
                <div className="card-corpo">
                    <img src={FotoGnocchiEspinafre} alt="Gnocchi de Espinafre" className='imgBatata'/>
                    <h3>Gnocchi de ESPINAFRE</h3>
                    <p>R$ 89,90</p>
                </div>
            </section>
            <h3 className='titulo_molhos'>Molhos Disponiveis</h3>
            <ul className='molhos'>
                <li>Alla Puttanesca</li>
                <li>Al Pesto di Basilico</li>
                <li>Cacio e Pepe</li>
                <li>Alla Matriciana</li>
            </ul>

        </section>
    )
}