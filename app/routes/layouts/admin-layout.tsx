import { Outlet, useMatches } from 'react-router';

import { Breadcrumb, BreadcrumbList } from '~/components/ui/breadcrumb';
import { Separator } from '~/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '~/components/ui/sidebar';

import { AppSidebar } from './components/app-sidebar';

export default function AdminLayout() {
  const matches = useMatches();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                {matches
                  .filter((match) => match.handle && (match.handle as any).breadcrumb)
                  .map((match) => (match.handle as any).breadcrumb(match))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 px-4 py-10">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
