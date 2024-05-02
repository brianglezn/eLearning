import { Course } from '../../pages/landing/Courses';

import './CourseCard.scss';

function CourseCard({ course }: { course: Course }) {
    return (
        <div className="courseCard">
            <img src={course.image} alt={course.title} style={{ width: '100%', display: 'block' }} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>{course.price}</p>
            <p>{course.rating}/5 ({course.reviews} reviews)</p>
        </div>
    );
}

export default CourseCard;
