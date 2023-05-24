import { useMediaQuery } from '@vueuse/core'

<script lang="ts" setup>
const alpine = useAppConfig().alpine
const { isMobile } = useDevice()
const isLargeScreen = useMediaQuery('(min-width: 640px)')

const linesThreshold = 20; // Adjust this value to set the number of lines before the button appears
const scrollPosition = ref(0);

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

function handleScroll() {
  scrollPosition.value = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
}


</script>

<template>
  <footer
    :class="[
      alpine.footer.alignment
    ]"
  >
    <NuxtLink v-if="alpine.footer?.credits?.enabled" class="credits" :to="alpine.footer.credits.repository">
      {{ alpine.footer?.credits?.text }}
    </NuxtLink>

    <div v-if="alpine.footer.navigation" class="navigation">
      <MainNav />
    </div>

    <p v-if="alpine.footer?.message" class="message">
      {{ alpine.footer.message }}
    </p>

    <div class="icons">
      <div v-if="alpine.socials && Object.entries(alpine.socials)" class="social">
        <SocialIcons :socials="alpine.socials" />
      </div>
      <div v-if="!isLargeScreen" class="color-mode-switch">
        <ColorModeSwitch />
      </div>
    </div>
      <button v-if="scrollPosition >= linesThreshold" id="to-top-button" @click="goToTop" class="back-to-top-button" title="Go To Top">
        <svg class="svg-icon" viewBox="0 0 20 20">
          <path d="M13.889,11.611c-0.17,0.17-0.443,0.17-0.612,0l-3.189-3.187l-3.363,3.36c-0.171,0.171-0.441,0.171-0.612,0c-0.172-0.169-0.172-0.443,0-0.611l3.667-3.669c0.17-0.17,0.445-0.172,0.614,0l3.496,3.493C14.058,11.167,14.061,11.443,13.889,11.611 M18.25,10c0,4.558-3.693,8.25-8.25,8.25c-4.557,0-8.25-3.692-8.25-8.25c0-4.557,3.693-8.25,8.25-8.25C14.557,1.75,18.25,5.443,18.25,10 M17.383,10c0-4.07-3.312-7.382-7.383-7.382S2.618,5.93,2.618,10S5.93,17.381,10,17.381S17.383,14.07,17.383,10"></path>
        </svg>
        <span class="sr-only">Go to top</span>
      </button>

  </footer>
</template>

<style scoped lang="ts">
css({
  '.svg-icon': {
    width: '3em',
    height: '3em',
   },
  '.svg-icon path, .svg-icon polygon, .svg-icon rect': {
   fill: '#4691f6',
  },

  '.svg-icon circle': {
    stroke: '#4691f6',
  },

  '.back-to-top-button': {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    backgroundColor: 'rgb(34, 205, 255)',
    color: '#fff',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease-in-out',
  },


  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '{space.24}',
    py: '{space.8}',
    '&.left': {
      alignItems: 'flex-start'
    },
    '&.right': {
      alignItems: 'flex-end'
    },
    '@md': {
      minHeight: '{space.36}',
    },
    '.credits': {
      fontSize: '{text.xl.fontSize}',
      lineHeight: '{text.xl.lineHeight}',
      fontWeight: '{fontWeight.bold}',
      marginBottom: '{space.4}',
    },
    '.navigation': {
      display: 'none',
      '@sm': {
        display: 'flex',
        marginBottom: '{space.8}',
        fontSize: '{text.base.fontSize}',
        lineHeight: '{text.base.lineHeight}',
        fontWeight: '{fontWeight.medium}',
      }
    },
    '.message': {
      textAlign: 'center',
      marginBottom: '{space.4}',
    },
    '.icons': {
      display: 'grid',
      width: '100%',
      gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
      gap: '{space.4}',
      '.left &&': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      '.right &&': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row-reverse'
      },
      '.social': {
        gridColumn: 'span 12 / span 12',
        display: 'flex',
        justifyContent: 'center',
        gap: '{space.4}',
        '@xs': {
          gridColumn: 'span 4 / span 4',
          gridColumnStart: 5,
        }
      },
      '.color-mode-switch': {
        gridColumn: 'span 12 / span 12',
        display: 'flex',
        justifyContent: 'center',
        '@xs': {
          gridColumn: 'span 2 / span 2',
          gridColumnStart: 11,
          justifyContent: 'flex-end',
        }
      },
  }
},

})
</style>
