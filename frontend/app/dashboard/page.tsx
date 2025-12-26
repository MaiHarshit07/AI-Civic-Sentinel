import Link from "next/link";

const issues = [
  {
    id: 1,
    title: "Pothole detected",
    location: "MG Road - Junction",
    severity: "HIGH",
    department: "Road Maintenance",
    status: "Pending",
  },
  {
    id: 2,
    title: "Streetlight not working",
    location: "Amal Sector 5",
    severity: "MEDIUM",
    department: "Electrical Department",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Garbage overflow",
    location: "Diamond Market",
    severity: "LOW",
    department: "Waste Management",
    status: "Resolved",
  },
];

function SeverityPill({ level }: { level: string }) {
  const base = "px-3 py-1 rounded-full text-sm font-semibold";
  if (level === "HIGH")
    return <span className={`${base} bg-red-600 text-white`}>HIGH</span>;
  if (level === "MEDIUM")
    return (
      <span className={`${base} bg-yellow-400 text-black`}>MEDIUM</span>
    );
  return <span className={`${base} bg-green-600 text-white`}>LOW</span>;
}

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="max-w-7xl mx-auto flex gap-6">
     
        <aside className="w-64 bg-white rounded-xl p-4 shadow">
          <nav className="space-y-2">
            <Link
              href="/dashboard"
              className="block px-3 py-2 rounded-md bg-blue-50 text-blue-600 font-semibold"
            >
              Dashboard
            </Link>
            <Link
              href="/reports"
              className="block px-3 py-2 rounded-md text-black hover:bg-gray-50"
            >
              Complaints
            </Link>
            <Link
              href="/admin"
              className="block px-3 py-2 rounded-md text-black hover:bg-gray-50"
            >
              Settings
            </Link>
          </nav>
        </aside>

        <section className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-black">
              Admin Dashboard
            </h2>

            <div className="flex items-center gap-3">
            
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 border border-gray-200 rounded-lg text-black placeholder:text-gray-500 focus:outline-none"
              />

              <select className="px-3 py-2 border border-gray-200 rounded-lg text-black">
                <option>New Complaints</option>
                <option>All</option>
              </select>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow overflow-hidden">
            
            <div className="hidden md:grid grid-cols-6 gap-4 px-6 py-4 bg-gray-100 font-bold text-black border-b border-gray-200">
              <div className="col-span-2">Issue</div>
              <div>Severity</div>
              <div>Dept.</div>
              <div>Status</div>
              <div></div>
            </div>

          
            <div className="divide-y divide-gray-200">
              {issues.map((it) => (
                <div
                  key={it.id}
                  className="px-6 py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="grid md:grid-cols-6 gap-4 items-center">
                    <div className="col-span-2 flex items-center gap-4">
                      <div className="w-14 h-14 bg-gray-300 rounded-lg" />
                      <div>
                        <p className="font-semibold text-black">
                          {it.title}
                        </p>
                        <p className="text-sm text-gray-600">
                          {it.location}
                        </p>
                      </div>
                    </div>

                    <div>
                      <SeverityPill level={it.severity} />
                    </div>

                    <div className="text-black">
                      {it.department}
                    </div>

                    <div>
                      <span className="font-semibold text-blue-600">
                        {it.status}
                      </span>
                    </div>

                    <div className="text-right">
                      <button className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Mark in Progress
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
