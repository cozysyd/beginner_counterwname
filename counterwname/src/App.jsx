import { useState } from "react";

function App() {
  const [name, setName] = useState("Name");
  const [age, setAge] = useState(0);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Age: {age}</p>
      <button onClick={() => setAge((prevAge) => prevAge + 1)}>+</button>
      <button onClick={() => setAge((prevAge) => prevAge - 1)}>-</button>

      <p>
        My name is {name} and I am {age} years old.
      </p>
    </div>
  );
}

export default App;
