import RepoCard from "../repo-card";

function RepoCardList({ repos }) {
  if (repos.length == 0) {
    return <div>No repos available.</div>;
  }

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
