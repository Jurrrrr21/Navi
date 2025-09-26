import { Route, Routes} from "react-router-dom"
import Header from './partials/header.tsx';
import Landing from './landing/Landing.tsx';
import Register from './forms/register.tsx'

export default function App(){
  return (
    <>
        <Header/>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
    </>
  )
}