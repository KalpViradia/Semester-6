import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Counter from './components/Counter';
import HelloWorldLogger from './components/HelloWorldLogger';
import FormComponent from './components/FormComponent';
import CallbackDemo from './components/CallbackDemo';
import PropDrilling from './components/PropDrilling';
import ContextDemo from './components/ContextDemo';
import DebugValueDemo from './components/DebugValueDemo';
import DeferredValueDemo from './components/DeferredValueDemo';
import ImperativeHandleDemo from './components/ImperativeHandleDemo';
import LayoutEffectDemo from './components/LayoutEffectDemo';
import PrimeCalculator from './components/PrimeCalculator';
import OptimisticDemo from './components/OptimisticDemo';
import ReducerDemo from './components/ReducerDemo';
import RefDemo from './components/RefDemo';
import SyncExternalStoreDemo from './components/SyncExternalStoreDemo';
import TransitionDemo from './components/TransitionDemo';
import FormStatusDemo from './components/FormStatusDemo';

function App() {
  return (
    <Router>
      <Navbar />

      <main className="main-content">
        <h1 className="page-title">React Hooks</h1>
        <hr />

        <Routes>
          <Route path="/" element={<Navigate to="/counter" replace />} />

          {/* Lab 23 */}
          <Route path="/counter" element={<Counter />} />
          <Route path="/logger" element={<HelloWorldLogger />} />
          <Route path="/form-action" element={<FormComponent />} />
          <Route path="/callback" element={<CallbackDemo />} />

          {/* Lab 24 */}
          <Route path="/prop-drilling" element={<PropDrilling />} />
          <Route path="/context" element={<ContextDemo />} />
          <Route path="/debug-value" element={<DebugValueDemo />} />
          <Route path="/deferred-value" element={<DeferredValueDemo />} />

          {/* Lab 25 */}
          <Route path="/imperative-handle" element={<ImperativeHandleDemo />} />
          <Route path="/layout-effect" element={<LayoutEffectDemo />} />
          <Route path="/memo-primes" element={<PrimeCalculator />} />
          <Route path="/optimistic" element={<OptimisticDemo />} />

          {/* Lab 26 */}
          <Route path="/reducer" element={<ReducerDemo />} />
          <Route path="/ref" element={<RefDemo />} />
          <Route path="/sync-store" element={<SyncExternalStoreDemo />} />
          <Route path="/transition" element={<TransitionDemo />} />
          <Route path="/form-status" element={<FormStatusDemo />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;