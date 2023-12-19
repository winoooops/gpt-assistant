import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppLayout from "./ui/AppLayout.tsx";
import Chat from "./pages/Chat.tsx";
import {QueryClientProvider} from "react-query";
import {GlobalStyles} from "./styles/GlobalStyles.ts";
import {ReactQueryDevtools} from "react-query/devtools";
import {queryClient} from "./services/supabase.service.ts";




function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <ReactQueryDevtools />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Chat />} />
          </Route>
          {/*<Route path='/login' element={<Login />} />*/}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
