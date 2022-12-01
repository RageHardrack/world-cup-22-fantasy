<script setup lang="ts">
import { useField } from "vee-validate";

interface Props {
  value?: string;
  label?: string;
  name: string;
  placeholder?: string;
}

const isShowPassword = ref(false);

const props = defineProps<Props>();
const name = toRef(props, "name");

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
} = useField<string>(name, "", {
  initialValue: props.value,
});

const onInputChange = (e: any) => handleChange(e);
</script>

<template>
  <label :for="name" v-if="label" class="flex flex-col w-full">
    <p class="font-semibold">{{ label }}</p>

    <span class="flex gap-1">
      <input
        :id="name"
        :type="isShowPassword ? 'text' : 'password'"
        :name="name"
        :value="inputValue"
        :placeholder="placeholder"
        @input="onInputChange"
        @blur="handleBlur"
        class="input-class"
        :class="{ 'border-red-600': Boolean(errorMessage) }"
      />

      <div class="flex gap-2">
        <button
          :title="`${isShowPassword ? 'Hide Password' : 'Show Password'}`"
          @click.prevent="isShowPassword = !isShowPassword"
        >
          <IconHideSvg v-if="isShowPassword" class="w-8 h-8 text-gray-400" />
          <IconShowSvg v-else class="w-8 h-8 text-gray-400" />
        </button>
      </div>
    </span>

    <p v-if="errorMessage" class="p-2 text-red-400">
      {{ errorMessage }}
    </p>
  </label>
</template>
