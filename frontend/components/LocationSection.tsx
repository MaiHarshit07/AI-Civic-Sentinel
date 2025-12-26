"use client";

import React, { useState } from "react";

export default function LocationSection() {
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);

  function useMyLocation() {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported in your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      (err) => alert("Could not get location: " + err.message)
    );
  }

  return (
    <section  className="mb-4 h-62 mx-2 p-6 bg-white rounded-xl shadow ">
      <h3 className="text-2xl font-bold text-blue-600 mb-4">Report Location</h3>
      <div className="flex items-center gap-3 mb-4">
        <button
          type="button"
          onClick={useMyLocation}
          className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700"
        >
          Use my location
        </button>
        <div className="text-sm text-gray-600">
          {coords ? `Lat ${coords.lat.toFixed(4)}, Lng ${coords.lng.toFixed(4)}` : "Location (optional)"}
        </div>
      </div>

     
    </section>
  );
}
