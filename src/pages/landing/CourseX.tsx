import { useParams } from 'react-router-dom';
import { Rating } from 'primereact/rating';
import { useEffect, useState } from 'react';

import Header from '../../components/landing/Header';
import getCourseById from '../../helpers/getCoursesById';
import { Course } from '../../helpers/types';

import './CourseX.scss';

function CourseX() {
    const { id } = useParams<{ id?: string }>();
    const [course, setCourse] = useState<Course | null>(null);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const courseData = await getCourseById(parseInt(id ?? "0"));
                setCourse(courseData);
            } catch (error) {
                console.error('Error fetching course:', error);
            }
        };

        fetchCourse();
    }, [id]);

    if (!course) {
        return <div>Loading...</div>;
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
                {/* Aquí puedes renderizar el contenido del curso */}
            </div>
        </div>
    );
}

export default CourseX;
