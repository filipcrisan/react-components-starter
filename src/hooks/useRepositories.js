import { getRepos } from "../services/repo-service";
import { useState, useEffect } from "react";

function useRepositories(query) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getRepos(query).then((response) => {
      setRepos(response.items);
    });
  }, [query]);

  return repos;
}

export default useRepositories;
