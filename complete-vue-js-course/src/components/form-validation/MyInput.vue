<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    fieldName: string;
    value?: string;
    type?: string;
    rules: {
        required: boolean;
        minLength: number;
    };
}>(), {
    type: 'text'
});

const emit = defineEmits<{
    'update:value': [value: string];
    'update:valid': [valid: boolean];
}>();

const capitalizedFieldName = computed(() => {
    return props.fieldName.charAt(0).toUpperCase() + props.fieldName.slice(1);
});

const error = computed(() => {
    if(props.rules.required && !props.value) {
        return `${capitalizedFieldName.value} is required.`;
    }
    if(props.rules.minLength && props.value && props.value.length < props.rules.minLength) {
        return `${capitalizedFieldName.value} must be at least ${props.rules.minLength} characters.`;
    }
    return '';
});

const checkValidity = (value: string) => {
    if(props.rules.required && !value) {
        return false;
    }
    if(props.rules.minLength && value && value.length < props.rules.minLength) {
        return false;
    }
    return true;
};

const input = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit('update:value', target.value);
    emit('update:valid', checkValidity(target.value));
};

</script>

<template>
    <div class="label">
        <label :for="fieldName">{{ capitalizedFieldName }}</label>
        <div class="error">{{ error }}</div>
    </div>
    <input
        :id="fieldName"
        :value="value"
        :type="type"
        @input="input"
    />
</template>

<style scoped>
.input-wrapper {
    display: flex;
    flex-direction: column;
}
.error {
    color: red;
}
.label {
    display: block;
    justify-content: space-between;
    width: 350px;
}
input {
    background: none;
    color: black;
    border: 1px solid silver;
    border-radius: 5px;
    padding: 10px;
    margin: 5px 0;
    font-size: 16px;
}
</style>