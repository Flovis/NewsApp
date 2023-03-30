import "./App.css";
import Data from "./components/Data";
import NavMenu from "./components/navMenu/NavMenu";
import NewsCard from "./components/NewsCard";

function App() {
    console.log();
    return (
        <div className="container mx-auto max-w-screen-xl">
            <NavMenu />
            <div className="py-4 lg:py-8">
                <h1 className="text-xl text-center font-bold lg:text-2xl lg:text-left">
                    Last info
                </h1>
                <Data />
            </div>
        </div>
    );
}

export default App;
