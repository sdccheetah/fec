import React from 'react';

const SocialMedia = () => {
  return (
    <div className="social-share">
      <div className="upper-button">
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-size="large" data-show-count="false">
          <i></i>
          <span className="label" id="l">Tweet</span>
        </a>
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </div>
    </div>
  )
}

export default SocialMedia;