// 6. Função de Busca
    const filterCourses = (query) => {
        const filtered = coursesData.filter(course =>
            course.name.toLowerCase().includes(query.toLowerCase()) ||
            (course.subCourses && course.subCourses.some(sub => 
                sub.name.toLowerCase().includes(query.toLowerCase())
            ))
        );
        renderCourses(filtered);
    };
