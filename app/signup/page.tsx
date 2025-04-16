"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import crypto from "crypto"; // Importa a biblioteca crypto

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    usertag: "",
    telefone: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Gera o hash MD5 da senha
    const hashedPassword = crypto.createHash("md5").update(formData.password).digest("hex");

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: hashedPassword, // Envia a senha como hash MD5
          usertag: formData.usertag,
          telefone: formData.telefone,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to create user");
      }

      setSuccess(true);
      setTimeout(() => router.push("/signin"), 2000); // Redirect to Sign In page after success
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium">
              Nome
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Choose a username"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Create a password"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium">
              Confirme a Senha
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm your password"
              required
            />
          </div>
          <div>
            <label htmlFor="usertag" className="block text-sm font-medium">
              User Tag (Optional)
            </label>
            <input
              type="text"
              id="usertag"
              value={formData.usertag}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter a user tag"
            />
          </div>
          <div>
            <label htmlFor="telefone" className="block text-sm font-medium">
              Phone Number (Optional)
            </label>
            <input
              type="text"
              id="telefone"
              value={formData.telefone}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        {error && <p className="text-sm text-red-500 text-center">{error}</p>}
        {success && (
          <p className="text-sm text-green-500 text-center">
            Account created successfully! Redirecting...
          </p>
        )}
        <p className="text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link href="/signin" className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}