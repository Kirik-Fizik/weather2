import React from 'react';

export default function Modal({changeVisible}) {
    return (
        <div className='modal'>
            <div className='modal__wrapper'>
            <div>Sorry</div>
            <div>Your question is wrong</div>
            <div>Change and try again</div>
            <div className='modal__button'><div onClick={ () => {
                changeVisible();
                document.getElementsByClassName('layout__input')[0].focus();}
            }>OK</div></div>
            </div>
        </div>
    )
}