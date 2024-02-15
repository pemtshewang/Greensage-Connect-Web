"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

export default function CodeGenerateSheet({ isOpen, handleOpen, children }:
  {
    children: React.ReactNode,
    isOpen: boolean;
    handleOpen: (open: boolean) => void
  }) {
  return (
    <Sheet open={isOpen} onOpenChange={handleOpen}>
      <SheetContent className="max-w-none  lg:w-[740px]" side="right" >
        <SheetHeader>
          <SheetTitle>Generate Code for Controller</SheetTitle>
          <SheetDescription>
            {children}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
