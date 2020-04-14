// filename : arcapi/_arcapi_rank_world.js
// author   : CirnoBakaBOT
// date     : 04/13/2020

const TAG = '_arcapi_rank_world.js';

const arcfetch = require('../corefunc/arcfetch');
const ArcAPIRequest = arcfetch.ArcAPIRequest;

module.exports = (account, songid, difficulty, start = 0, limit = 10) => {
  return new Promise((reslove, reject) => {

    // construct remote request
    const _remote_request =
      new ArcAPIRequest('GET', 'score/song?' +
        new URLSearchParams({
          'song_id': songid,
          'difficulty': difficulty,
          'start': start,
          'limit': limit
        }), {
        usertoken: account.token
      });

    // send request
    arcfetch(_remote_request)
      .then((root) => { return reslove(root.value); })
      .catch((e) => { return reject(e); })
  });
}