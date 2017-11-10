import {IRecipe} from 'app/model/IRecipe';

/**
 * Sample
 *
 * @type {IRecipe}
 */
export const sample: IRecipe[] = [
    {
        id: 0,
        title: 'Mie goreng rames speciaal',
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
        source: '//www.ah.nl/kookschrift/recept?id=276629',
        image: '//www.whats4eats.com/files/pastas-mie-goreng-wikipedia-4x3.jpg',
        rating: 4
    }
];
