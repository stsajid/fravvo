import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Linkedin } from "lucide-react";

const HostSection = () => {
  return (
    <section className="py-20 px-6 bg-lathran-blue" id="host">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center font-grotesk text-white"
          style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
        >
          Meet Your <span className="text-lathran-green">Host</span>
        </h2>

        <Card className="bg-gradient-to-r from-slate-800 to-lathran-blue border-lathran-green/30 overflow-hidden rounded-2xl">
          <CardContent className="p-0">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-lathran-green to-lathran-orange p-8 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 animate-float">
                  <img
                    src="/lovable-uploads/4d657a95-14f9-4056-ba3f-946f1d7d9a5f.png"
                    alt="Vinay R Kumar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <h3
                  className="text-4xl font-bold mb-2 font-grotesk text-white"
                  style={{ textShadow: "0 0 15px rgba(255, 255, 255, 0.2)" }}
                >
                  Vinay R Kumar
                </h3>
                <p className="text-lathran-green text-xl mb-6 font-inter font-semibold">
                  CTO | 20+ years scaling AI systems
                </p>

                <p
                  className="text-gray-200 mb-6 leading-relaxed font-inter text-lg"
                  style={{ textShadow: "0 1px 2px rgba(0,0,0,0.4)" }}
                >
                  Vinay has led large AI teams at Tesco, Landmark Group, and Sky
                  - building AI-active workflows that boost speed, cut clutter,
                  and help teams ship fast.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4 mb-6 w-max mx-auto text-center">
                  <Badge
                    variant="outline"
                    className="border-lathran-orange/50 text-lathran-orange rounded-full font-inter hover:bg-lathran-orange/20 transition-colors justify-center"
                  >
                    Tesco
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-lathran-green/50 text-lathran-green rounded-full font-inter hover:bg-lathran-green/20 transition-colors justify-center"
                  >
                    Landmark Group
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-purple-400/50 text-purple-400 rounded-full font-inter hover:bg-purple-400/20 transition-colors justify-center"
                  >
                    Sky
                  </Badge>
                </div>

                <Button
                  variant="outline"
                  className="border-lathran-green text-lathran-green hover:bg-lathran-green hover:text-white hover:shadow-[0_0_20px_rgba(137,173,61,0.7)] rounded-full transition-all duration-300 font-grotesk "
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/vinayrkumar/",
                      "_blank"
                    )
                  }
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HostSection;
