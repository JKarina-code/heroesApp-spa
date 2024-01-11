import { Navigate, Routes, Route } from "react-router-dom";
import { Marvel, DC, Search, HeroDetail} from "../pages";
import { Navbar } from "../../ui/components/Navbar";
export const HeroesRoutes = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="marvel" element={<Marvel />} />
      <Route path="dc" element={<DC />} />
      <Route path="search" element={<Search />} />
      <Route path="hero/:id" element={<HeroDetail />} />
    
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  </>
  )
}
