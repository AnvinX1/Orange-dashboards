'use client';

import { PageHeader } from '../PageHeader';

export function SettingsPage() {
  return (
    <div className="space-y-6 animate-fadeInSlideUp">
      <div style={{ animation: 'fadeInSlideUp 0.5s ease-out' }}>
        <PageHeader
          title="Settings"
          description="Configure application and system settings."
        />
      </div>

      <div className="grid grid-cols-12 gap-6" style={{ animation: 'fadeInSlideUp 0.5s ease-out 0.1s backwards' }}>
        {/* Settings Menu */}
        <div className="col-span-12 lg:col-span-3">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 sticky top-8">
            <h3 className="text-sm font-bold mb-4">Settings</h3>
            <nav className="space-y-1">
              {[
                'General',
                'Appearance',
                'Privacy',
                'Security',
                'Notifications',
                'Integrations',
                'Billing',
                'Advanced',
              ].map((item) => (
                <button
                  key={item}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    item === 'General'
                      ? 'bg-[#FF5733] text-white'
                      : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="col-span-12 lg:col-span-9 space-y-6">
          {/* General Settings */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
            <h3 className="text-lg font-bold mb-6">General Settings</h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Application Name
                </label>
                <input
                  type="text"
                  defaultValue="Fintech Dashboard"
                  className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Default Currency
                </label>
                <select className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm">
                  <option>USD (US Dollar)</option>
                  <option>EUR (Euro)</option>
                  <option>GBP (British Pound)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Timezone
                </label>
                <select className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm">
                  <option>UTC</option>
                  <option>GMT-5 (EST)</option>
                  <option>GMT-8 (PST)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Display Settings */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
            <h3 className="text-lg font-bold mb-6">Display Settings</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">Dark Mode</p>
                  <p className="text-xs text-zinc-400 mt-1">
                    Enable dark theme
                  </p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded cursor-pointer" />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <div>
                  <p className="text-sm font-semibold">Compact View</p>
                  <p className="text-xs text-zinc-400 mt-1">
                    Use compact layout
                  </p>
                </div>
                <input type="checkbox" className="w-5 h-5 rounded cursor-pointer" />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <div>
                  <p className="text-sm font-semibold">Animations</p>
                  <p className="text-xs text-zinc-400 mt-1">
                    Enable animations and transitions
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

          {/* System Preferences */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
            <h3 className="text-lg font-bold mb-6">System Preferences</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Items Per Page
                </label>
                <select className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm">
                  <option>10 items</option>
                  <option>25 items</option>
                  <option>50 items</option>
                  <option>100 items</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Data Retention
                </label>
                <select className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm">
                  <option>6 months</option>
                  <option>1 year</option>
                  <option>2 years</option>
                  <option>Indefinite</option>
                </select>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button className="px-6 py-3 bg-[#FF5733] text-white rounded-lg font-semibold hover:bg-[#FF5733]/90 transition-colors">
              Save Changes
            </button>
            <button className="px-6 py-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-lg font-semibold hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
              Cancel
            </button>
            <button className="px-6 py-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg font-semibold hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors ml-auto">
              Reset to Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
