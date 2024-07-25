// src/components/Contact.jsx
const Contact = () => {
  return (
    <div>
      <h1>Let&apos;s Talk</h1>
      <p>
        If you have any questions or inquiries, please feel free to reach out!
      </p>
      <form>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input type='text' className='form-control' id='name' />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-control' id='email' />
        </div>
        <div className='mb-3'>
          <label htmlFor='message' className='form-label'>
            Message
          </label>
          <textarea className='form-control' id='message' rows='3'></textarea>
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
