import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Menu from "./components/Menu";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";
import CreateNewPage from "./components/CreateNewPage";
import ChallengePage from "./components/ChallengePage";
import HistoryPage from "./components/HistoryPage";
import MuseumPage from "./components/MuseumPage";
import FriendsPage from "./components/FriendsPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route
                    path="/login"
                    element={
                        <ProtectedRoute isPrivate={false}>
                            <LoginPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute isPrivate={true}>
                            <ProfilePage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/create"
                    element={
                        <ProtectedRoute isPrivate={true}>
                            <CreateNewPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/challenge"
                    element={
                        <ProtectedRoute isPrivate={true}>
                            <ChallengePage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/history"
                    element={
                        <ProtectedRoute isPrivate={true}>
                            <HistoryPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/museum"
                    element={
                        <ProtectedRoute isPrivate={true}>
                            <MuseumPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/friends"
                    element={
                        <ProtectedRoute isPrivate={true}>
                            <FriendsPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="*"
                    element={
                        <ProtectedRoute>
                            <Navigate to="/profile" />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
