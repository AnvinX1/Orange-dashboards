'use client';

import { Download } from 'lucide-react';
import { PageHeader } from '../PageHeader';

export function ReportsPage() {
  const reports = [
    {
      id: 1,
      name: 'Monthly Statement - January 2026',
      date: 'Feb 1, 2026',
      type: 'Financial Statement',
      size: '2.4 MB',
    },
    {
      id: 2,
      name: 'Tax Summary - 2025',
      date: 'Jan 15, 2026',
      type: 'Tax Report',
      size: '1.8 MB',
    },
    {
      id: 3,
      name: 'Annual Report - 2025',
      date: 'Jan 10, 2026',
      type: 'Annual Report',
      size: '4.1 MB',
    },
    {
      id: 4,
      name: 'Spending Analysis - December 2025',
      date: 'Jan 1, 2026',
      type: 'Analysis',
      size: '3.2 MB',
    },
  ];

  return (
    <div className="space-y-6 animate-fadeInSlideUp">
      <div style={{ animation: 'fadeInSlideUp 0.5s ease-out' }}>
        <PageHeader
          title="Reports"
          description="Access and download your financial reports and statements."
        />
      </div>

      {/* Report Generation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ animation: 'fadeInSlideUp 0.5s ease-out 0.1s backwards' }}>
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
          <h3 className="text-lg font-bold mb-6">Generate New Report</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Report Type
              </label>
              <select className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm">
                <option>Monthly Statement</option>
                <option>Tax Report</option>
                <option>Spending Analysis</option>
                <option>Transaction History</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Start Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  End Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm"
                />
              </div>
            </div>

            <button className="w-full py-3 px-4 bg-[#FF5733] text-white rounded-2xl font-semibold hover:bg-[#FF5733]/90 transition-colors">
              Generate Report
            </button>
          </div>
        </div>

        {/* Report Statistics */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
          <h3 className="text-lg font-bold mb-6">Report Statistics</h3>

          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <span className="text-sm">Total Reports Generated</span>
              <span className="font-bold text-lg">{reports.length}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <span className="text-sm">Reports This Month</span>
              <span className="font-bold text-lg">2</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <span className="text-sm">Total Storage Used</span>
              <span className="font-bold text-lg">11.5 MB</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <span className="text-sm">Storage Available</span>
              <span className="font-bold text-lg text-green-600 dark:text-green-400">
                Unlimited
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Reports List */}
      <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
        <h3 className="text-lg font-bold mb-6">Your Reports</h3>

        <div className="space-y-3">
          {reports.map((report) => (
            <div
              key={report.id}
              className="flex items-center justify-between p-4 border border-zinc-100 dark:border-zinc-800 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
            >
              <div className="flex-1">
                <p className="text-sm font-semibold">{report.name}</p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-xs text-zinc-400">{report.type}</span>
                  <span className="text-xs text-zinc-400">{report.size}</span>
                  <span className="text-xs text-zinc-400">{report.date}</span>
                </div>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg text-sm font-semibold transition-colors">
                <Download size={16} />
                <span>Download</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
