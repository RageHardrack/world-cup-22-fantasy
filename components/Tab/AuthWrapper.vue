<script setup lang="ts">
import { Form as ValidationForm } from "vee-validate";
import { useUIStore } from "~~/store";

import { RegisterUserSchema, LoginUserSchema } from "~~/schemas";

const store = useUIStore();
const router = useRouter();

const isSaving = ref(false);

const handleRegisterSubmit = async (values: any) => {
  try {
    isSaving.value = true;
    const { ok, username, accessToken } = await $fetch("/api/auth/register", {
      method: "POST",
      body: {
        username: values.username,
        email: values.email,
        password: values.password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (ok) {
      store.setUser(username, accessToken);
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
        email: values.email,
        password: values.password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (ok) {
      store.setUser(username, accessToken);
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
    <TransitionGroup name="fade" tag="section" class="w-full">
      <TabAuth tab="Iniciar Sesión">
        <ValidationForm
          @submit="handleLoginSubmit"
          :validation-schema="LoginUserSchema"
          class="flex flex-col p-4 space-y-4 overflow-hidden"
        >
          <Input label="Email" name="email" placeholder="Ingresa tu email" />
          <InputPassword
            label="Contraseña"
            name="password"
            placeholder="Ingresa tu contraseña"
          />

          <div class="flex justify-center">
            <Button type="submit" :isSaving="isSaving">Iniciar Sesión</Button>
          </div>
        </ValidationForm>

        <p @click="store.selectAuthTab('Registarse')" class="cursor-pointer">
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
            name="username"
            placeholder="Ingresa tu username"
          />
          <Input label="Email" name="email" placeholder="Ingresa tu email" />
          <InputPassword
            label="Contraseña"
            name="password"
            placeholder="Ingresa tu contraseña"
          />

          <div class="flex justify-center">
            <Button type="submit" :isSaving="isSaving">Registrarse</Button>
          </div>
        </ValidationForm>

        <p
          @click="store.selectAuthTab('Iniciar Sesión')"
          class="cursor-pointer"
        >
          ¿Ya tienes una cuenta? Inicia sesión!
        </p>
      </TabAuth>
    </TransitionGroup>
  </section>
</template>
