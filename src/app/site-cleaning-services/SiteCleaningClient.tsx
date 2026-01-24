'use client';

import React from 'react';

// 1) Тук импортваш интерактивните компоненти (които ползват hooks)
import SiteCleaningInteractive from './components/SiteCleaningInteractive';
// или директно ContactFormSection, ако искаш само формата:
// import ContactFormSection from './components/ContactFormSection';

export default function SiteCleaningClient() {
  return (
    <>
      <SiteCleaningInteractive />
      {/* Ако искаш само формата, замени горното с:
          <ContactFormSection />
      */}
    </>
  );
}
