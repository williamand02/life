const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');



const { host, port, user, pass } = require('../config/mail.json')
const transport = nodemailer.createTransport({
  host,
  port,
  auth: {
    user,
    pass
  }
});

// transport.use('compile',hbs({
//     viewEngine: 'handlebars',
//     viewPath: path.resolve('./src/resource/mail/'),
//     extName: '.html',
// }))

//   transport.use('compile', hbs({
//     viewEngine: 'handlebars',
//     viewPath: path.resolve('./resources/mail/'),
//     extName: '.html'
// }))



const handlebarOptions = {
  viewEngine: {
    extName: '.html',
    partialsDir: path.resolve('./src/resources/mail/'),
    layoutsDir: path.resolve('./src/resources/mail/'),
    defaultLayout: '',
  },
  viewPath: path.resolve('./src/resources/mail/'),
  extName: '.html',
}
transport.use('compile', hbs(handlebarOptions))




module.exports = transport;

  // transport.use('compile', hbs({
  //   viewEngine: {
  //     extName: '.html',
  //     partialsDir: path.resolve('./src/resource/mail/'),
  //     layoutsDir: path.resolve('./src/resource/mail/'),
  //     defaultLayout: 'email.body.hbs',
  //   },
  //   viewPath,
  //   extName: '.html'
  // }));