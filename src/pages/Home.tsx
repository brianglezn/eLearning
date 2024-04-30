import { Carousel } from 'primereact/carousel';

import Footer from '../components/landing/Footer';
import Header from '../components/landing/Header';
import './Home.scss';

type Course = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  rating: string;
  reviews: number;
};

type Category = {
  id: number;
  name: string;
};

function Home() {

  const popularCourses: Course[] = [
    {
      id: 1,
      title: 'Desarrollo Front-End Moderno',
      description: 'Domina HTML, CSS y JavaScript para construir sitios web responsivos y dinámicos.',
      image: 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1714405656/eLearning/courses/curso_py.jpg',
      price: '29,99 €',
      rating: '4.8',
      reviews: 3487,
    },
    {
      id: 2,
      title: 'React y Redux Avanzado',
      description: 'Profundiza en el desarrollo con React y aprende a manejar el estado de tus aplicaciones con Redux.',
      image: 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1714405656/eLearning/courses/curso_py.jpg',
      price: '34,99 €',
      rating: '4.9',
      reviews: 2890,
    },
    {
      id: 3,
      title: 'Node.js: De cero a producción',
      description: 'Conviértete en un experto en backend con Node.js, Express y bases de datos MongoDB.',
      image: 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1714405656/eLearning/courses/curso_py.jpg',
      price: '39,99 €',
      rating: '4.7',
      reviews: 4023,
    },
    {
      id: 4,
      title: 'Diseño UX/UI para Principiantes',
      description: 'Entiende los principios fundamentales del diseño de interfaces y la experiencia de usuario.',
      image: 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1714405656/eLearning/courses/curso_py.jpg',
      price: '24,99 €',
      rating: '4.6',
      reviews: 1765,
    },
    {
      id: 5,
      title: 'Fundamentos de Data Science',
      description: 'Introdúcete al mundo del análisis de datos y aprende a interpretar información compleja.',
      image: 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1714405656/eLearning/courses/curso_py.jpg',
      price: '45,99 €',
      rating: '4.5',
      reviews: 2319,
    },
    {
      id: 6,
      title: 'Full Stack con Django y React',
      description: 'Crea aplicaciones web completas con Django como backend y React en el frontend.',
      image: 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1714405656/eLearning/courses/curso_py.jpg',
      price: '49,99 €',
      rating: '4.7',
      reviews: 1587,
    },
  ];

  const categories: Category[] = [
    { id: 1, name: 'Desarrollo Web' },
    { id: 2, name: 'Ciencia de Datos' },
    { id: 3, name: 'Inteligencia Artificial' },
    { id: 4, name: 'Diseño Gráfico' },
    { id: 5, name: 'Marketing Digital' },
    { id: 6, name: 'Ciberseguridad' },
    { id: 7, name: 'Desarrollo de Videojuegos' },
    { id: 9, name: 'Desarrollo de Apps Móviles' },
    { id: 10, name: 'Blockchain y Criptomonedas' },
  ];

  const responsiveOptions = [
    {
      breakpoint: '4000px',
      numVisible: 4,
      numScroll: 3
    },
    {
      breakpoint: '1050px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '720px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '500px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  const courseTemplate = (course: Course) => {
    return (
      <div className="course-card">
        <img src={course.image} alt={course.title} style={{ width: '100%', display: 'block' }} />
        <div className="course-details">
          <h3 >{course.title}</h3>
          <p >{course.description}</p>
          <p className='course-card--price'>{course.price}</p>
          <p >{`Rating: ${course.rating} (${course.reviews} reviews)`}</p>
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
          <Carousel value={popularCourses} itemTemplate={courseTemplate} responsiveOptions={responsiveOptions} circular />

          <h2>Categorías</h2>
          <div className="categories">
            {categories.map((category) => (
              <div key={category.id} className="category-card">
                <h3>{category.name}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="stepper"></section>

        <section className="price"></section>

        <section className="testimonials"></section>

      </div>

      <Footer />
    </>
  );
}

export default Home;
