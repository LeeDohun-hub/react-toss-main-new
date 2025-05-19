import { Home, Inbox } from 'lucide-react';
import * as React from 'react';

import { Sidebar, SidebarHeader, SidebarRail } from '~/components/ui/sidebar';

import { NavMain } from './nav-main';

const data = {
  navMain: [
    {
      title: '관리자 홈',
      url: '/admin/home',
      icon: Home,
      isActive: true,
    },
    {
      title: '공지사항 관리',
      url: '/admin/notice',
      icon: Inbox,
      badge: '10',
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarRail />
    </Sidebar>
  );
}
