import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'


const Icone = styled.li `
    margin-right: 40px; 
    width: 25px;
`

const Icones = styled.ul `
    display: flex;
    align-items: center;
`

//Constante que me permite substituir a lista
const icones = [perfil, sacola]

function IconeHeader() {
    return(
        <Icones>
            { icones.map( (icone) => (
              <Icone><img src={icone}></img></Icone>
            ))}

        </Icones>
    )
}

export default IconeHeader