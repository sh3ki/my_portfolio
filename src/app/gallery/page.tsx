import { Flex, Meta, Schema } from "@once-ui-system/core";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { baseURL, technologies, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: technologies.title,
    description: technologies.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(technologies.title)}`,
    path: technologies.path,
  });
}

export default function Technologies() {
  return (
    <Flex maxWidth="l">
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
      <MasonryGrid />
    </Flex>
  );
}
