import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';

import Header from "../../components/landing/Header";
import CourseCard from "../../components/courses/CourseCard";
import Footer from '../../components/landing/Footer';
import { Course } from '../../helpers/types';
import getAllCourses from '../../api/getAllCourses';
import './Courses.scss';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Courses() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
    const navigate = useNavigate();
    const query = useQuery();
    const selectedCategoryFromURL = query.get('category');

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
        navigate(category ? `/courses?category=${encodeURIComponent(category)}` : '/courses');
    };

    const categories = Array.from(new Set(courses.map(course => course.category)));
    const categoryOptions = [{ label: 'All', value: null }, ...categories.map(category => ({ label: category, value: category }))];

    return (
        <>
            <Header />
            <div className="coursesPage">
                <Dropdown
                    value={selectedCategoryFromURL}
                    options={categoryOptions}
                    onChange={handleCategoryChange}
                    placeholder="Select a Category"
                />
                <div className="coursesList">
                    {filteredCourses.map(course => (
                        <CourseCard key={course._id} course={course} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Courses;
