var React = require('react');
var LegacyComponent = require('./legacyComponent');

var options = {
  title: 'Show Text',
  header: 'learn react',
  description: 'how i learned react in 0 days how i learned react in 0 days how i learned react in 0 days how i learned react in 0 days how i learned react in 0 days how i learned react in 0 days how i learned react in 0 days how i learned react in 0 days',
  imageUrl: 'https://pbs.twimg.com/profile_images/542406415415914497/I5xt0fLX.png'
};

// React, please render this class
var element = React.createElement(LegacyComponent, options);

// React, after you render this class, please place it in my body tag
React.render(element, document.querySelector('.container'));