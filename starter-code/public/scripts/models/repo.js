'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax('https://api.github.com/users/neverssync/repos', {
      method: 'GET',
      headers: {
        Authorization: `token ${token}`
      }
    })
    .then((result) => {
      repos.all.map(function() {
        console.log(repos.all)
        return result;
      })
    .catch(err => console.error)
    // TODO: How would you like to fetch your repos? Don't forget to call the callback.
      callback();
    });
  }

  // REVIEW: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
