import './App.css'
import Tarefa from './components/Tarefa'
import ListaTarefas from './components/ListaTarefas'
import Progresso from './components/Progresso'
import { useState } from 'react'
import type { TarefaType } from './components/Type'
import {v4 as uuidv4} from 'uuid'

function App() {

  const [tarefa, setTarefa] = useState<TarefaType[]>([])

  const totalTarefas = tarefa.length;
  const tarefasConcluidas = tarefa.filter(item => item.concluida).length;


  function handleAdicionar (cadastro: TarefaType) {
    const novoUsuario:TarefaType = {
      id: uuidv4(),
      tarefa: `${cadastro.tarefa}`,
      turno: `${cadastro.turno}`,
      concluida: false,
    };
    setTarefa((prev) => [...prev, novoUsuario]);
  }

  function excluirTarefa (id:string){
    setTarefa ((prev) => prev.filter((item) => item.id !== id))
  }

  function concluida (id: string){
    setTarefa((prev)=>
      prev.map((item) => 
      item.id === id ?{...item, concluida: !item.concluida} : item //para o id ser lido tem que passar como parametro da função 
    ));
  }

  return (
    <div id='App'>
      <Tarefa onAdicionar={handleAdicionar}/>
      <ListaTarefas tarefa={tarefa} onConcluida={concluida} onExcluir={excluirTarefa}/>
      <Progresso total={totalTarefas} concluidas={tarefasConcluidas}/>
    </div>
  )
}

export default App
