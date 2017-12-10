'use strict';

module.exports = () => {
  return [

   // directory path for web pages (requires inert)
   { path: '/', method: 'GET', handler: {
        directory: {
          path: 'public',
          index: true
        }
      }
    }

  ]
};
