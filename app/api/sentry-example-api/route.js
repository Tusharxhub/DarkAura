import { NextResponse } from "next/server";

// Disabled for static export compatibility
// export const dynamic = "force-dynamic";

// For static export, this API route is disabled.
export default function handler(req, res) {
  res.status(404).json({ error: "API not available in static export." });
}
