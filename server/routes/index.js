'use strict';

module.exports = [


   // directory path for web pages (requires inert)
   {
     path: '/{param*}',
     method: 'GET',
     handler: {
        directory: {
          path: 'public',
          index: true
        }
      }
   }

]
