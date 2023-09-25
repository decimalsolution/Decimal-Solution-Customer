import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import InputMask from "react-input-mask";

export default function TextInputFormControlled({
  control,
  name,
  label,
  placeholder,
  mask,
  className,
  type,
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
            <InputMask
              mask={mask}
              onChange={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
              disabled={props.disabled}
            >
              {(inputProps) => (
                <Input
                  placeholder={placeholder}
                  {...inputProps}
                  type={type}
                  className={cn(
                    "border-2 border-gray-500/50 rounded-sm text-base md:text-lg lg:text-xl 2xl:text-2xl placeholder:text-gray-300 px-4 lg:px-8 py-2 lg:py-4 h-[50px] md:h-[55px] lg:h-[60px] xl:[75px] 2xl:h-[85px]"
                  )}
                  {...props}
                  onChange={field.onChange}
                />
              )}
            </InputMask>
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
