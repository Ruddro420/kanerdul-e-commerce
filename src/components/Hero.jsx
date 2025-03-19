import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeroHeader from './HeroHeader';

const Hero = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // Fetch data
  const loadData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products/categories`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div className="sh-add-slider-container lg:mb-0 mb-10">
        <HeroHeader />
      </div>

      {/* Category */}
      <section class="bg-gray-50 antialiased   md:py-16">
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div class="mb-4 flex items-center justify-between gap-4 md:mb-8">
            <h2 class="text-xl font-semibold text-gray-900  sm:text-2xl">Shop by category</h2>
            <a href="#" title="" class="flex items-center text-base font-medium text-primary-700 hover:underline  text-primary-500">
              See more categories
              <svg class="ms-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </a>
          </div>
          <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {loading ? (
              <div className="loader-container">
                <div className="spinner"></div>
                <p>Loading, please wait...</p>
              </div>
            ) : (
              <>
                {data.map(item => {
                  return (
                    <>
                      <Link to={`/category/${item}`} class="flex items-center rounded-md border  bg-white px-4 py-2 hover:bg-gray-50  border-gray-700  ">
                        <span class="text-sm font-medium text-gray-900  ">{item.toUpperCase()}</span>
                      </Link>
                    </>
                  )
                })}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
