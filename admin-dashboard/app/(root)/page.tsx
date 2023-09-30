import { UserButton } from "@clerk/nextjs"
import { User } from "lucide-react"

export default function SetupPage() {
  return (
    <>
      <div className="p-4">
        <UserButton afterSignOutUrl="/" />
        "This is a Protected Route"
      </div>
    </>
  )
}
