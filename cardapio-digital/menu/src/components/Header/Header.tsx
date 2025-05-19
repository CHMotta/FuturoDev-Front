import './Header.css'

export default function Header(){
            let itensMenu = [{
                nome: 'Inicio',
                href: '#inicio'
            }, {
                nome: 'Gnocchi',
                href: '#gnocchi'
            }, {
                nome: 'Pastas',
                href: '#pastas'
            }, {
                nome: 'Bebidas',
                href: '#bebidas'
            }]
    return(
        <div className='header'>
                    <h1>Mamamia Massas</h1>
                    <ul className="ul">
                        {itensMenu.map((item, index) => (
                            <li key={index}>
                                <a 
                                    href={item.href}>
                                    {item.nome}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
    )
}
