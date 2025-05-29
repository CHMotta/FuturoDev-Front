import './listatarefas.css'
import type { TarefaType } from './Type'

interface listaTarefa {
    filter?: any;
    tarefa: TarefaType[];
    onConcluida: (id: string) => void;
    onExcluir: (id: string)=> void;
}

export default function ListaTarefas({ tarefa, onConcluida, onExcluir }: listaTarefa) {


    return (
        <section id='lista_tarefas'>
            <h1 id='titulo_minhas_tarefas'>Minhas tarefas</h1>
            <div id='sessao_turno'>
                <section className='turno'>
                    <h2>Manhã</h2>
                    <ul className='ul'>
                        {tarefa
                            .filter((item: any) => item.turno === 'Manhã')
                            .map((item: any) => (
                                <li key={`${item.id}`}>
                                    <label className={item.concluida?'labelList concluida': 'lavelList'}>
                                        <input type="checkbox" checked={item.concluida} name={item.tarefa}
                                            onChange={() => onConcluida(item.id)}
                                        />
                                        {item.tarefa}
                                    </label>
                                    <button onClick={() => onExcluir(item.id)} className='excluir'>
                                        Excluir
                                    </button>
                                </li>

                            ))}
                    </ul>
                </section>
                <section className='turno'>
                    <h2>Tarde</h2>
                    <ul className='ul'>
                        {tarefa
                            .filter((item: any) => item.turno === 'Tarde')
                            .map((item: any) => (
                                <li key={`${item.id}`}>
                                    <label className={item.concluida?'labelList concluida': 'lavelList'}>
                                        <input type="checkbox" checked={item.concluida} name={item.tarefa}
                                            onChange={() => onConcluida(item.id)}
                                        />
                                        {item.tarefa}
                                    </label>
                                    <button onClick={() => onExcluir(item.id)} className='excluir'>
                                        Excluir
                                    </button>
                                </li>
                            ))}
                    </ul>
                </section>
                <section className='turno'>
                    <h2>Noite</h2>
                    <ul className='ul'>
                        {tarefa
                            .filter((item: any) => item.turno === 'Noite')
                            .map((item: any) => (
                                <li key={`${item.id}`}>
                                    <label className={item.concluida?'labelList concluida': 'lavelList'}>
                                        <input type="checkbox" checked={item.concluida} name={item.tarefa}
                                            onChange={() => onConcluida(item.id)}
                                        />
                                        {item.tarefa}
                                    </label>
                                    <button onClick={() => onExcluir(item.id)} className='excluir'>
                                        Excluir
                                    </button>
                                </li>
                            ))}
                    </ul>
                </section>
            </div>
        </section>
    )
}

//{tarefa.filter((item) => item.turno === 'Noite').map((item) => (
  //                          <li key={item.turno}>{item.valor}</li>
    //                    ))}