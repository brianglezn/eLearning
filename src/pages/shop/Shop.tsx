import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';

import CourseCard from "../../components/courses/CourseCard";
import { Course } from '../../helpers/types';
import getAllCourses from '../../api/getAllCourses';
import './Shop.scss';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Shop() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
    const navigate = useNavigate();
    const query = useQuery();
    const selectedCategoryFromURL = query.get('category') || null;

    useEffect(() => {
        const fetchCourses = async () => {
            const coursesData = await getAllCourses();
            setCourses(coursesData);
        };
        fetchCourses();
    }, []);

    useEffect(() => {
        const filtered = selectedCategoryFromURL ? courses.filter(course => course.category === selectedCategoryFromURL) : courses;
        setFilteredCourses(filtered);
    }, [courses, selectedCategoryFromURL]);

    const handleCategoryChange = (e: { value: string | null }) => {
        const category = e.value;
        navigate(category ? `/dashboard/shop?category=${encodeURIComponent(category)}` : '/dashboard/shop');
    };

    const categories = Array.from(new Set(courses.map(course => course.category)));
    const categoryOptions = [{ label: 'All', value: null }, ...categories.map(category => ({ label: category, value: category }))];

    return (
        <section className="shop">
            <Dropdown
                value={selectedCategoryFromURL}
                options={categoryOptions}
                onChange={handleCategoryChange}
                placeholder="Select a Category"
                className='dropdown'
            />
            <div className="coursesList">
                {filteredCourses.map(course => (
                    <CourseCard key={course._id} course={course} />
                ))}
            </div>
        </section>
    );
}

export default Shop;
