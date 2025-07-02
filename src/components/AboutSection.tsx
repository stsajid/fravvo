// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Zap,
//   Timer,
//   Users,
//   PenSquare,
//   Sparkles,
//   Chrome,
//   Code,
//   X,
//   CircleX,
//   Radio,
// } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
// import React from "react";

// const AboutSection = () => {
//   const features = [
//     {
//       title: "CRUD API",
//       description: "Create, Read, Update, Delete operations",
//       badge: "FastAPI + SQLAlchemy",
//       icon: PenSquare,
//       bg: "bg-lathran-orange/20",
//       color: "text-lathran-orange",
//     },
//     {
//       title: "GenAI Integration",
//       description: "OpenAI-powered chat with your data",
//       badge: "OpenAI + LangChain",
//       icon: Sparkles,
//       bg: "bg-lathran-green/20",
//       color: "text-lathran-green",
//     },
//     {
//       title: "RAG with Embeddings",
//       description: "Vector search & semantic matching",
//       badge: "ChromaDB",
//       icon: Chrome,
//       bg: "bg-purple-400/20",
//       color: "text-purple-400",
//     },
//     {
//       title: "Frontend/UX",
//       description: "Clean, responsive interface",
//       badge: "React + Tailwind",
//       icon: Code,
//       bg: "bg-purple-400/20",
//       color: "text-purple-400",
//     },
//     {
//       title: "Observability",
//       description: "Logs & error tracking setup",
//       badge: "Logto/Sentry",
//       icon: CircleX,
//       bg: "bg-lathran-orange/20",
//       color: "text-lathran-orange",
//     },
//     {
//       title: "Live Deployment",
//       description: "Push to production with CI/CD",
//       badge: "Vercel/Replit + GitHub Actions",
//       icon: Radio,
//       bg: "bg-lathran-green/20",
//       color: "text-lathran-green",
//     },
//   ];

//   const cardData = [
//     {
//       title: "One prompt.",
//       description: "Watch ideas become reality",
//       icon: "zap",
//       color: "lathran-orange",
//       border: "border-lathran-orange/30 hover:border-lathran-orange",
//       bg: "bg-lathran-orange/20 group-hover:bg-lathran-orange/30",
//     },
//     {
//       title: "90 minutes.",
//       description: "From zero to working product",
//       icon: "timer",
//       color: "lathran-green",
//       border: "border-lathran-green/30 hover:border-lathran-green",
//       bg: "bg-lathran-green/20 group-hover:bg-lathran-green/30",
//     },
//     {
//       title: "One crew.",
//       description: "Builders vibing together",
//       icon: "users",
//       color: "purple-400",
//       border: "border-purple-400/30 hover:border-purple-400",
//       bg: "bg-purple-400/20 group-hover:bg-purple-400/30",
//       extraClass: "md:col-span-1 md:mx-0 mx-auto max-w-sm md:max-w-none",
//     },
//   ];
//   const iconMap = {
//     zap: Zap,
//     timer: Timer,
//     users: Users,
//   };

//   return (
//     <section className="my-28">
//       <div className="absolute inset-0">
//         <div className="absolute w-72 h-72 bg-lathran-green/5 rounded-full blur-3xl top-10 right-10"></div>
//         <div className="absolute w-96 h-96 bg-lathran-orange/5 rounded-full blur-3xl bottom-10 left-10"></div>
//       </div>

//       <div className="max-w-6xl mx-auto text-center relative z-10">
//         <div className="mb-12 sm:mb-20">
//           <h2 className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 sm:mb-12 font-grotesk leading-tight px-4 font-grotesk">
//             From{" "}
//             <span className="bg-gradient-to-r from-lathran-orange via-lathran-orange to-yellow-400 bg-clip-text text-transparent">
//               Vibe
//             </span>{" "}
//             to{" "}
//             <span className="bg-gradient-to-r from-lathran-green via-lathran-green to-emerald-400 bg-clip-text text-transparent">
//               Viable
//             </span>
//           </h2>

