import React from 'react';
import './ContactForm.css';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      email: '',
      hasEmailError: false,
      /* contentとhasContentErrorというstateを追加してください */
      content:'',
      hasContentError:false
    };
  }

  handleEmailChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === '';
    this.setState({
      email: inputValue,
      hasEmailError: isEmpty,
    });
  }

  /* handleContentChangeという名前のメソッドを定義してください */
  handleContentChange(event){
    const inputValue=event.target.value;
    const isEmpty = inputValue === '';
    this.setState({
      content:inputValue,
      hasContentError:isEmpty
    })
  }

  handleSubmit() {
    this.setState({isSubmitted: true});
  }

  render() {
    let emailErrorText;
    if (this.state.hasEmailError) {
      emailErrorText = (
        <p className='contact-message-error'>
          メールアドレスを入力してください
        </p>
      );
    }

    /* 変数contentErrorTextを定義してください */
    let contentErrorText;

    /* hasContentErrorを条件にしたif文を作成してください */
    if (this.state.hasContentError) {
      contentErrorText = (
        <p className='contact-message-error'>
          お問い合わせ内容を入力してください
        </p>
      );
    }

    let contactForm;
    if (this.state.isSubmitted) {
      contactForm = (
        <div className='contact-submit-message'>
          送信完了
        </div>
      );
    } else {
      contactForm = (
        <form onSubmit={() => {this.handleSubmit()}} >
          <p>e-mail adress</p>
          <input
            value={this.state.email}
            onChange={(event) => {this.handleEmailChange(event)}}
          />
          {emailErrorText}
          <p>contents</p>
          {/* stateのvalueの値と、onChangeイベントを追加してください */}
          <textarea
            value={this.state.content}
            onChange={(event) => {this.handleContentChange(event)}}
          />
          {/* contentErrorTextを表示してください */}
          {contentErrorText}
          <input
            type='submit'
            value='submit'
          />
        </form>
      );
    }

    return (
      <div className='contact-form'>
        {contactForm}
      </div>
    );
  }
}

export default ContactForm;
