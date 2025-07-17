import { Column, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, projects } from "@/resources";
import { Projects } from "@/components/projects/Projects";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export async function generateMetadata() {
  return Meta.generate({
    title: projects.title,
    description: projects.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(projects.title)}`,
    path: projects.path,
  });
}

export default function ProjectsPage() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={projects.path}
        title={projects.title}
        description={projects.description}
        image={`/api/og/generate?title=${encodeURIComponent(projects.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Projects />
      <ScrollToTopButton />
    </Column>
  );
}
