export const getRepos = (query) => {
    return fetch(`https://api.github.com/search/repositories?q=${query}`)
        .then((res) => res.json())
        .then((res) => res.items);
};

export const getRepoDetails = (owner, repo) => {
    return fetch(`https://api.github.com/repos/${owner}/${repo}`)
        .then((res) => res.json());
}