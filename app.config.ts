export default defineAppConfig({
  alpine: {
    title: '@AndyK',
    description: '@AndyK\'s Personal Website',
    image: {
      src: '/img/cryptoface.webp',
      alt: 'My Cryptoface',
      width: 150,
      height: 150
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/img/logo.svg', // path of the logo
        pathDark: '/img/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'ak' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: true, // possible value are : true | false,
        text: '@AndyK',
        repository: '/' // our github repository
      },
      navigation: false, // possible value are : true | false
      alignment: 'left', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: '' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: '0xandyk',
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/andykumeda'
      },
      farcaster: {
        icon: 'bx:bxs-arch',
        label: 'Farcaster',
        href: 'https://warpcast.com/andyk'
      },
      opensea: {
        icon: 'simple-icons:opensea',
        label: 'Opensea',
        href: 'https://opensea.com/andyk'
      },
      telegram: {
        icon: 'ic:baseline-telegram',
        label: 'Telegram',
        href: 'https://t.me/andyk3406'
      },
      github: {
        icon: 'uil:github',
        label: 'Github',
        href: 'https://github.com/andykumeda'
      }
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})

