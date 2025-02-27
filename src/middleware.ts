import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"

const isProtectedRoute = createRouteMatcher([
    "sign-in(.*)",
    "/sign-up(.*)",
    "api/clerk/webhook",
])

export default clerkMiddleware(async (auth, req) => {
    if (isProtectedRoute(req)) auth().protect()
})

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
