import React from 'react';
import ContactPage from "@/components/pages/ContactPage";
import BasicsOrtodont from "@/components/pages/BasicsOrtodont";
import AmazonHome from '@/components/pages/AmazonHome';
import AmazonAbout from '@/components/pages/AmazonAbout';
import AmazonBasic from '@/components/pages/AmazonBasic';

function index() {
  return (
    <div>
    <AmazonHome />
    <AmazonAbout />
    <AmazonBasic />
    <ContactPage />
    </div>
  )
}

export default index