import { livros } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import imagemlivro from '../../imagens/livro2.png'
import styled from 'styled-components'


const UltimosLancamentosContainer = styled.section `
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`


const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;

 `   

function UltimosLancamentos() {
    return(

        <UltimosLancamentosContainer>

        <Titulo 
            cor="#EB9B00" 
            tamanhoFonte="36px"> 
           ULTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>   
                { livros.map( livro => (
                <img src={livro.src}/>
                    ) )}
            </NovosLivrosContainer>
               <CardRecomenda
                    titulo=" Talvez você se interesse por..."
                    subtitulo="90 segundos"
                    descricao="Como converncer alguem em 90 segundos"
                    img={imagemlivro}
               />     
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos