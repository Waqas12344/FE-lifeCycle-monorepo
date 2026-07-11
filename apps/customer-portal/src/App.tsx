import "./App.css";
import { Button } from "@repo/ui";

function App() {
  return (
    <>
      <h1> Complete life cycle </h1>
      <Button
        onClick={() => {
          alert("Button clicked!");
        }}
      />
    </>
  );
}

export default App;
