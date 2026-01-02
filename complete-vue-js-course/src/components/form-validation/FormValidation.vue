<script setup lang="ts">
import { ref, computed } from 'vue';
import MyButton from './MyButton.vue';
import MyInput from './MyInput.vue';

const username = ref({ value: '', valid: false});
const password = ref({ value: '', valid: false});

const updateUsername = (value: string) => {
    username.value.value = value;
}

const updateUsernameValid = (valid: boolean) => {
    username.value.valid = valid;
}

const updatePassword = (value: string) => {
    password.value.value = value;
}

const updatePasswordValid = (valid: boolean) => {
    password.value.valid = valid;
}

const isDisabled = computed(() => {
    return !username.value.valid || !password.value.valid;
});

const onSubmit = () => {
    alert(`Username: ${username.value.value}\nPassword: ${password.value.value}`);
};

</script>

<template>
    <form @submit.prevent="onSubmit">
        <my-input
            fieldName="username"
            :rules="{ required: true, minLength: 5 }"
            :value="username.value"
            @update:value="updateUsername"
            @update:valid="updateUsernameValid"
        />
        <my-input
            fieldName="password"
            :rules="{ required: true, minLength: 8 }"
            :value="password.value"
            :type="'password'"
            @update:value="updatePassword"
            @update:valid="updatePasswordValid"
        />
        <my-button 
            background="darkslateblue"
            color="white"
            :disabled="isDisabled"
        />
    </form>
</template>
