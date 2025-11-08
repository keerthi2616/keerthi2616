import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  const [user, setUser] = useState(null);

  return (
    <div className="bg-white shadow-lg p-6 rounded-2xl w-96 text-center">
      {!user ? (
        <>
          <h2 className="text-xl font-bold mb-4">Login with Google</h2>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
             const decoded = jwtDecode(credentialResponse.credential);

              setUser(decoded);
              console.log("Decoded User Info:", decoded);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </>
      ) : (
        <div>
          <h2 className="text-xl font-bold">Welcome {user.name}</h2>
          <img
            src={user.picture}
            alt="profile"
            className="w-20 h-20 rounded-full mx-auto mt-2"
          />
          <p className="mt-2 text-gray-700">{user.email}</p>
          <button
            onClick={() => setUser(null)}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}