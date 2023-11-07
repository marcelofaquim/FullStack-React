import styled from 'styled-components'


const Opcoes = styled.ul `
  display: flex;
`

const Opcao = styled.li `
  min-width: 120px;
  display: flex; /*deixar itens para o lado*/
  font-size: 16px;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer; /* deixar o cursor do mouse como uma mãozinha*/
  align-items: center;
  justify-content: center;
`

//Constante que me permite substituir a lista
const textoOpcoes = ['CATEGORIAS',  ' FAVORITOS',  'MINHA ESTANTE']

function OpcoesHeader() {
    return (
        <Opcoes>
            { textoOpcoes.map( (texto) => (
             <Opcao><p>{texto}</p></Opcao>
        ) ) }
      </Opcoes>
    )
}

export default OpcoesHeader