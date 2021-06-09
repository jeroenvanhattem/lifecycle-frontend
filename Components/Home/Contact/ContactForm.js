import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import styles from './ContactForm.module.css'

const ContactForm = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  const onSubmit = async (data) => {
    // Send form email
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message
      };

      await emailjs.send(
        process.env.EMAIL_SERVICE_ID,
        process.env.EMAIL_TEMPLATE_ID,
        templateParams,
        process.env.EMAIL_USER_ID
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.contactForm}>
        <div className='contactForm'>
          <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className={styles.row}>
              <h3>Contacteer ons</h3>
            </div>
            <div className={styles.row}>
              <div className={styles.row}>
                <input
                  type='text'
                  {...register('name', {
                    required: { value: true, message: 'Please enter your name' },
                    maxLength: {
                      value: 30,
                      message: 'Please use 30 characters or less'
                    }
                  })}
                  className='form-control formInput'
                  placeholder='Name'
                ></input>

                <div className={styles.error}>
                  {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                </div>
              </div>



              <div className={styles.row}>
                <input
                  type='email'
                  {...register('email', {
                    required: true,
                    pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                  })}
                  className='form-control formInput'
                  placeholder='Email address'
                ></input>

                <div className={styles.error}>
                  {errors.email && (
                    <span className='errorMessage'>Please enter a valid email address</span>
                  )}
                </div>
              </div>

              <div className={styles.row}>
                <input
                  type='text'
                  {...register('subject', {
                    required: { value: true, message: 'Please enter a subject' },
                    maxLength: {
                      value: 75,
                      message: 'Subject cannot exceed 75 characters'
                    }
                  })}
                  className='form-control formInput'
                  placeholder='Subject'
                ></input>

                <div className={styles.error}>
                  {errors.subject && (
                    <span className='errorMessage'>{errors.subject.message}</span>
                  )}
                </div>
              </div>


              <div className={styles.row}>
                <textarea
                  rows={5}
                  {...register('message', {
                    required: true
                  })}
                  className='form-control formInput'
                  placeholder='Message'
                ></textarea>

                <div className={styles.error}>
                  {errors.message && <span className='errorMessage'>Please enter a message</span>}
                </div>
              </div>

              <button className={styles.button} type='submit'>
                Submit
            </button>

            </div>
          </form>

          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;