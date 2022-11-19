function RepoCard({ name, description, stars, forks }) {
  return (
    <li className="repo-card">
      <span className="title">{name}</span>
      <span className="description">{description}</span>
      <section className="footer">
        <div>Star gazers count: {stars}</div>
        <div>Forks: {forks}</div>
      </section>
    </li>
  );
}

export default RepoCard;
