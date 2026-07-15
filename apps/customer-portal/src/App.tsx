import "./App.css";
import { Button } from "@repo/ui";
import { formatCurrency } from "@repo/utils";
function App() {
  return (
    <>
      <h1> Complete life cycle </h1>
      <Button
        onClick={() => {
          alert(formatCurrency(1000));
        }}
      />
    </>
  );
}

export default App;
