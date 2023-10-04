import { Router } from "express"
import { wrapHandler } from "@medusajs/medusa"
import streamposRoutes from "./streampos"
import customRouteHandler from "./streampos-route-handler"

// Initialize a custom router
const router = Router()

export function attachAdminRoutes(adminRouter: Router) {
  // Attach our router to a custom path on the admin router
  adminRouter.use("/streanpos", router)

  // Define a GET endpoint on the root route of our custom path
  router.get("/", wrapHandler(customRouteHandler))

  // Attach routes for onboarding experience, defined separately
  onboardingRoutes(adminRouter)
}