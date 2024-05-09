import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function InputNotify() {
  return (
    <div className="w-[50vh] mx-auto mt-20 flex flex-col items-center">
        <Input placeholder="Enter notify text" />
        <Button className="w-[25vh] flex justify-center m-5"> Notify </Button>
    </div>
  );
}