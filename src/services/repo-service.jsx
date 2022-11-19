export function getRepos(query) {
  return fetch(`https://api.github.com/search/repositories?q=${query}`).then(
    (repos) => repos.json()
  );
}
