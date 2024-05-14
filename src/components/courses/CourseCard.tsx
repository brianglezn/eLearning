import { useNavigate } from 'react-router-dom';
import { Rating } from 'primereact/rating';

import { Course } from '../../api/types';

import './CourseCard.scss';

function CourseCard({ course }: { course: Course }) {

    const navigate = useNavigate();

    const handleCourseClick = () => {
        navigate(`/courses/${course.id}`);
    };

    return (
        <div className="courseCard" onClick={handleCourseClick}>
            <img src={course.image} alt={course.title} style={{ width: '100%', display: 'block' }} />
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
