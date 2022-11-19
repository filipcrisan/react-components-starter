import {useParams} from "react-router-dom";
import Header from "../header";
import {useGet} from "../../hooks/useGet.js";
import {getRepoDetails} from "../../services/repo-service.jsx";

export function RepoDetails() {
    const {owner, name} = useParams();
    const {repo, error, isLoading} = useGet(() => getRepoDetails(owner, name));

    if (error || !repo) {
        return <span>{error}</span>;
    }

    if (isLoading) {
        return <span>Loading...</span>
    }

    return (
        <>
            <Header/>
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
