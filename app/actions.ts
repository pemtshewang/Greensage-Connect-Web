'use server';

export const getUserAnalyticsData = async ({ id }: { id: string }) => {
  "use server"
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/dashboard/user/analytics?id=${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await res.json();
  return data;
}
