const schedule = require('node-schedule');
const axios = require('axios'); // legacy way

const callUrl = async (url) => axios.get(url).then( (response) => console.log(response?.data?.data ?? ''));
const sendNext = async () => callUrl('https://sendgo-api.vercel.app/message/sendnext/oupuXQrm5Vc6u6qBSV2KWatY9UoLmSaj');

schedule.scheduleJob({ rule: '*/5 * * * * *' }, sendNext);
