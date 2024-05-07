import { useParams } from 'react-router-dom';
import { Rating } from 'primereact/rating';

import Header from '../../components/landing/Header';
import getCourseById from '../../helpers/getCoursesById';

import './CourseX.scss';

function CourseX() {
    const { id } = useParams<{ id?: string }>();
    const course = getCourseById(parseInt(id ?? "0"));

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
                        <div className="courseMain-ratingReviewsContainer">
                            <Rating value={parseFloat(course.rating)} readOnly cancel={false} />
                            <span>{`(${course.reviews})`}</span>
                        </div>
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
