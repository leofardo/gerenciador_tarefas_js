import {React, useState, useEffect} from "react";
import axios from "axios"
import TarefaComponent from "./Components/TarefaComponent";
import ReactPaginate from "react-paginate"
import {Main, Container, TarefaAdd, TarefaInput, BotaoAdd, Tarefas} from './styles'

require ('./app.css')

function App() {

  const [list, setList] = useState([])
  const urlApi = 'http://localhost:3001'

  function updateState(lista) {
    setList(lista);
  }

  const PAGE_SIZE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(()=>{
    axios.post(`${urlApi}/list`)
    .then(response =>{
      setList(response.data)
    }).catch(error =>{
      console.log(error)
    })
  },[])


  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const pageItems = list.slice(startIndex, endIndex);

  const handleClick = (e) =>{
    if(e === 'add'){
      const texto = document.getElementById('tarefaInput').value.trim()
      
      if(texto !== ''){
        axios.post(`${urlApi}/addtarefa`, {texto})
        .then(response =>{
          if(response.data.success){
            console.log(response.data)
            setList(response.data.results)
          }

          document.getElementById('tarefaInput').value = ''

        }).catch(error =>{
          console.log(error)
        })
      }else{
        console.log('O campo está vazio, por favor implemente o texto!')
      }
      
    }
  }
  
  function disablePrevButton() {
    return currentPage === 0;
  }

  function disableNextButton() {
    return currentPage === Math.ceil(list.length / PAGE_SIZE) - 1;
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleClick('add')
    }
  }

  return (
    <>
      <Main>
          <Container>
              <TarefaAdd>
                <TarefaInput maxLength='60px' onKeyPress={handleKeyPress} id="tarefaInput"></TarefaInput>
                <BotaoAdd onClick={()=>handleClick('add')}>ADD</BotaoAdd>
              </TarefaAdd>
              <Tarefas>
                {pageItems.map(item=><TarefaComponent key={item.id} id={item.id} text={item.text} data={item.data_inc} onUpdate={updateState}/>)}
                <ReactPaginate
                  pageCount={Math.ceil(list.length / PAGE_SIZE)}
                  pageRangeDisplayed={5}
                  marginPagesDisplayed={2}
                  onPageChange={({ selected }) => setCurrentPage(selected + 1)}
                  previousLabel={'<'}
                  nextLabel={'>'}
                  containerClassName={'pagination'}
                  pageClassName={'page-item'}
                  pageLinkClassName={'page-link'}
                  previousClassName={'page-item'}
                  previousLinkClassName={'page-link'}
                  nextClassName={'page-item'}
                  nextLinkClassName={'page-link'}
                  activeClassName={'active'}
                  disablePrev={disablePrevButton()}
                  disableNext={disableNextButton()}
                />
              </Tarefas>
          </Container>
      </Main>
    </>
  );
}

export default App;
