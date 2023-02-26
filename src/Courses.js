import Course from "./Course";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Courses({ courses, removeCourse }) {
  const [index, setIndex] = useState(0);
  const { content, title, price } = courses[index];

  const checkIndex = (index) => {
    if (index < 0) {
      return courses.length - 1;
    }
    if (index > courses.length - 1) {
      return 0;
    }
    return index;
  };

  const prevCourse = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const nextCourse = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };
  const getRandomCourse = () => {
    let random = Math.floor(Math.random() * courses.length);

    if (random === index) {
      random = index + 1;
    }
    debugger;
    setIndex(checkIndex(random));
  };
  return (
    <div className="coursesMainDiv">
      <div className="courseTitleAndButton">
        <h2>Kurslarım</h2>
        <button className="cardDeleteBtn" onClick={getRandomCourse}>
          Rasgele Kurs Ata!
        </button>
      </div>

      <div className="cardDiv">
        <button className="prevBtn" onClick={prevCourse}>
          <FaChevronLeft />
        </button>
        <div className="card">
          <div className="cardTitlePrice">
            <h2 className="cardTitle">{title}</h2>
            <h4 className="cardPrice"> {price}TL </h4>
          </div>
          <p className="cardP"> {content} </p>
          {/* <button className="cardDeleteBtn" onClick={() => removeOneCourse(id)}>
          Sil
        </button> */}
        </div>
        <button className="nextBtn" onClick={nextCourse}>
          <FaChevronRight />
        </button>
        {/* {courses.map((course) => {
          return (
            <Course
              key={course.id}
              {...course}
              removeOneCourse={removeCourse}
            />
          );
        })} */}
      </div>
    </div>
  );
}

export default Courses;
