import { Routes, Route } from "react-router-dom";
import PaginaInvitacion from "./pages/PaginaInvitacion";

function App() {

  return (
    <Routes>
      <Route
        path="/:nombreInvitado"
        element={<PaginaInvitacion />}
      />
    </Routes>
  );

}

export default App;