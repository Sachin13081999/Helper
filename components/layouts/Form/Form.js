import styled from 'styled-components';
import FormRightWrapper from './components/FormRightWrapper';
import FormLeftWrapper from './components/FormLeftWrapper';
const Form = () => { 
  return (
    <FormWrapper>
        <FormMain>
           <FormInputsWrapper>
            <FormLeftWrapper/>
            <FormRightWrapper/>
           </FormInputsWrapper>
        </FormMain>
    </FormWrapper>
  )
}
const FormWrapper = styled.div`
   width: 100%;
   display:flex;
   justify-content:center;
`
const FormMain = styled.div`
    width:80%;
`

const FormInputsWrapper = styled.div`
display:flex;
justify-content:space-between;
margin-top:45px;

`
export default Form