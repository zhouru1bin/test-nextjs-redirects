import { GetServerSidePropsContext } from 'next';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

export default function Auth() {
  const [cookies, setCookie, removeCookie] = useCookies(['auth']);

  return (
    <div>
      <h1>auth</h1>
      <button
        onClick={() => {
          setCookie('auth', '1', {
            path: '/',
            maxAge: 3600 * 24 * 7, // 1小时后过期
            secure: true,
            httpOnly: false,
            sameSite: 'lax',
          });
        }}
      >
        login
      </button>
    </div>
  );
}

// async function getServerSideProps({ res }: GetServerSidePropsContext) {
//   // 设置 cookie
//   res.setHeader('Set-Cookie', 'x-test=sdgfxhcgjfvhkbjn; Path=/; HttpOnly');

//   console.log(`zztest set cookies`);
//   return {
//     props: {},
//   };
// }

// export { getServerSideProps };
