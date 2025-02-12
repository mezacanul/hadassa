import {
  Outlet,
} from "@remix-run/react";
import { Provider } from "./components/ui/provider"

export default function App() {
  return (
    <Provider>
      <Outlet />
    </Provider>
  ) 
}
