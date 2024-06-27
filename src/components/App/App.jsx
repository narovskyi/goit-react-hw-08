import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import RestrictedRoute from "../RestrictedRoute";
import PrivateRoute from "../PrivateRoute";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));

export default function App() {
    const isRefreshing = useSelector(selectIsRefreshing);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch])
    
    return isRefreshing ? (<div>Refreshing...</div>) : (
        <Layout>
            <Suspense fallback={null}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/register"
                        element={<RestrictedRoute component={<RegistrationPage />} />}
                    />
                    <Route
                        path="/login"
                        element={<RestrictedRoute component={<LoginPage />} />}
                    />
                    <Route
                        path="/contacts"
                        element={<PrivateRoute component={<ContactsPage />} />}
                    />
                </Routes>
            </Suspense>
        </Layout>
    );
}