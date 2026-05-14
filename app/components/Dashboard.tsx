const stats = [
  { label: 'Total Revenue', value: '$48,250', change: '+12.5%', positive: true },
  { label: 'Active Users', value: '2,845', change: '+8.2%', positive: true },
  { label: 'Orders', value: '1,420', change: '-3.1%', positive: false },
  { label: 'Growth Rate', value: '23.6%', change: '+4.3%', positive: true },
]

const activities = [
  { user: 'Alex Rivera', action: 'created a new project', time: '2 min ago' },
  { user: 'Sam Chen', action: 'completed Nijeni module', time: '14 min ago' },
  { user: 'Jordan Lee', action: 'upgraded to Pro plan', time: '1 hr ago' },
  { user: 'Taylor Kim', action: 'submitted Pozzon feedback', time: '3 hr ago' },
  { user: 'Morgan Blake', action: 'joined Sozpodor cohort', time: '6 hr ago' },
]

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-8 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Dashboard
        </h1>
        <p className="mt-1.5 text-sm sm:text-base text-zinc-500 dark:text-zinc-400">
          Welcome back. Here&apos;s what&apos;s happening across your platform.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
          >
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {stat.label}
            </p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-zinc-900 dark:text-white">
                {stat.value}
              </span>
              <span
                className={`text-sm font-semibold ${
                  stat.positive
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-red-600 dark:text-red-400'
                }`}
              >
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-xl border border-zinc-200 bg-white p-5 sm:p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-base font-semibold text-zinc-900 dark:text-white mb-4">
            Recent Activity
          </h2>
          <div className="space-y-0">
            {activities.map((a, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-3 border-b border-zinc-100 last:border-0 dark:border-zinc-800"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-zinc-900 dark:text-white truncate">
                    <span className="font-medium">{a.user}</span>
                    <span className="text-zinc-500 dark:text-zinc-400">
                      {' '}{a.action}
                    </span>
                  </p>
                </div>
                <span className="ml-4 shrink-0 text-xs text-zinc-400 dark:text-zinc-500">
                  {a.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-5 sm:p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-base font-semibold text-zinc-900 dark:text-white mb-4">
            Quick Actions
          </h2>
          <div className="space-y-3">
            {['View Nijeni', 'Open Sozpodor', 'Manage Pozzon'].map((action) => (
              <button
                key={action}
                className="w-full rounded-lg border border-zinc-200 px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 active:scale-[0.98] dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
