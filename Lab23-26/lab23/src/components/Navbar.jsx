import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path ? "nav-link active" : "nav-link";

    return (
        <nav className="sidebar">
            <h2 className="sidebar-title">React Hooks Demos</h2>

            <div className="nav-section">
                <h3>Lab 23: Basics</h3>
                <Link to="/counter" className={isActive("/counter")}>useState</Link>
                <Link to="/logger" className={isActive("/logger")}>useEffect</Link>
                <Link to="/form-action" className={isActive("/form-action")}>useActionState</Link>
                <Link to="/callback" className={isActive("/callback")}>useCallback</Link>
            </div>

            <div className="nav-section">
                <h3>Lab 24: Context & Props</h3>
                <Link to="/prop-drilling" className={isActive("/prop-drilling")}>Prop Drilling</Link>
                <Link to="/context" className={isActive("/context")}>useContext</Link>
                <Link to="/debug-value" className={isActive("/debug-value")}>useDebugValue</Link>
                <Link to="/deferred-value" className={isActive("/deferred-value")}>useDeferredValue</Link>
            </div>

            <div className="nav-section">
                <h3>Lab 25: Performance & Refs</h3>
                <Link to="/imperative-handle" className={isActive("/imperative-handle")}>useImperativeHandle</Link>
                <Link to="/layout-effect" className={isActive("/layout-effect")}>useLayoutEffect</Link>
                <Link to="/memo-primes" className={isActive("/memo-primes")}>useMemo</Link>
                <Link to="/optimistic" className={isActive("/optimistic")}>useOptimistic</Link>
            </div>

            <div className="nav-section">
                <h3>Lab 26: State & Lifecycle</h3>
                <Link to="/reducer" className={isActive("/reducer")}>useReducer</Link>
                <Link to="/ref" className={isActive("/ref")}>useRef</Link>
                <Link to="/sync-store" className={isActive("/sync-store")}>useSyncExternalStore</Link>
                <Link to="/transition" className={isActive("/transition")}>useTransition</Link>
                <Link to="/form-status" className={isActive("/form-status")}>useFormStatus</Link>
            </div>
        </nav>
    );
};

export default Navbar;