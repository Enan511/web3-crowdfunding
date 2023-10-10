import styled from 'styled-components';
<<<<<<< HEAD
import { FormState } from '../Form';
import { useContext } from 'react';

const FormLeftWrapper = () => {
  const Handler = useContext(FormState);

  return (
    <FormLeft>
      <FormInput>
        <label>Campaign Title</label>
        <Input onChange={Handler.FormHandler} value={Handler.form.campaignTitle} placeholder='Campaign Title' name='campaignTitle'>
=======

const FormLeftWrapper = () => {
    return (
    <FormLeft>
      <FormInput>
        <label>Campaign Title</label>
        <Input placeholder='Campaign Title' name='campaignTitle'>
>>>>>>> 04fe0cd510d35c873e5a58e7bd3b830acc4bfbf2
        </Input>
      </FormInput>
      <FormInput>
        <label>Story</label>
<<<<<<< HEAD
        <TextArea onChange={Handler.FormHandler} value={Handler.form.story} name="story" placeholder='Describe Your Story'>
=======
        <TextArea placeholder='Describe Your Story'>
>>>>>>> 04fe0cd510d35c873e5a58e7bd3b830acc4bfbf2
        </TextArea>
      </FormInput>
    </FormLeft>
  )
}

const FormLeft = styled.div`
  width:48%;
`

const FormInput = styled.div`
  display:flex ;
  flex-direction:column;
  font-family:'poppins';
  margin-top:10px ;
`
const Input = styled.input`
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

const TextArea = styled.textarea`
  padding:15px;
  background-color:${(props) => props.theme.bgDiv} ;
  color:${(props) => props.theme.color} ;
  margin-top:4px;
  border:none;
  border-radius:8px ;
  outline:none;
  font-size:large;
  max-width:100%;
  min-width:100%;
  overflow-x:hidden;
  min-height:160px ;
`

export default FormLeftWrapper;