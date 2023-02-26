import type { NextPage } from 'next';
import Head from 'next/head';
import Button from '@/components/Buttons';

type Props = { 
  protocol: string | null;
  host: string | null;
  path: string | null;
};

const Home: NextPage<Props> = () => {


  return (
    <>

      <Head>
        <title>HomePage</title>
      </Head>

      <main>
        <div className="page">
          <section className="intro">
            <div>
              <h1>HomePage</h1>
              <p>
                A website-building solution based on Next.js. It serves as a case to sort out the thinking.
              </p>
              <p className="buttons">
              <Button bgColor='' btnName={<>Home Page</>} href="/" />
              </p>
            </div>
          </section>
          
        </div>

      </main>
    </>
  )
}

export default Home;
