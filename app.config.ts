export default defineAppConfig({
  alpine: {
    title: 'AndyK',
    description: 'My Web3 Profile',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'left', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'alpine' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: false, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: '' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: '0xandyk',
      instagram: 'andykumeda',
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/andykumeda'
      },
      facebook: {
        icon: 'uil:facebook',
        label: 'Facebook',
        href: 'https://facebook.com/andykumeda'
      }
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
