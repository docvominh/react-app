import './App.css';
import 'bulma/css/bulma.min.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Weather from './components/weather/Weather'
import Layout from "./components/Layout";
import Home from "./components/Home";
import ComplexForm from "./components/complex-form/ComplexForm";
import Chat from "./components/chat/Chat";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Chat/>}/>
                    <Route path="weather" element={<Weather/>}/>
                    <Route path="complex-form" element={<ComplexForm/>}/>
                    <Route path="chat" element={<Chat/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
