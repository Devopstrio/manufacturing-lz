import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, LineChart, Line
} from 'recharts';
import { 
  Factory, 
  Activity, 
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Cpu,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Globe,
  Layers,
  ShieldCheck,
  Workflow
} from 'lucide-react';

const telemetryTrendsData = [
  { time: '00:00', throughput: 850 },
  { time: '04:00', throughput: 920 },
  { time: '08:00', throughput: 1250 },
  { time: '12:00', throughput: 1100 },
  { time: '16:00', throughput: 1450 },
  { time: '20:00', throughput: 1200 },
];

const deviceStatusBreakdown = [
  { name: 'Operational', value: 82, color: '#10b981' },
  { name: 'Maintenance', value: 12, color: '#f59e0b' },
  { name: 'Error', value: 4, color: '#ef4444' },
  { name: 'Offline', value: 2, color: '#475569' },
];

const KPI_CARDS = [
  { title: 'Connected Devices', value: '1,245', trend: 'Active IIoT Nodes', color: 'emerald', icon: Cpu },
  { title: 'Factory Edge Nodes', value: '12', trend: 'K3s Managed Clusters', color: 'emerald', icon: Workflow },
  { title: 'Avg. Edge Latency', value: '4.2ms', trend: 'Deterministic (P99)', color: 'emerald', icon: Activity },
  { title: 'Sync Integrity', value: '99.98%', trend: 'Factory-to-Cloud', color: 'emerald', icon: Globe },
];

const FactoryDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Factory Floor Intelligence Control</h1>
          <p className="text-slate-400">Institutional manufacturing orchestration, real-time IIoT telemetry, and edge-first automation.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Export Audit Logs
          </button>
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Provision New Node
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-emerald-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-emerald-400`} />
              </div>
              <div className="text-xs font-medium text-emerald-400">
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Telemetry Trends */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Real-time Telemetry Ingestion Velocity (Messages/Sec)</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={telemetryTrendsData}>
                <defs>
                  <linearGradient id="colorThroughput" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="throughput" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorThroughput)" name="Msg / Sec" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Device Breakdown */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Asset Health Distribution</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={deviceStatusBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {deviceStatusBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {deviceStatusBreakdown.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-slate-400">{item.name}</span>
                </div>
                <span className="text-sm font-bold text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Asset Ledger Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Active Factory Asset Ledger</h3>
          <button className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">View OT Topology</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Industrial Asset</th>
                <th className="px-6 py-4 font-semibold">Type</th>
                <th className="px-6 py-4 font-semibold">Zone</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Uptime (24h)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { name: 'FANUC Robotic Arm #12', type: 'ACTUATOR', zone: 'Floor-A-01', status: 'Operational', uptime: '99.98%' },
                { name: 'Siemens S7-1500 PLC', type: 'PLC', zone: 'Floor-B-04', status: 'Maintenance', uptime: '94.20%' },
                { name: 'Rockwell Gateway Node', type: 'GATEWAY', zone: 'DMZ-North', status: 'Operational', uptime: '100.00%' },
              ].map((device, i) => (
                <tr key={i} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">{device.name}</span>
                      <span className="text-xs text-slate-500 font-mono">ID: IIOT-Z45-K921</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">
                    <span className="bg-slate-800 px-2 py-1 rounded text-[10px] font-mono">{device.type}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400 font-medium">{device.zone}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      device.status === 'Operational' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
                    }`}>
                      {device.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{device.uptime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FactoryDashboard;
