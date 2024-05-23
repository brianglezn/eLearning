import { useParams } from 'react-router-dom';
import { Rating } from 'primereact/rating';
import { useEffect, useState } from 'react';

import getCourseById from '../../api/getCoursesById';
import { Course } from '../../helpers/types';
import './ShopCourse.scss';

function ShopCourse() {
    const { id } = useParams<{ id: string }>();
    const [course, setCourse] = useState<Course | null>(null);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                if (id) {
                    const courseData = await getCourseById(id);
                    setCourse(courseData);
                }
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
        <div className='shopCourse'>
            <div className="shopCourse-main">
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
            <div className="shopCourse-content">
                {/* Aquí renderizamos el contenido del curso */}
            </div>
        </div>
    );
}

export default ShopCourse;
