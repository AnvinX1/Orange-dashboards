'use client';

import { PageHeader } from '../PageHeader';
import { DEFAULT_USER } from '@/lib/constants';

export function AccountPage() {
  return (
    <div className="space-y-6 animate-fadeInSlideUp">
      <div style={{ animation: 'fadeInSlideUp 0.5s ease-out' }}>
        <PageHeader
          title="Account Settings"
          description="Manage your profile and account preferences."
        />
      </div>

      <div className="grid grid-cols-12 gap-6" style={{ animation: 'fadeInSlideUp 0.5s ease-out 0.1s backwards' }}>
        {/* Profile Section */}
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
            <h3 className="text-lg font-bold mb-6">Profile</h3>

            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 bg-zinc-200 dark:bg-zinc-800">
                <img
                  src={DEFAULT_USER.avatar || "/placeholder.svg"}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-bold">{DEFAULT_USER.name}</h4>
              <p className="text-sm text-zinc-400">{DEFAULT_USER.email}</p>
              <span className="mt-2 px-3 py-1 rounded-full text-xs font-semibold bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400">
                Verified
              </span>
            </div>

            <button className="w-full py-3 px-4 bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-2xl font-semibold transition-colors mb-3">
              Edit Profile
            </button>
            <button className="w-full py-3 px-4 bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-2xl font-semibold transition-colors">
              Change Password
            </button>
          </div>
        </div>

        {/* Settings Section */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          {/* Security */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
            <h3 className="text-lg font-bold mb-6">Security</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">Two-Factor Authentication</p>
                  <p className="text-xs text-zinc-400 mt-1">
                    Add an extra layer of security
                  </p>
                </div>
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <div>
                  <p className="text-sm font-semibold">Biometric Login</p>
                  <p className="text-xs text-zinc-400 mt-1">
                    Use fingerprint or face recognition
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 rounded cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <div>
                  <p className="text-sm font-semibold">Login Alerts</p>
                  <p className="text-xs text-zinc-400 mt-1">
                    Get notified of new logins
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 rounded cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
            <h3 className="text-lg font-bold mb-6">Notification Preferences</h3>

            <div className="space-y-4">
              {[
                {
                  title: 'Email Notifications',
                  description: 'Receive updates via email',
                },
                {
                  title: 'Push Notifications',
                  description: 'Receive push notifications on your device',
                },
                {
                  title: 'SMS Alerts',
                  description: 'Get critical alerts via SMS',
                },
                {
                  title: 'Marketing Emails',
                  description: 'Receive promotional offers and news',
                },
              ].map((pref, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between ${
                    idx > 0 ? 'pt-4 border-t border-zinc-100 dark:border-zinc-800' : ''
                  }`}
                >
                  <div>
                    <p className="text-sm font-semibold">{pref.title}</p>
                    <p className="text-xs text-zinc-400 mt-1">
                      {pref.description}
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    defaultChecked={idx < 3}
                    className="w-5 h-5 rounded cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Privacy & Data */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
            <h3 className="text-lg font-bold mb-6">Privacy & Data</h3>

            <div className="space-y-3">
              <button className="w-full py-3 px-4 bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-2xl text-sm font-semibold transition-colors text-left">
                Download Your Data
              </button>
              <button className="w-full py-3 px-4 bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-2xl text-sm font-semibold transition-colors text-left">
                View Privacy Policy
              </button>
              <button className="w-full py-3 px-4 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-2xl text-sm font-semibold transition-colors text-left text-red-600 dark:text-red-400">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
