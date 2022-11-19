import RepoCard from "../repo-card";

function RepoCardList({ repos }) {
  return (
    <ul className="repo-cards">
      {repos.map((repo) => (
        <RepoCard data={repo} />
      ))}
    </ul>
  );
}

export default RepoCardList;
