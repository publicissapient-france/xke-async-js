const rp = require('request-promise');
const _ = require('lodash');
const BlueBird = require('bluebird');

function getList() {
  return rp('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
}

function getNews(newsId) {
  console.log(newsId);
  return rp(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`);
}

getList()
  //.then((topNews) => getNews(_.first(topNews)))
  .then(console.log)
  .done();