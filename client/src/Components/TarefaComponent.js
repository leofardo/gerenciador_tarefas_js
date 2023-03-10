import {useState, React} from 'react'
import axios from "axios"
import { faTrash, faPenToSquare, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Tarefa, TextoTarefa, TextoBotoes, TextoTarefaEdit} from '../styles'
import moment from 'moment'

const TarefaComponent = (props) => {
  moment.locale('pt-br');

  const urlApi = 'http://localhost:3001'

  const [alter, setAlter] = useState(false)

  const data = `${moment(`${props.data.slice(0,10)}`, 'YYYY-DD-MM').format('L')} ${props.data.slice(11,16)}`

  const handleClick = (evento, id) =>{

    if(evento === 'delete'){

        axios.post(`${urlApi}/${evento}`, {id})
        .then(response =>{
          props.onUpdate(response.data);
        }).catch(error =>{
          console.log(error)
        })
    }else if(evento === 'alter'){
  
      alter ? setAlter(false) : setAlter(true)
    }else if(evento === 'confirmAlter'){

      const txt = document.getElementById('textEdit').value

      axios.post(`${urlApi}/${evento}`, {id, txt})
        .then(response =>{
          setAlter(false)
          props.onUpdate(response.data);
        }).catch(error =>{
          console.log(error)
        })
    }else{
      console.log('kkk')
    }
  }


  return (
    <> 
        <Tarefa>

            {alter ? (
              <TextoTarefaEdit id='textEdit' type='text' defaultValue={props.text} maxLength='60px'/>
            ) : (
              <TextoTarefa>{props.text}
              <small>{data}</small>
              </TextoTarefa>
            )}

            <TextoBotoes>
                {alter ? (
                <button onClick={()=>handleClick('confirmAlter', props.id)} ><FontAwesomeIcon icon={faCheck}/></button>
                ) : (
                  null
                )}
                <button onClick={()=>handleClick('alter', props.id)} ><FontAwesomeIcon icon={faPenToSquare}/></button>
                <button onClick={()=>handleClick('delete', props.id)} ><FontAwesomeIcon icon={faTrash}/></button>
            </TextoBotoes>
        </Tarefa>
    </>
  )
}

export default TarefaComponent