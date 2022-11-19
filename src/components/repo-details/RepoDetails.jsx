import { useParams } from "react-router-dom";
import { useRepo } from "../../hooks/useRepo";
import Header from "../header";

export function RepoDetails() {
  const { owner, name } = useParams();
  const { repo, error } = useRepo(owner, name);

  if (error || !repo) {
    return <span>{error}</span>;
  }

  return (
    <>
      <Header />
      <main>
        <span className="title">{repo.name}</span>
        <section className="footer">
          <div>Id: {repo?.id}</div>
          <div>Open issues count: {repo?.open_issues_count}</div>
        </section>
      </main>
    </>
  );
}

export default RepoDetails;
