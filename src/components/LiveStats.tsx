import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Globe, Activity } from "lucide-react";
import { getRegistrations } from "@/api/registration";

const LiveStats = () => {
  const [stats, setStats] = useState<Record<string, number>>({});
  const [countries, setCountries] = useState<
    { code: string; name: string; count: number }[]
  >([]);
  const [recentActivity, setRecentActivity] = useState<string[]>([]);

  const roleColors: Record<string, string> = {
    "product manager": "text-lathran-orange",
    designer: "text-lathran-green",
    developer: "text-purple-400",
    founder: "text-red-400",
    unknown: "text-white",
  };

  const normalizeJobTitle = (title: string): string => {
    const lower = title.toLowerCase();

    if (lower.includes("developer")) return "developer";
    if (lower.includes("engineer")) return "developer";
    if (lower.includes("designer")) return "designer";
    if (lower.includes("product")) return "product manager";
    if (lower.includes("founder")) return "founder";

    return "unknown";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRegistrations();
        const registrations = data;

        const jobTitleCounts: Record<string, number> = {};
        registrations.forEach((item) => {
          const original = item.jobTitle?.trim() || "Unknown";
          const normalized = normalizeJobTitle(original);
          const key =
            normalized === "unknown" ? original.toLowerCase() : normalized;

          jobTitleCounts[key] = (jobTitleCounts[key] || 0) + 1;
        });

        const countryCounts: Record<string, { name: string; count: number }> =
          {};
        registrations.forEach((item) => {
          const code = item.country?.slice(0, 2).toUpperCase() || "XX";
          const name = item.country || "Unknown";
          if (!countryCounts[code]) {
            countryCounts[code] = { name, count: 0 };
          }
          countryCounts[code].count += 1;
        });

        const activity = registrations
          .slice(-5)
          .reverse()
          .map((item) => `${item.fullName} from ${item.city} just signed up`);

        setStats(jobTitleCounts);
        setCountries(
          Object.entries(countryCounts).map(([code, { name, count }]) => ({
            code,
            name,
            count,
          }))
        );
        setRecentActivity(activity);
      } catch (error) {
        console.error("Error fetching registrations:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 mt-20 mb-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.2, duration: 0.6 }}
    >
      <motion.div
        className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <Activity className="w-5 h-5 text-lathran-green" />
          <h3 className="text-lg font-bold text-lathran-green font-grotesk">
            Live Activity
          </h3>
        </div>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <motion.p
              key={index}
              className="text-white text-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {activity}
            </motion.p>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-5 h-5 text-lathran-orange" />
          <h3 className="text-lg font-bold text-lathran-orange font-grotesk">
            Registered
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(stats).map(([role, count]) => (
            <div key={role} className="text-center">
              <div
                className={`text-2xl font-bold font-grotesk ${
                  roleColors[role] || "text-white"
                }`}
              >
                {count}
              </div>
              <div className="text-gray-400 text-sm capitalize">{role}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <Globe className="w-5 h-5 text-purple-400" />
          <h3 className="text-lg font-bold text-purple-400 font-grotesk">
            Global Vibe
          </h3>
        </div>
        <div className="space-y-2">
          {countries.map((country, index) => (
            <motion.div
              key={country.code}
              className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-400">
                  {country.code}
                </span>
                <span className="text-white text-sm">{country.name}</span>
              </div>
              <span className="text-lathran-green font-bold">
                {country.count}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LiveStats;
