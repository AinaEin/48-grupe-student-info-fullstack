import { useState } from "react";

function App() {
  const [answer, setAnswer] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:4821/api/student")
      .then((res) => res.json())
      .then((data) => setAnswer(data.students))
      .catch((e) => console.error(e));
  }

  return (
    <>
      <header className="container">HEADER</header>
      <main className="container">
        <form onSubmit={handleFormSubmit}>
          <button>Next student</button>
        </form>
        <div className="result">Result: {answer}</div>
      </main>
      <footer className="container">FOOTER</footer>
    </>
  );
}

export default App;
