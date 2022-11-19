import { Link } from "react-router-dom";

function RepoCard({ data }) {
  return (
    <li className="repo-card" key={data.id}>
      <Link to={`/${data.owner.login}/${data.name}`}>
        <span className="title">{data.name}</span>
        <span className="description">{data.description}</span>
        <section className="footer">
          <div>Star gazers count: {data.stars}</div>
          <div>Forks: {data.forks}</div>
        </section>
      </Link>
    </li>
  );
}

export default RepoCard;
