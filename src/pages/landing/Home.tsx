import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'primereact/carousel';
import { Rating } from 'primereact/rating';

import Footer from '../../components/landing/Footer';
import Header from '../../components/landing/Header';
import { Course } from '../../helpers/types';
import getAllCourses from '../../api/getAllCourses';
import homeAboutIMG from '../../assets/homeAbout.webp';
import './Home.scss';
import SignUpIcon from '../../components/icons/SignUpIcon';
import ListIcon from '../../components/icons/ListIcon';
import GraduationCapIcon from '../../components/icons/GraduationCapIcon';

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
      navigate(`/courses/${course._id}`);
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
        <main className="homeMain">
          <div className="banner">
            <h1>Welcome to Our eLearning Platform</h1>
            <p>Join millions of students around the world exploring the best courses.</p>
          </div>
        </main>

        <section className="homeHowItWorks">
          <div className="homeHowItWorks-container">
            <h2>How It Works</h2>
            <div className="steps">
              <div className="step">
                <SignUpIcon />
                <div className="step-number">1</div>
                <p>Sign up for free and explore our extensive library of courses.</p>
              </div>
              <div className="step">
                <ListIcon />
                <div className="step-number">2</div>
                <p>Select the course that suits your needs and start learning immediately.</p>
              </div>
              <div className="step">
                <GraduationCapIcon />
                <div className="step-number">3</div>
                <p>Complete the course at your own pace and receive a certificate.</p>
              </div>
            </div>
          </div>
        </section>

        <section className='homeCourses'>
          <h2>Popular Courses</h2>
          <Carousel value={courses} numVisible={4} numScroll={4} itemTemplate={courseTemplate} responsiveOptions={responsiveOptions} circular />
        </section>

        <section className="homeAbout">
          <div className="homeAbout-container">
            <div className="homeAbout-img">
              <img src={homeAboutIMG} alt="People having a meeting" />
            </div>
            <div className="homeAbout-text">
              <h2>About</h2>
              <p>eLearning Platform fosters a culture of continuous growth and lifelong learning. It's not merely focused on immediate achievements but on building long-term habits that contribute to both personal and professional growth.</p>
              <p>eLearning Platform integrates various sensory experiences into the educational process, combining visual, auditory, and kinesthetic methods to create a richer, more engaging learning environment.</p>
              <p>A key aspect of eLearning Platform is the use of visualization techniques. Students are encouraged to form mental images or diagrams, which aids in reinforcing knowledge and making information easier to remember.</p>
            </div>
          </div>
        </section>

        <section className="homeAchievements">
          <div className="homeAchievements-container">
            <h2>Our Achievements</h2>
            <p className="subtext">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <div className="homeAchievements-cards">
              <div className="card">
                <h3>50K+</h3>
                <p>Students</p>
              </div>
              <div className="card">
                <h3>50+</h3>
                <p>Courses</p>
              </div>
              <div className="card">
                <h3>4K+</h3>
                <p>Classes</p>
              </div>
              <div className="card">
                <h3>4.8 <span className="star">&#9733;</span></h3>
                <p>Rating</p>
              </div>
            </div>
          </div>
        </section>

        <section className="homeCategories">
          <h2>Categories</h2>
          <div>
            {categories.map((category, index) => (
              <div key={index} className="categoryCard">
                <a href={`/courses?category=${category}`}>
                  <h3>{category}</h3>
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="homeTestimonials">
          <div className="homeTestimonials-container">
            <h2>What Our Students Say</h2>
            <div className="homeTestimonials-cards">
              <div className="testimonial">
                <p>"This platform has transformed the way I learn. The courses are engaging and the community is supportive."</p>
                <p className="author">- John Doe</p>
              </div>
              <div className="testimonial">
                <p>"I love the flexibility that eLearning offers. I can learn at my own pace and revisit materials anytime."</p>
                <p className="author">- Jane Smith</p>
              </div>
              <div className="testimonial">
                <p>"The quality of the courses is outstanding. I've gained so much knowledge and practical skills."</p>
                <p className="author">- Sam Wilson</p>
              </div>
              <div className="testimonial">
                <p>"eLearning has been a game-changer for me. The flexibility and quality of the courses have allowed me to balance learning with my busy schedule."</p>
                <p className="author">- Emily Johnson</p>
              </div>
              <div className="testimonial">
                <p>"The support from the community and the instructors is amazing. I feel more confident in my skills and ready to take on new challenges."</p>
                <p className="author">- Michael Brown</p>
              </div>
              <div className="testimonial">
                <p>"The interactive and hands-on approach of the courses has significantly enhanced my learning experience. Highly recommend this platform!"</p>
                <p className="author">- Sarah Lee</p>
              </div>

            </div>
          </div>
        </section>



      </div>
      <Footer />
    </>
  );
}

export default Home;
