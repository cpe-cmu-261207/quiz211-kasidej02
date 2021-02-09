import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(620610776);
  const persons = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    },
    {
      name: "Kasidej Kammool 620610776",
      gender: "male",
      age: "19"
    }
  ];
  return (
    <div class="ml-2">
      <h3 class="title is-3">Person List</h3>

      {/* Convert me to a component! */}

      {persons.map((person) => (
        <table class="table is-bordered mb-3">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
            </tr>
            <tr>
              <td>{person.name}</td>
              <td>{person.gender}</td>
              <td>{person.age}</td>
            </tr>
          </tbody>
        </table>
      ))}

      {/* Code me please! */}
      <h3 class="title is-3">ID Counter</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(620610776)}>reset</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;
