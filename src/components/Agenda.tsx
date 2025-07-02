import React, { useState } from "react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Badge } from "@/components/ui/badge";
import {
  Activity,
  Award,
  Bot,
  Database,
  Globe,
  Layers,
  Rocket,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Agenda = () => {
  const agendaItems = [
    {
      time: "14:00–14:15",
      task: "Kickoff & Architecture",
      icon: <Rocket className="w-6 h-6" />,
      details: "Project setup, architecture overview, GitHub repo cloning",
      duration: "15 mins",
    },
    {
      time: "14:15–14:45",
      task: "CRUD Backend Build",
      icon: <Database className="w-6 h-6" />,
      details: "FastAPI endpoints, SQLAlchemy models, database setup",
      duration: "30 mins",
    },
    {
      time: "14:45–15:15",
      task: "GenAI API Integration",
      icon: <Bot className="w-6 h-6" />,
      details: "OpenAI integration, vector embeddings, RAG implementation",
      duration: "30 mins",
    },
    {
      time: "15:15–15:45",
      task: "Frontend/UX",
      icon: <Layers className="w-6 h-6" />,
      details: "React components, Tailwind styling, state management",
      duration: "30 mins",
    },
    {
      time: "15:45–16:05",
      task: "Monitoring",
      icon: <Activity className="w-6 h-6" />,
      details: "Add logs & error tracking (Logto/Sentry basics)",
      duration: "20 mins",
    },
    {
      time: "16:05–16:30",
      task: "Deploy & Q&A",
      icon: <Globe className="w-6 h-6" />,
      details: "Live deployment on Vercel/Replit, testing, troubleshooting",
      duration: "25 mins",
    },
  ];

  return (
    <>
      <section className="py-20" id="breakdown">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center font-grotesk text-white">
                Session
                <span className="bg-gradient-to-r from-lathran-green via-lathran-green to-emerald-400 bg-clip-text text-transparent ms-2">
                  Breakdown
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                90 minutes of pure building — come prepared to code along
              </p>
            </div>

            <div className="space-y-4">
              {agendaItems.map((item, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/40 border-slate-600 backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center text-black">
                          {item.icon}
                        </div>
                        <div className="flex flex-col">
                          <Badge className="bg-orange-600 text-white border-orange-500 font-bold px-3 py-1 text-sm mb-1 w-fit">
                            {item.time}
                          </Badge>
                          <Badge className="bg-slate-700 text-gray-300 text-xs w-fit">
                            {item.duration}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-lg mb-2">
                          {item.task}
                        </h3>
                        <p className="text-gray-400">{item.details}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-orange-400 font-medium text-lg mb-4">
                So you can follow every step live, no surprises.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Card className="bg-white/10 border-green-500/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Award className="w-6 h-6 text-green-400" />
                    <h3 className="text-white font-bold text-xl">By the End</h3>
                  </div>
                  <p className="text-gray-300 text-lg mb-2">
                    You'll have a working deployed app + downloadable GenAI
                    Cookbook PDF
                  </p>
                  <p className="text-green-400 font-medium">
                    Full pre-setup checklist sent by email after signup
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Agenda;
