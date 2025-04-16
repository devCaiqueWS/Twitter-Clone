import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Fetch all tweets
    const tweets = await prisma.tweet.findMany({
      include: { user: true },
    });
    return NextResponse.json(tweets, { status: 200 });
  } catch (error) {
    console.error("Error fetching tweets:", error);
    return NextResponse.json({ message: "Failed to fetch tweets" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { content, userId } = await req.json();

    // Create a new tweet
    const newTweet = await prisma.tweet.create({
      data: {
        content,
        userId,
      },
    });
    return NextResponse.json(newTweet, { status: 201 });
  } catch (error) {
    console.error("Error creating tweet:", error);
    return NextResponse.json({ message: "Failed to create tweet" }, { status: 500 });
  }
}