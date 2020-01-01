<template>
  <footer class="max-w-2xl mx-auto px-5 md:px-10 py-8 text-theme-text-tertiary flex flex-col lg:flex-row flex-wrap justify-between items-center">
    <div class="mb-4 lg:mb-0 text-center md:text-left">
      <span class="block md:inline-block mb-4 md:mb-0 text-center">&copy; <a
        href="https://persona.im"
        target="_blank"
      >Persona.im</a> | {{ year }}. {{ $t("All rights reserved") }}</span> <div class="block md:inline-block">
        <span class="hidden md:inline-block"> | </span> <span>{{ $t("Version") }}: <a
          :href="versionLink"
          target="_blank"
        >{{ version }}</a> | {{ $t("Date") }}: {{ date }}</span>
      </div>
    </div>
    <div class="text-center">
      <a
        href="https://www.facebook.com/personablockchain"
        target="_blank"
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="16px"
          height="16px"
          class="m-2"
        >
          <path
            fill-rule="evenodd"
            fill="currentColor"
            d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"
          />
        </svg>
      </a>

      <a
        href="https://twitter.com/PersonaIam"
        target="_blank"
      >
        <svg
          viewBox="0 0 24 24"
          class="m-2"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="16px"
          height="16px"
        >
          <path
            fill-rule="evenodd"
            fill="currentColor"
            d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
          />
        </svg>
      </a>

      <a
        href="https://t.me/personablockchain"
        target="_blank"
      >
        <svg
          viewBox="0 0 14 14"
          class="m-2"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="16px"
          height="16px"
        >
          <path
            fill-rule="evenodd"
            fill="currentColor"
            d="M0.247,5.753 L3.472,6.939 L4.722,10.892 C4.801,11.145 5.116,11.239 5.324,11.071 L7.123,9.628 C7.311,9.476 7.580,9.469 7.777,9.610 L11.020,11.928 C11.243,12.088 11.560,11.967 11.615,11.701 L13.991,0.450 C14.052,0.160 13.763,-0.082 13.482,0.025 L0.243,5.053 C-0.084,5.177 -0.081,5.632 0.247,5.753 ZM4.520,6.308 L10.825,2.485 C10.938,2.416 11.054,2.567 10.957,2.656 L5.754,7.418 C5.571,7.585 5.453,7.809 5.420,8.053 L5.242,9.346 C5.219,9.519 4.973,9.536 4.925,9.369 L4.243,7.011 C4.164,6.742 4.279,6.455 4.520,6.308 Z"
          />
        </svg>
      </a>

      <a
        href="https://github.com/PersonaIam"
        target="_blank"
      >
        <svg
          viewBox="0 0 24 24"
          class="m-2"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="16px"
          height="16px"
        >
          <path
            fill-rule="evenodd"
            fill="currentColor"
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          />
        </svg>
      </a>

      <a
        href="http://personablockchain.slack.com/"
        target="_blank"
      >
        <svg
          viewBox="0 0 24 24"
          class="m-2"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="16px"
          height="16px"
        >
          <path
            fill-rule="evenodd"
            fill="currentColor"
            d="M9.879 10.995l1.035 3.085 3.205-1.074-1.035-3.074-3.205 1.08v-.017z"
          /><path
            fill-rule="evenodd"
            fill="currentColor"
            d="M18.824 14.055l-1.555.521.54 1.61c.218.65-.135 1.355-.786 1.574-.15.045-.285.067-.435.063-.511-.015-.976-.338-1.155-.849l-.54-1.607-3.21 1.073.539 1.608c.211.652-.135 1.358-.794 1.575-.15.048-.285.067-.435.064-.51-.015-.976-.34-1.156-.85l-.539-1.619-1.561.524c-.15.045-.285.061-.435.061-.511-.016-.976-.345-1.155-.855-.225-.66.135-1.364.78-1.575l1.56-.525L7.5 11.76l-1.551.525c-.141.048-.285.066-.428.064-.495-.016-.975-.338-1.141-.848-.209-.65.135-1.354.796-1.574l1.56-.52-.54-1.605c-.21-.654.136-1.359.796-1.575.659-.22 1.363.136 1.574.783l.539 1.608L12.3 7.544l-.54-1.605c-.209-.645.135-1.35.789-1.574.652-.211 1.359.135 1.575.791l.54 1.621 1.555-.51c.651-.219 1.356.135 1.575.779.218.654-.135 1.359-.784 1.575l-1.557.524 1.035 3.086 1.551-.516c.652-.211 1.358.135 1.575.795.22.66-.135 1.365-.779 1.574l-.011-.029zm4.171-5.356C20.52.456 16.946-1.471 8.699 1.005.456 3.479-1.471 7.051 1.005 15.301c2.475 8.245 6.046 10.17 14.296 7.694 8.245-2.475 10.17-6.046 7.694-14.296z"
          />
        </svg>
      </a>

      <a
        href="https://medium.com/personablockchain"
        target="_blank"
      >
        <svg
          viewBox="0 0 24 24"
          class="m-2"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="16px"
          height="16px"
        >
          <path
            fill-rule="evenodd"
            fill="currentColor"
            d="M2.846 6.36c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403H7.26l5.378 11.795 4.728-11.795H24v.403l-1.917 1.837c-.165.126-.247.333-.213.538v13.5c-.034.204.048.41.213.537l1.87 1.837v.403h-9.41v-.403l1.937-1.882c.19-.19.19-.246.19-.538V7.794l-5.39 13.688h-.727L4.278 7.794v9.174c-.052.386.076.774.347 1.053l2.52 3.06v.402H0v-.403l2.52-3.06c.27-.278.39-.67.326-1.052V6.36z"
          />
        </svg>
      </a>
    </div>
  </footer>
</template>

<script type="text/ecmascript-6">
import moment from 'moment'

export default {
  name: 'AppFooter',

  computed: {
    year () {
      return moment().format('Y')
    },
    version () {
      return GIT_VERSION
    },
    versionLink () {
      return `https://github.com/PersonaIam/persona-explorer/commit/${GIT_VERSION}`
    },
    date () {
      return GIT_DATE
    }
  }
}
</script>
