import React from 'react';

import {
    TwitterIcon, TwitterShareButton,
    LineIcon, LineShareButton,
    FacebookIcon, FacebookShareButton,
    InstapaperIcon, InstapaperShareButton,
}
 from "react-share";


function SocialShare() {
  const url = "https://clever-life-lab.com";
  const title = "英英辞書クイズ";

  const size=40;
  const isRound = true;

  return (
  <div className='iconsContainer'>
      <div className="iconContainer">
    <TwitterShareButton url={url} title={title}>
    <TwitterIcon size={size} round={isRound} />
  </TwitterShareButton>
      </div>

  <div className="iconContainer">
    <FacebookShareButton url={url} title={title}>
    <FacebookIcon size={size} round={isRound} />
   </FacebookShareButton>
</div>

   <div className="iconContainer">
    <LineShareButton url={url} title={title}>
    <LineIcon size={size} round={isRound} />
   </LineShareButton>
</div>

{/* <div className="iconContainer">
    <InstapaperShareButton url={url} title={title}>
    <InstapaperIcon size={size} round={isRound} />
  </InstapaperShareButton>
</div> */}

  </div>
  );
}

export default SocialShare;
