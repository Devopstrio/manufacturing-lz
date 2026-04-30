import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import FactoryDashboard from './pages/FactoryDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The Manufacturing Landing Zone is currently synchronizing deterministic edge workloads and optimizing IIoT data pipelines. Real-time digital twin abstractions and predictive maintenance models will be fully operational once the OT/IT air-gap gateway synchronization is finalized.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<FactoryDashboard />} />
          <Route path="/devices" element={<Placeholder name="IIoT Device Registry & Asset Management" />} />
          <Route path="/edge" element={<Placeholder name="Edge Node Orchestration (K3s)" />} />
          <Route path="/telemetry" element={<Placeholder name="Real-time Telemetry Streams" />} />
          <Route path="/analytics" element={<Placeholder name="Predictive Maintenance & Analytics" />} />
          <Route path="/sync" element={<Placeholder name="Edge-to-Cloud Synchronization Status" />} />
          <Route path="/security" element={<Placeholder name="OT/IT Zero Trust Security Hub" />} />
          <Route path="/audit" element={<Placeholder name="Compliance & Regulatory Audit Logs" />} />
          <Route path="/twin" element={<Placeholder name="Digital Twin Hub & Abstraction" />} />
          <Route path="/settings" element={<Placeholder name="System & Protocol Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
