import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppLayout from "./ui/AppLayout.tsx";
import Chat from "./pages/Chat.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Chat />} />
          </Route>
          {/*<Route path='/login' element={<Login />} />*/}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
