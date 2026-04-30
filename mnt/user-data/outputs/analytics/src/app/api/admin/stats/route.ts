import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export async function GET() {
  try {
    const [visits, pageCounts, totalVisits] = await Promise.all([
      redis.lrange("visits", 0, 99),
      redis.hgetall("page_counts"),
      redis.get("total_visits"),
    ]);

    const parsed = (visits as string[]).map((v) => {
      try {
        return typeof v === "string" ? JSON.parse(v) : v;
      } catch {
        return v;
      }
    });

    return NextResponse.json({
      visits: parsed,
      pageCounts: pageCounts || {},
      totalVisits: Number(totalVisits) || 0,
    });
  } catch (error) {
    console.error("Stats error:", error);
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
  }
}
