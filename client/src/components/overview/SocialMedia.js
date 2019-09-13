import React from 'react';

const SocialMedia = () => {
  return (
    <div className="social-share">
      <div className="upper-button">
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-size="large" data-show-count="false">
          <i></i>
          <span className="label" id="l">Tweet</span>
        </a>
      </div>
      <div className="fb-share-button" 
        data-href="https://www.your-domain.com/your-page.html" 
        data-layout="button_count">
      </div>
      <div className="Pin-button">
      <a data-pin-do="buttonPin" data-pin-count="above" href="https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.flickr.com%2Fphotos%2Fkentbrew%2F6851755809%2F&media=https%3A%2F%2Ffarm8.staticflickr.com%2F7027%2F6851755809_df5b2051c9_z.jpg&description=Next%20stop%3A%20Pinterest"></a>
      </div>

    </div>
  )
}

export default SocialMedia;