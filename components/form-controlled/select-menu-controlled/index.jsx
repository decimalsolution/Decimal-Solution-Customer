import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectMenuFromControlled({
  control,
  name,
  label,
  placeholder,
  values,
  ...props
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="form-label">{label}</FormLabel>
          <FormControl>
            <Select
              {...props}
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <SelectTrigger
                {...props}
                className="border-2 border-gray-500/50 rounded-sm min-w-[180px]  flex-1 lg:p-5 xl:p-7 2xl:p-8 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl h-[50px] md:h-[55px] lg:h-[60px] xl:[75px] 2xl:h-[85px] "
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent className="max-h-[500px]  overflow-y-auto ">
                {values.map((value, index) => (
                  <>
                    <SelectItem
                      className={
                        "text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl md:py-2 lg:py-4 !text-gray-500 font-medium"
                      }
                      key={"select-item-" + index}
                      value={value?.value || value}
                    >
                      {value?.label || value}
                    </SelectItem>
                    {index !== values?.length - 1 && <SelectSeparator />}
                  </>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
