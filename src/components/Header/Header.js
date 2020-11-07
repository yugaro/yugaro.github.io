import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='header-logo'>
          <a href = "https://www.yahoo.co.jp/" className="btn btn-head"> < img src = 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/character_logo.svg'/></a>
        </div>
        <div className='header-right'>
          <a href = "https://www.yahoo.co.jp/" className = "btn btn-head2"> レッスン</a>
          <a href = "https://www.yahoo.co.jp/" className = "btn btn-head2" > 新規登録</a>
          <a href = "https://www.yahoo.co.jp/" className = "btn btn-head2" > ログイン</a>
        </div>
      </div>
    );
  }
}

export default Header;
