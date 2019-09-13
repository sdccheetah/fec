import React from 'react';

const SocialMedia = () => {
  return (
    <div className="social-share">
      <div className="upper-button">
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-size="large" data-show-count="false">
        </a>
      </div>
      <div className="fb-share-button" 
        data-href="https://www.your-domain.com/your-page.html" 
        data-layout="button_count">
      </div>
      <div className="Pin-button">
        <a data-pin-do="buttonBookmark" href="https://www.pinterest.com/pin/create/button/"></a>
      </div>

    </div>
  )
}

export default SocialMedia;