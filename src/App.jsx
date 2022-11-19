import "./App.css";
import Header from "./components/header";
import Search from "./components/search";
import RepoCardList from "./components/repo-card-list";
import useRepositories from "./hooks/useRepositories";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("stars:>10000");
  const repos = useRepositories(query);

  return (
    <>
      <Header />
      <main>
        <Search setQuery={setQuery} />
        {repos.length === 0 ? (
          <span>Loading...</span>
        ) : (
          <RepoCardList repos={repos} />
        )}
      </main>
    </>
  );
}

export default App;
