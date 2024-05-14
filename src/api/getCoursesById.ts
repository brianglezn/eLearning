import { Course } from './types';

const getCourseById = async (id: number): Promise<Course | null> => {
    try {
        const response = await fetch(`https://elearning-back.onrender.com/courses/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const courseData = await response.json();
        const formattedCourse = {
            ...courseData,
            id: courseData.id,
            rating: parseFloat(courseData.rating).toString()
        };

        return formattedCourse;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return null;
    }
}

export default getCourseById;
