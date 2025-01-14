"use client";

import {
  ArchiveBoxIcon,
  CheckIcon,
  ClockIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Dropdown from "./dropdown";
import { useState } from "react";

const statusList = ["pending", "paid", "canceled"];

const getFilteredStatuses = (status: string) => {
  let internalStatus = status;
  if (status === "overdue") internalStatus = "pending";

  return statusList.filter((s) => s !== internalStatus);
};

export default function InvoiceStatus({
  status,
  id,
}: {
  status: string;
  id: string;
}) {
  const [showDropDown, setShowDropDown] = useState(false);

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2 py-1 text-xs cursor-pointer",
        {
          "bg-gray-100 text-gray-500": status === "pending",
          "bg-green-500 text-white": status === "paid",
          "bg-orange-500 text-white": status === "overdue",
          "bg-red-500 text-white": status === "canceled",
        }
      )}
      onClick={toggleDropDown}
    >
      {status === "pending" ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === "paid" ? (
        <>
          Paid
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === "overdue" ? (
        <>
          Overdue
          <XCircleIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === "canceled" ? (
        <>
          Canceled
          <ArchiveBoxIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {showDropDown && (
        <Dropdown options={getFilteredStatuses(status)} id={id} />
      )}
    </span>
  );
}
