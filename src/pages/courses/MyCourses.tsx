import { useEffect, useState, useContext } from 'react';
import { getUserByToken } from '../../api/getUserByToken';
import getCoursesByUser from '../../api/getCoursesByUser';
import CourseCardPurchased from '../../components/courses/CourseCardPurchased';
import { Course } from '../../helpers/types';
import { AuthContext } from '../../context/AuthContext';
import './MyCourses.scss';

function MyCourses() {
    const [courses, setCourses] = useState<Course[]>([]);
    const { authToken } = useContext(AuthContext);

    useEffect(() => {
        const fetchUserAndCourses = async () => {
            try {
                if (authToken) {
                    const user = await getUserByToken();
                    const userCourses = await getCoursesByUser(user._id, authToken);
                    setCourses(userCourses);
                }
            } catch (error) {
                console.error('Failed to fetch user courses:', error);
            }
        };

        fetchUserAndCourses();
    }, [authToken]);

    return (
        <div className='myCourses'>
            <h2>My Courses</h2>
            <div className="coursesUser">
                {courses.length > 0 ? (
                    courses.map(course => (
                        <CourseCardPurchased key={course._id} course={course} />
                    ))
                ) : (
                    <p>No courses purchased yet.</p>
                )}
            </div>
        </div>
    );
}

export default MyCourses;
