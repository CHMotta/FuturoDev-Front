import { useState } from 'react'
import './tarefa.css'
import type { TarefaType } from './Type';

export default function Tarefa({onAdicionar}: any){

    const turnos = ['Turno', 'Manhã', 'Tarde', 'Noite']

    const [cadastro, setCadastro] = useState<TarefaType>({id: '',tarefa:'', turno:'', concluida:false});

    function clickButton(){
        if (!cadastro.tarefa || !cadastro.turno || cadastro.turno === 'Turno') return
        console.log(cadastro),
        onAdicionar(cadastro),
        setCadastro({id: '',tarefa:'', turno:'', concluida:false})
    }

    return (
        <section id='section'>
            <h1 id='titulo_sistema_gestao'>Sistema de Gestão de Tarefas</h1>
            <section className="section_tarefa">
                <div id='nova_tarefa'>
                    <label>Adicionar Nova Tarefa</label>
                    <input onChange={(e) => setCadastro({...cadastro, tarefa:e.target.value})} id='input_tarefa' type="text"/>
                </div>
                <select onChange={(e) => setCadastro({...cadastro,turno: e.target.value})} className='select_turno'>
                    {turnos.map((turno) => (
                        <option  value={turno}>{turno}</option>
                    ))}
                </select>
                <button onClick={clickButton} className="btn_tarefa">Adicionar</button>

            </section>
        </section>
    )
}