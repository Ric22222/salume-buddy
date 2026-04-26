import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

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
      { title: "Macelleria Salumée — Bottega artigiana a Claro" },
      {
        name: "description",
        content:
          "Macelleria-Paninoteca a Claro, Ticino. Carni selezionate, salumi della casa e panini d'autore.",
      },
      { name: "author", content: "Macelleria Salumée" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Macelleria Salumée — Bottega artigiana a Claro" },
      { name: "twitter:title", content: "Macelleria Salumée — Bottega artigiana a Claro" },
      { name: "description", content: "Salumi & Panini Hub is a website for a butcher shop and sandwich bar." },
      { property: "og:description", content: "Salumi & Panini Hub is a website for a butcher shop and sandwich bar." },
      { name: "twitter:description", content: "Salumi & Panini Hub is a website for a butcher shop and sandwich bar." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/aacb1128-6616-4d73-9f62-1bfbacb3130b/id-preview-170592c1--9a629a45-505e-4f68-8fc3-7a1eb2862bd2.lovable.app-1777225858110.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/aacb1128-6616-4d73-9f62-1bfbacb3130b/id-preview-170592c1--9a629a45-505e-4f68-8fc3-7a1eb2862bd2.lovable.app-1777225858110.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
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
