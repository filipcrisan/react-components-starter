import RepoCard from "../repo-card";

function RepoCardList({ repos }) {
  return (
    <ul className="repo-cards">
      {repos.map((repo) => (
        <RepoCard
          title={repo.title}
          description={repo.description}
          stars={repo.stars}
          forks={repo.forks}
        />
      ))}
    </ul>
  );
}

export default RepoCardList;
