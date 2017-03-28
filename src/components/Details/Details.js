import React from 'react';
import Button from '../Button/Button';
import Field from '../Field/Field';

const Details = ({
    product,
    onSubmitPress,
    onSendMessage
}) => {

    // FIXME: remove this and check on detailscontainer the state
    let imgSrc = (product.IMAGEN) ? <img src={product.IMAGEN} />: <div className='noImage'></div>;

                    
    return (
        <div className='Details'>
            <div className='Details__mainInfo'>
                <div className='Details__mainInfo__productImage'>
                    {imgSrc}
                </div>
                <div className='Details__mainInfo__dataContainer'>
                    <Field label='Codigo de Articulo' value={product.codart} />
                    <Field label='Marca' value={product.marca}/>
                </div>
            </div>

            <div className='Details__descripcion'>
                <Field label='Descripcion' value={product.descripcion} />
            </div>

            <div className='dataRow'>
                <Field label='PS' value={product.PS} />
                <Field label='PS' value={product.PV} />
                <Field label='BTOVIG' value={product.BTOVIG} />
                <Field label='SKTMIN' value={product.SKTMIN} />
            </div>
            <div className='dataRow'>
                <Field label='TIPO' value={product.TIPO} />
                <Field label='ULTINGCDR' value={product.ULTINGCDR} />
                <Field label='CAL' value={product.CAL} />
                <Field label='FORMATO' value={product.FORMATO} />
            </div>

            <div className='dataRow'>
                <Field label='ULTVTA' value={product.ULTVTA} />
                <Field label='FECDISC' value={product.FECDISC} />
            </div>
            <Button className='Details__submitButton' onClick={onSendMessage} text='Contactar Repositor' />

        </div>
    )
};

export default Details;
