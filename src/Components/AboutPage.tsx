import { Container } from "@chakra-ui/react";
import { Grid, Button } from "@chakra-ui/react";
import "./styles.css";

export default function AboutPage() {
  const skills = [
    "Python",
    "SQL",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "NodeJS",
    "Docker",
    "Kubernetes",
    "Azure",
    "AWS",
    "Spark",
    "Databrics",
    "NoSQL",
  ];

  return (
    <Container className="skillsContainer">
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {skills.map((skill) => (
          <Button bg="#a7ffeb">{skill}</Button>
        ))}
      </Grid>
    </Container>
  );
}
