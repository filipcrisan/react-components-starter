export function getMostPopularRepos() {
  return fetch('https://api.github.com/search/repositories?q=stars:>10000')
    .then(repos => repos.json());
}