import React from 'react';

const StickyPageTags = () => {
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // };

  return (
    <div className='sticky-phone-nav'>
      <a href="tel:805-814-2049" id="sticky-page-phone">
        <i className="fa fa-phone" />
      </a>
      <a href="/request-a-quote" id="sticky-page-quote">
        <i className="fa fa-comment-o" />
      </a>
    </div>
  );
};

export default StickyPageTags;
