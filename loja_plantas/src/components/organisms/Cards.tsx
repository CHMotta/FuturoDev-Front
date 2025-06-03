import PlantCard from "../molecules/PlantCard";
import { v4 as uuid} from 'uuid'
import './cards.css'

export default function Cards(){
    return(
        <div className="cards">
            <PlantCard id={uuid()} name='Planta' price={12.30} light="Sun"/>
            <PlantCard id={uuid()} name='Planta' price={12.30} light="Shade"/>
            <PlantCard id={uuid()} name='Planta' price={12.30} light="Sun"/>
            <PlantCard id={uuid()} name='Planta' price={12.30} light="Shade"/>
            <PlantCard id={uuid()} name='Planta' price={12.30} light="Sun"/>
            <PlantCard id={uuid()} name='Planta' price={12.30} light="Shade"/>
            <PlantCard id={uuid()} name='Planta' price={12.30} light="Sun"/>
            <PlantCard id={uuid()} name='Planta' price={12.30} light="Shade"/>
        </div>
    )
}