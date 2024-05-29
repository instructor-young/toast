import { useToast } from "./contexts/toast.context";

function App() {
  const toast = useToast();
  return (
    <main>
      <h1>토스트</h1>

      <button
        onClick={() =>
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
          })
        }
      >
        토스트 띄우기
      </button>
    </main>
  );
}

export default App;
