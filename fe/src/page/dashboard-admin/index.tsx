import BookCrud from "../../components/dashboard-admin/book-crud";

export default function DashboardAdmin() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <BookCrud />
    </div>
  );
}
