import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        id
        title
        content
        slug
      }
    }
  }
`;

export const GET_HEADER_SETTINGS = gql`
  query HeaderSettings {
    themeSettings {
      themeSettingsFields {
        navigation {
          fieldGroupName
          buttons {
            fieldGroupName
            label
            url
          }
          logo {
            node {
              sourceUrl
            }
          }
        }
      }
      id
    }
  }
`;

export const GET_PAGE_BY_SLUG = gql`
  query GetPageBySlug($slug: String!) {
    pageBy(uri: $slug) {
      id
      title
      content
      template {
        templateName
      }
    }
  }
`;

export const GET_PAGE_DATA = gql`
  query GetPageData($slug: String!) {
    pageBy(uri: $slug) {
      acfhome {
        topVideoSection {
          buttons {
            buttonText
            buttonUrl
          }
          text
          video {
            node {
              mediaItemUrl
            }
          }
        }
        textRightImage {
          image {
            node {
              sourceUrl
            }
          }
          text
        }
      }
    }
  }
`;

export const GET_SECTION = gql`
  query getSections($slug: String!) {
    pageBy(uri: $slug) {
      sections {
        section {
          selectSection
          textAndImageInColumns {
            backgroundColor
            buttons {
              text
              url
            }
            imagePosition
            text
            title
            image {
              node {
                mediaItemUrl
              }
            }
          }
          videoHeader {
            buttons {
              text
              url
            }
            imageBeforeTitle {
              node {
                mediaItemUrl
              }
            }
            text
            title
            video {
              node {
                mediaItemUrl
              }
            }
          }
          cards {
            text
            title
            card {
              title
              text
              imageInTop {
                node {
                  mediaItemUrl
                }
              }
              logos {
                logo {
                  node {
                    mediaItemUrl
                  }
                }
              }
              buttonUrl
              buttonText
              backgroundImage {
                node {
                  mediaItemUrl
                }
              }
              backgroundColor
              imageBeforeTitle {
                node {
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PAGE_FIELDS = gql`
  query GetPageContent($slug: String!) {
    pageBy(uri: $slug) {
      content {
        contentSection {
          ... on ContentContentSectionHeaderVideoLayout {
            fieldGroupName
            text
            title
            buttons {
              text
              url
            }
            imageBeforeTitle {
              node {
                mediaItemUrl
              }
            }
            video {
              node {
                mediaItemUrl
              }
            }
          }
          ... on ContentContentSectionTextAndImageInColumnsLayout {
            fieldGroupName
            text
            backgroundColor
            buttons {
              text
              url
            }
            image {
              node {
                mediaItemUrl
              }
            }
            imagePosition
            title
          }
          ... on ContentContentSectionCardsLayout {
            fieldGroupName
            text
            title
            card {
              backgroundColor
              backgroundImage {
                node {
                  mediaItemUrl
                }
              }
              button {
                text
                url
              }
              imageBeforeTitle {
                node {
                  mediaItemUrl
                }
              }
              imageInTop {
                node {
                  mediaItemUrl
                }
              }
              logos {
                logo {
                  node {
                    mediaItemUrl
                  }
                }
              }
              title
              text
            }
          }
            
        fieldGroupName
        ... on ContentContentSectionTabsSectionLayout {
          fieldGroupName
          text
          title
          generalTab {
            generalTabTitle
            cardsInfoColumn {
              row
              fieldGroupName
            }
            internalTab {
              title
              button {
                text
                url
              }
              fieldGroupName
              tabCard {
                row {
                  text
                }
                title
              }
            }
          }
        }
      
    
        }
      }
    }
  }
`;
