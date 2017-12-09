'use strict';

module.exports = () => {
  return [
 
   { path: '/{param*}', method: 'GET', handler: {
        directory: {
          path: 'public',
          index: true
        }
      }
    }

  ]
};
