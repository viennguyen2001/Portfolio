import { type NextRequest, NextResponse } from "next/server";
import { getPageViewsByDataRange, getWebsiteStats } from "@/services/umami";
import { UMAMI_ACCOUNT } from "@/common/constants/umami";

export const GET = async (req: NextRequest) => {
  const { websites } = UMAMI_ACCOUNT;

  try {
    let domain = req.nextUrl.searchParams.get("domain");

    if (!domain) {
      domain = websites?.[0]?.domain;
      if (!domain) {
        return NextResponse.json(
          { message: "No available domain" },
          { status: 400 },
        );
      }
    }

    const pageViews = await getPageViewsByDataRange(domain);
    const stats = await getWebsiteStats(domain);

    if (pageViews.status >= 400 || stats.status >= 400) {
      return NextResponse.json(
        {
          message:
            pageViews.error || stats.error || "Failed to fetch Umami data",
        },
        { status: pageViews.status || stats.status },
      );
    }

    return NextResponse.json(
      {
        ...pageViews.data,
        websiteStats: stats.data,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
