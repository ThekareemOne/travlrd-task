import Form from "@/app/ui/invoices/edit-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchInvoiceById, fetchCustomers, fetchLogs } from "@/app/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Invoice",
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const [invoice, customers, logs] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
    fetchLogs(id),
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Edit Invoice",
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
      <ul className="space-y-2 mt-8">
        {logs.map((log) => (
          <li
            key={log.id}
            className="flex justify-between p-2 border rounded-md"
          >
            <span>{log.status}</span>
            <span className="text-gray-500 text-sm">
              {new Date(log.date).toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}
