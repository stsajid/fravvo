import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useEffect } from "react";
import { Country, City, ICountry, ICity } from "country-state-city";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import {
  Sparkles,
  ArrowRight,
  Headphones,
  Lightbulb,
  Brain,
} from "lucide-react";
import { registerUser } from "@/api/registration";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(2, "Phone number is required"),
  title: z.string().min(2, "Title must be at least 2 characters").max(100),
  country: z.string().min(1, "Please select a country"),
  city: z.string().min(1, "Please select a city"),
  reason: z
    .string()
    .min(10, "Reason must be at least 10 characters")
    .max(500, "Reason must be less than 500 characters"),
});

type FormData = z.infer<typeof formSchema>;

interface RegistrationFormProps {
  onSubmit?: (formData: FormData) => void;
}

const RegistrationForm = ({ onSubmit }: RegistrationFormProps) => {
  const { toast } = useToast();
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      title: "",
      country: "",
      city: "",
      reason: "",
    },
  });

  const selectedCountryIsoCode = form.watch("country") || "";

  useEffect(() => {
    const allCountries = Country.getAllCountries();
    setCountries(allCountries);
  }, []);

  useEffect(() => {
    if (selectedCountryIsoCode) {
      const country = Country.getCountryByCode(selectedCountryIsoCode);
      if (country) {
        const fetchedCities =
          City.getCitiesOfCountry(selectedCountryIsoCode) || [];
        setCities(fetchedCities);
        form.setValue("phone", `+${country.phonecode}`, {
          shouldValidate: true,
        });
      }
      form.setValue("city", "");
    } else {
      setCities([]);
      form.setValue("phone", "");
      form.setValue("city", "");
    }
  }, [selectedCountryIsoCode, form]);

  const handleFormSubmit = async (data: FormData) => {
    const countryData = Country.getCountryByCode(data.country);
    const countryName = countryData?.name || data.country;

    const payload = {
      fullName: data.name,
      email: data.email,
      phoneNumber: data.phone,
      jobTitle: data.title,
      country: countryName,
      city: data.city,
      whyAttend: data.reason,
    };

    console.log("🚀 Payload going to API:", payload);

    try {
      await registerUser(payload);

      toast({
        title: "Registration Successful! 🎉",
        description: "Welcome to the crew! Check your email for next steps.",
      });

      form.reset();
      setCities([]);
      onSubmit?.(data);
    } catch (err) {
      console.error("❌ API Error:", err);
      toast({
        title: "Registration failed",
        description: (err as Error).message,
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <section
        id="register"
        className="py-20 px-4 sm:px-6 to-slate-900 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-lathran-orange/5 rounded-full blur-3xl top-20 left-20 animate-pulse"></div>
          <div className="absolute w-80 h-80 bg-lathran-green/5 rounded-full blur-3xl bottom-20 right-20 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-16">
            <Sparkles className="h-16 w-16 text-lathran-orange mx-auto mb-8 animate-pulse" />
            <h2 className="text-6xl md:text-7xl font-black mb-8 font-grotesk text-white leading-tight">
              Join the{" "}
              <span className="bg-gradient-to-r from-lathran-orange to-lathran-green bg-clip-text text-transparent">
                Crew
              </span>
            </h2>
            <p className="text-2xl mb-4 font-inter text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We'll only roll when the room's full of builders.
            </p>
            <p className="text-xl font-inter text-lathran-green font-semibold">
              Bring your vibe. Bring a friend.
            </p>
          </div>

          <Card className="bg-white/[0.02] border-white/10 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_0_80px_rgba(237,132,37,0.15)] transition-all duration-700 max-w-2xl mx-auto">
            <CardContent className="p-6 sm:p-12">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleFormSubmit)}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="block text-left text-sm font-semibold text-slate-300 font-inter">
                            Full Name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your full name"
                              className="bg-white/5 border-white/20 text-white placeholder-slate-400 rounded-xl h-14 text-lg font-inter focus:border-lathran-orange focus:ring-lathran-orange/50 transition-all duration-300"
                              {...field}
                              autoComplete="name"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400 text-sm" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="block text-left text-sm font-semibold text-slate-300 font-inter">
                            Job Title *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g. Developer, Designer"
                              className="bg-white/5 border-white/20 text-white placeholder-slate-400 rounded-xl h-14 text-lg font-inter focus:border-lathran-orange focus:ring-lathran-orange/50 transition-all duration-300"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400 text-sm" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="block text-left text-sm font-semibold text-slate-300 font-inter">
                            Email Address *
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your@email.com"
                              className="bg-white/5 border-white/20 text-white placeholder-slate-400 rounded-xl h-14 text-lg font-inter focus:border-lathran-orange focus:ring-lathran-orange/50 transition-all duration-300"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400 text-sm" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="block text-left text-sm font-semibold text-slate-300 font-inter">
                            Country *
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="bg-white/5 border-white/20 text-white placeholder-slate-400 rounded-xl h-14 text-lg font-inter focus:border-lathran-orange focus:ring-lathran-orange/50 transition-all duration-300">
                                <SelectValue placeholder="🌍 Select your country" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {countries.map((country) => (
                                <SelectItem
                                  key={country.isoCode}
                                  value={country.isoCode}
                                >
                                  {country.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-red-400 text-sm" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="block text-left text-sm font-semibold text-slate-300 font-inter">
                            Phone Number *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your phone number"
                              className="bg-white/5 border-white/20 text-white placeholder-slate-400 rounded-xl h-14 text-lg font-inter focus:border-lathran-orange focus:ring-lathran-orange/50 transition-all duration-300"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400 text-sm" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="block text-left text-sm font-semibold text-slate-300 font-inter">
                            City *
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                            disabled={!selectedCountryIsoCode}
                          >
                            <FormControl>
                              <SelectTrigger className="bg-white/5 border-white/20 text-white placeholder-slate-400 rounded-xl h-14 text-lg font-inter focus:border-lathran-orange focus:ring-lathran-orange/50 transition-all duration-300">
                                <SelectValue placeholder="Select a city" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {cities.length > 0 ? (
                                cities.map((city) => (
                                  <SelectItem
                                    key={`${city.name}-${city.stateCode}-${city.latitude}`}
                                    value={city.name}
                                  >
                                    {city.name}
                                  </SelectItem>
                                ))
                              ) : (
                                <SelectItem value="-" disabled>
                                  Select a country first
                                </SelectItem>
                              )}
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-red-400 text-sm" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-left text-sm font-semibold text-slate-300 font-inter">
                          Why do you want to attend? *
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us what excites you about this session..."
                            className="bg-white/5 border-white/20 text-white placeholder-slate-400 rounded-xl h-14 text-lg font-inter focus:border-lathran-orange focus:ring-lathran-orange/50 transition-all duration-300"
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400 text-sm" />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={form.formState.isSubmitting}
                    className="w-full bg-gradient-to-r from-lathran-orange to-lathran-green hover:from-lathran-green hover:to-lathran-orange text-white font-bold py-4 md:py-6 text-lg md:text-xl transition-all duration-500 transform hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(237,132,37,0.5)] shadow-2xl rounded-2xl group relative overflow-hidden font-grotesk disabled:opacity-50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    {form.formState.isSubmitting
                      ? "Submitting..."
                      : "🎟️ Secure My Spot"}
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </form>
              </Form>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10">
                <div className="text-center group">
                  <div className="bg-lathran-green/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-lathran-green/20 transition-all duration-300">
                    <Headphones className="h-8 w-8 text-lathran-green mx-auto" />
                  </div>
                  <p className="text-sm font-inter text-slate-300 font-medium">
                    Bring headphones
                  </p>
                </div>
                <div className="text-center group">
                  <div className="bg-lathran-orange/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-lathran-orange/20 transition-all duration-300">
                    <Lightbulb className="h-8 w-8 text-lathran-orange mx-auto" />
                  </div>
                  <p className="text-sm font-inter text-slate-300 font-medium">
                    Bring weird ideas
                  </p>
                </div>
                <div className="text-center group">
                  <div className="bg-purple-500/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-purple-500/20 transition-all duration-300">
                    <Brain className="h-8 w-8 text-purple-400 mx-auto" />
                  </div>
                  <p className="text-sm font-inter text-slate-300 font-medium">
                    Bring your build brain
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Toaster />
    </>
  );
};

export default RegistrationForm;
