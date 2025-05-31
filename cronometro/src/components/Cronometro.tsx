import { useEffect, useState } from "react"

export default function Cronometro() {
    const [segundos, setSegundos] = useState(0);
    const [ativo, setAtivo] = useState(false)

    useEffect(()=> {
        let delay: number | null = null;

        if(ativo){
            delay = setInterval(() => {
                setSegundos((s)=> s + 1);
            },1000);
        }

        return()=>{
            if(delay){
                clearInterval(delay)
            }
        }
    }, [ativo])

    const iniciar = () => {
        if (!ativo){
            setAtivo(true)
        }else{
            return
        }
    };

    const pausar = () => {
        setAtivo(false);
    }

    const zerar = () => {
        setAtivo(false)
        setSegundos(0)
    }

    return(
        <section>
            <h1>Contagem: {segundos} segundos</h1>

            <div>
                <button onClick={iniciar}>Iniciar</button>
                <button onClick={pausar}>Pausar</button>
                <button onClick={zerar}>Zerar</button>
            </div>
        </section>
    )
}