"use client";

import { useEffect, useState } from "react";
import Preloader from "./preloader";

export default function SiteLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleComplete = () => {
    setLoading(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      {children}

      {loading && (
        <Preloader onComplete={handleComplete} />
      )}
    </>
  );
}