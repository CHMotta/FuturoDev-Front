import './App.css'
import Tarefa from './components/Tarefa'
import ListaTarefas from './components/ListaTarefas'
import Progresso from './components/Progresso'
import { useEffect, useState } from 'react'
import type { TarefaType } from './components/Type'
import {v4 as uuidv4} from 'uuid'

function App() {

  const [tarefas, setTarefas] = useState<TarefaType[]>([])

  const totalTarefas = tarefas.length;
  const tarefasConcluidas = tarefas.filter(item => item.concluida).length;


  function handleAdicionar (cadastro: TarefaType) {
    const novoCadastro:TarefaType = {
      id: uuidv4(),
      tarefa: `${cadastro.tarefa}`,
      turno: `${cadastro.turno}`,
      concluida: false,
    };
    setTarefas((prev) => [...prev, novoCadastro]);
  }

  function excluirTarefa (id:string){
    setTarefas ((prev) => prev.filter((item) => item.id !== id))
  }

  function concluida (id: string){
    setTarefas((prev)=>
      prev.map((item) => 
      item.id === id ?{...item, concluida: !item.concluida} : item //para o id ser lido tem que passar como parametro da função 
    ));
  }

  useEffect(() => {
    try {//try catch é um metodo para colocar um código que pode dar erro e ter um plano B para não quebrar a aplicação
      const tarefaSalva = localStorage.getItem('tarefas');
      if (tarefaSalva) {
        setTarefas(JSON.parse(tarefaSalva))
      }
    } catch (erro) {
      localStorage.removeItem('tarefas')//se der erro em try ele ira remover o item tarefa
    }
  }, []);


  //salva no localStorage toda vez que for atualizado as tarefas
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }, [tarefas])

  return (
    <div id='App'>
      <Tarefa onAdicionar={handleAdicionar}/>
      <ListaTarefas tarefa={tarefas} onConcluida={concluida} onExcluir={excluirTarefa}/>
      <Progresso total={totalTarefas} concluidas={tarefasConcluidas}/>
    </div>
  )
}

export default App
