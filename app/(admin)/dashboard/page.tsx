import { getUser } from "@/lib/session";
import DashboardTabNavigatior from "@/components/DashboardTabsNavigator";

export default async function AdminDashboard() {
  return (
    <>
      <DashboardTabNavigatior />
    </>
  );
}
