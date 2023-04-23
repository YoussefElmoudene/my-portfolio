import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";

function App({children}) {
    return (
        <div className="min-h-screen w-screen max-w-full bg-gray-900">
            <Navbar/>
            <div className="separated"/>
            {children}
        </div>
    );
}

export default App;
