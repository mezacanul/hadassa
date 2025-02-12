import { Outlet, Scripts, ScrollRestoration  } from "@remix-run/react";
import { Provider } from "./components/ui/provider";

export const meta = () => {
  return {
    charset: "utf-8",
    title: "My Remix App",
    viewport: "width=device-width,initial-scale=1",
  }
}


export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Provider>
          <Outlet />
        </Provider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
