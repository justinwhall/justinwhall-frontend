import React from 'react';

const Faqs = () => (
  <div className="faqs p-top-bottom">
    <div className="container">
      <h2>Questions I Answer Frequently</h2>
      <div className="row">
        <div className="column">
          <div className="single-faq">
            <h4 className="question">
                How much do you cost?
            </h4>
            <div className="answer">
              {`This depends on a number of factors. Specifically but not limited to, project size, my role in the project and whether there is ongoing work to be had. As a general rule, I charge 85/hour and don't take projects under 1k`}
            </div>
          </div>
          <div className="single-faq">
            <h4 className="question">
              Can you provide hosting for my website?
            </h4>
            <div className="answer">
              Yes. I have a lot of experince with WordPress Hosting and would glad to give you a piece of mind on the matter -- just ask. I provide a
              {' '}
              <a rel="noopener noreferrer" target="_blank" href="https://www.windsorup.com/wordpress-hosting/">number of different options.</a>
            </div>
          </div>
          <div className="single-faq">
            <h4 className="question">
                Do you only work with WordPress?
            </h4>
            <div className="answer">
                Not exclusivley. I have experince working with various PHP applications, JavaScript frameworks and NodeJS.
            </div>
          </div>
          <div className="single-faq">
            <h4 className="question">
                Design? SEO? Paid Advertising?
            </h4>
            <div className="answer">
                No. I am a Developer and It is my strong believe that one can not do many professions well. Of course, I've worked closely with people in these positions and under the principles of all three. I also write standards complaint SEO freindly code.
            </div>
          </div>
        </div>
        <div className="column">
          <div className="single-faq">
            <h4 className="question">
                Can you give a fixed quote?
            </h4>
            <div className="answer">
                Providing you provide proper project specs and designs (if applicable), I can provide an estimate for your project broken out by line item.
            </div>
          </div>
          <div className="single-faq">
            <h4 className="question">
                Will you teach me how to use WordPress?
            </h4>
            <div className="answer">
                If I build something for you, I will provide you with the proper documentation on how to use it. However, I do not provide education on how to use the native functionality of WordPress.
            </div>
          </div>
          <div className="single-faq">
            <h4 className="question">
                Will you teach me how to build a website?
            </h4>
            <div className="answer">
              {'No but there are many, many resources out there. Some '}
              <a rel="noopener noreferrer" target="_blank" href="https://www.codecademy.com/">free</a>
              {'and others '}
              <a rel="noopener noreferrer" target="_blank" href="https://www.eecs.mit.edu/">not so free.</a>
            </div>
          </div>
          <div className="single-faq">
            <h4 className="question">
                  Where are you from?
            </h4>
            <div className="answer">
              {`I grew up just North of Boston. I left for boarding school in '96 and never moved back. I miss the seafood, Fall and Fenway Park. I don't miss the weather.`}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Faqs;