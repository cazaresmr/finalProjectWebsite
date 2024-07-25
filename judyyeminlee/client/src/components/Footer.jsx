// src/components/Footer.jsx

const Footer = () => {
  return (
    <footer className='bg-light text-center text-lg-start'>
      <div className='container p-4'>
        <div className='row'>
          <div className='col-lg-6 col-md-12 mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Judy&apos;s Art Store</h5>
            <p>© 2024 Judy&apos;s Art Store. All rights reserved.</p>
          </div>
          <div className='col-lg-6 col-md-12 mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Follow Us</h5>
            <a
              href='https://www.pinterest.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='me-3'
            >
              <i className='fab fa-pinterest fa-2x'></i>
            </a>
            <a
              href='https://www.instagram.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-instagram fa-2x'></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
