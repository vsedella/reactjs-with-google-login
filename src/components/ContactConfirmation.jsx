
import { forwardRef} from 'react';
import {createPortal} from 'react-dom'

const ContactConfirmation = forwardRef(function ContactConfirmation({firstName, lastName, email , message, closeDialog}, ref){
    return createPortal(<div>
        <dialog ref={ref} className='backdrop:backdrop-blur-sm w-6/12 p-3' onClose={closeDialog}>
           <p className='font-bold text-xl text-indigo-500'> Contact confirmation </p>
           <p> First name: {firstName}   </p> 
           <p> Last name :  {lastName}</p> 
           <p> Email : {email}  </p> 
           <p> Message: {message}  </p> 
           <div> <button className='float-right text-xl text-white  bg-indigo-500 hover:bg-indigo-600 font-bold border-2 border-white rounded-lg p-1' onClick={closeDialog} > Close </button> </div>        
        </dialog>
    </div>, document.getElementById('modal'));
});

export default ContactConfirmation;