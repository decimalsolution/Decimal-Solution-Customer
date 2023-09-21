import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectMenu({ items = [], placeholder = "" }) {
  return (
    <Select>
      <SelectTrigger className="min-w-[180px]  flex-1 lg:p-5 xl:p-7 2xl:p-8 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items?.map((item, index) => (
          <>
            <SelectItem
              className={
                "text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl md:py-2 lg:py-4 !text-gray-500 font-medium"
              }
              value={item?.value}
            >
              {item?.label}
            </SelectItem>
            {index !== items?.length - 1 && <SelectSeparator />}
          </>
        ))}
      </SelectContent>
    </Select>
  );
}
