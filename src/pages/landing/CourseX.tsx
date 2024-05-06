import { useParams } from 'react-router-dom';
import { Rating } from 'primereact/rating';

import Header from '../../components/landing/Header';

import './CourseX.scss';

const courses = [
    {
        id: 1,
        title: 'Modern Front-End Development',
        description: 'Master HTML, CSS, and JavaScript to build responsive and dynamic websites.',
        image: 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1714405656/eLearning/courses/curso_py.jpg',
        price: '29.99 €',
        rating: '4.8',
        reviews: 3487,
        category: 'Web Development',
    }
];

function CourseX() {
    const { id } = useParams<{ id?: string }>();
    const course = courses.find(c => c.id === parseInt(id ?? "0"));

    if (!course) {
        return <div>Course not found!</div>;
    }

    return (
        <div className='courseX'>
            <Header />

            <div className="courseMain">
                <div className="text">
                    <div>
                        <h1>{course.title}</h1>
                        <p>{course.description}</p>
                    </div>
                    <div>
                        <p className="courseMain-price">{course.price}</p>
                        <Rating value={parseFloat(course.rating)} readOnly cancel={false} />
                        <span>{`(${course.reviews} reviews)`}</span>
                    </div>
                </div>
                <div className="image">
                    <img src={course.image} alt={course.title} />
                    <a className="add" href="#">Add to cart</a>
                    <a className="buy" href="#">Buy now</a>
                </div>
            </div>
            <div className="courseContent">
            </div>
        </div>
    );
}

export default CourseX;
