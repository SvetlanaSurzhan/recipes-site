import config from '../config.json'

class TypeRecipeApi {
    constructor(){
        this.baseUrl = config.baseUrl;
        this.recourse = 'type';
    }

    async getAllTypes(){
        try {
            const response = await fetch(`${this.baseUrl}/${this.recourse}`, {
                method: 'GET'
            });

            return response.json();
        } catch (error) {
            console.error('Failed to get Recipe Types', error);
            throw error;    
        }
    }
};

export default TypeRecipeApi;
