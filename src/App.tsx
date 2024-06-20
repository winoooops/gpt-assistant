import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AppLayout from "./ui/AppLayout.tsx";
import ChatPage from "./pages/ChatPage.tsx";
import {QueryClientProvider} from "react-query";
import {GlobalStyles} from "./styles/GlobalStyles.ts";
import {ReactQueryDevtools} from "react-query/devtools";
import {queryClient} from "./services/supabase.service.ts";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CryptoPage from "./pages/CryptoPage.tsx";



function App() {



  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <ReactQueryDevtools />
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="chat" />} />
            <Route path="chat" element={<ChatPage />} />
            <Route path="chat:conversationId" element={<ChatPage />} />
            <Route path="crypto" element={<CryptoPage />} />
          </Route>
          {/*<Route path='/login' element={<Login />} />*/}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
