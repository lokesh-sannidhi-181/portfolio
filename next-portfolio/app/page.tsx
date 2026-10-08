"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
  }, []);

  return (
    <main className="portfolio-frame">
      <iframe
        title="Lokesh Sannidhi portfolio"
        src="/Portfolio.html"
        className="portfolio-iframe"
      />
    </main>
  );
}
