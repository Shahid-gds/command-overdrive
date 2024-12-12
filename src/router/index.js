import { createRouter, createWebHistory } from "vue-router";
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

// Function to decode the JWT and extract the payload (for validation purposes)
function decodeJWT(token) {
  const base64Url = token.split('.')[1];  // Get the payload part (middle part)
  if (!base64Url) return null;
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');  // Handle base64url to base64 conversion
  try {
    const jsonPayload = atob(base64);  // Decode base64 to JSON
    return JSON.parse(jsonPayload);  // Parse the JSON
  } catch (e) {
    return null;
  }
}

// Function to validate the JWT format (checks structure and optional expiry)
function isTokenValid(token) {
  // Check if the token follows the JWT structure (three parts, separated by dots)
  const tokenParts = token.split('.');
  if (tokenParts.length !== 3) return false;

  // Decode the JWT and get the payload (without signature verification)
  const payload = decodeJWT(token);
  if (!payload) return false;

  // Optionally: check the expiry time (exp claim) if your JWT has it
  if (payload.exp && Date.now() >= payload.exp * 1000) {
    return false;  // Token has expired
  }

  return true;
}

// Function to check if the user is authenticated (i.e., token is valid)
function isAuthenticated() {
  const token = getCookie("persist:auth");
  return token && isTokenValid(token);  // Ensures the token exists and is valid
}

function logout() {
  document.cookie = "persist:auth=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  localStorage.removeItem("persist:auth");
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      // meta: { layout: "Default" },
      component: () => import("@/views/Login.vue"),
    },
    {
      path: "/sign-up",
      name: "SignUp",
      // meta: { layout: "Default" },
      component: () => import("@/views/SignUp.vue"),
    },
    // {
    //   path: "/code-verification",
    //   name: "CodeVerification",
    //   // meta: { layout: "Default" },
    //   component: () => import("@/views/codeVerification.vue"),
    // },
    {
      path: "/authentication",
      name: "Authentication",
      // meta: { layout: "Default" },
      meta: { requiresAuth: true },
      component: () => import("@/views/addAuthentication.vue"),
    },
    {
      path: "/authentication-with-qr",
      name: "AuthenticationQr",
      // meta: { layout: "Default" },
      meta: { requiresAuth: true },
      component: () => import("@/views/googleAuthQr.vue"),
    },
    {
      path: "/sms-verification",
      name: "codeVerificatoinTextSms",
      // meta: { layout: "Default" },
      meta: { requiresAuth: true },
      component: () => import("@/views/codeVerificatoinTextSms.vue"),
    },
    {
      path: "/two-factor-authenticatoin",
      name: "TowFactorAuth",
      // meta: { layout: "Default" },
      meta: { requiresAuth: true },
      component: () => import("@/views/twoFactorAuth.vue"),
    },
    {
      path: "/forgot-password",
      name: "ForgotPassword",
      // meta: { layout: "Default" },
      // meta: { requiresAuth: true },
      component: () => import("@/views/forgotPassword.vue"),
    },
    {
      path: "/reset-password",
      name: "resetPassword",
      // meta: { layout: "Default" },
      // meta: { requiresAuth: true },
      component: () => import("../views/resetPassword.vue"),
    },
    {
      path: "/auth-onboarding",
      name: "AuthOnboarding",
      // meta: { layout: "Default" },
      meta: { requiresAuth: true },
      component: () => import("@/pages/authOnboarding.vue"),
    },
    {
      path: "/onboarding",
      name: "Onboarding",
      // meta: { layout: "Default" },
      meta: { requiresAuth: true },
      component: () => import("@/pages/onboarding.vue"),
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      // meta: { layout: "Default" },
      meta: { requiresAuth: true },
      component: () => import("@/pages/dashboard.vue"),
    },
    {
      path: "/dashboard/:id",
      name: "Command",
      // meta: { layout: "Default" },
      meta: { requiresAuth: true },
      component: () => import("@/pages/command.vue"),
    },
    {
      path: "/enter-imei/:id",
      name: "enterIMEI",
      // meta: { layout: "Default" },
      meta: { requiresAuth: true },
      component: () => import("@/components/layout/commandTabs.vue/enterIMEI.vue"),
    },
    {
      path: "/basic",
      name: "Basic",
      // meta: { layout: "Default" },
      meta: { requiresAuth: true },
      component: () => import("../components/layout/checkout/Basic.vue"),
    },
    {
      path: "/advance",
      name: "Advance",
      // meta: { layout: "Default" },
      meta: { requiresAuth: true },
      component: () => import("../components/layout/checkout/Advance.vue"),
    },
    {
      path: "/select-plan/:id",
      name: "Plan",
      // meta: { layout: "Default" },
      meta: { requiresAuth: true },
      component: () => import("../components/layout/commandTabs.vue/subscriptionPlanning.vue"),
    },
    {
      path: "/helicopter-view",
      name: "HelicopterView",
      // meta: { layout: "Default" },
      meta: { requiresAuth: true },
      component: () => import("@/pages/helicopterView.vue"),
    },
    {
      path: "/account-settings",
      name: "AccountSettings",
      // meta: { layout: "Default" },
      meta: { requiresAuth: true },
      component: () => import("@/pages/accountSettings.vue"),
    },
    {
      path: "/alters",
      name: "Alters",
      // meta: { layout: "Default" },
      meta: { requiresAuth: true },
      component: () => import("@/pages/alters.vue"),
    },
    {
      path: "/installers",
      name: "Installers",
      // meta: { layout: "Default" },
      meta: { requiresAuth: true },
      component: () => import("@/pages/installers.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = getCookie("persist:auth");

    // If there's no valid token or the token is invalid (random number, expired, etc.)
    if (!isAuthenticated() || !isTokenValid(token)) {
      logout();  // Log out the user and clear the invalid token
      next({ name: "Login" });  // Redirect to login page
    } else {
      next();  // Proceed if the token is valid
    }
  } else {
    next();  // No authentication required for this route
  }
});

export default router;
