import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="font-semibold">Home page</h1>
      <LoginButton>
        <Button size="lg">Login</Button>
      </LoginButton>
    </div>
  );
}
