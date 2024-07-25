// src/components/FAQ.jsx
// Remove the duplicate declaration of FAQComponent
const FAQComponent = () => {
  return (
    <div>
      <h1>FAQ</h1>
      <div className='accordion' id='faqAccordion'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingOne'>
            <button
              className='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseOne'
              aria-expanded='true'
              aria-controls='collapseOne'
            >
              What is Judy&apos;s Art Store?
            </button>
          </h2>
          <div
            id='collapseOne'
            className='accordion-collapse collapse show'
            aria-labelledby='headingOne'
            data-bs-parent='#faqAccordion'
          >
            <div className='accordion-body'>
              Judy&apos;s Art Store is an online platform where you can buy
              unique handmade products.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingTwo'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'
            >
              How can I contact support?
            </button>
          </h2>
          <div
            id='collapseTwo'
            className='accordion-collapse collapse'
            aria-labelledby='headingTwo'
            data-bs-parent='#faqAccordion'
          >
            <div className='accordion-body'>
              You can contact us through the Let&apos;s Talk page or send an
              email to support@judysartstore.com.
            </div>
          </div>
        </div>
        {/* <!-- Add more FAQs as needed --> */}
      </div>
    </div>
  );
};

export default FAQComponent;
