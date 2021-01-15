import mail from './mailer';
import getJsonSync from './getJsonSync';
import getBody from './getBody';

const config = getJsonSync('./config.json');
const messageData = getJsonSync('./message.json');

const html = getBody(`../${messageData.html}`);

const message = {
  subject: messageData.subject,
  from: messageData.from,
  to:  messageData.to,
  html,
}

mail({
  config,
  message
}).catch(console.error);