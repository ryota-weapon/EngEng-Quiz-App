import React from 'react';

import SocialShare from './SocialShare';

function Footer() {
  return (
  <div id="footer">
    <p>他の人に紹介する↓</p>

    <SocialShare />
    
    <p>使用させていただいたアイコン</p>
      <a target="_blank" href="https://icons8.jp/icon/JzX2t6Cvzq1l/user">User</a> アイコン <a target="_blank" href="https://icons8.jp">アイコン8</a>
    <p>※英単語の意味は、WordNetから引用しています。</p>
    <p>※英単語の分類は、NGSLの単語の使用頻度を参考にしています。</p>
  </div>

  );
}

export default Footer;
