<script setup lang="ts">
import { Form as ValidationForm } from "vee-validate";
import { useUIStore, useUserStore } from "~~/store";

import { RegisterUserSchema, LoginUserSchema } from "~~/schemas";

const uiStore = useUIStore();
const userStore = useUserStore();
const router = useRouter();

const isSaving = ref(false);

const handleRegisterSubmit = async (values: any) => {
  try {
    isSaving.value = true;
    const { ok, username, accessToken } = await $fetch("/api/auth/register", {
      method: "POST",
      body: {
        username: values.registerUsername,
        email: values.registerEmail,
        password: values.registerPassword,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (ok) {
      userStore.setUser(username, accessToken);
      router.push("/fantasy");
      isSaving.value = false;
    }
  } catch (error) {
    isSaving.value = false;
    console.error(error);
  }
};

const handleLoginSubmit = async (values: any) => {
  try {
    isSaving.value = true;
    const { ok, username, accessToken } = await $fetch("/api/auth/login", {
      method: "POST",
      body: {
        email: values.loginEmail,
        password: values.loginPassword,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (ok) {
      userStore.setUser(username, accessToken);
      isSaving.value = false;
      router.push("/fantasy");
    }
  } catch (error) {
    isSaving.value = false;
    console.error(error);
  }
};
</script>

<template>
  <section
    class="flex flex-col items-center justify-center w-full max-w-lg space-y-6"
  >
    <section class="w-full">
      <TabAuth tab="Iniciar Sesión">
        <ValidationForm
          @submit="handleLoginSubmit"
          :validation-schema="LoginUserSchema"
          class="flex flex-col p-4 space-y-4 overflow-hidden"
        >
          <Input
            label="Email"
            name="loginEmail"
            placeholder="Ingresa tu email"
          />
          <InputPassword
            label="Contraseña"
            name="loginPassword"
            placeholder="Ingresa tu contraseña"
          />

          <div class="flex justify-center">
            <Button type="submit" :isSaving="isSaving">Iniciar Sesión</Button>
          </div>
        </ValidationForm>

        <p @click="uiStore.selectAuthTab('Registarse')" class="cursor-pointer">
          ¿No tienes una cuenta? ¡Regístrate!
        </p>
      </TabAuth>

      <TabAuth tab="Registarse">
        <ValidationForm
          @submit="handleRegisterSubmit"
          :validation-schema="RegisterUserSchema"
          class="flex flex-col p-4 space-y-4 overflow-hidden"
        >
          <Input
            label="Username"
            name="registerUsername"
            placeholder="Ingresa tu username"
          />
          <Input
            label="Email"
            name="registerEmail"
            placeholder="Ingresa tu email"
          />
          <InputPassword
            label="Contraseña"
            name="registerPassword"
            placeholder="Ingresa tu contraseña"
          />

          <div class="flex justify-center">
            <Button type="submit" :isSaving="isSaving">Registrarse</Button>
          </div>
        </ValidationForm>

        <p
          @click="uiStore.selectAuthTab('Iniciar Sesión')"
          class="cursor-pointer"
        >
          ¿Ya tienes una cuenta? Inicia sesión!
        </p>
      </TabAuth>
    </section>
  </section>
</template>
