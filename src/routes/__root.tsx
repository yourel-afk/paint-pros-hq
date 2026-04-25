import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { localBusinessSchema, servicesCatalogueSchema } from "@/lib/schema";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Painter Melbourne | High-End Residential Master Painters" },
      { name: "description", content: "residential master painters" },
      { name: "author", content: "Painter Melbourne" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#131313" },
      { property: "og:site_name", content: "Painter Melbourne" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_AU" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Painter Melbourne | High-End Residential Master Painters" },
      { name: "twitter:title", content: "Painter Melbourne | High-End Residential Master Painters" },
      { property: "og:description", content: "residential master painters" },
      { name: "twitter:description", content: "residential master painters" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a1ef80ec-b660-4d39-a72c-74b14c8610b4/id-preview-58ea08ee--5864e02b-17ac-4e12-9651-8000d74dec38.lovable.app-1777084528883.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a1ef80ec-b660-4d39-a72c-74b14c8610b4/id-preview-58ea08ee--5864e02b-17ac-4e12-9651-8000d74dec38.lovable.app-1777084528883.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessSchema()),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(servicesCatalogueSchema()),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
