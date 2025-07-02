import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const AudienceSection = () => {
  const audience = [
    {
      title: "Engineers",
      description: "Learn deployable GenAI patterns and production practices",
    },
    {
      title: "Technical PMs",
      description: "See how AI features ship faster with the right stack",
    },
    {
      title: "Startup Builders",
      description: "Build MVPs without burning through runway",
    },
    {
      title: "UX Designers",
      description: "Understand AI UX flows and implementation patterns",
    },
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center font-grotesk text-white">
          Is This For <span className="text-lathran-green">You</span>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {audience.map((item, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/15 hover:border-lathran-green/50 transition-all duration-300 transform hover:scale-105 rounded-2xl shadow-xl"
            >
              <CardContent className="p-6 sm:p-8 flex gap-4">
                <CheckCircle className="h-6 sm:h-7 w-6 sm:w-7 text-lathran-green flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="text-white text-base sm:text-lg font-bold mb-1 font-inter">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base font-inter">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-black/60 backdrop-blur-lg border border-lathran-orange/40 rounded-2xl shadow-xl sm:mx-0 mt-4">
          <CardContent className="px-6 sm:px-8 py-6 sm:py-8">
            <p
              className="text-lg sm:text-xl font-bold text-white font-grotesk text-center"
              style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.25rem)" }}
            >
              This is a live interaction zone, not a passive audience event.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AudienceSection;
