import { type ActionFunctionArgs, redirect } from 'react-router';

import { getAdminAuthSession } from '~/.server/services/session.service';

import { LoginForm } from './components/login-form';

const ADMIN = {
  email: 'admin@gmail.com',
  password: 'test1234!',
};

class InvalidException extends Error {
  status: number;
  message: string;
  path?: string;

  constructor(message: string, path?: string) {
    super(message);
    this.status = 400;
    this.message = message;
    this.path = path;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const formData = await request.formData();
    const payload = Object.fromEntries(formData);

    if (payload.email !== ADMIN.email) {
      throw new InvalidException('이메일이 존재하지 않습니다.', 'email');
    }

    if (payload.password !== ADMIN.password) {
      throw new InvalidException('비밀번호가 일치하지 않습니다.', 'password');
    }

    // TODO: 로그인 성공 처리
    const adminAuthSession = await getAdminAuthSession(request);
    adminAuthSession.setAdminAuth(payload.email);
    return redirect('/admin', {
      headers: {
        'Set-Cookie': await adminAuthSession.commit(),
      },
    });
    return {};
  } catch (error) {
    console.error(error);
    if (error instanceof InvalidException) {
      return { message: error.message, path: error.path };
    } else {
      throw error;
    }
  }
};

export default function AdminLogin() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
