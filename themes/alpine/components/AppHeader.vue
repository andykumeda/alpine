<script lang="ts" setup>
const alpine = useAppConfig().alpine

const show = ref(false)
</script>

<template>
  <header :class="alpine.header.position || 'left'">
    <div class="menu">
      <button @click="(show = !show)" aria-label="Navigation Menu">
<svg viewBox='0 0 10 8' width='20' xmlns="http://www.w3.org/2000/svg"> 
    <path d='M1 1h8M1 4h 8M1 7h8' 
        stroke='#3CF' 
        stroke-width='1' 
        stroke-linecap='round'/>
</svg>

      </button>
      <div class="color-mode-switch">
        <ColorModeSwitch />
      </div>
    </div>

    <div class="overlay" :class="[show && 'show']">
      <MainNav @link-click="show = !show" />
    </div>

    <div class="logo">
      <NuxtLink v-if="alpine.header.logo" to="/">
        <!-- TODO: width/height doesn't make much sense here, but Lighthouse requires it. 
        Used current Alpine logo ratio, will break on enduser logo -->
        <NuxtImg class="dark-img" :src="alpine.header.logo.pathDark" :alt="alpine.header.logo.alt" width="89" height="31" />
        <NuxtImg class="light-img" :src="alpine.header.logo.path" :alt="alpine.header.logo.alt" width="89" height="31" />
      </NuxtLink>
      <NuxtLink v-else to="/" class="fallback">
        {{ alpine.title }}
      </NuxtLink>
    </div>

    <div class="main-nav">
      <MainNav />
      <div class="color-mode-switch">
        <ColorModeSwitch />
      </div>
    </div>
  </header>
</template>

<style scoped lang="ts">
css({
  header: {
    '--header-padding': '{space.16}',
    '--logo-height': '{space.12}',
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
    alignItems: 'center',
    gap: '{space.4}',
    py: 'var(--header-padding)',
    '.menu': {
      position: 'absolute',
      display: 'flex',
      ':hover': {
        color: '{color.primary.500}',
      },
      '.left &&': {
        right: 0
      },
      '@sm': {
        display: 'none'
      }
    },
    '.overlay': {
      position: 'absolute',
      top: 'calc(var(--header-padding) + var(--logo-height) + {space.2})',
      backgroundColor: '{alpine.backdrop.backgroundColor}',
      border: '1px solid {color.gray.200}',
      borderRadius: '{radii.md}',
      padding: '{space.6}',
      paddingRight: '{space.24}',
      fontSize: '{text.lg.fontSize}',
      lineHeight: '{text.lg.lineHeight}',
      fontWeight: '{fontWeight.medium}',
      transition: 'all 250ms',
      perspective: '2000px',
      transformOrigin: 'top',
      backdropFilter: 'blur(20px)',
      willChange: 'opacity, transform',
      '&:not(.show)': {
        opacity: 0,
        transform: 'translateY(-10px) rotateY(-8deg) rotateX(-20deg)',
        '.left &&': {
          transform: 'translateY(-10px) rotateY(8deg) rotateX(-20deg)',
        },
        pointerEvents: 'none'
      },
      '.left &&': {
        right: 0,
        padding: '{space.6}',
        paddingLeft: '{space.16}',
        textAlign: 'right'
      },
      '@sm': {
        display: 'none'
      },
      '@dark': {
        borderColor: '{color.gray.800}',
      }
    },
    '.logo': {
      display: 'flex',
      gridColumn: 'span 12 / span 12',
      height: 'var(--logo-height)',
      a: {
        display: 'flex',
      },
      '.center &&': {
        gridColumn: 'span 12 / span 12',
        justifyContent: 'center',
      },
      '.right &&': {
        justifyContent: 'flex-end',
      },
      '@sm': {
        gridColumn: 'span 4 / span 4',
        gridColumnStart: 'auto',
        '.right &&': {
          order: 2,
        },
      },
      '.fallback': {
        fontSize: '{text.2xl.fontSize}',
        lineHeight: '{text.2xl.lineHeight}',
        fontWeight: '{fontWeight.semibold}'
      }
    },
    '.main-nav': {
      display: 'none',
      '@sm': {
        display: 'flex',
        gridColumn: 'span 8 / span 8',
        fontSize: '{text.xl.fontSize}',
        lineHeight: '{text.xl.lineHeight}',
        fontWeight: '{fontWeight.medium}',
        '.center &&': {
          gridColumn: 'span 12 / span 12',
          justifyContent: 'center',
        },
        '.right &&': {
          justifyContent: 'flex-start',
        },
        '.left &&': {
          justifyContent: 'flex-end',
        },
      }
    },
      '.color-mode-switch': {
        '@sm': {
          display: 'flex',
          gridColumn: 'span 8 / span 8',
        },
        '.right &&': {
          justifyContent: 'flex-start',
        },
        '.left &&': {
          justifyContent: 'flex-end',
        },
        justifyContent: 'right',
        marginLeft: '16px',
        '@xs': {
          gridColumn: 'span 2 / span 2',
          gridColumnStart: 11,
          justifyContent: 'flex-end',
        }
      }
  }
})
</style>
