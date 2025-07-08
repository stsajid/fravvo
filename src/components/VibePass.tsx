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
import { toPng } from "html-to-image";

interface VibePassProps {
  userName: string;
  userEmail: string;
  onClose: () => void;
}

const VibePass = ({ userName, userEmail, onClose }: VibePassProps) => {
  const { toast } = useToast();
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const modalRef = useRef(null);
  const shareModalRef = useRef(null);
  const SHARE_LINK = `https://vibe.fravvo.ai/pass?name=${encodeURIComponent(
    userName
  )}&email=${encodeURIComponent(userEmail)}`;

  const handleDownload = async () => {
    setIsDownloading(true);
    await new Promise((r) => setTimeout(r, 100));
    const input = modalRef.current;
    if (!input) return;
    try {
      const dataUrl = await toPng(input, {
        filter: (node) => !node.classList?.contains("hidden-for-download"),
        cacheBust: true,
      });
      const dpi = 96;
      const pxToMm = (px: number) => (px * 14.5) / dpi;
      const img = new Image();
      img.src = dataUrl;
      await new Promise((resolve) => {
        img.onload = resolve;
      });

      const pdfWidth = pxToMm(img.naturalWidth);
      const pdfHeight = pxToMm(img.naturalHeight);

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [pdfWidth, pdfHeight],
      });

      pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`VibePass - ${userName}.pdf`);

      toast({
        title: "Download ready!",
        description: "Your Vibe Pass has been downloaded.",
      });
    } catch (error) {
      console.error("Error generating image", error);
      toast({
        title: "Error",
        description: "Failed to generate your pass image.",
    });
    } finally {
      setIsDownloading(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
      if (
        shareModalRef.current &&
        !shareModalRef.current.contains(event.target)
      ) {
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
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6 pointer-events-auto"
      style={{ cursor: "default" }}
    >
      <Card
        ref={modalRef}
        className={`bg-gradient-to-br from-lathran-blue via-slate-800 to-lathran-blue border-2 border-lathran-orange/50 w-full max-w-md relative overflow-hidden shadow-xl ${
          isDownloading ? "rounded-none" : "rounded-xl"
        }`}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className={`absolute top-4 right-4 p-1 rounded-full bg-lathran-orange hover:bg-lathran-orange/80 text-white z-20  ${
            isDownloading ? "hidden-for-download" : ""
          }`}
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

          <div className={`flex gap-3 ${
              isDownloading ? "hidden-for-download" : ""
            }`}
          >
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
                  className="absolute top-2 right-2 p-1 rounded-full bg-lathran-orange hover:bg-lathran-orange/80 text-white"
                >
                  <X className="h-4 w-4 text-white" />
                </button>
                <h2 className="text-xl font-bold text-center py-2 font-grotesk text-black">
                  Share Your <span className="text-lathran-orange">Vibe</span>{" "}
                  Pass
                </h2>
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
                      padding: "0.75rem",
                      borderRadius: "0.75rem",
                      background: "#172B3D",
                    },
                    title: { display: "none" },
                    copyContainer: { display: "none" },
                  }}
                />

                <div className="mb-4">
                  <div className="flex items-center gap-2 shadow-[inset_0_0_0.5px_rgba(255,255,255,0.1),0_0_0_1px_rgba(255,255,255,0.05),0_1px_3px_rgba(0,0,0,0.3)] transition-shadow duration-300 rounded-lg px-3 py-2 my-4 shadow-inner">
                    <input
                      type="text"
                      value={SHARE_LINK}
                      readOnly
                      className="flex-1 bg-transparent text-black text-sm font-mono focus:outline-none cursor-default"
                    />
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(SHARE_LINK);
                        toast({
                          title: "Link copied!",
                          description:
                            "The share link has been copied to your clipboard.",
                        });
                      }}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-lathran-orange hover:bg-lathran-orange/80 text-white text-xs font-semibold rounded-md transition-all duration-150"
                    >
                      Copy
                    </button>
                  </div>
                </div>
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
