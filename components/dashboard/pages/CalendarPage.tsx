'use client';

import { PageHeader } from '../PageHeader';
import { MOCK_EVENTS } from '@/lib/mock-data';

export function CalendarPage() {
  return (
    <div className="space-y-6 animate-fadeInSlideUp">
      <div style={{ animation: 'fadeInSlideUp 0.5s ease-out' }}>
        <PageHeader
          title="Calendar"
          description="View and manage your schedule and events."
        />
      </div>

      <div className="grid grid-cols-12 gap-6" style={{ animation: 'fadeInSlideUp 0.5s ease-out 0.1s backwards' }}>
        {/* Calendar Widget */}
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
            <h3 className="text-lg font-bold mb-6">February 2026</h3>

            {/* Weekday Headers */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div
                  key={day}
                  className="text-center text-xs font-semibold text-zinc-400 py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 28 }).map((_, idx) => {
                const day = idx + 1;
                const isToday = day === 2;
                const hasEvent = [2, 5, 8, 10].includes(day);

                return (
                  <div
                    key={idx}
                    className={`aspect-square flex items-center justify-center rounded-lg text-sm font-semibold cursor-pointer transition-colors ${
                      isToday
                        ? 'bg-[#FF5733] text-white'
                        : hasEvent
                          ? 'bg-[#FF5733]/10 text-[#FF5733]'
                          : 'bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700'
                    }`}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
            <h3 className="text-lg font-bold mb-6">Upcoming Events</h3>

            <div className="space-y-4">
              {MOCK_EVENTS.map((event) => (
                <div
                  key={event.id}
                  className="p-4 border border-zinc-100 dark:border-zinc-800 rounded-2xl hover:border-[#FF5733] dark:hover:border-[#FF5733] transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">{event.title}</h4>
                      <p className="text-xs text-zinc-400 mt-1">
                        {event.description}
                      </p>
                    </div>
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                      {event.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-zinc-500">
                    <span>📅 {event.date}</span>
                    <span>🕐 {event.time}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Event Button */}
            <button className="w-full mt-6 py-3 px-4 bg-[#FF5733] text-white rounded-2xl font-semibold hover:bg-[#FF5733]/90 transition-colors">
              + Create Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
