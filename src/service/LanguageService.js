export const LanguageService = {
    getData() {
        return [
            {
                language: 'Croatian',
                listening: 'Native',
                reading: 'Native',
                spokenProduction: 'Native',
                spokenInteraction: 'Native',
                writing: 'Native'
            },
            {
                language: 'English',
                listening: 'C1',
                reading: 'C1',
                spokenProduction: 'C1',
                spokenInteraction: 'C1',
                writing: 'C1'
            },
            {
                language: 'German',
                listening: 'A2',
                reading: 'A2',
                spokenProduction: 'A1',
                spokenInteraction: 'A1',
                writing: 'A1'
            }
        ];
},

    getLanguageSkills() {
        return Promise.resolve(this.getData());
    }
};