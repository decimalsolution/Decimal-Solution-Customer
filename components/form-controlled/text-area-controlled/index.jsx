import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export default function TextAreaFormControlled({
  control,
  name,
  label,
  placeholder,
  mask,
  className,
  ...props
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("block w-full", className)}>
          <FormLabel className="form-label">{label}</FormLabel>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              className={cn(
                "border-2 border-gray-500/50 rounded-sm text-base md:text-lg lg:text-xl 2xl:text-2xl placeholder:text-gray-300 px-4 lg:px-8 py-2 lg:py-4 min-h-[50px] h-full",
                className
              )}
              {...field}
              {...props}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
