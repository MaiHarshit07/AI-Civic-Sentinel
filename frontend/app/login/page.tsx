"use client";
import Image from "next/image";
export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 flex items-center justify-center px-4">
      {" "}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">
        {" "}
        {/* Header */}{" "}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          {" "}
          <div className="flex items-center gap-2">
            {" "}
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              {" "}
              AI{" "}
            </div>{" "}
            <span className="font-semibold text-gray-800">
              {" "}
              AI Civic Sentinel{" "}
            </span>{" "}
          </div>{" "}
          <button className="text-sm px-3 py-1 border rounded-md text-gray-700 hover:bg-gray-50">
            {" "}
            Login{" "}
          </button>{" "}
        </div>{" "}
        {/* Content */}{" "}
        <div className="p-6 space-y-5">
          {" "}
          <h2 className="text-xl font-bold text-gray-900">
            {" "}
            Welcome, Priyanshu! 👋{" "}
          </h2>{" "}
          <div className="bg-gray-50 rounded-xl p-4 space-y-4">
            {" "}
            <h3 className="font-semibold text-gray-800">
              {" "}
              Sign In to Report Issues{" "}
            </h3>{" "}
            <p className="text-sm text-gray-600">
              {" "}
              Upload a photo of the civic issue you'd like to report.{" "}
            </p>{" "}
            {/* Image Preview */}{" "}
            <div className="rounded-xl overflow-hidden border">
              {" "}
              <Image
                src="/pothole.jpg"
                alt="Issue"
                width={500}
                height={300}
                className="object-cover"
              />{" "}
            </div>{" "}
            {/* Upload */}{" "}
            <div className="border-2 border-dashed rounded-lg py-4 text-center text-sm text-gray-600 cursor-pointer hover:bg-gray-100">
              {" "}
              🌈 Drag & drop photos, or{" "}
              <span className="text-blue-600 font-semibold"> Browse </span>{" "}
            </div>{" "}
            {/* Button */}{" "}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
              {" "}
              Analyze with AI{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </main>
  );
}
