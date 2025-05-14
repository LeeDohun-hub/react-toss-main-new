import { Link } from 'react-router';

import Facebook from '~/components/svg/facebook.svg?react';
import Instagram from '~/components/svg/instagram.svg?react';
import Naver from '~/components/svg/naver.svg?react';
import TossBlog from '~/components/svg/toss-blog.svg?react';
import Twitter from '~/components/svg/twitter.svg?react';
import { cn } from '~/lib/utils';

interface FooterNavProps {
  title: string;
  data: {
    label: string;
    link: string;
  }[];
}

const FooterNav = ({ title, data }: FooterNavProps) => {
  return (
    <nav className="min-w-[150px]">
      <h3 className="pb-[5px] text-[15px] leading-[30px] font-[700] text-[#333d4b]">
        {title}
      </h3>
      <ul>
        {data.map((item, index) => (
          <li
            key={index}
            className="hover-deco text-[15px] leading-[30px] font-[400] text-[#6b7684]"
          >
            <Link to={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const FOOTER_NAV: FooterNavProps[] = [
  {
    title: '서비스',
    data: [
      { label: '공지사항', link: '/notice' },
      { label: '자주 묻는 질문', link: '#' },
      { label: '공동인증서 관리', link: '#' },
      { label: '계정 일시잠금', link: '#' },
      { label: '고객센터', link: '#' },
      { label: '개인(신용)정보 이용·제공 내역 조회', link: '#' },
      { label: '브랜드 리소스센터', link: '#' },
      { label: '토스의 개인정보 보호', link: '#' },
      { label: '토스유스카드', link: '#' },
    ],
  },
  {
    title: '회사',
    data: [
      { label: '회사 소개', link: '#' },
      { label: '토스페이먼츠', link: '#' },
      { label: '토스인슈어런스', link: '#' },
      { label: '토스증권', link: '#' },
      { label: '토스씨엑스', link: '#' },
      { label: '토스뱅크', link: '#' },
      { label: '토스플레이스', link: '#' },
      { label: '토스모바일', link: '#' },
      { label: '토스인컴', link: '#' },
      { label: '채용', link: '#' },
      { label: '기술 블로그', link: '#' },
      { label: '블로그', link: '#' },
      { label: '공고', link: '#' },
    ],
  },
  {
    title: '문의',
    data: [
      { label: '사업 제휴', link: '#' },
      { label: '토스쇼핑 입점문의', link: '#' },
      { label: '광고 문의', link: '#' },
      { label: '인증 사업 문의', link: '#' },
      { label: '마케팅·PR', link: '#' },
      { label: 'IR', link: '#' },
    ],
  },
  {
    title: '고객센터',
    data: [
      { label: '전화: 1599-4905 (24시간 연중무휴)', link: '#' },
      { label: '이메일(고객전용): support@toss.im', link: '#' },
      { label: '이메일(외부기관전용): safe@toss.im', link: '#' },
      { label: '민원 접수', link: '#' },
      { label: '민원 접수(비즈니스 고객)', link: '#' },
    ],
  },
];

const FOOTER_TERMS: { label: string; link: string; isBold?: boolean }[][] = [
  [
    { label: '서비스 이용약관', link: '#' },
    { label: '개인정보 처리방침', link: '#', isBold: true },
    { label: '위치기반서비스 이용약관', link: '#', isBold: true },
    { label: '금융소비자보호', link: '#' },
  ],
  [
    { label: '통합 금융정보 서비스 약관', link: '#' },
    { label: '채용팀 개인정보 처리방침', link: '#', isBold: true },
    { label: '가맹점 고지사항', link: '#' },
    { label: '토스비즈니스 개인정보 처리방침', link: '#', isBold: true },
  ],
  [
    { label: '마이데이터 서비스 이용약관', link: '#' },
    { label: '어드민 서비스 개인정보 처리방침', link: '#', isBold: true },
    { label: '토스 전자서명인증업무준칙', link: '#' },
  ],
  [
    { label: '이용자의 권리 및 유의사항', link: '#' },
    { label: '고정형 영상정보처리기기 운영 관리 방침', link: '#' },
    { label: '토스 전자인증서비스 약관', link: '#' },
  ],
];

export default function Footer() {
  return (
    <footer className="pt-[50px] pb-[100px]">
      <div className="container px-[67px]">
        <div className="flex gap-8">
          {FOOTER_NAV.map((nav, index) => (
            <FooterNav key={index} title={nav.title} data={nav.data} />
          ))}
        </div>
        <div className="mt-[50px]">
          <div>
            <h2 className="pb-4 text-[15px] leading-[20px] font-[700] text-[#333d4b]">
              ㈜비바리퍼블리카
            </h2>
          </div>
          <div className="text-[15px] leading-[20px] font-[400] text-[#8b95a1]">
            <p>사업자 등록번호 : 120-88-01280 | 대표 : 이승건</p>
            <p>
              호스팅 서비스 : 주식회사 비바리퍼블리카 | 통신판매업 신고번호 :
              2014-서울강남-03377
              <Link to="#" className="ml-4">
                사업자정보확인
              </Link>
            </p>
            <p>
              06236 서울특별시 강남구 테헤란로 142, 4층, 10층, 11층, 12층, 13층, 22층,
              23층 (역삼동, 아크플레이스)
            </p>
            <p>고객센터 : 서울특별시 강남구 테헤란로 133, 9층 (역삼동, 한국타이어빌딩)</p>
          </div>
          <div className="flex gap-8 pt-[24px] pb-[30px]">
            {FOOTER_TERMS.map((terms, i) => {
              return (
                <ul key={i}>
                  {terms.map((term, j) => (
                    <li
                      key={j}
                      className={cn(
                        'hover-deco text-[16px] leading-[1.5] font-[400] text-[#8b95a1]',
                        term.isBold && 'font-bold',
                      )}
                    >
                      <Link to={term.link}>{term.label}</Link>
                    </li>
                  ))}
                </ul>
              );
            })}
          </div>
          <div className="flex gap-3">
            <Link to="#" className="hover-icon opacity-70">
              <Facebook />
            </Link>
            <Link to="#" className="hover-icon opacity-70">
              <TossBlog />
            </Link>
            <Link to="#" className="hover-icon opacity-70">
              <Naver />
            </Link>
            <Link to="#" className="hover-icon opacity-70">
              <Twitter />
            </Link>
            <Link to="#" className="hover-icon opacity-70">
              <Instagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
