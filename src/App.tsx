//Router dom
import { BrowserRouter } from "react-router-dom"

//Router
import { Router } from "./routes/routes"

//Context Provider
import { UserContextProvider } from "./context/UserContext"

export function App() {

  return (
    <>
      <BrowserRouter>
        <UserContextProvider>
          <Router />
        </UserContextProvider>
      </BrowserRouter>
    </>
  )
}

