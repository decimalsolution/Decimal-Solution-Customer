import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function CustomInput({ className, ...props }) {
  return (
    <Input
      className={cn(
        "border-2 border-gray-500/50 rounded-sm text-base md:text-lg lg:text-xl 2xl:text-2xl placeholder:text-gray-300 px-4 lg:px-8 py-2 lg:py-4 h-[50px] md:h-[55px] lg:h-[60px] xl:[75px] 2xl:h-[85px]",
        className
      )}
      {...props}
    />
  );
}
