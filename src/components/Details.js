import React from 'react';
import Button from './button/Button';
import Field from './Field';

const Details = ({ product, onSubmitPress, onSendMessage}) => {

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

            <Button onClick={onSendMessage} text='Enviar mensaje' />

        </div>
    )
};

export default Details;
