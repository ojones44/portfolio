import { useState } from 'react';

function Connect({ t }) {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    email: '',
    message: '',
  });

  const { fName, lName, email, message } = formData;

  const handleSubmit = (e) => {
    console.log('Your message has been submitted');
    console.log({
      name: `${fName} ${lName}`,
      message,
    });
    e.preventDefault();
  };

  const onChange = (e) => {
    setFormData((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.value);
  };

  return (
    <section className='container'>
      <div>{t('contact3')}</div>
      <div>{t('contactTitle')}</div>
      <div>{t('contactBody')}</div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='html'>{t('formFName')}</label>
          <input
            type='text'
            className=''
            id='fName'
            name='fName'
            value={fName}
            onChange={onChange}
            required
            // autoComplete='off'
          />
          <label htmlFor='html'>{t('formLName')}</label>
          <input
            type='text'
            className=''
            id='lName'
            name='lName'
            value={lName}
            onChange={onChange}
            required
            // autoComplete='off'
          />
          <label htmlFor='html'>{t('formEmail')}</label>
          <input
            type='email'
            className=''
            id='email'
            name='email'
            value={email}
            onChange={onChange}
            required
            // autoComplete='off'
          />
          <label htmlFor='html'>{t('formMessage')}</label>
          <input
            type='text'
            className=''
            id='message'
            name='message'
            value={message}
            onChange={onChange}
            required
            // autoComplete='off'
          />

          <button
            type='submit'
            className='button'
            // disabled={!!(!validPassword || !passwordMatch)}
          >
            Make my mobile buzz!
          </button>
        </form>
      </div>
    </section>
  );
}

export default Connect;
