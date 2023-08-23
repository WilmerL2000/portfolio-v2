export const projects = () => {
  const query = `
    *[_type == "project"]{
      _id,
      projectImage,
      title,
      "slug" : slug.current,      
    } | order(title asc)
    `
  return query
}

export const project = (slug: string) => {
  const query = `
    *[_type == "project" && slug.current == '${slug}']{
      ...,
      "slug" : slug.current,
      technologies[]->,
    }[0]
    `
  return query
}

export const experience = () => {
  const query = `
    *[_type == "experience"]{
      ...,
      technologies[]->,
    } | order(_createdAt asc)
    `
  return query
}