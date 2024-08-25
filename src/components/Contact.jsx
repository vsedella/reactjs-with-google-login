import { useRef, useState } from "react";
import ContactConfirmation from "./ContactConfirmation";

const LABEL_STYLING ="block text-gray-700 text-sm font-bold mb-2";
const INPUT_STYLING = "w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:border-indigo-500";
const ERROR_STYLING = "text-red-500 text-xs mt-1";
const FORM_INITIAL_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    message: ''
};
export default function Contact(){
    const [formData, setFormData] = useState({...FORM_INITIAL_STATE});
      const dialogRef = useRef();
      const [errors, setErrors] = useState({});

      const validate = () => {
        let formErrors = {};
    
        if (!formData.firstName.trim()) {
          formErrors.firstName = 'First Name is required';
        }
    
        if (!formData.lastName.trim()) {
          formErrors.lastName = 'Last Name is required';
        }
        
        if (formData.email !== formData.confirmEmail) {
          formErrors.confirmEmail = 'Emails do not match';
        }
    
        if (!formData.message.trim()) {
          formErrors.message = 'Message is required';
        }
    
        setErrors(formErrors);
    
        // Return true if there are no errors
        return Object.keys(formErrors).length === 0;
      };
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validate()) {
            showConfirmation();
        }
      };

      function showConfirmation(){
        dialogRef.current.showModal();
      }

      function hideConfirmation(){
        dialogRef.current.close();
        setFormData({...FORM_INITIAL_STATE});
      }
    return (
        <>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-4 bg-white p-8 shadow-lg shadow-indigo-500/50 rounded-lg">
          <div className="flex gap-3 flex-col">          
          <div>
            <label className={LABEL_STYLING}>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={INPUT_STYLING}
              required
            />
            {errors.firstName && <p className={ERROR_STYLING}>{errors.firstName}</p>}
          </div>
    
          <div>
            <label className={LABEL_STYLING}>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={INPUT_STYLING}
              required
            />
            {errors.lastName && <p className={ERROR_STYLING}>{errors.lastName}</p>}
          </div>
    
          <div>
            <label className={LABEL_STYLING}>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={INPUT_STYLING}
              required
            />
            {errors.email && <p className={ERROR_STYLING}>{errors.email}</p>}
          </div>
    
          <div>
            <label className={LABEL_STYLING}>Confirm Email:</label>
            <input
              type="email"
              name="confirmEmail"
              value={formData.confirmEmail}
              onChange={handleChange}
              className={INPUT_STYLING}
              required
            />
            {errors.confirmEmail && <p className={ERROR_STYLING}>{errors.confirmEmail}</p>}
          </div>
    
          <div>
            <label className={LABEL_STYLING}>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={INPUT_STYLING}
              required
              maxLength={100}
            />
            {errors.message && <p className={ERROR_STYLING}>{errors.message}</p>}
            <p className="float-right">{formData.message.length} / 100 </p>
          </div>
    
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-xl text-white font-bold py-2 px-4 rounded focus:outline-none focus:border-indigo-700"
          >
            Submit
          </button>
          </div>
        </form>
        {<ContactConfirmation ref={dialogRef} {...formData} closeDialog={hideConfirmation}></ContactConfirmation>}
        </>
      );
}