import React from 'react';
import Addons from "./Addons/Addons";

const Modal = ({active, setActive, page}) => {
    return (
        <div className={active ? 'modal  active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content active' : 'modal__content'} onClick={ (e) => e.stopPropagation()}>
                <Addons close={setActive} lpage={page}/>
            </div>
        </div>
    );
};

export default Modal;