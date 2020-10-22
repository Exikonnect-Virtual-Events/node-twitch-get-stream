var twitchStreams = require('.');
const prompt = require('prompt');

prompt.start();
console.log("Enter the name of twitch Channel: ")
prompt.get(['channelName'], function (err, result) {
    if (err) { return onErr(err); }
    twitchStreams.get(result.channelName)
        .then(function (streams) {
            for (var stream of streams) {
                if (stream.resolution === '640x360' && stream.quality === '360p30') {
                    console.log('m3u8 Link: ' + stream.url);
                }
            }
        })
        .catch(function (error) {
            if (error)
                return console.log('Error caught:', error);
        });
});

function onErr(err) {
    console.log(err);
    return 1;
}
