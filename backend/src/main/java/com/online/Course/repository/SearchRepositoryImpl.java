
package com.online.Course.repository;

import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.online.Course.model.Course;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@Component
public class SearchRepositoryImpl implements SearchRepository{

    @Autowired
    MongoClient client;

    @Autowired
    MongoConverter converter;

    @Override
    public List<Course> findByText(String text) {

        final List<Course> Courses = new ArrayList<>();

        MongoDatabase database = client.getDatabase("search");
        MongoCollection<Document> collection = database.getCollection("course");

        AggregateIterable<Document> result = collection.aggregate(Arrays.asList(new Document("$search",
                        new Document("text",
                                new Document("query",text)
                                        .append("path", Arrays.asList("desc", "syllabus")))),
                new Document("$sort",
                        new Document("duration", 1L)),
                new Document("$limit", 4L)));

        result.forEach(doc -> Courses.add(converter.read(Course.class,doc)));

        return Courses;
    }
}
