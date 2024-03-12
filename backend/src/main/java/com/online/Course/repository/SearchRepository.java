package com.online.Course.repository;

import com.online.Course.model.Course;

import java.util.List;

public interface SearchRepository {
    List<Course> findByText(String text);
}
