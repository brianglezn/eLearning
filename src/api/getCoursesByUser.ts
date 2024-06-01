import { Course } from '../helpers/types';

const getCoursesByUser = async (userId: string, token: string): Promise<Course[]> => {
    try {
        const response = await fetch(`https://elearning-back.onrender.com/user/${userId}/courses`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const coursesData = await response.json();
        const formattedCourses: Course[] = coursesData.map((courseData: Course) => ({
            ...courseData,
            id: courseData._id,
            rating: parseFloat(courseData.rating).toString()
        }));

        return formattedCourses;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return [];
    }
}

export default getCoursesByUser;
