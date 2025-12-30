import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <nav className="w-full py-5 flex items-center justify-between">
      {/* logo */}

      <div className="flex items-center gap-8">
        <Link href={"/"}>
          <h1 className="text-3xl font-bold ">
            Next<span className="text-blue-600 ">PRO</span>
          </h1>
        </Link>

        {/* nav elements */}

        <div className="flex items-center gap-2">
          <Link className={buttonVariants({ variant: "ghost" })} href="/">
            Home
          </Link>
          <Link className={buttonVariants({ variant: "ghost" })} href="/blog">
            Blog
          </Link>
          <Link className={buttonVariants({ variant: "ghost" })} href="/create">
            Create
          </Link>
        </div>
      </div>

      {/* login and signup */}
      <div className="flex items-center gap-2">
        <Link className={buttonVariants()} href="/auth/sign-up">
          Sign up
        </Link>
        <Link
          className={buttonVariants({ variant: "secondary" })}
          href="/auth/Log-in"
        >
          Log in
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
