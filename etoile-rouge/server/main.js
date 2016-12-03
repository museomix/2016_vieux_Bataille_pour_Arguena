import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';


Meteor.startup(() => {
  WebApp.rawConnectHandlers.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', [
      'GET, POST, PUT, DELETE, OPTIONS'
    ].join(', '));

    res.setHeader('Access-Control-Allow-Headers', [
      'Accept',
      'Content-Type',
      'Origin',
      'X-Requested-With'
    ].join(', '));
    if (req.method === 'OPTIONS') {
      res.writeHead(200);
      res.end();
      return;
    }
    return next();
  });
});
