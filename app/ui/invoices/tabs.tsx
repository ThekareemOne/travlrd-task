import { ChangeTab } from "./buttons";

interface TabsProps {
  activeTab: string;
}

export default function Tabs({ activeTab }: TabsProps) {
  const tabs = ["all", "pending", "overdue", "paid", "canceled"];

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <ChangeTab tab={tab} activeTab={activeTab} />
        ))}
      </div>
    </div>
  );
}
