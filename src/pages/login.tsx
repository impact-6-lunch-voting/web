import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Layout } from "~/components/layout";
import { Button } from "~/components/ui/button";

export default function LoginPage() {
  const session = useSession();
  const router = useRouter();

  function redirectToHome() {
    void router.push("/");
  }

  if (session.status === "authenticated") redirectToHome();

  return (
    <Layout>
      <div className="container space-y-6">
        <div className="flex justify-center gap-6 align-middle">
          <Button onClick={() => signIn("github")}>Login</Button>
        </div>
      </div>
    </Layout>
  );
}