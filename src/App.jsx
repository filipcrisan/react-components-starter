import "./App.css";
import Header from "./components/header";
import Search from "./components/search";
import RepoCardList from "./components/repo-card-list";

function App() {
  const repos = [
    {
      title: "repo 1",
      description: "description 1",
      stars: "100",
      forks: "200",
    },
    {
      title: "repo 2",
      description: "description 2",
      stars: "300",
      forks: "400",
    },
    {
      title: "repo 3",
      description: "description 3",
      stars: "500",
      forks: "600",
    },
  ];

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
