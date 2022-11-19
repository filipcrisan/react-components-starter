import { useState, useEffect } from "react";

export function useRepo(owner, repoName) {
  const [repo, setRepo] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/repos/${owner}/${repoName}`)
      .then((repos) => repos.json())
      .then((response) => {
        setRepo(response);
      })
      .catch(() => setError("Error ocurred"));
  }, [owner, repoName]);

  return { repo, error };
}
