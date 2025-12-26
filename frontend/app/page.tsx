import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import UploadBox from "@/components/UploadBox";
import LocationSection from "@/components/LocationSection";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/home.png')" }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-blue-200/90 via-blue-200/40 to-transparent" />

      <div className="relative z-10 px-10 py-10">
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl text-blue-500 font-bold mb-4">
              AI-Powered <br /> Civic Issue Reporting
            </h2>
            <p className="text-blue-800 mb-6 font-bold">Upload a photo, let AI handle the rest.</p>
            <Link href="/report" className="bg-blue-600 text-white px-6 py-3 rounded-xl">
              Report an Issue
            </Link>
          </div>

          <div className="flex items-center justify-center">
            <div>
              <LocationSection />
            </div>

            <div className="w-full max-w-lg">
              <UploadBox />
              <div className="text-center mt-4">
                <Link href="/dashboard" className="text-sm text-gray-600 hover:underline">
                  Continue to AI Civic Sentinel →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h3 className="text-4xl font-bold text-blue-600 mb-8">Steps to Report</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard title="1. Snap & Upload" desc="Take a photo of the issue" />
            <FeatureCard title="2. AI Analysis" desc="Google Gemini detects problem" />
            <FeatureCard title="3. Track Status" desc="Live updates in real-time" />
          </div>
        </section>

        <div className="w-full text-center font-bold mt-10 mb-10">
          <p className="text-sm text-gray-600">From photo to resolution - powered by AI</p>
        </div>
      </div>
    </main>
  );
}
