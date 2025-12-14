import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { slugify } from "../../data/projects";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setComponent(null);
    setNotFound(false);

    // import all TSX files in this folder
    const modules = import.meta.glob<typeof import("./BlogTomasu")>("./*.tsx");

    // find a module whose filename slug matches the requested slug
    const matchKey = Object.keys(modules).find((k) => {
      const name = k.replace(/^\.\//, "").replace(/\.tsx$/, "");
      return slugify(name) === slug;
    });

    if (!matchKey) {
      setLoading(false);
      setNotFound(true);
      return;
    }

    // dynamic import
    (modules[matchKey] as () => Promise<{ default: React.ComponentType }>)()
      .then((m) => {
        setComponent(() => m.default || null);
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [slug]);

  if (!slug) return null;
  if (loading) return <div className="min-h-screen flex items-center justify-center text-neutral-100">Loading…</div>;
  if (notFound) return <Navigate to={`/projects/${slug}`} replace />;
  if (!Component) return null;

  return <Component />;
}
