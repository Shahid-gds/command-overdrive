import { createRouter, createWebHistory } from "vue-router";

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
    {
      path: "/code-verification",
      name: "CodeVerification",
      // meta: { layout: "Default" },
      component: () => import("@/views/codeVerification.vue"),
    },
    {
      path: "/authentication",
      name: "Authentication",
      // meta: { layout: "Default" },
      component: () => import("@/views/addAuthentication.vue"),
    },
    {
      path: "/authentication-with-qr",
      name: "AuthenticationQr",
      // meta: { layout: "Default" },
      component: () => import("@/views/googleAuthQr.vue"),
    },
    {
      path: "/sms-verification",
      name: "codeVerificatoinTextSms",
      // meta: { layout: "Default" },
      component: () => import("@/views/codeVerificatoinTextSms.vue"),
    },
    {
      path: "/two-factor-authenticatoin",
      name: "TowFactorAuth",
      // meta: { layout: "Default" },
      component: () => import("@/views/twoFactorAuth.vue"),
    },
    {
      path: "/reset-password",
      name: "ResetPassword",
      // meta: { layout: "Default" },
      component: () => import("@/views/resetPassword.vue"),
    },
    {
      path: "/auth-onboarding",
      name: "AuthOnboarding",
      // meta: { layout: "Default" },
      component: () => import("@/pages/authOnboarding.vue"),
    },
    {
      path: "/onboarding",
      name: "Onboarding",
      // meta: { layout: "Default" },
      component: () => import("@/pages/onboarding.vue"),
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      // meta: { layout: "Default" },
      component: () => import("@/pages/dashboard.vue"),
    },
    {
      path: "/command",
      name: "Command",
      // meta: { layout: "Default" },
      component: () => import("@/pages/command.vue"),
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

export default router;
