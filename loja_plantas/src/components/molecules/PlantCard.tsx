import Button from "../atoms/Button"
import PlantIcon from "../atoms/PlantIcon"
import PriceTag from "../atoms/PriceTag"
import './plancard.css'


type PlantCardProps = {
    id: string,
    name: string,
    price: number,
    light: 'Sun' | 'Shade'
}

export default function PlantCard({id, name, price, light}: PlantCardProps){
    return(
        <section id={id} className="plantcard">
            <h3>{name}</h3>
            <p>ID: {id}</p>
            <p>Tipo de iluminação: {light}</p>
            <PlantIcon />
            <PriceTag priceTag={price} />
            <Button text="Detalhes" variant={"primary"} />
        </section>
    )
}