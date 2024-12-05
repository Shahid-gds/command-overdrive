import { createRouter, createWebHistory } from "vue-router";
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

function isAuthenticated() {
  return !!getCookie("token");
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
      path: "/reset-password",
      name: "ResetPassword",
      // meta: { layout: "Default" },
      // meta: { requiresAuth: true },
      component: () => import("@/views/resetPassword.vue"),
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
      component: () => import("@/pages/command.vue"),
    },
    {
      path: "/enter-imei/:id",
      name: "enterIMEI",
      // meta: { layout: "Default" },
      component: () => import("@/components/layout/commandTabs.vue/enterIMEI.vue"),
    },
    {
      path: "/helicopter-view",
      name: "HelicopterView",
      // meta: { layout: "Default" },
      component: () => import("@/pages/helicopterView.vue"),
    },
    {
      path: "/account-settings",
      name: "AccountSettings",
      // meta: { layout: "Default" },
      component: () => import("@/pages/accountSettings.vue"),
    },
    {
      path: "/alters",
      name: "Alters",
      // meta: { layout: "Default" },
      component: () => import("@/pages/alters.vue"),
    },
    {
      path: "/installers",
      name: "Installers",
      // meta: { layout: "Default" },
      component: () => import("@/pages/installers.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
