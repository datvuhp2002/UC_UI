import Layout from "@/modules/layout/admin/templates";
import { Suspense } from "react";
export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <Layout>{children}</Layout>
    </Suspense>
  );
}
