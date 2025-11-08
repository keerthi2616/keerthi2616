import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
      alert("Login successful!");

      // Role-based redirection
      if (user.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/products"); // New Products page for shopping
      }
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">Sign In</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-96">
        <input type="email" placeholder="Email"
          value={email} onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 mb-3 rounded" required />

        <input type="password" placeholder="Password"
          value={password} onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 mb-3 rounded" required />

        <button type="submit" className="bg-green-500 text-white px-4 py-2 w-full rounded hover:bg-green-600">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;