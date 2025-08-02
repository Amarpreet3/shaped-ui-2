import React, { useEffect, useState } from "react";
import "./App.css";

interface PostMetadata {
  title?: string;
  by_user?: string;
  url?: string;
  score?: number;
}

interface ApiResponse {
  ids: string[];
  scores: number[];
  metadata: PostMetadata[];
}

function getDomain(url?: string) {
  if (!url) return "";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function App() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("/api/rank")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="hn-root">
      <h1 className="hn-title">For You</h1>
      {loading && <div className="hn-loading">Loading...</div>}
      {error && <div className="hn-error">Error: {error}</div>}
      {!loading && !error && data && data.ids && data.ids.length > 0 && (
        <ol className="hn-list">
          {data.ids.map((id, i) => {
            const meta = data.metadata[i] || {};
            return (
              <li key={id} className="hn-item">
                <span className="hn-rank">{i + 1}.</span>
                <a
                  href={meta.url || "#"}
                  className="hn-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {meta.title || "Untitled"}
                </a>
                {meta.url && (
                  <span className="hn-domain"> ({getDomain(meta.url)})</span>
                )}
                <div className="hn-meta">
                  <span className="hn-score">{data.scores[i] !== undefined ? `${data.scores[i].toFixed(2)} points` : ""}</span>
                  {meta.by_user && <span className="hn-by"> by {meta.by_user}</span>}
                </div>
              </li>
            );
          })}
        </ol>
      )}
      {!loading && !error && data && (!data.ids || data.ids.length === 0) && (
        <div className="hn-empty">No recommendations found.</div>
      )}
    </div>
  );
}

export default App;
