module.exports = {
  SiteTitle: 'Jae-Wook',
  Sitelogo: '#',
  SiteLogoText: 'Jae-Wook',
  SiteAuthor: 'Jae-Wook Jeong',
  SiteDescription: 'Front End Developer',
  defaultDescription: 'Software engineer!', 
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 12,
  }, 
  SiteSocialLinks: {
    github: 'https://github.com/jaewook-jeong',
  },
  SiteAddress: {
    city: 'Seoul',
    country: 'South Korea',
  },
  SiteContact: {
    email: 'dnrlwo11@gmail.com',
  },
  SiteCopyright: '2020',
};
