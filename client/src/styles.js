import styled from 'styled-components'

export const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`

export const Container = styled.div`
    background-color: #fff;
    min-width: calc(60vw - 5%);
    box-sizing: border-box;
    border-radius: 8px;
    min-height: 80vh;
    box-shadow: 10px 10px 20px 1px #bebebe;
    padding: 40px 60px;
    
`

export const TarefaAdd = styled.div`
    display: flex;
    gap: 5%;
`

export const TarefaInput = styled.input`
    background-color: #fefefe;
    border: 1px solid #bebebe;
    padding: 10px 7px;
    border-radius: 5px;
    width: 75%;

    &:focus{
        box-shadow: 0 0 6px 2px rgba(0, 119, 201, 0.5);
        outline: 0;
    }
`

export const BotaoAdd = styled.button`
    background-color: #fefefe;
    border: 1px solid #bebebe;
    padding: 10px 7px;
    border-radius: 5px;
    width: 20%;
    cursor: pointer;
    &:focus{
        box-shadow: 0 0 6px 2px rgba(0, 119, 201, 0.5);
        outline: 0;
    }
`

export const Tarefas = styled.div`
    display: flex;
    margin-top: 20px;
    min-height: 100%;
    flex-direction: column;
    position: relative;
    height: 500px;

    ul{
        position: absolute;
        bottom: 0;
        height: 50px; 
        width: 100%; 
    }
`

export const Tarefa = styled.div`
    width: 100%;
    border-top: 1px solid #bebebe;
    border-bottom: 1px solid #bebebe;
    display: flex;
    gap: 60px;
    padding: 4px 2px;
    margin-top: 10px;
`

export const TextoTarefa = styled.div`
    max-width: 80%;
    min-width: 80%;
    word-wrap: break-word;
    display: flex;
    flex-direction: column;

    small{
        margin-top: 6px;
        font-size: 0.6em;
        color: #808080;
    }

`
export const TextoTarefaEdit = styled.input`
    max-width: 79.5%;
    min-width: 79.5%;
    font-size: 1em;
`

export const TextoBotoes = styled.div`
    display: flex;
    width: 10%;
    justify-content: flex-end;

    button{
        background: none;
        border: none;
        padding: 0 5px;
        cursor: pointer;

        svg{
            font-size: 1.4em;
        }
    }
`