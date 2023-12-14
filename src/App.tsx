import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppLayout from "./ui/AppLayout.tsx";
import Chat from "./pages/Chat.tsx";
import {QueryClient, QueryClientProvider} from "react-query";
import {GlobalStyles} from "./styles/GlobalStyles.ts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000
    },
  },
});


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
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
