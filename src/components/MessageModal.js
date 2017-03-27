import React from 'react';
import Button from './Button/Button';
import '../styles/Modal.css';

const ContentModal = ({title, inputTitle, textAreaTitle, submitButtonText, onSubmitPress, onClosePress}) =>{
   return(
    <div className='modal'>
        <div className='modal-form'> 
           <div className='content'>  
                <p className='title'>{title}</p>
                
                <p className='title'>{inputTitle}</p>
                <input className='input'/>

                <p className='title'>{textAreaTitle}</p>
                <textarea className='description' rows="4" cols="50" ></textarea>
        
                <Button className='button submitButton' onClick={onSubmitPress} text={submitButtonText}/>
                <Button className='button cancelButton' onClick={onClosePress} text='cancelar'/>
            </div> 
       </div>
       
    </div>
   )
}

export default ContentModal;
