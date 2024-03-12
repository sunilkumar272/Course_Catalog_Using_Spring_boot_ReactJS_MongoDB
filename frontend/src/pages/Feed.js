import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Feed = () => {
  const [query, setQuery] = useState("");
  const [course, setCourse] = useState();

  //
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get(`http://localhost:8080/Courses/${query}`);
      setCourse(response.data);
    };
    const fetchInitialCourses = async () => {
        const response = await axios.get(`http://localhost:8080/allCourses`);
        console.log(response);
        setCourse(response.data);
    }
    if (query.length === 0) fetchInitialCourses();
    if (query.length > 2) fetchCourses();
  }, [query]);
console.log(course);
  return (
    <Grid container spacing={2} sx={{ margin: "2%" }}>
      <Grid item xs={12} sx={12} md={12} lg={12}>
      <Button sx={{ margin: "1% 2%" }} variant="outlined">
            <Link to="/home">Home</Link>
          </Button>
        <Box>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Search..."
            sx={{ width: "75%", padding: "2% auto" }}
            fullWidth
            onChange={(e) => setQuery(e.target.value)}
          />
        </Box>
      </Grid>
      {course &&
        course.map((p) => {
          return (
            <Grid key={p.id} item xs={12} md={6} lg={4}>
              <Card sx={{ padding: "3%", overflow: "hidden", width: "84%" }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "2rem", fontWeight: "600" }}
                >
             {p.instructor}
                </Typography>
                <Typography sx={{ color: "#585858", marginTop:"2%" }} variant="body" >
                  Description: {p.desc}
                </Typography>
                <br />
                <br />
                <Typography variant="h6">
                  Duration: {p.duration} hours
                </Typography>

                <Typography gutterBottom  variant="body">Syllabus : </Typography>
                {p.syllabus.map((s, i) => {
                  return (
                    <Typography variant="body" gutterBottom key={i}>
                      {s} .
                      {` `}
                    </Typography>
                  );
                })}
  
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Feed;
