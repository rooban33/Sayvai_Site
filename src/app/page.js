import Brand from './components/Brand';
import Faq from './components/Faq';
import Feature from './components/Feature';
import Hero from './components/Hero';
import Newsletter from './components/Newsletter';
import Solution from './components/Solution';
import Price from './components/Pricing';

export default function Home() {
  return (
    <>
      <Hero />
      <Brand />
      <Feature />
      <Solution />
      <Price />
      <Faq />
      <Newsletter />
    </>
  );
}
