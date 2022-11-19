import "./App.css";
import Header from "./components/header";
import Search from "./components/search";
import RepoCardList from "./components/repo-card-list";
import { useRepositories } from "./hooks/useRepositories";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("stars:>10000");
  const { repos, error } = useRepositories(query);

  function renderList() {
    if (error) {
      return <span>{error}</span>;
    }

    return repos?.length === 0 ? (
      <span>Loading...</span>
    ) : (
      <RepoCardList repos={repos} />
    );
  }

  return (
    <>
      <Header />
      <main>
        <Search setQuery={setQuery} />
        {renderList()}
      </main>
    </>
  );
}

export default App;
