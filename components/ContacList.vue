<template>
  <div class="contacts">
    <a href="tel:+74959336000" class="contacts__item">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.8235 22.9996C17.9085 22.9996 16.6232 22.6686 14.6985 21.5933C12.3581 20.2808 10.5477 19.0691 8.21993 16.7474C5.97555 14.5044 4.88337 13.0522 3.35477 10.2707C1.6279 7.13003 1.92227 5.48378 2.25133 4.78019C2.64321 3.93925 3.22165 3.43628 3.9693 2.93707C4.39397 2.65883 4.84337 2.42032 5.3118 2.22457C5.35868 2.20441 5.40227 2.18519 5.44118 2.16785C5.67321 2.06332 6.02477 1.90535 6.47008 2.0741C6.76727 2.18566 7.03258 2.41394 7.4479 2.8241C8.29962 3.6641 9.46352 5.53488 9.8929 6.45363C10.1812 7.07285 10.372 7.4816 10.3724 7.94003C10.3724 8.47675 10.1024 8.89066 9.77477 9.33738C9.71337 9.42128 9.65243 9.50144 9.59337 9.57925C9.23665 10.048 9.15837 10.1835 9.20993 10.4253C9.31446 10.9114 10.094 12.3585 11.3751 13.6368C12.6562 14.915 14.0615 15.6453 14.5495 15.7494C14.8016 15.8033 14.9399 15.7218 15.4237 15.3524C15.4931 15.2994 15.5643 15.2446 15.6388 15.1897C16.1385 14.818 16.5332 14.555 17.0573 14.555H17.0601C17.5162 14.555 17.9066 14.7528 18.5535 15.0791C19.3973 15.5047 21.3243 16.6536 22.1695 17.5063C22.5806 17.9207 22.8098 18.185 22.9218 18.4818C23.0906 18.9285 22.9316 19.2786 22.8281 19.513C22.8107 19.5519 22.7915 19.5946 22.7713 19.6419C22.574 20.1095 22.3341 20.558 22.0546 20.9816C21.5563 21.7269 21.0515 22.3039 20.2087 22.6963C19.7759 22.901 19.3023 23.0047 18.8235 22.9996Z"
          stroke="white"
          stroke-width="2"
        />
      </svg>

      +7(495) 933-60-00
    </a>
    <a href="mailto:info@zolider.com" class="contacts__item" target="_blank">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 4V19H22V4M2 4L12 11L22 4M2 4H22"
          stroke="white"
          stroke-width="2"
        />
      </svg>

      info@zolider.com
    </a>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.contacts {
  display: inline-flex;
  flex-direction: column;
  &__item {
    display: inline-flex;
    align-items: center;
    transition: color 300ms;
    margin-bottom: 2.4rem;
    &:last-child {
      margin-bottom: 0;
    }
    svg {
      width: 2.4rem;
      height: 2.4rem;
      object-fit: contain;
      margin-right: 1.6rem;
    }
    path {
      transition: stroke 300ms;
    }
    &:hover {
      color: $accent;
      path {
        stroke: $accent;
      }
    }
  }
  @include mob {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
