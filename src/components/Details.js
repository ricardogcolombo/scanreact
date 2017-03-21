import React from 'react';
import Button from './button/Button';
import Field from './Field';

const Details = ({
    product,
    onSubmitPress
}) => {

    // FIXME: remove this and check on detailscontainer the state
    let imgSrc = (product.pic) ? 'data:image/jpeg;base64,' + product.pic : "";

    return (
        <div className='Details'>
            <div className='Details__mainInfo'>
            <div className='Details__mainInfo__productImage'>
            <img src='LA06.jpg'/>
            </div>
            <div className='Details__mainInfo__dataContainer'>
            <Field label='Codigo de Articulo' value={product.codart} />
            <Field label='Marca' value={product.marca}/>
            </div>
        </div>

        <div className='Details__descripcion'>
            <Field label ='Descripcion' value={product.descripcion} />
        </div>

            <div className='Details__form'>
                <p className='Details__form__titleForm'>Enviar Mensaje al repositor</p>
                <p className='Details__form__titleLabel'>Asunto</p>
                <input className='Details__form__title'></input>
                <p className='Details__form__textAreaTitle'>Descripcion</p>
                <textarea rows="4" cols="50" className='Details__form__descripcion'></textarea>
                <Button className='Details__form__submitButton' onClick={onSubmitPress} text='Enviar Mensaje'/>
            </div>
        </div>)
};

export default Details;
