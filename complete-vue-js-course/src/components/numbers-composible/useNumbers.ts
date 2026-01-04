import { reactive, watch } from 'vue';

export function useNumbers() {
    const numbers = reactive<{ a: number; b: number }>({ a: 0, b: 0 });
    const history = reactive<string[]>([]);

    const increment = (key: 'a' | 'b') => {
        numbers[key]++;
    }

    watch(() => [numbers.a, numbers.b], ([newA, newB], [oldA, oldB]) => {
        if (newA !== oldA) {
            history.push(`A: ${oldA} -> ${newA}`);
        }
        if (newB !== oldB) {
            history.push(`B: ${oldB} -> ${newB}`);
        }
    });

    return {
        numbers,
        history,
        increment
    };
}
