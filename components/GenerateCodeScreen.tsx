"use client";

import CodeGenerateSheet from "./GenerateCodeSheet";
import GenerateCodeForm from "./forms/GenerateCodeForm";
const GenerateCode = ({
  id,
  isOpen,
  handleOpen
}: {
  id: string
  isOpen: boolean
  handleOpen: (open: boolean) => void
}) => {
  return (
    <CodeGenerateSheet isOpen={isOpen} handleOpen={handleOpen}>
      <GenerateCodeForm id={id} />
    </CodeGenerateSheet>
  )
}
export default GenerateCode;
