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
      <SelectTrigger className="flex-1 p-8 text-2xl">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items?.map((item, index) => (
          <>
            <SelectItem
              className={"text-2xl py-4 !text-gray-500 font-medium"}
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
