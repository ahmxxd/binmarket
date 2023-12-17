import { authRouter } from "./auth-router";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  anyApiRoutes: publicProcedure.query(() => {
    return "Slam";
  }),
});

export type AppRouter = typeof appRouter;
