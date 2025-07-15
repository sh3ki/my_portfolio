import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { newsletter, baseURL, technologies, person } from "@/resources";
import { Mailchimp, TechSkillsGrid } from "@/components";

export default function TechnologiesPage() {
  Meta.generate({
    title: technologies.title,
    description: technologies.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(technologies.title)}`,
    path: technologies.path,
  });

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={technologies.title}
        description={technologies.description}
        path={technologies.path}
        image={`/api/og/generate?title=${encodeURIComponent(technologies.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${technologies.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <h1 style={{ margin: 0, fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem" }}>
          Technologies &amp; Tools
        </h1>
        <p style={{ margin: 0, fontSize: "1.25rem", color: "#666" }}>
          From front-end frameworks to cloud platforms, these are the technologies I use <br /> to craft scalable, high-performance solutions across web, mobile, and beyond.
        </p>
      </div>
      <TechSkillsGrid />
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
