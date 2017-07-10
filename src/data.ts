export interface TimeInterface {
    [id:string]:number;
}

export interface IngredientAmountInterface {
    value:number;
    unit:string;
}

export interface IngredientInterface {
    name:string;
    amount:IngredientAmountInterface;
}

export interface RecipeInterface {
    id:number;
    title:string;
    cuisine?:string;
    course?:string;
    time?:TimeInterface;
    style?:string;
    servings?:number;
    description:string;
    ingredients:IngredientInterface[];
    instructions?:string[];
    source?:string;
    image?:string;
    rating?:number;
}

export const data:RecipeInterface[] = [
    {
        id: 0,
        title: 'Indonesisch: mie goreng',
        cuisine: 'Oosters',
        course: 'Hoofdgerecht',
        time: {
            preparation: 600,
            cook: 600
        },
        style: 'Roerbakken',
        servings: 4,
        description: '',
        ingredients: [
            {
                name: 'mie',
                amount: {
                    value: 150,
                    unit: 'gram'
                }
            }
        ],
        instructions: [
            'Snij het vlees in stukjes, snij de ui in stukjes.',
            'Verwijder de zaadjes uit de pepers en snijd ze zeer fijn.',
            'Was de kangkung en laat deze goed uitlekken in de vergiet.',
            'Kook de mie volgens de aanwijzigingen op de verpakking.',
            'Verhit de olie in de wok en voeg het vlees toe.',
            'Roerbak dan de ui, uitgeperste knoflook en de gemberwortel ongeveer 2 minuten.',
            'Voeg dan de ketoembar, sereh, rode pepers en witte kool toe en roerbak ongeveer 3 minuten.',
            'Voeg dan de kangkung toe en roerbak dit heel even, slinkt snel.',
            'Voeg dan de mie en de ketjap toe en roer alles goed door elkaar.',
            'Bak ondertussen 4 spiegeleieren voor de garnering.',
        ],
        source: 'https://www.ah.nl/kookschrift/recept?id=276629',
        image: 'http://www.whats4eats.com/files/pastas-mie-goreng-wikipedia-4x3.jpg',
        rating: 4
    }
];
