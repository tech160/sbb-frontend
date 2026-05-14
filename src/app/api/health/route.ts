import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "sbb-frontend",
    version: process.env.APP_VERSION ?? "local",
    environment: process.env.APP_ENV ?? "local",
    timestamp: new Date().toISOString(),
  });
}
