import './Bebidas.css'

export default function Bebidas(){
    return(
        <section>
            <h1 className="titulo_bebidas">Bebidas</h1>
            <ul className="lista_bebidas">
                <li>Agua R$ 6,00</li>
                <li>Refrigerante 
                    <ul>
                        <li>Coca-cola R$ 8,00</li>
                        <li>Guarana R$ 6,00</li>
                        <li>Sprite R$ 6,00</li>
                    </ul>
                </li>
                <li>Sucos
                    <ul>
                        <li>Morango R$ 10,00</li>
                        <li>Laranja R$ 10,00</li>
                        <li>Uva R$ 10,00</li>
                    </ul>
                </li>
            </ul>
        </section>
    )
} 