import React from 'react'

const Modal = ({setshow}) => {
    return (

        <div className="modal">
            <button className="model-close" onClick={()=>setshow(false)}>Close</button>
            <p className="model-p">This is the content of the modal.</p>
        </div>

    )
}

export default Modal