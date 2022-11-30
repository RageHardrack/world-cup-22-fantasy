<template>
  <nav class="flex items-center w-full shadow-lg bg-color-2 shadow-color-6">
    <div class="container flex items-center justify-between py-6 mx-auto">
      <NuxtLink to="/">
        <Logo class="w-24" />
      </NuxtLink>

      <ul class="flex items-center justify-center text-color-4 gap-x-4">
        <li>
          <NuxtLink to="/">Resultados</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">Fantasy</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">Tienda</NuxtLink>
        </li>
      </ul>

      <Button>Acceder</Button>
    </div>
  </nav>
</template>
