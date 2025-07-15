"use client";

import { Column } from "@once-ui-system/core";
import TechSkillCard from "./TechSkillCard";
import { TechIconName } from "@/resources/techIcons";
import styles from "./TechSkillCard.module.scss";

interface TechSkill {
  name: string;
  icon: TechIconName;
  proficiency: number;
}

interface TechCategory {
  title: string;
  skills: TechSkill[];
}

export default function TechSkillsGrid() {
  const techCategories: TechCategory[] = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: "javascript", proficiency: 80 },
        { name: "TypeScript", icon: "typescript", proficiency: 90 },
        { name: "Python", icon: "python", proficiency: 95 },
        { name: "Java", icon: "java", proficiency: 90 },
        { name: "C#", icon: "csharp", proficiency: 85 },
        { name: "C++", icon: "cplusplus", proficiency: 90 },
        { name: "C", icon: "c", proficiency: 80 },
        { name: "Go", icon: "go", proficiency: 75 },
        { name: "Rust", icon: "rust", proficiency: 70 },
        { name: "Ruby", icon: "ruby", proficiency: 75 },
        { name: "PHP", icon: "php", proficiency: 95 },
        { name: "Swift", icon: "swift", proficiency: 80 },
        { name: "Kotlin", icon: "kotlin", proficiency: 80 },
        { name: "Dart", icon: "dart", proficiency: 85 },
        { name: "Scala", icon: "scala", proficiency: 70 },
        { name: "Bash", icon: "bash", proficiency: 85 },
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: "html5", proficiency: 95 },
        { name: "CSS3", icon: "css3", proficiency: 95 },
        { name: "Sass", icon: "sass", proficiency: 85 },
        { name: "React", icon: "react", proficiency: 95 },
        { name: "Next.js", icon: "nextjs", proficiency: 80 },
        { name: "Vue.js", icon: "vuejs", proficiency: 90 },
        { name: "Nuxt.js", icon: "nuxtjs", proficiency: 85 },
        { name: "Angular", icon: "angular", proficiency: 90 },
        { name: "jQuery", icon: "jquery", proficiency: 95 },
        { name: "Bootstrap", icon: "bootstrap", proficiency: 90 },
        { name: "Tailwind CSS", icon: "tailwindcss", proficiency: 95 },
        { name: "Vite", icon: "vite", proficiency: 95 },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: "nodejs", proficiency: 90 },
        { name: "Deno", icon: "deno", proficiency: 80 },
        { name: "Express.js", icon: "expressjs", proficiency: 85 },
        { name: "NestJS", icon: "nestjs", proficiency: 80 },
        { name: "Koa", icon: "koa", proficiency: 70 },
        { name: "Django", icon: "django", proficiency: 95 },
        { name: "Flask", icon: "flask", proficiency: 95 },
        { name: "Spring Boot", icon: "springboot", proficiency: 90 },
        { name: "Laravel", icon: "laravel", proficiency: 95 },
        { name: "Ruby on Rails", icon: "rubyonrails", proficiency: 75 },
        { name: "ASP.NET Core", icon: "aspnetcore", proficiency: 85 },
        { name: "Gin (Go)", icon: "gin", proficiency: 75 },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: "mysql", proficiency: 95 },
        { name: "PostgreSQL", icon: "postgresql", proficiency: 95 },
        { name: "SQLite", icon: "sqlite", proficiency: 95 },
        { name: "Microsoft SQL Server", icon: "sqlserver", proficiency: 95 },
        { name: "Oracle DB", icon: "oracle", proficiency: 90 },
        { name: "MongoDB", icon: "mongodb", proficiency: 95 },
        { name: "CouchDB", icon: "couchdb", proficiency: 85 },
        { name: "Cassandra", icon: "cassandra", proficiency: 80 },
        { name: "Firebase Firestore", icon: "firestore", proficiency: 90 },
        { name: "Redis", icon: "redis", proficiency: 85 },
        { name: "CockroachDB", icon: "cockroachdb", proficiency: 85 },
      ]
    },
    {
      title: "Cloud Platforms & Services",
      skills: [
        { name: "AWS", icon: "aws", proficiency: 90 },
        { name: "Google Cloud Platform", icon: "gcp", proficiency: 85 },
        { name: "Microsoft Azure", icon: "azure", proficiency: 85 },
        { name: "DigitalOcean", icon: "digitalocean", proficiency: 90 },
        { name: "Heroku", icon: "heroku", proficiency: 95 },
        { name: "Hostinger", icon: "hostinger", proficiency: 95 },
        { name: "Vercel", icon: "vercel", proficiency: 95 },
        { name: "Netlify", icon: "netlify", proficiency: 80 },
        { name: "Firebase", icon: "firebase", proficiency: 90 },
        { name: "Alibaba Cloud", icon: "alibabacloud", proficiency: 80 },
        { name: "IBM Cloud", icon: "ibmcloud", proficiency: 75 },
      ]
    },
    {
      title: "DevOps, CI/CD & Infrastructure",
      skills: [
        { name: "Docker", icon: "docker", proficiency: 90 },
        { name: "Podman", icon: "podman", proficiency: 80 },
        { name: "Kubernetes", icon: "kubernetes", proficiency: 85 },
        { name: "Nomad", icon: "nomad", proficiency: 75 },
        { name: "CircleCI", icon: "circleci", proficiency: 80 },
        { name: "Azure DevOps", icon: "azuredevops", proficiency: 85 },
        { name: "Git", icon: "git", proficiency: 90 },
        { name: "Mercurial", icon: "mercurial", proficiency: 80 },
      ]
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "Swift", icon: "swift", proficiency: 80 },
        { name: "Kotlin", icon: "kotlin", proficiency: 80 },
        { name: "Java", icon: "java", proficiency: 90 },
        { name: "React Native", icon: "reactnative", proficiency: 90 },
        { name: "Flutter", icon: "flutter", proficiency: 95 },
        { name: "Ionic", icon: "ionic", proficiency: 75 },
        { name: "NativeScript", icon: "nativescript", proficiency: 80 },
        { name: "Android Studio", icon: "androidstudio", proficiency: 90 },
      ]
    },
    {
      title: "AI, Machine Learning & Data Science",
      skills: [
        { name: "TensorFlow", icon: "tensorflow", proficiency: 95 },
        { name: "PyTorch", icon: "pytorch", proficiency: 95 },
        { name: "OpenCV", icon: "opencv", proficiency: 95 },
        { name: "spaCy", icon: "spacy", proficiency: 80 },
        { name: "Hugging Face", icon: "huggingface", proficiency: 90 },
        { name: "Jupyter Notebook", icon: "jupyter", proficiency: 85 },
        { name: "Google Colab", icon: "googlecolab", proficiency: 80 },
        { name: "Apache Spark", icon: "apachespark", proficiency: 80 },
        { name: "Hadoop", icon: "hadoop", proficiency: 75 },
        { name: "OpenAI API", icon: "openai", proficiency: 85 },
        { name: "Google AI APIs", icon: "googleai", proficiency: 85 },
        { name: "Azure Cognitive Services", icon: "azurecognitive", proficiency: 80 },
      ]
    },
    {
      title: "IoT & Embedded Systems",
      skills: [
        { name: "Arduino", icon: "arduino", proficiency: 95 },
        { name: "ESP8266", icon: "esp8266", proficiency: 90 },
        { name: "ESP32", icon: "esp32", proficiency: 95 },
        { name: "Raspberry Pi", icon: "raspberrypi", proficiency: 95 },
        { name: "Blynk", icon: "blynk", proficiency: 90 },
        { name: "ThingsBoard", icon: "thingsboard", proficiency: 85 },
        { name: "AWS IoT Core", icon: "awsiot", proficiency: 90 },
        { name: "Google Cloud IoT", icon: "googleiot", proficiency: 85 },
        { name: "Azure IoT Hub", icon: "azureiot", proficiency: 85 },
        { name: "Node-RED", icon: "nodered", proficiency: 75 },
        { name: "Arduino IDE", icon: "arduinoide", proficiency: 95 },
        { name: "PlatformIO", icon: "platformio", proficiency: 95 },
      ]
    },
    {
      title: "Design & Prototyping",
      skills: [
        { name: "Figma", icon: "figma", proficiency: 90 },
        { name: "Sketch", icon: "sketch", proficiency: 80 },
        { name: "Axure RP", icon: "axure", proficiency: 80 },
        { name: "Adobe Photoshop", icon: "photoshop", proficiency: 85 },
        { name: "Illustrator", icon: "illustrator", proficiency: 80 },
        { name: "Canva", icon: "canva", proficiency: 95 },
      ]
    },
    {
      title: "Collaboration & Project Management",
      skills: [
        { name: "GitHub", icon: "github", proficiency: 95 },
        { name: "GitLab", icon: "gitlab", proficiency: 90 },
        { name: "Asana", icon: "asana", proficiency: 80 },
        { name: "ClickUp", icon: "clickup", proficiency: 80 },
        { name: "Notion", icon: "notion", proficiency: 85 },
        { name: "Basecamp", icon: "basecamp", proficiency: 80 },
        { name: "Microsoft Teams", icon: "teams", proficiency: 95 },
        { name: "Slack", icon: "slack", proficiency: 95 },
        { name: "Docusaurus", icon: "docusaurus", proficiency: 90 },
        { name: "GitBook", icon: "gitbook", proficiency: 90 },
      ]
    },
    {
      title: "Miscellaneous Tools & Utilities",
      skills: [
        { name: "npm", icon: "npm", proficiency: 95 },
        { name: "yarn", icon: "yarn", proficiency: 95 },
        { name: "pnpm", icon: "pnpm", proficiency: 95 },
        { name: "Maven", icon: "maven", proficiency: 90 },
        { name: "Gradle", icon: "gradle", proficiency: 90 },
        { name: "Composer", icon: "composer", proficiency: 95 },
        { name: "Pip", icon: "pip", proficiency: 95 },
        { name: "VS Code", icon: "vscode", proficiency: 95 },
        { name: "IntelliJ IDEA", icon: "intellij", proficiency: 80 },
        { name: "WebStorm", icon: "webstorm", proficiency: 80 },
        { name: "PyCharm", icon: "pycharm", proficiency: 90 },
        { name: "Eclipse", icon: "eclipse", proficiency: 90 },
        { name: "NetBeans", icon: "netbeans", proficiency: 95 },
        { name: "Android Studio", icon: "androidstudio", proficiency: 95 },
        { name: "Xcode", icon: "xcode", proficiency: 80 },
        { name: "Sublime Text", icon: "sublimetext", proficiency: 80 },
        { name: "Atom", icon: "atom", proficiency: 80 },
        { name: "Postman", icon: "postman", proficiency: 90 },
        { name: "Swagger UI", icon: "swagger", proficiency: 80 },
      ]
    },
  ];

  return (
    <Column gap="s">
      {techCategories.map((category, index) => {
        // Sort skills by proficiency descending
        const sortedSkills = [...category.skills].sort((a, b) => b.proficiency - a.proficiency);
        // Assign shuffled cardBg indices
        function getShuffledColorIndices(count: number): number[] {
          const indices = Array.from({ length: 12 }, (_, i) => i + 1);
          // Fisher-Yates shuffle
          for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
          }
          // If more cards than colors, repeat the shuffled set
          const result: number[] = [];
          while (result.length < count) {
            result.push(...indices);
          }
          return result.slice(0, count);
        }
        function assignCardBgIndices(skills: TechSkill[]): { skill: TechSkill; cardBgIdx: number }[] {
          const colorIndices = getShuffledColorIndices(skills.length);
          // Try to avoid adjacent duplicates by rotating if needed
          for (let i = 1; i < colorIndices.length; i++) {
            if (colorIndices[i] === colorIndices[i - 1]) {
              // Swap with next if possible
              if (i + 1 < colorIndices.length) {
                [colorIndices[i], colorIndices[i + 1]] = [colorIndices[i + 1], colorIndices[i]];
              }
            }
          }
          return skills.map((skill, i) => ({ skill, cardBgIdx: colorIndices[i] }));
        }
        const skillsWithBg = assignCardBgIndices(sortedSkills);
        return (
          <div key={index} className={styles.categorySection}>
            <h2 className={styles.categoryTitle}>{category.title}</h2>
            <div className={styles.techGrid}>
              {skillsWithBg.map(({ skill, cardBgIdx }, skillIndex) => (
                <TechSkillCard
                  key={skillIndex}
                  name={skill.name}
                  icon={skill.icon}
                  proficiency={skill.proficiency}
                  cardBgIdx={cardBgIdx}
                />
              ))}
            </div>
          </div>
        );
      })}
    </Column>
  );
}
