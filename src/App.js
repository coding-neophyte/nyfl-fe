import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from '../src/Views/Signup';
import Confirmation from './Views/Confirmation';

export default function App() {
  return (
<>
<BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='/confirmation' element={<Confirmation />}/>
    </Routes>

</BrowserRouter>
</>
  );
}
