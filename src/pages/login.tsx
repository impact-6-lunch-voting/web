import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Button } from "~/components/ui/button";

export default function LoginPage() {
  const session = useSession();
  const router = useRouter();

  function redirectToHome() {
    void router.push("/");
  }

  if (session.status === "authenticated") redirectToHome();

  return (
    <div className="container space-y-6">
      <div className="flex justify-center gap-6 align-middle">
        <Button onClick={() => void signIn("github")}>Login</Button>
      </div>
    </div>
  );
}
