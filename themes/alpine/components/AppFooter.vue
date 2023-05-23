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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" />
        </svg>
        <span class="sr-only">Go to top</span>
      </button>

  </footer>
</template>

<style scoped lang="ts">
css({
  '.back-to-top-button': {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    backgroundColor: 'rgb(255, 82, 82)',
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
