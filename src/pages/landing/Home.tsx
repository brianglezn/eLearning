import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'primereact/carousel';
import { Rating } from 'primereact/rating';

import Footer from '../../components/landing/Footer';
import Header from '../../components/landing/Header';
import { Course } from '../../helpers/types';
import getAllCourses from '../../helpers/getAllCourses';

import './Home.scss';

function Home() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAndSetCourses = async () => {
      const formattedCourses: Course[] = await getAllCourses();
      setCourses(formattedCourses);

      const uniqueCategories = Array.from(new Set(formattedCourses.map(course => course.category)));
      setCategories(uniqueCategories);
    };
    fetchAndSetCourses();
  }, []);

  const responsiveOptions = [
    {
      breakpoint: '4000px',
      numVisible: 4,
      numScroll: 4
    },
    {
      breakpoint: '1050px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '480px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  const courseTemplate = (course: Course) => {
    const handleCourseClick = () => {
      navigate(`/courses/${course.id}`);
    };

    return (
      <div className="carouselCard" onClick={handleCourseClick}>
        <img src={course.image} alt={course.title} style={{ width: '100%', display: 'block' }} />
        <div className="carouselDetails">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <p className='carouselDetails-price'>{course.price}</p>
          <div className="carouselDetails-ratingAndReviews">
            <Rating value={parseFloat(course.rating)} readOnly cancel={false} />
            <span>{`(${course.reviews})`}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="home">
        <main className="main">
          <div className="banner">
            <h1>Welcome to Our eLearning Platform</h1>
            <p>Join millions of students around the world exploring the best courses.</p>
          </div>
        </main>
        <section className='courses'>
          <h2>Popular Courses</h2>
          <Carousel value={courses} numVisible={4} numScroll={4} itemTemplate={courseTemplate} responsiveOptions={responsiveOptions} circular />
          <h2>Categories</h2>
          <div className="categories">
            {categories.map((category, index) => (
              <div key={index} className="categoryCard">
                <a href={`/courses?category=${category}`}>
                  <h3>{category}</h3>
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
