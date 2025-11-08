import { BrowserRouter, Routes, Route } from "react-router-dom";

// Example component
function HomePage() {
  return <h1>Welcome to Home Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;