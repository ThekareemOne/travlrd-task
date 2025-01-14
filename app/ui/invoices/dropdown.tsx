import { updateInvoiceStatus } from "@/app/lib/actions";

interface DropdownProps {
  options: string[];
  id: string;
}

export default function Dropdown({ options, id }: DropdownProps) {
  const selectStatus = async function (status: string) {
    await updateInvoiceStatus({ id, status });
  };

  return (
    <div className="relative inline-block text-left">
      <ul className="absolute z-10 mt-2 w-auto min-w-full rounded-md bg-white shadow-lg max-h-60 overflow-auto ring-1 ring-black ring-opacity-5 focus:outline-none">
        {options.map((option) => (
          <li
            key={option}
            className="cursor-pointer select-none relative py-2 pl-3 pr-9 text-black hover:bg-indigo-600 hover:text-white"
            onClick={() => selectStatus(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
