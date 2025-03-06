import Header from "./components/layout/Header";
import ArticlesList from "./components/article/ArticlesList";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ArticlesList apiUrl={""} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
