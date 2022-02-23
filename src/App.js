import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";
import CreateNewPage from "./components/CreateNewPage";
import ChallengePage from "./components/ChallengePage";
import HistoryPage from "./components/HistoryPage";

function App() {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/create" element={<CreateNewPage />} />
                <Route path="/challenge" element={<ChallengePage />} />
                <Route path="/history" element={<HistoryPage />} />
                <Route path="/museum" element={<MuseumPage />} />
                <Route path="/friends" element={<FriendsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
