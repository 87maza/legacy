var React = require('react');
var LegacyComponent = require('./legacyComponent');

var options = {
  title: 'Show/Hide Text',
  header: 'Learn React with the Legacy Code Challenge!',
  description: 'Legacy Code Challenge! Completed in 3 days, my 2nd react app ever.  I have much to learn about Node+React, I couldnt get the server up =(',
  imageUrl: 'https://pbs.twimg.com/profile_images/542406415415914497/I5xt0fLX.png'
};

// React, please render this class
var element = React.createElement(LegacyComponent, options);

// React, after you render this class, please place it in my body tag
React.render(element, document.querySelector('.container-fluid'));