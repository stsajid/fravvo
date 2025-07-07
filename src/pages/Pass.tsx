import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Users, Calendar, Clock, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const Pass = () => {
  const [searchParams] = useSearchParams();

  const userName = searchParams.get("name") || "Guest";
  const userEmail = searchParams.get("email") || "noemail@example.com";
  const modalRef = useRef(null);

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6 pointer-events-auto"
      style={{ cursor: "default" }}
    >
      <Card
        ref={modalRef}
        className="bg-gradient-to-br from-lathran-blue via-slate-800 to-lathran-blue border-2 border-lathran-orange/50 w-full max-w-md relative overflow-hidden rounded-xl shadow-xl"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-4 right-4 w-2 h-2 bg-lathran-green rounded-full animate-sparkle"></div>
          <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-lathran-orange rounded-full animate-sparkle delay-700"></div>
          <div className="absolute top-1/2 left-4 w-1 h-1 bg-lathran-green rounded-full animate-sparkle delay-1000"></div>
        </div>

        <CardContent className="p-8 text-center relative z-10 space-y-4">
          <div className="space-y-2">
            <Sparkles className="h-12 w-12 text-lathran-orange mx-auto animate-pulse" />
            <Badge className="bg-lathran-green text-white text-lg px-4 py-2 rounded-full animate-glow">
              🎟️ VIBE PASS
            </Badge>
            <h2 className="text-3xl font-black text-white font-poppins">
              You're In!
            </h2>
            <p className="text-lathran-green text-lg font-semibold">
              {userName}
            </p>
          </div>

          <div className="bg-lathran-blue/50 rounded-2xl p-4 border border-lathran-orange/20 space-y-3 text-left">
            <h3 className="text-xl font-bold text-lathran-orange font-poppins">
              Session Details
            </h3>
            <div className="flex items-center gap-3 text-gray-300">
              <Calendar className="h-5 w-5 text-lathran-green" />
              <span>Date: TBA (You'll be notified)</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Clock className="h-5 w-5 text-lathran-orange" />
              <span>Duration: 90 mins live</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Users className="h-5 w-5 text-purple-400" />
              <span>Your crew awaits</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-lathran-green/20 to-lathran-orange/20 rounded-2xl px-6 py-2 flex items-center justify-around flex-wrap gap-2 text-gray-300 text-sm font-medium">
            <div className="flex items-center gap-2">
              <span className="text-lg">🎧</span>
              <span>Bring headphones</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">✍️</span>
              <span>Bring weird ideas</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🧠</span>
              <span>Bring your build brain</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Private session invite coming soon to {userEmail}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Pass;
