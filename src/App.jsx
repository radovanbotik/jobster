import { Landing, Error, Register } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AddJob,
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
} from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Stats />} />
          <Route path="alljobs" element={<AllJobs />} />
          <Route path="addjob" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
          <Route path="stats" element={<Stats />} />
        </Route>
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
