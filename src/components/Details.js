import React from 'react';
import Button from './button/Button';
import Field from './Field';

const Details = ({
    product,
    onSubmitPress
}) => {

    let imgSrc = (product.pic) ? 'data:image/jpeg;base64,' + product.pic : "";

    return (
        <div className='Details'>
            <div>
            <img src={imgSrc}/>
            </div>
            <Field label ='Codigo de Articulo' value={product.codart} />
            <Field label ='Marca' value={product.marca}/>
            <Field label ='Descripcion' value={product.descripcion} />
            <div className='Details__form'>
                <p className='Details__form__titleForm'>Contacte al repositor</p>
                <p className='Details__form__titleLabel'>tipo de mensaje</p>
                <input className='Details__form__title'></input>
                <p className='Details__form__textAreaTitle'>descripcion</p>
                <textarea rows="4" cols="50" className='Details__form__descripcion'></textarea>
                <div className='Details__form__footer'>
                <Button className='Details__form__footer__submitButton' onClick={onSubmitPress} text='Submit'/>
                </div>
            </div>
        </div>)
};

export default Details;
