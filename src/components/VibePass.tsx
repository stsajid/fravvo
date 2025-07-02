
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Share2, Sparkles, Users, Calendar, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface VibePassProps {
  userName: string;
  userEmail: string;
}

const VibePass = ({ userName, userEmail }: VibePassProps) => {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "Download ready! 📱",
      description: "Your Vibe Pass is being prepared for download.",
    });
  };

  const handleShare = () => {
    const shareText = `Just secured my spot for Vibe Coding Live with @LathranSoft! Real-time AI building session with Vinay R Kumar. Who else is vibing? #VibeCodeLive`;
    if (navigator.share) {
      navigator.share({
        title: 'Vibe Coding Live - I\'m In!',
        text: shareText,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(`${shareText} ${window.location.href}`);
      toast({
        title: "Link copied! 📋",
        description: "Share your Vibe Pass on social media",
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <Card className="bg-gradient-to-br from-lathran-blue via-slate-800 to-lathran-blue border-2 border-lathran-orange/50 max-w-md w-full relative overflow-hidden">

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-4 right-4 w-2 h-2 bg-lathran-green rounded-full animate-sparkle"></div>
          <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-lathran-orange rounded-full animate-sparkle delay-700"></div>
          <div className="absolute top-1/2 left-4 w-1 h-1 bg-lathran-green rounded-full animate-sparkle delay-1000"></div>
        </div>

        <CardContent className="p-8 text-center relative z-10">
          <div className="mb-6">
            <Sparkles className="h-12 w-12 text-lathran-orange mx-auto mb-4 animate-pulse" />
            <Badge className="bg-lathran-green text-white text-lg px-4 py-2 rounded-full mb-4 animate-glow">
              🎟️ VIBE PASS
            </Badge>
            <h2 className="text-3xl font-black text-white mb-2 font-poppins">You're In!</h2>
            <p className="text-lathran-green text-lg font-semibold">{userName}</p>
          </div>

          <div className="bg-lathran-blue/50 rounded-2xl p-6 mb-6 border border-lathran-orange/20">
            <h3 className="text-xl font-bold mb-4 text-lathran-orange font-poppins">Session Details</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-lathran-green" />
                <span className="text-gray-300">Date: TBA (You'll be notified)</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-lathran-orange" />
                <span className="text-gray-300">Duration: 90 mins live</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">Your crew awaits</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-lathran-green/20 to-lathran-orange/20 rounded-2xl p-4 mb-6">
            <p className="text-sm text-gray-300 leading-relaxed">
              🎧 Bring headphones<br />
              ✍️ Bring weird ideas<br />
              🧠 Bring your build brain
            </p>
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
              onClick={handleShare}
              variant="outline"
              className="flex-1 border-lathran-green text-lathran-green hover:bg-lathran-green hover:text-white rounded-full font-semibold"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Private session invite coming soon to {userEmail}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default VibePass;
