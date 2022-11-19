import RepoCard from "../repo-card";

function RepoCardList({ repos }) {
  return (
    <ul className="repo-cards">
      {repos.map((repo) => (
        <RepoCard
          name={repo.name}
          description={repo.description}
          stars={repo.stargazers_count}
          forks={repo.forks_count}
        />
      ))}
    </ul>
  );
}

export default RepoCardList;
