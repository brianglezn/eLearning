import { useNavigate, useLocation } from 'react-router-dom';
import { Rating } from 'primereact/rating';

import { Course } from '../../helpers/types';

import './CourseCard.scss';

function CourseCard({ course }: { course: Course }) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleCourseClick = () => {
        const currentPath = location.pathname;
        if (currentPath.includes('/dashboard')) {
            navigate(`/dashboard/shop/${course._id}`);
        } else {
            navigate(`/register`);
        }
    };

    return (
        <div className="courseCard" onClick={handleCourseClick}>
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p className="courseCard-price">{course.price}</p>
            <div className="courseCard-ratingAndReviews">
                <Rating value={parseFloat(course.rating)} readOnly cancel={false} />
                <span>{`(${course.reviews})`}</span>
            </div>
        </div>
    );
}

export default CourseCard;
