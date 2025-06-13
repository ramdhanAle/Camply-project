import React, { useState, useEffect } from 'react';
import { TestimonialContainer, TestimonialItems, PageDotsContainer, Dot } from '../ui/StyledTestimonial';
import Tester from './tester';
import testers from '../../utils/data/testi';
import Button from '../ui/button';

function Testimonial() {
  const totalTestimonials = testers.length;
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1); // Tambahkan state currentPage terpisah

  // Gunakan useEffect untuk menyesuaikan testimonialsPerPage berdasarkan lebar layar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTestimonialsPerPage(1);
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setTestimonialsPerPage(2);
      } else if (window.innerWidth >= 1024 && window.innerWidth < 1300) {
        setTestimonialsPerPage(3);
      } else {
        setTestimonialsPerPage(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Hitung totalPages dan startIndex berdasarkan currentPage
  const totalPages = Math.ceil(totalTestimonials / testimonialsPerPage);
  const startIndex = (currentPage - 1) * testimonialsPerPage;

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const displayedTesters = testers
    .slice(startIndex, startIndex + testimonialsPerPage)
    .map((testi) => <Tester key={testi.id} testimonialData={testi} />);

  return (
    <TestimonialContainer>
      <div className="top">
        <h2>Customer testimonials [more social proof]</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <TestimonialItems>
        <Button $small
          className='btn-left'
          onClick={handlePrev}
          style={{ cursor: 'pointer', userSelect: 'none', opacity: currentPage === 1 ? 0.5 : 1 }}
          disabled={currentPage === 1}
        >
          {'<'}
        </Button>

        {displayedTesters}

        <Button $small
          className='btn-right'
          onClick={handleNext}
          style={{ cursor: 'pointer', userSelect: 'none', opacity: currentPage === totalPages ? 0.5 : 1 }}
          disabled={currentPage === totalPages}
        >
          {'>'}
        </Button>
      </TestimonialItems>

      <PageDotsContainer>
        {Array.from({ length: totalPages }, (_, index) => (
          <Dot
            key={index}
            className={currentPage === index + 1 ? 'active' : ''}
            onClick={() => goToPage(index + 1)}
          />
        ))}
      </PageDotsContainer>
    </TestimonialContainer>
  );
}

export default Testimonial;