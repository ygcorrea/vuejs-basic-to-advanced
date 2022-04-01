export default {
    data() {
        return {
            phrase: "Essa frase será usada nos desafios",
        };
    },
    computed: {
        phraseWithComma() {
            return this.phrase.replace(/\s/g, ",");
        },
        phraseWithSizes() {
            return this.phrase
                .split(" ")
                .map((item) => `${item} (${item.length})`)
                .join(" ");
        },
    },
}