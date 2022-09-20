import styled from 'styled-components';

const FormRightWrapper = () => {
  return (
    <FormRight>
     <FormInput>
       <FormRow>
         <RowFirstInput>
            <label>Required Amount</label>
            <Input type={'number'} placeholder='Required Amount'></Input>
         </RowFirstInput>
         <RowSecondInput>
            <label>Choose Category</label>
            <Select>
              <option>Education</option>
              <option>Health</option>
              <option>Other</option>
            </Select>
         </RowSecondInput>
        </FormRow>
     </FormInput>
    </FormRight>
  )
}

const FormRight = styled.div`
width:45%;
`

const FormInput = styled.div`
display:flex;
flex-direction:column;
font-family:'poppins';
margin-top:10px;
`

const FormRow = styled.div`
  display: flex;
  justify-content:space-between;
  width:100% ;
`
const Input = styled.input`
padding:15px;
background-color:${(props) => props.theme.bgDiv};
color:${(props) => props.theme.color};
margin-top:4px;
border:none;
border-radius:8px;
outline:none;
font-size:large;
width:100%;
`
const RowFirstInput = styled.div`
  display:flex ;
  flex-direction:column ;
  width:45% ;
`

const RowSecondInput = styled.div`
  display:flex ;
  flex-direction:column ;
  width:45% ;
`
const Select = styled.select`
  padding:15px;
  background-color:${(props) => props.theme.bgDiv} ;
  color:${(props) => props.theme.color} ;
  margin-top:4px;
  border:none ;
  border-radius:8px ;
  outline:none;
  font-size:large;
  width:100% ;
  `

export default FormRightWrapper