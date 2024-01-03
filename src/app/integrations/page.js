import React from 'react';
import PageHero from '../components/PageHero';
import Feature from '../components/Feature';
import Brand from '../components/Brand';
import Newsletter from '../components/Newsletter';

export default function Integrations() {
  return (
    <>
      <PageHero
        title="Effortless"
        subtitle="Integrations"
        content="Easily connect tools, databases, or import files with just a few
              clicks. Assistify seamlessly integrates with various platforms and
              file formats, ensuring a smooth experience."
      />
      <Feature />
      <div className="mtb-192">
        <Brand />
      </div>
      <Newsletter />
    </>
  );
}
