import "./App.css";
import Header from "./components/header";
import Search from "./components/search";
import RepoCardList from "./components/repo-card-list";
import { useEffect, useState } from "react";
import { getMostPopularRepos } from "./services/repo-service";

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getMostPopularRepos().then((repos) => {
      setRepos(repos.items);
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Search />
        <RepoCardList repos={repos} />
      </main>
    </>
  );
}

export default App;
