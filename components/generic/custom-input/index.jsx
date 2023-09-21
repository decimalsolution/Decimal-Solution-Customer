import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function CustomInput({ className, ...props }) {
  return (
    <Input
      className={cn(
        "border-2 border-gray-500/50 rounded-sm text-2xl placeholder:text-gray-300 px-8 py-4 h-[85px]",
        className
      )}
      {...props}
    />
  );
}
