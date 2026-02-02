'use client';

import { Star, Archive, Trash2, Reply } from 'lucide-react';
import { PageHeader } from '../PageHeader';
import { MOCK_MAIL_MESSAGES } from '@/lib/mock-data';

export function MailPage() {
  return (
    <div className="space-y-6 animate-fadeInSlideUp">
      <div style={{ animation: 'fadeInSlideUp 0.5s ease-out' }}>
        <PageHeader
          title="Mail"
          description="Manage your messages and communications."
        />
      </div>

      <div className="grid grid-cols-12 gap-6" style={{ animation: 'fadeInSlideUp 0.5s ease-out 0.1s backwards' }}>
        {/* Mail Folders */}
        <div className="col-span-12 lg:col-span-3">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 space-y-2">
            <button className="w-full py-3 px-4 bg-[#FF5733] text-white rounded-2xl font-semibold hover:bg-[#FF5733]/90 transition-colors text-left">
              Compose
            </button>

            <div className="space-y-1 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              {[
                { name: 'Inbox', count: 3 },
                { name: 'Sent', count: 24 },
                { name: 'Drafts', count: 2 },
                { name: 'Starred', count: 1 },
                { name: 'Archive', count: 18 },
                { name: 'Spam', count: 5 },
              ].map((folder) => (
                <button
                  key={folder.name}
                  className="w-full py-2 px-3 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg transition-colors text-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{folder.name}</span>
                    <span className="text-xs text-zinc-400">{folder.count}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mail List */}
        <div className="col-span-12 lg:col-span-9">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold">Inbox</h3>
              <input
                type="text"
                placeholder="Search emails..."
                className="px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm"
              />
            </div>

            <div className="space-y-2">
              {MOCK_MAIL_MESSAGES.map((message) => (
                <div
                  key={message.id}
                  className={`p-4 border rounded-2xl cursor-pointer transition-colors ${
                    message.read
                      ? 'border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900'
                      : 'border-[#FF5733]/50 bg-[#FF5733]/5 dark:bg-[#FF5733]/10'
                  } hover:border-[#FF5733] dark:hover:border-[#FF5733]`}
                >
                  <div className="flex items-start gap-4">
                    <button
                      className={`mt-1 ${
                        message.starred
                          ? 'text-[#FF5733]'
                          : 'text-zinc-300 hover:text-zinc-400'
                      }`}
                    >
                      <Star size={18} fill={message.starred ? 'currentColor' : 'none'} />
                    </button>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span
                          className={`font-semibold ${
                            message.read
                              ? ''
                              : 'text-zinc-900 dark:text-white'
                          }`}
                        >
                          {message.from}
                        </span>
                        <span className="text-xs text-zinc-400">
                          {message.date}
                        </span>
                      </div>
                      <p
                        className={`text-sm mb-2 ${
                          message.read
                            ? 'text-zinc-600 dark:text-zinc-400'
                            : 'font-semibold text-zinc-900 dark:text-white'
                        }`}
                      >
                        {message.subject}
                      </p>
                      <p className="text-xs text-zinc-400 truncate">
                        {message.preview}
                      </p>
                    </div>

                    <div className="flex gap-2 opacity-0 hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
                        <Reply size={16} />
                      </button>
                      <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
                        <Archive size={16} />
                      </button>
                      <button className="p-2 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-lg transition-colors text-red-600 dark:text-red-400">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
