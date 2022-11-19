import { useState, useEffect } from "react";

export function useRepositories(query) {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/search/repositories?q=${query}`)
      .then((repos) => repos.json())
      .then((response) => {
        setRepos(response.items);
      })
      .catch(() => setError("Error ocurred"));
  }, [query]);

  return { repos, error };
}
