function RepoCard({ title, description, stars, forks }) {
  return (
    <li className="repo-card">
      <span className="title">{title}</span>
      <span className="description">{description}</span>
      <section className="footer">
        <div>Stars: {stars}</div>
        <div>Forks: {forks}</div>
      </section>
    </li>
  );
}

export default RepoCard;
