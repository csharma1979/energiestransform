'use client';

import React, { useState } from 'react';
import Header from '../../layout/Header/Header';

import Link from 'next/link';
import Image from 'next/image';
import { FaSearch, FaArrowRight } from 'react-icons/fa';
import './Blog.scss';



export default function Blog() {
  return (
    <>
      <Header />
      <main className="blog-coming-soon">
        <div className="coming-soon-container">
          <h1>Coming Soon</h1>
          <p>We're working on this page. Stay tuned!</p>
        </div>
      </main>
    
    </>
  );
}