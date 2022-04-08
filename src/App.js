import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { connect } from "react-redux";
import useAPI from "./hooks/useAPI";
import Menu from "./components/Menu";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import ChallengePage from "./components/ChallengePage";
import HistoryPage from "./components/HistoryPage";
import MuseumPage from "./components/MuseumPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect } from "react";
import { setArtCollection } from "./redux/actions/art.actions";
import { setProjects } from "./redux/actions/challenge.actions";
import { setUser } from "./redux/actions";

function App({ user, setProjects, setArtCollection }) {
  const { getHabitsByUserId, getArtByUserId, verify } = useAPI();
  useEffect(() => {
    const loadUserInfo = async () => {
      if (user) {
        const res = await getHabitsByUserId(user.id);
        if (!res.data.success) {
          return console.log(user.data.error);
        } else {
          setProjects(res.data.data);
          const userArt = await getArtByUserId(user.id);
          if (!userArt.data.success) {
            console.log(userArt.data.error);
          } else {
            setArtCollection(userArt.data.data);
          }
        }
      }
    };
    loadUserInfo();
  }, [user]);

  useEffect(() => {
    const checkUser = async () => {
      const res = await verify();
      if (res.data.success) {
        setUser(res.data.data);
      }
    };
    checkUser();
  }, []);

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
          path="/register"
          element={
            <ProtectedRoute isPrivate={false}>
              <RegisterPage />
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
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  setArtCollection,
  setProjects,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
