import styled from 'styled-components';
const HeaderLogo = () => {
  return (
    <Logo>
  
       <img src="/logo.png"  
                    alt="logo"
                    height={150} /> 
    </Logo>
  )
}

const Logo = styled.h1`
    font-weight: bold;
    font-size: 30px;
    margin-left: 10px;
    font-family: 'Poppins';
`
export default HeaderLogo
