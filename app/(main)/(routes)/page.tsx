import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex items-end justify-end gap-5 pt-5">
      <ModeToggle/>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}