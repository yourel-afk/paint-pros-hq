import { Link } from "@tanstack/react-router";

export interface Crumb {
  label: string;
  to?: string;
  params?: Record<string, string>;
}

/**
 * Visual breadcrumb trail. Schema is emitted separately via the route's
 * head() using `breadcrumbSchema()` from src/lib/schema.ts so the JSON-LD
 * is server-rendered alongside the page metadata.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="label-caps text-foreground/55">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((c, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${c.label}-${i}`} className="flex items-center gap-2">
              {c.to && !isLast ? (
                c.params ? (
                  <Link
                    to={c.to as "/locations/$region"}
                    params={c.params as { region: string }}
                    className="hover:text-foreground transition-colors"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <Link to={c.to} className="hover:text-foreground transition-colors">
                    {c.label}
                  </Link>
                )
              ) : (
                <span aria-current={isLast ? "page" : undefined} className="text-foreground/85">
                  {c.label}
                </span>
              )}
              {!isLast && <span className="text-foreground/30">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}