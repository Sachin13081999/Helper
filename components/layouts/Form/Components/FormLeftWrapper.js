import styled from 'styled-components';
const FormLeftWrapper = () => {
  return (
    <FormLeft>
      <FormInput>
      <label>Campaign Title</label>
      <Input>
      
      </Input>
      </FormInput>
    </FormLeft>
  )
}

const FormLeft = styled.div`
width:48%;
`

const FormInput = styled.div`
display:flex;
flex-direction:column;
font-family:'poppins';

`

const Input = styled.input`
padding:8px;
background-color:${(props) => props.theme.bgDiv};

`
export default FormLeftWrapper