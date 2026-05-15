import { useState, useEffect } from "react";
const GH_USERNAME = import.meta.env.VITE_GH_USERNAME
const CDN_URL =
  `https://raw.githubusercontent.com/${GH_USERNAME}/site-config/main/getpaydex.json`;

export function useContactConfig() {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    fetch(CDN_URL, {cache: "no-store"})
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch contact config");
        return res.json();
      })
      .then(json => { setData(json); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); console.log(err.message) });
  }, []);

  return { data, loading, error };
}