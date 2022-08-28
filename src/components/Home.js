import React from "react"

import ProjectList from "./ProjectList"
// import CourseList from './CourseList';
import SkillList from "./SkillList"
import Experience from "./Experience"
import BackgroundImage from "./BackgroundImage"

import image3 from "../images/image2.jpg"
import styles from "./styles"

export default function Home() {
  return (
    <div style={styles.mainContent}>
      <BackgroundImage image={image3} />
      <SkillList />
      <Experience />
      <ProjectList />
    </div>
  )
}
