import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ToolsSection = () => {
  const tools = [
    {
      image: "/visual-studio.png",
      name: "VS Code",
      color: "text-lathran-orange",
      badge: "IDE",
    },
    {
      image: "/github.png",
      name: "GitHub Actions",
      color: "text-lathran-orange",
      badge: "CI/CD",
    },
    {
      image: "/FastAPI.svg",
      name: "FastAPI",
      color: "text-lathran-orange",
      badge: "Backend",
    },
    {
      image: "chatgpt.png",
      name: "OpenAI API",
      color: "text-lathran-orange",
      badge: "AI",
    },
    {
      image: "/langchain.png",
      name: "LangChain",
      color: "text-lathran-orange",
      badge: "AI Framework",
    },
    {
      image: "/chroma.svg",
      name: "ChromaDB",
      color: "text-lathran-green",
      badge: "Vector DB",
    },
    {
      image: "/react.png",
      name: "React",
      color: "text-blue-400",
      badge: "Frontend",
    },
    {
      image: "/tailwind.png",
      name: "Tailwind",
      color: "text-blue-400",
      badge: "Styling",
    },
    {
      image: "/vercel.svg",
      name: "Vercel",
      color: "text-purple-400",
      badge: "Deployment",
    },
    {
      image: "/replit.svg",
      name: "Replit",
      color: "text-purple-400",
      badge: "Deployment",
    },
    {
      image: "/sentry.svg",
      name: "Sentry",
      color: "text-purple-400",
      badge: "Monitoring",
    },
    {
      image: "/Logto 1.svg",
      name: "Logto",
      color: "text-purple-400",
      badge: "Logging",
    },
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-2 bg-slate-800/30" id="tool">
      <div className="max-w-[1120px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center font-grotesk text-white">
          Tools You'll <span className="text-lathran-orange">See</span>
        </h2>

       <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5 md:gap-5 lg:gap-6">
          {tools.map((tool, index) => (
            <Card
              key={index}
              className="bg-lathran-blue/70 border-gray-600 hover:bg-lathran-blue/90 hover:border-lathran-orange/50 transition-all duration-300 transform hover:scale-80 hover:-translate-y-2 group rounded-2xl min-w-[170px]"
            >
              <CardContent className="p-4 sm:p-6 text-center">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="h-10 sm:h-12 w-10 sm:w-12 mx-auto mb-3 sm:mb-4 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <p
                  className="text-sm sm:text-base font-medium text-white group-hover:text-gray-100 transition-colors duration-300 leading-relaxed whitespace-nowrap"
                  style={{ letterSpacing: "0.025em" }}
                >
                  {tool.name}
                </p>

                <Badge
                  variant="outline"
                  className="border-lathran-orange/50 text-lathran-orange rounded-full font-inter hover:bg-lathran-orange/20 transition-colors justify-center"
                >
                  {tool.badge}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="w-full flex justify-center">
          <Card className="bg-white/10 border-lathran-green/30 rounded-2xl hover:border-lathran-green/50 transition-all duration-300 mt-20 max-w-[1120px] mx-2">
            <CardContent className="text-center px-4 py-6 sm:px-6 sm:py-8">
              <p className="text-base sm:text-lg font-medium text-lathran-green">
                Real backend, real AI integration, real deployment — this is
                production code you can fork & scale.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
