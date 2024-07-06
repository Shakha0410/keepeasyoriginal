import React from 'react';
import ContactPage from "@/components/pages/ContactPage";
import BasicsOrtodont from "@/components/pages/BasicsOrtodont";
import CarhaulingHome from '@/components/pages/CarhaulingHome';
import CarhaulingAbout from '@/components/pages/CarhaulingAbout';
import CarhaulingBasic from '@/components/pages/CarhaulingBasic';

function index() {
  return (
    <div><CarhaulingHome />
    <CarhaulingAbout />
    <CarhaulingBasic />
    <ContactPage />
    </div>
  )
}

export default index