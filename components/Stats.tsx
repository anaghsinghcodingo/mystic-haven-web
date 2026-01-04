
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Week 1', members: 42 },
  { name: 'Week 2', members: 78 },
  { name: 'Week 3', members: 98 },
  { name: 'Week 4', members: 124 },
];

const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black mb-6 text-white">Consistent Growth</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              We started small, but our community is finding its rhythm. We've grown to 124 members in just a few weeks by focusing on real connections.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                <span className="text-slate-300 font-medium">Active Daily Members</span>
                <span className="text-white font-bold">45+</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                <span className="text-slate-300 font-medium">Growth this week</span>
                <span className="text-green-400 font-bold">+18%</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 h-[300px] w-full bg-black/40 rounded-2xl p-6 border border-white/5">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorMembers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#9333ea" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#9333ea" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff0a" vertical={false} />
                <XAxis dataKey="name" stroke="#475569" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#475569" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e1b4b', border: 'none', borderRadius: '12px', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.5)' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="members" stroke="#9333ea" strokeWidth={3} fillOpacity={1} fill="url(#colorMembers)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
