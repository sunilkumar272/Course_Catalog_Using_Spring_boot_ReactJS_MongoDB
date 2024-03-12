package com.online.Course.model;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Arrays;

@Document(collection = "course")
public class Course {
    private String instructor;
    private String desc;
    private int duration;
    private String syllabus[];

    public Course() {
    }

    public String getInstructor() {
        return instructor;
    }

    public void setInstructor(String instructor) {
        this.instructor = instructor;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public String[] getSyllabus() {
        return syllabus;
    }

    public void setSyllabus(String[] syllabus) {
        this.syllabus = syllabus;
    }

    @Override
    public String toString() {
        return "Course{" +
                "Instructor='" + instructor + '\'' +
                ", desc='" + desc + '\'' +
                ", Duration=" + duration +
                ", Syllabus=" + Arrays.toString(syllabus) +
                '}';
    }
}
