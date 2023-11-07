
import Logo from '../logo'
import OpcoesHeader from '../OpcoesHeader'
import IconeHeader from '../IconesHeader'
import styled from 'styled-components'

const HeaderContainer =  styled.header `

    background-color: #fff;
    display: flex;
    justify-content: center; /*deixando todos os arquivos centralizado na pagina */
    }

`

function Header () {
    return (
        <HeaderContainer>  
            <Logo/>
            <OpcoesHeader/>
            <IconeHeader/>
        </HeaderContainer>    
    )
}

export default Header