import { getLinks } from '../utils/api'
import { getLanguages } from './i18n'

const DEFAULT_LANG = import.meta.env.STORYBLOK_DEFAULT_LANG || 'en'

export default async function generateStaticPaths() {
  let paths = []

  try {
    const links = await getLinks()
    const languages = await getLanguages()

    // Handle null or empty links
    if (!links || links.length === 0) {
      console.warn('No links found from Storyblok, generating default home page only')
      return generateDefaultPaths()
    }

    links
      .filter((link) => !link.is_folder && link.slug !== 'settings/site-settings')
      .forEach((link) => {
        languages.forEach((language) => {
          //This slug will be used for fetching data from storyblok
          let slug = link.slug === 'home' ? undefined : link.slug
          //This will be used for generating all the urls for astro
          let full_url = language === DEFAULT_LANG ? slug : `${language}/${slug ?? ''}`
          //This will let us change the url for diffrent versions
          let langSwitch = {}
          languages.forEach((lang) => {
            langSwitch = {
              ...langSwitch,
              [lang]: lang === DEFAULT_LANG ? `/${slug ?? ''}` : `/${lang}/${slug ?? ''}`,
            }
          })
          paths.push({
            props: { language, slug, langSwitch },
            params: {
              slug: full_url,
            },
          })
        })
      })
    return paths
  } catch (error) {
    console.error('Error generating static paths:', error)
    return generateDefaultPaths()
  }
}

// Generate default paths when Storyblok is unavailable
function generateDefaultPaths() {
  return [
    {
      props: { language: DEFAULT_LANG, slug: undefined, langSwitch: { en: '/', ja: '/ja' } },
      params: { slug: undefined },
    },
    {
      props: { language: 'ja', slug: undefined, langSwitch: { en: '/', ja: '/ja' } },
      params: { slug: 'ja' },
    },
  ]
}
