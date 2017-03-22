'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax('https://api.github.com/users/mofo37/repos', {
      method:'GET',
    }).then((res) => {
      var filteredRepos = res.filter(r => r.fork === false);
      repos.all = filteredRepos;
      callback();
    }) .catch((err) => {console.error})
  };

  


    // Done/TODO: How would you like to fetch your repos? Don't forget to call the callback.


  // REVIEW: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
