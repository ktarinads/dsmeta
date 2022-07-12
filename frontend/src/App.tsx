import Header from "./components/Header";
import SalesCard from "./components/SalesCard";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            {/* aqui vai vir o componente do card maior da página após o header */}
            <SalesCard />

          </div>
        </section>
      </main>

    </>
  )
}

export default App;