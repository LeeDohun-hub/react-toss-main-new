import { type LoaderFunctionArgs, redirect } from 'react-router';

import { getAdminAuthSession } from '~/.server/services/session.service';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  // TODO: 로그인 된 경우 페이지가 나와야 하고 로그인 안된 경우는 로그인 페이지로 이동할 수 있어야함
  const adminAuthSession = await getAdminAuthSession(request);
  const adminAuth = adminAuthSession.getAdminAuth();
  if (adminAuth) {
    return {};
  }
  return redirect('/admin/login');
};

export default function Admin() {
  return <div>관리자 페이지</div>;
}
