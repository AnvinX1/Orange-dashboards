'use client';

import { Plus, Search, MoreHorizontal } from 'lucide-react';
import { PageHeader } from '../PageHeader';
import { MOCK_USERS } from '@/lib/mock-data';
import { useState } from 'react';
import { StatusBadge } from '../StatusBadge';

export function UsersPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = MOCK_USERS.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fadeInSlideUp">
      <div style={{ animation: 'fadeInSlideUp 0.5s ease-out' }}>
        <PageHeader
          title="Users"
          description="Manage user accounts and permissions."
        />
      </div>

      {/* Header Section */}
      <div className="flex items-center justify-between" style={{ animation: 'fadeInSlideUp 0.5s ease-out 0.1s backwards' }}>
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" size={18} />
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm placeholder-zinc-400"
            />
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#FF5733] text-white rounded-lg font-semibold hover:bg-[#FF5733]/90 transition-colors">
          <Plus size={18} />
          Add User
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-100 dark:border-zinc-800">
                <th className="px-6 py-4 text-left font-semibold text-zinc-600 dark:text-zinc-400">
                  User
                </th>
                <th className="px-6 py-4 text-left font-semibold text-zinc-600 dark:text-zinc-400">
                  Email
                </th>
                <th className="px-6 py-4 text-left font-semibold text-zinc-600 dark:text-zinc-400">
                  Role
                </th>
                <th className="px-6 py-4 text-left font-semibold text-zinc-600 dark:text-zinc-400">
                  Status
                </th>
                <th className="px-6 py-4 text-left font-semibold text-zinc-600 dark:text-zinc-400">
                  Joined
                </th>
                <th className="px-6 py-4 text-right font-semibold text-zinc-600 dark:text-zinc-400">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                        <img
                          src={user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`}
                          alt={user.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="font-semibold">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-zinc-600 dark:text-zinc-400">
                    {user.email}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-800">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge
                      status={user.status as 'Active' | 'Inactive'}
                    />
                  </td>
                  <td className="px-6 py-4 text-zinc-600 dark:text-zinc-400 text-xs">
                    {new Date(user.joinDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
                      <MoreHorizontal size={18} className="text-zinc-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-400">No users found</p>
          </div>
        )}
      </div>

      {/* User Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
          <p className="text-zinc-400 dark:text-zinc-500 text-xs font-semibold mb-2">
            Total Users
          </p>
          <h3 className="text-2xl font-bold">{MOCK_USERS.length}</h3>
          <p className="text-xs text-green-400 mt-2">↑ 2 this week</p>
        </div>
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
          <p className="text-zinc-400 dark:text-zinc-500 text-xs font-semibold mb-2">
            Active Users
          </p>
          <h3 className="text-2xl font-bold">
            {MOCK_USERS.filter((u) => u.status === 'Active').length}
          </h3>
          <p className="text-xs text-green-400 mt-2">✓ All active</p>
        </div>
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
          <p className="text-zinc-400 dark:text-zinc-500 text-xs font-semibold mb-2">
            Administrators
          </p>
          <h3 className="text-2xl font-bold">
            {MOCK_USERS.filter((u) => u.role === 'Administrator').length}
          </h3>
          <p className="text-xs text-zinc-400 mt-2">Admins</p>
        </div>
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
          <p className="text-zinc-400 dark:text-zinc-500 text-xs font-semibold mb-2">
            Inactive Users
          </p>
          <h3 className="text-2xl font-bold">
            {MOCK_USERS.filter((u) => u.status === 'Inactive').length}
          </h3>
          <p className="text-xs text-amber-400 mt-2">⚠ Needs attention</p>
        </div>
      </div>
    </div>
  );
}
