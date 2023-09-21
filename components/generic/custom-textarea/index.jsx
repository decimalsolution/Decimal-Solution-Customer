import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export default function CustomTextArea({ className, ...props }) {
  return (
    <Textarea
      className={cn(
        "border-2 border-gray-500/50 rounded-sm text-base md:text-lg lg:text-xl 2xl:text-2xl placeholder:text-gray-300  px-4 lg:px-8 py-2 lg:py-4 h-[200px]",
        className
      )}
      {...props}
    />
  );
}
