import React from 'react';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import Faq from '../components/Faq';

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Us"
        content="Got questions? Reach out! We're here and ready to assist."
      />
      <ContactForm />
      <Faq />
    </>
  );
}