//           <div className="text-xl sm:text-2xl md:text-3xl text-white space-y-6 sm:space-y-10 mb-12 sm:mb-20 font-inter max-w-5xl mx-auto leading-relaxed px-4">
//             <p className="drop-shadow-lg">
//               This isn't a webinar. It's not a tutorial. It's not pre-recorded.
//             </p>
//             <p className="text-2xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent font-grotesk">
//               It's the future of creative work.
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 mb-16 sm:mb-24 px-4">
//           <Card className="bg-gradient-to-br from-lathran-blue/80 to-slate-800/80 border-lathran-orange/30 hover:border-lathran-orange transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 rounded-3xl group backdrop-blur-sm shadow-2xl">
//             <CardContent className="p-6 sm:p-10 text-center">
//               <div className="mb-6 sm:mb-8 relative">
//                 <Zap className="h-16 sm:h-20 w-16 sm:w-20 mx-auto text-lathran-orange group-hover:scale-110 transition-transform duration-300" />
//                 <div className="absolute inset-0 bg-lathran-orange/20 rounded-full blur-xl group-hover:bg-lathran-orange/30 transition-all duration-300"></div>
//               </div>
//               <div className="text-2xl sm:text-4xl font-bold text-lathran-orange mb-4 sm:mb-6 font-grotesk">
//                 One prompt.
//               </div>
//               <p className="text-white font-inter text-lg sm:text-xl">
//                 Watch ideas become reality
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="bg-gradient-to-br from-lathran-blue/80 to-slate-800/80 border-lathran-green/30 hover:border-lathran-green transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 rounded-3xl group backdrop-blur-sm shadow-2xl">
//             <CardContent className="p-6 sm:p-10 text-center">
//               <div className="mb-6 sm:mb-8 relative">
//                 <Timer className="h-16 sm:h-20 w-16 sm:w-20 mx-auto text-lathran-green group-hover:scale-110 transition-transform duration-300" />
//                 <div className="absolute inset-0 bg-lathran-green/20 rounded-full blur-xl group-hover:bg-lathran-green/30 transition-all duration-300"></div>
//               </div>
//               <div className="text-2xl sm:text-4xl font-bold text-lathran-green mb-4 sm:mb-6 font-grotesk">
//                 90 minutes.
//               </div>
//               <p className="text-white font-inter text-lg sm:text-xl">
//                 From zero to working product
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="bg-gradient-to-br from-lathran-blue/80 to-slate-800/80 border-purple-400/30 hover:border-purple-400 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 rounded-3xl group backdrop-blur-sm shadow-2xl md:col-span-1 md:mx-0 mx-auto max-w-sm md:max-w-none">
//             <CardContent className="p-6 sm:p-10 text-center">
//               <div className="mb-6 sm:mb-8 relative">
//                 <Users className="h-16 sm:h-20 w-16 sm:w-20 mx-auto text-purple-400 group-hover:scale-110 transition-transform duration-300" />
//                 <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-xl group-hover:bg-purple-400/30 transition-all duration-300"></div>
//               </div>
//               <div className="text-2xl sm:text-4xl font-bold text-purple-400 mb-4 sm:mb-6 font-grotesk">
//                 One crew.
//               </div>
//               <p className="text-white font-inter text-lg sm:text-xl">
//                 Builders vibing together
//               </p>
//             </CardContent>
//           </Card>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 mb-16 sm:mb-24 px-4">
//           {cardData.map((card, index) => {
//             const IconComponent = iconMap[card.icon as keyof typeof iconMap];

//             return (
//               <Card
//                 key={index}
//                 className={`h-full flex flex-col justify-between bg-gradient-to-br from-lathran-blue/80 to-slate-800/80 ${card.border} transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 rounded-3xl group backdrop-blur-sm shadow-2xl`}
//               >
//                 <CardContent className="p-6 sm:p-10 text-center h-full flex flex-col">
//                   <div className="mb-6 sm:mb-8 relative">
//                     <IconComponent
//                       className={`h-16 sm:h-20 w-16 sm:w-20 mx-auto text-${card.color} group-hover:scale-110 transition-transform duration-300`}
//                     />
//                     <div
//                       className={`absolute inset-0 rounded-full blur-xl ${card.bg} transition-all duration-300`}
//                     ></div>
//                   </div>
//                   <div
//                     className={`text-2xl sm:text-4xl font-bold text-${card.color} mb-4 sm:mb-6 font-grotesk`}
//                   >
//                     {card.title}
//                   </div>
//                   <p className="text-white font-inter text-lg sm:text-xl flex-grow">
//                     {card.description}
//                   </p>
//                 </CardContent>
//               </Card>
//             );
//           })}
//         </div>

//         <Card
//           id="session"
//           className="bg-black/60 backdrop-blur-lg rounded-3xl border border-lathran-orange/20 shadow-2xl hover:shadow-[0_0_40px_rgba(237,132,37,0.3)] transition-all duration-500 mx-4"
//         >
//           <CardContent className="p-8 sm:p-16">
//             <h3 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center font-grotesk text-white">
//               In this session:
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-2 text-white">
//               {features.map((feature, index) => {
//                 const Icon = feature.icon;
//                 return (
//                   <div
//                     key={index}
//                     className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-8 group"
//                   >
//                     <div
//                       className={`p-3 sm:p-4 ${feature.bg} rounded-full group-hover:opacity-80 transition-colors duration-300 flex-shrink-0 mx-auto sm:mx-0`}
//                     >
//                       {Icon && (
//                         <Icon
//                           className={`h-8 sm:h-10 w-8 sm:w-10 ${feature.color} transition-transform duration-300`}
//                         />
//                       )}
//                     </div>

//                     <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1 sm:gap-3">
//                       <p className="text-lg font-semibold mb-[-8px]">
//                         {feature.title}
//                       </p>

//                       <p className="text-base font-inter leading-relaxed font-[100] text-gray-200">
//                         {feature.description}
//                       </p>

//                       <Badge
//                         variant="outline"
//                         className="border-lathran-orange/50 text-lathran-orange rounded-full font-inter hover:bg-lathran-orange/20 transition-colors justify-center"
//                       >
//                         {feature.badge}
//                       </Badge>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </CardContent>
//         </Card>

//         <div className="w-full flex justify-center">
//           <Card className="bg-white/10 border-lathran-green/30 rounded-2xl hover:border-lathran-green/50 transition-all duration-300 mt-20 max-w-[1120px] mx-2">
//             <CardContent className="text-center px-4 py-6 sm:px-6 sm:py-8">
//               <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-lathran-orange">
//                 Complete Package
//               </h2>
//               <p className="text-base sm:text-lg font-medium text-lathran-green">
//                 You'll walk away with the deployed repo, downloadable cookbook
//                 to reuse this pattern, and confidence to build your next AI
//                 project.
//               </p>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
