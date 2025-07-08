import { Card, CardContent } from "./ui/card";
import { Code, Timer, Users, Zap } from "lucide-react";

const Info = () => {
  const data = [
    {
      icon: <Zap />,
      glow: "bg-lathran-orange/20 group-hover:bg-lathran-orange/30",
      title: "Working CRUD GenAI App",
      desc: "Full-stack application deployed live",
      color: "text-lathran-orange",
      border: "border-lathran-orange/30 hover:border-lathran-orange",
    },
    {
      icon: <Timer />,
      glow: "bg-lathran-green/20 group-hover:bg-lathran-green/30",
      title: "Starter Cookbook",
      desc: "Downloadable PDF to reuse this pattern",
      color: "text-lathran-green",
      border: "border-lathran-green/30 hover:border-lathran-green",
    },
    {
      icon: <Code/>,
      glow: "bg-purple-400/20 group-hover:bg-purple-400/30",
      title: "Deployable Code",
      desc: "Clean repo you can fork & scale",
      color: "text-lathran-orange",
      border: "border-purple-400/30 hover:border-purple-400",
    },
    {
      icon: <Users />,
      glow: "bg-purple-400/20 group-hover:bg-purple-400/30",
      title: "Skills to Deploy",
      desc: "Confidence to build your next AI project",
      color: "text-purple-400",
      border: "border-purple-400/30 hover:border-purple-400",
    },
  ];

  return (
    <div id="outcomes" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-24 px-0 mx-4">
      {data.map(({ icon, glow, title, color, border, desc }, i) => (
        <Card
          key={i}
          className={`bg-lathran-blue/70 border ${border} hover:bg-lathran-blue/90 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group rounded-2xl w-full max-w-[360px] min-w-[250px] mx-auto `}
        >
          <CardContent className="py-6 px-3 text-center">
            <div
              className={`relative h-12 w-12 mx-auto ${color} group-hover:scale-110 transition-transform duration-300 py-2`}
             
            >
              {icon}
              <div
                className={`absolute inset-0 ${glow} rounded-full blur-xl transition-all duration-300`}
              />
            </div>

            <p
              className="text-sm sm:text-base font-semibold text-white group-hover:text-gray-100 transition-colors duration-300 leading-relaxed mb-1"
              style={{ letterSpacing: "0.025em" }}
            >
              {title}
            </p>

            <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-200 transition duration-300">
              {desc}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Info;
