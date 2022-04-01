export default {
    data() {
        return {
            fruit: "",
            fruits: ["apple", "banana", "orange"],
        };
    },
    methods: {
        addFruit() {
            this.fruits.push(this.fruit);
            this.fruit = "";
        },
    },
}