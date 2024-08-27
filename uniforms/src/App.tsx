import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forms from "./pages/Forms"
import Settings from "./pages/Settings"

function App() { 
  return (
     <BrowserRouter>
	<Routes>
	  <Route path="forms" element={<Forms />} />
    <Route path="settings" element={<Settings />} />
	</Routes>
     </BrowserRouter>
  );
}

export default App;
