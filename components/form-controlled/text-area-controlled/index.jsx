import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function TextAreaFormControlled({
  control,
  name,
  label,
  placeholder,
  mask,
  ...props
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="block w-full">
          <FormLabel className="form-label">{label}</FormLabel>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              className="form-text-area"
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
