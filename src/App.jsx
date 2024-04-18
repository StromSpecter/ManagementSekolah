import { Route, Routes } from "react-router-dom"
import Admin from "./layout/Admin"
import Dashboard from "./pages/Dashboard"
import Students from "./pages/Students"
import Teachers from "./pages/Teachers"
import Login from "./pages/Login"
import Register from "./pages/Register"

const App = () => {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        {/* Admin Routes */}
        <Route path="/" Component={Admin}>
          <Route index Component={Dashboard} />
          <Route path="/students" Component={Students} />
          <Route path="/teachers" Component={Teachers} />
        </Route>
      </Routes>
    </div>
  )
}

export default App