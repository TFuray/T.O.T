"use client"

import { UserButton } from "@clerk/nextjs"
import { Modal } from "@/components/ui/modal"

export default function SetupPage() {
  return (
    <>
      <div className="p-4">
        <Modal title="Test" description="Test Desc" isOpen onClose={() => { }}>
          Children
        </Modal>
        <UserButton afterSignOutUrl="/" />
        "This is a Protected Route"
      </div>
    </>
  )
}
