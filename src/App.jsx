import "./App.css";
import Header from "./components/header";
import Search from "./components/search";
import RepoCardList from "./components/repo-card-list";
import {useState} from "react";
import {getRepos} from "./services/repo-service.jsx";
import {useGet} from "./hooks/useGet.js";

function App() {
    const [query, setQuery] = useState("stars:>10000");
    const {repos, error, isLoading} = useGet(() => getRepos(query), [query]);

    function renderList() {
        if (error) {
            return <span>{error}</span>;
        }

        if (repos?.length === 0 || isLoading) {
            return <span>Loading...</span>
        }

        return <RepoCardList repos={repos}/>;
    }

    return (
        <>
            <Header/>
            <main>
                <Search setQuery={setQuery}/>
                {renderList()}
            </main>
        </>
    );
}

export default App;
