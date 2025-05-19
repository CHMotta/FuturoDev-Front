import espaguete from '../../img/espaguete.png'
import fettuccine from '../../img/Fettuccine.png'
import pappardelle from '../../img/Pappardelle.png'
import penne from '../../img/Penne.png'
import tagluiatelle from '../../img/Tagliatelle.png'
import rigatoni from '../../img/Rigatoni.png'
import './Pastas.css'


export default function Pastas() {
    const pastas = [{
        nome:'Rigatoni',
        imagem:{rigatoni},
        preco:'R$45,90',
        molhosPermitidos:[' Alla Matriciana']
    },{
        nome:'Penne',
        imagem: {penne},
        preco:'R$45,90',
        molhosPermitidos:['Alla Puttanesca', 'Cacio e Pepe']
    },{
        nome:'Espaguete',
        imagem:{espaguete},
        preco:'R$45,90',
        molhosPermitidos:['Alla Puttanesca', 'Al Pesto di Basilico', 'Cacio e Pepe', 'Alla Matriciana']
    },{
        nome:'Tagliatelle',
        imagem:{tagluiatelle},
        preco:'R$45,90',
        molhosPermitidos:['Alla Puttanesca', 'Alla Matriciana']
    },{
        nome:'Fettuccine',
        imagem:{fettuccine},
        preco:'R$45,90',
        molhosPermitidos:['Alla Puttanesca', 'Al Pesto di Basilico', 'Cacio e Pepe']
    },{
        nome:'Pappardelle',
        imagem:{pappardelle},
        preco:'R$45,90',
        molhosPermitidos:['Alla Puttanesca', 'Alla Matriciana']
    }]

    return (
        <section id='pastas'>
            <h1 className='titulo_pastas'>Pastas</h1>
            <ul id='lista_pastas'>
                {pastas.map((item, index) => (
                    <li id='card_pasta' key={index}>
                        <img id='img_pastas' src={item.imagem} alt={item.nome} />
                        <div>
                            <h3>{item.nome}</h3>
                            <p>R$ {item.preco}</p>
                            <select className='selecao'>
                                {item.molhosPermitidos.map((molhos, index)=>(
                                    <option key={index} value={molhos}>
                                        {molhos}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

