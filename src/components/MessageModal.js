import React from 'react';
import Button from './button/Button';
import '../styles/Modal.css';

const ContentModal = ({title, inputTitle, textAreaTitle, submitButtonText, onSubmitPress}) =>{
   return(
    <div className='modal'>
        <div className='modal-form'> 
            
            <p className='title'>{title}</p>
            
            <p className='title'>{inputTitle}</p>
            <input className='input'/>

            <p className='title'>{textAreaTitle}</p>
            <textarea className='description' rows="4" cols="50" ></textarea>
    
            <Button className='button submitButton' onClick={onSubmitPress} text={submitButtonText}/>
            <Button className='button cancelButton' text='cancelar'/>
       </div>
       
    </div>
   )
}

export default ContentModal;
