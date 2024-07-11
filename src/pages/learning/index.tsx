import React from 'react';
import AboutPage from "@/components/pages/AboutPage";
import ContactPage from "@/components/pages/ContactPage";
import BasicsOrtodont from "@/components/pages/BasicsOrtodont";
import LearningHome from '@/components/pages/LearningHome';
import LearningBasic from '@/components/pages/LearningBasic';
import LearningAbout from '@/components/pages/LearningAbout';
import Header from '@/components/layout/header/Header';

function index() {
  return (
    <div>
      <LearningHome />
    <LearningAbout />
    <ContactPage />
    </div>
  )
}

export default index