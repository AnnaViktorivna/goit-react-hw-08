import { Routes, Route } from "react-router-dom";

import ContactsPage from "./pages/ContactsPage/ContactsPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Layout from "./components/Layout/Layout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchApiRefreshUser } from "./redux/auth/operations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApiRefreshUser());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
