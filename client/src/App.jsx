import { useState } from "react";

const maxStudents = 3;

function App() {
  const [answer, setAnswer] = useState([]);
  const [id, setId] = useState(null);

  function handlerOnChange(e) {
    e.preventDefault();

    fetch(`http://localhost:4821/api/student/${id ? id : 0}`)
      .then((res) => res.json())
      .then((data) => {
        setAnswer(data);
        setId(id < maxStudents - 1 ? id + 1 : 0);
      })
      .catch((e) => console.error(e));
  }

  return (
    <>
      <header className="container">HEADER</header>
      <main className="container">
        <form>
          <button onClick={handlerOnChange}>Next student</button>
        </form>
        <div className="result">{answer.name}</div>
        <div className="result">{answer.age}</div>
        <ul className="marks">
          {answer.marks?.map((mark, index) => {
            return <li key={index}>{mark},</li>;
          })}
        </ul>
      </main>
      <footer className="container">FOOTER</footer>
    </>
  );
}

export default App;
