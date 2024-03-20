import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() {
  //note that we have wrapped loading.tsx and page.tsx in brackets under dashboard in order to exclude customers and invoices links from having skeleton loading on page load
  //Route groups allow you to organize files into logical groups without affecting the URL path structure
  //So /dashboard/(overview)/page.tsx becomes /dashboard.
  return <DashboardSkeleton />;
}
