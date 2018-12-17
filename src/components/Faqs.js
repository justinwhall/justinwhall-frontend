import React from 'react';

const questions = [
  {
    question: 'How much do you cost?',
    answer: 'This depends on a number of factors. Specifically but not limited to, project size, my role in the project and whether there is ongoing work to be had. As a general rule, I charge 85/hour and don\'t take projects under 1k'
  },
  {
    question: 'Can your provide hosting?',
    answer: 'yes, absolutly. I have a lot of experience with WordPress Hosting and would be happy to provide a number of different options.'
  },
  {
    question: 'Do you only work with WordPress?',
    answer: 'No. While I do alot, I also have experience with Node, very much enjoy working with JavaScript especially GatsbyJS and NextJS.',
  },
  {
    question: 'Design? SEO? Paid Advertising?',
    answer: 'No. I am a Developer and It is my strong believe that one can not do many professions well. That being said, I\'ve very closely with some really amazing designers and feel as though attention to design and UX is a strong skill of mine',
  },
  {
    question: 'Can you give a fixed quote?',
    answer: 'Providing you provide proper project specs and designs (if applicable), I can provide an estimate for your project broken out by line item.',
  },
  {
    question: 'Where are you from?',
    answer: 'I grew up just North of Boston. I left for boarding school in \'96 and never moved back. I miss the seafood, Fall and Fenway Park. I don\'t miss the weather.',
  },
]

class FAQ extends React.Component {
  state = {
    open: false
  }

  toggleFAQ = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  render() {

    const {
      question,
      answer,
    } = this.props;

    return (
      <div onClick={this.toggleFAQ} className={`single-faq ${this.state.open && 'in'}`}>
        <h4 className="question">
          {question}
        </h4>
        <div className="answer">
          {answer}
        </div>
      </div>
    )
  }
}

const Faqs = () => (
  <div className="faqs p-top-bottom">
    <div className="container">
      <h2>Questions I Answer Frequently</h2>
      <div className="questions">
          {questions.map(question => <FAQ key={question.answer} {...question}/>
          )}
      </div>
    </div>
  </div>
);

export default Faqs;