import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  request.cookies.set("token", "token TEST");
  const response = NextResponse.rewrite(new URL("/", request.url));
  response.cookies.set("token", "token TEST");

  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/",
};
