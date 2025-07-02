import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Globe, Star, Users } from "lucide-react";

const EventDetails = () => {
  return (
    <section
      className="py-12 sm:py-20 px-4 sm:px-6 bg-lathran-blue"
      id="session"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center font-grotesk text-white">
          Session <span className="text-lathran-orange">Details</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3 sm:gap-4 group">
              <div className="p-2 sm:p-3 bg-lathran-green/20 rounded-full group-hover:bg-lathran-green/30 transition-colors duration-300 flex-shrink-0">
                <Calendar className="h-6 sm:h-8 w-6 sm:w-8 text-lathran-green" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-400">Date</p>
                <p className="text-base sm:text-lg font-semibold">
                  TBA (confirmed once registration minimum is met)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 group">
              <div className="p-2 sm:p-3 bg-lathran-orange/20 rounded-full group-hover:bg-lathran-orange/30 transition-colors duration-300 flex-shrink-0">
                <Clock className="h-6 sm:h-8 w-6 sm:w-8 text-lathran-orange" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-400">Duration</p>
                <p className="text-base sm:text-lg font-semibold">
                  90 mins (Live)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 group">
              <div className="p-2 sm:p-3 bg-purple-400/20 rounded-full group-hover:bg-purple-400/30 transition-colors duration-300 flex-shrink-0">
                <Globe className="h-6 sm:h-8 w-6 sm:w-8 text-purple-400" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-400">Platform</p>
                <p className="text-base sm:text-lg font-semibold">
                  Microsoft Teams (link shared privately)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 group">
              <div className="p-2 sm:p-3 bg-yellow-400/20 rounded-full group-hover:bg-yellow-400/30 transition-colors duration-300 flex-shrink-0">
                <Star className="h-6 sm:h-8 w-6 sm:w-8 text-yellow-400" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-400">Cost</p>
                <p className="text-base sm:text-lg font-semibold">
                  Free — only registered participants allowed
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-6 md:mt-0">
            <Card className="bg-white/10 border-lathran-red/30 p-6 sm:p-8 text-center rounded-2xl">
              <Users className="h-12 sm:h-16 w-12 sm:w-16 text-lathran-orange mx-auto mb-3 sm:mb-4 animate-float" />
              <Badge className="bg-lathran-red text-white text-base sm:text-lg px-3 sm:px-4 py-1 sm:py-2 rounded-full">
                100 seats max
              </Badge>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
