import React from "react";
import { Card, CardContent } from "./ui/card";
import { BookOpen, Code, Workflow, Zap } from "lucide-react";

const Expact = () => {
  return (
    <section className="py-20 bg-slate-800/20 backdrop-blur-sm m-2" id="What to Expect">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center font-grotesk text-white">
            What to
            <span className="text-lathran-orange"> Expect</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/10 border-green-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-lathran-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-3">
                      Production-grade code
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Real backend, real AI integration, real deployment. No toy
                      examples — this is code you can fork and scale.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-purple-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-3">
                      Complete cookbook
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Step-by-step guide, reusable patterns, deployment scripts
                      — everything needed to recreate and extend this project.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-orange-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-lathran-orange/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-3">
                      Fast-paced & intensive
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      90 minutes of pure building. Come prepared to code along
                      and ask questions in real-time.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-lathran-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Workflow className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-3">
                      Professional workflow
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Real debugging, real problem-solving, real development
                      practices used in production environments.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expact;
