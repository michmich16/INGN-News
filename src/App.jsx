import { useState } from 'react';
import './App.scss';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { SingleArticlePage } from './pages/SingleArticlePage';
import { LoginPage } from './pages/LoginPage';

function App() {
  const queryClient = new QueryClient();
  const [selectedHashtag, setSelectedHashtag] = useState("");

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<MainLayout setSelectedHashtag={setSelectedHashtag} />}>
              <Route index element={<HomePage selectedHashtag={selectedHashtag} />} />
              <Route path="/article/:id" element={<SingleArticlePage />} />
              <Route path={`/login`} element={<LoginPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
