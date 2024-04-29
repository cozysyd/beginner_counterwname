import { useState } from "react";

function App() {
  const [name, setName] = useState("World");
  const [age, setAge] = useState(0);

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Age: {age}</h2>
      <button onClick={() => setAge((prevAge) => prevAge + 1)}>+</button>
      <button onClick={() => setAge((prevAge) => prevAge - 1)}>-</button>
    </div>
  );
}

export default App;
