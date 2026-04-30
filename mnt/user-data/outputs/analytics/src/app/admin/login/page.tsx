"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.push("/admin");
      } else {
        setError("Mot de passe incorrect");
      }
    } catch {
      setError("Erreur de connexion");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Space Mono', monospace",
    }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');`}</style>
      <div style={{
        border: "1px solid #00ff9d30",
        background: "#0d0d15",
        padding: "48px",
        width: "100%",
        maxWidth: "400px",
        boxShadow: "0 0 40px #00ff9d10",
      }}>
        <div style={{ color: "#00ff9d", fontSize: "11px", letterSpacing: "4px", marginBottom: "8px" }}>
          SYSTÈME SÉCURISÉ
        </div>
        <h1 style={{ color: "#fff", fontSize: "24px", margin: "0 0 32px", fontWeight: 700 }}>
          Admin Access
        </h1>
        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", color: "#666", fontSize: "11px", letterSpacing: "2px", marginBottom: "8px" }}>
            MOT DE PASSE
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            style={{
              width: "100%",
              background: "#0a0a0f",
              border: "1px solid #333",
              color: "#00ff9d",
              padding: "12px 16px",
              fontSize: "14px",
              fontFamily: "inherit",
              outline: "none",
              boxSizing: "border-box",
            }}
            placeholder="••••••••"
            autoFocus
          />
        </div>
        {error && (
          <div style={{ color: "#ff4444", fontSize: "12px", marginBottom: "16px" }}>
            ⚠ {error}
          </div>
        )}
        <button
          onClick={handleLogin}
          disabled={loading}
          style={{
            width: "100%",
            background: "#00ff9d",
            color: "#0a0a0f",
            border: "none",
            padding: "14px",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 700,
            letterSpacing: "3px",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.6 : 1,
          }}
        >
          {loading ? "CONNEXION..." : "ACCÉDER"}
        </button>
      </div>
    </div>
  );
}
