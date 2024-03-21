package com.online.Course.controller;

import com.online.Course.model.Course;
import com.online.Course.repository.CourseRepository;
import com.online.Course.repository.SearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class CourseController
{

    @Autowired
    CourseRepository repo;

    @Autowired
    SearchRepository srepo;

    @GetMapping("/allCourses")
    @CrossOrigin
    public List<Course> getAllCourses()
    {

        return repo.findAll();
    }
    // Courses/java
    @GetMapping("/Courses/{text}")
    @CrossOrigin
    public List<Course> search(@PathVariable String text)
    {
        return srepo.findByText(text);
    }

    @PostMapping("/Course")
    @CrossOrigin
    public Course addCourse(@RequestBody Course Course)
    {
        return repo.save(Course);
    }

}
