export const pageInfo = () => {
    const query = `
    *[_type == "pageInfo"]{
        ...,
        profilePic{
          "image": asset->{
            _id,
            url
          }   
        },
        socials[]->
      }
    `
    return query
}