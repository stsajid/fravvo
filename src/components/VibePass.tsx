
import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  Share2,
  Sparkles,
  Users,
  Calendar,
  Clock,
  X,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import jsPDF from "jspdf";
import { ShareSocial } from "react-share-social";
import { motion } from "framer-motion";

interface VibePassProps {
  userName: string;
  userEmail: string;
  onClose: () => void;
}

const SHARE_LINK = "https://vibe.fravvo.ai/";

const VibePass = ({ userName, userEmail, onClose }: VibePassProps) => {
  const { toast } = useToast();
  const [showShareMenu, setShowShareMenu] = useState(false);

  const modalRef = useRef(null);
  const shareModalRef = useRef(null);

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.setTextColor("#F97316");
    doc.text("🎟️ VIBE PASS", 20, 20);
    doc.setTextColor("#22C55E");
    doc.setFontSize(18);
    doc.text(`You're In!`, 20, 40);
    doc.setFontSize(16);
    doc.text(`Name: ${userName}`, 20, 55);
    doc.text(`Email: ${userEmail}`, 20, 65);
    doc.setFontSize(14);
    doc.text("Session Details:", 20, 80);
    doc.text("Date: TBA (You'll be notified)", 30, 90);
    doc.text("Duration: 90 mins live", 30, 100);
    doc.text("Your crew awaits", 30, 110);
    doc.save("VibePass.pdf");
    toast({
      title: "Download ready! 📱",
      description: "Your Vibe Pass PDF has been downloaded.",
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
      if (shareModalRef.current && !shareModalRef.current.contains(event.target)) {
        setShowShareMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleShareModalClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6 pointer-events-auto" style={{ cursor: "default" }}>
      <Card
        ref={modalRef}
        className="bg-gradient-to-br from-lathran-blue via-slate-800 to-lathran-blue border-2 border-lathran-orange/50 w-full max-w-md relative overflow-hidden rounded-xl shadow-xl"
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-1 rounded-full bg-lathran-orange hover:bg-lathran-orange/80 text-white z-20"
        >
          <X className="h-5 w-5" />
        </button>

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
            <p className="text-lathran-green text-lg font-semibold">{userName}</p>
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

          <div className="flex gap-3">
            <Button
              onClick={handleDownload}
              className="flex-1 bg-lathran-orange hover:bg-lathran-orange/80 text-white rounded-full font-semibold"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Pass
            </Button>
            <Button
              onClick={() => {
                console.log("Share button clicked. Toggling share modal.");
                setShowShareMenu((prev) => !prev);
              }}
              variant="outline"
              className="flex-1 border-lathran-green text-lathran-green hover:bg-lathran-green hover:text-white rounded-full font-semibold"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>

          {showShareMenu && (
            <motion.div
              ref={shareModalRef}
              onClick={handleShareModalClick}
              className="absolute inset-0 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white p-3 rounded-lg shadow-lg max-w-xs w-full relative">
                <button
                  onClick={() => setShowShareMenu(false)}
                  className="absolute top-2 right-2 p-2 rounded-full bg-gray-300 hover:bg-gray-400"
                >
                  <X className="h-5 w-5 text-gray-600" />
                </button>
                <h3 className="text-center text-lg font-bold text-gray-800 mb-4">
                  Share Your Vibe Pass!
                </h3>
                <ShareSocial
                  url={SHARE_LINK}
                  socialTypes={[
                    "facebook",
                    "whatsapp",
                    "twitter",
                    "linkedin",
                    "telegram",
                    "reddit",
                    "line",
                    "instapaper",
                    "hatena",
                    "email",
                    "livejournal",
                    "ok",
                    "mailru",
                  ]}
                  onSocialButtonClicked={(platform: string) => {
                    console.log(`Clicked platform: ${platform}`);
                    toast({
                      title: `${platform} ready! 📋`,
                      description: `Sharing link via ${platform}`,
                    });
                    setShowShareMenu(false);
                  }}
                  style={{
                    root: {
                      background: "#182F41",
                      padding: "0.75rem",
                      borderRadius: "0.75rem",
                    },
                    title: { display: "none" },
                    copyContainer: { display: "none" },
                  }}
                />
              </div>
            </motion.div>
          )}

          <p className="text-xs text-gray-500 mt-4">
            Private session invite coming soon to {userEmail}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default VibePass;
