import "./App.css";
import { useToast } from "./contexts/toast.context";

function App() {
  const toast = useToast();
  return (
    <main>
      <h1>토스트</h1>

      <button onClick={() => toast({ title: "hello" })}>토스트 띄우기</button>
    </main>
  );
}

export default App;
