/* eslint-disable no-console */
const nsfw = require('../src');

// TODO: change to your test folder path
const basePath = '/home/admin/retrox.jcy/cloud-ide/core';
let watcher;

async function start() {

  watcher = await nsfw(
    basePath,
    (events) => {
      console.error(events);
    },
    {
      errorCallback: (error) => {
        // see https://github.com/atom/github/issues/342
        // eslint-disable-next-line no-console
        console.warn(`Failed to watch "${basePath}":`, error);
      },
    },
  );

  console.log('before start');
  console.time();
  await watcher.start();
  console.timeEnd();
  console.log('after start');
}

start();
