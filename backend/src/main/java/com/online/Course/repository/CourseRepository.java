package com.online.Course.repository;

import com.online.Course.model.Course;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CourseRepository extends MongoRepository<Course,String>
{
}
