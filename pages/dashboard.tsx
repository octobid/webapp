import AuthenticatedLayout from "../components/AuthenticatedLayout";

const DashboardPage: React.FC = () => (
  <AuthenticatedLayout page="Dashboard">
    <h1>Dashboard</h1>
    <p>This is the dashboard page</p>
  </AuthenticatedLayout>
);

export default DashboardPage;
