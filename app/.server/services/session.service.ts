import { createCookieSessionStorage } from 'react-router';

import { getAcceptLanguage } from '~/.server/lib/localization';
import { Theme } from '~/common/constants';
import { isLanguage } from '~/hooks/use-language';
import { isTheme } from '~/hooks/use-theme';

// * 언어 세션
export const getLanguageSession = async (request: Request) => {
  const languageStorage = createCookieSessionStorage({
    cookie: {
      name: 'language',
      secure: true,
      secrets: [process.env.SESSION_SECRET ?? ''],
      sameSite: 'lax',
      path: '/',
      httpOnly: true,
    },
  });
  const session = await languageStorage.getSession(request.headers.get('Cookie'));
  return {
    getLanguage: () => {
      const langValue = session.get('language') as string;
      return isLanguage(langValue) ? langValue : getAcceptLanguage(request);
    },
    setLanguage: (language: string) => session.set('language', language),
    commit: () => languageStorage.commitSession(session),
  };
};

// * 테마 세션
export const getThemeSession = async (request: Request) => {
  const themeStorage = createCookieSessionStorage({
    cookie: {
      name: 'theme',
      secure: true,
      secrets: [process.env.SESSION_SECRET ?? ''],
      sameSite: 'lax',
      path: '/',
      httpOnly: true,
    },
  });
  const session = await themeStorage.getSession(request.headers.get('Cookie'));
  return {
    getTheme: () => {
      const themeValue = session.get('theme');
      return isTheme(themeValue) ? themeValue : null;
    },
    setTheme: (theme: Theme) => session.set('theme', theme),
    commit: () => themeStorage.commitSession(session),
  };
};

// 관리자 로그인 세션
export const getAdminAuthSession = async (request: Request) => {
  const adminAuthStorage = createCookieSessionStorage({
    cookie: {
      name: 'admin-auth',
      secure: true,
      secrets: [process.env.SESSION_SECRET ?? ''],
      sameSite: 'lax',
      path: '/',
      httpOnly: true,
    },
  });
  const session = await adminAuthStorage.getSession(request.headers.get('Cookie'));
  return {
    getAdminAuth: () => {
      return session.get('email') ?? null;
    },
    setAdminAuth: (email: string) => session.set('email', email),
    commit: () =>
      adminAuthStorage.commitSession(session, {
        maxAge: 60 * 60 * 24 * 7, // 7 days
      }),
  };
};
