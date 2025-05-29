import './progresso.css'

    interface ProgressoProps{
        total: number,
        concluidas: number
    }

export default function Progresso ({total, concluidas}: ProgressoProps) {

    const progresso = concluidas === 0 ? 0 : (concluidas/total)*100;

    return(
        <section className='progresso'>
            <h1>Progresso: {progresso.toFixed(2)}%</h1>
        </section>
    )
}