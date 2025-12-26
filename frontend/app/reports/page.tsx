'use client';

import { useState } from 'react';

interface Issue {
  id: number;
  title: string;
  description: string;
  severity: 'LOW' | 'MEDIUM' | 'HIGH';
  status: 'Pending' | 'In Progress' | 'Resolved';
  image: string;
  location: string;
}

const mockIssues: Issue[] = [
  {
    id: 1,
    title: 'Streetlight not working',
    description: 'Street light on Main Street is broken',
    severity: 'MEDIUM',
    status: 'Pending',
    image: '/streetlight.png',
    location: 'Main Street',
  },
  {
    id: 2,
    title: 'Pothole detected',
    description: 'Large pothole on Oak Avenue posing accident risk',
    severity: 'HIGH',
    status: 'In Progress',
    image: '/pothole.png',
    location: 'Oak Avenue',
  },
  {
    id: 3,
    title: 'Garbage overflow',
    description: 'Garbage bin overflowing in Diamond Market area',
    severity: 'LOW',
    status: 'Resolved',
    image: '/garbage.png',
    location: 'Diamond Market',
  },
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'HIGH':
      return 'bg-red-600';
    case 'MEDIUM':
      return 'bg-yellow-500';
    case 'LOW':
      return 'bg-green-600';
    default:
      return 'bg-gray-500';
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Pending':
      return 'text-blue-600';
    case 'In Progress':
      return 'text-orange-600';
    case 'Resolved':
      return 'text-green-600';
    default:
      return 'text-gray-600';
  }
};

export default function ReportsPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'mine'>('all');
  const [selectedSeverity, setSelectedSeverity] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredIssues = mockIssues.filter((issue) => {
    const matchesSeverity = !selectedSeverity || issue.severity === selectedSeverity;
    const matchesSearch =
      !searchQuery ||
      issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSeverity && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gray-50 px-10 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome, Harshit!</h1>

       
        <div className="flex gap-4 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'all'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            All Issues
          </button>
          <button
            onClick={() => setActiveTab('mine')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'mine'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            My Complaints
          </button>
        </div>

        
        <div className="flex gap-4 mb-8">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery || ''}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition-colors">
            Filters
          </button>
        </div>

        
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="hidden md:grid grid-cols-4 gap-4 px-6 py-4 bg-gray-100 font-bold text-gray-700 border-b border-gray-200">
            <div>Issue</div>
            <div>Severity</div>
            <div>Status</div>
            <div>Location</div>
          </div>

          <div className="divide-y divide-gray-200">
            {filteredIssues.map((issue) => (
              <div
                key={issue.id}
                className="px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                <div className="grid md:grid-cols-4 gap-4 items-center">
                 
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-lg flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900">{issue.title}</p>
                      <p className="text-sm text-gray-600">{issue.description}</p>
                    </div>
                  </div>

                 
                  <div>
                    <span
                      className={`${getSeverityColor(
                        issue.severity
                      )} text-white px-3 py-1 rounded-full text-sm font-semibold`}
                    >
                      {issue.severity}
                    </span>
                  </div>

                  
                  <div>
                    <span className={`font-semibold ${getStatusColor(issue.status)}`}>
                      {issue.status}
                      <span className="ml-1">›</span>
                    </span>
                  </div>

                  
                  <div className="text-gray-700">{issue.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="flex justify-center gap-2 mt-8">
          <button className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
            ←
          </button>
          <button className="px-3 py-2 rounded-lg bg-blue-600 text-white">
            1
          </button>
          <button className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
            2
          </button>
          <button className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
            3
          </button>
          <button className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
            →
          </button>
        </div>
      </div>
    </main>
  );
}
