import {createEventAdapter} from '@slack/events-api';

const port = Number(process.env.PORT) || 3000;
const slackSigningSecret = 'c4de58a11177e994f9467790ecabad2f';
const slackEvents = createEventAdapter(slackSigningSecret);

slackEvents.on('message', (event) => {
    console.log(`Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}`);
});

(async () => {
    await slackEvents.start(port);
    console.log(`Listening`);
})();
