import styled from 'styled-components';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {App} from '../Layout';
import {useContext} from 'react';


const HeaderRight = () => {
  const ThemeToggler = useContext(App);
  return (
    <HeaderRightWrpper>
     <ThemeToggle>
      <Brightness7Icon onClick={ThemeToggler}/>
     </ThemeToggle>
    </HeaderRightWrpper>
  )
}

const HeaderRightWrpper=styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-right:15px;
`
const ThemeToggle=styled.div`
display:flex;
justify-content:center;
align-items:center;
 background-color:${(props)=>props.theme.bgDiv};
height:100%;
padding:5px;
width:50px;
border-radius:12px;
`

export default HeaderRight