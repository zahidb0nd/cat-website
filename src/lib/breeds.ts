export interface BreedDetails {
    origin: string;
    temperament: string;
    size: 'Small' | 'Medium' | 'Large';
    grooming: 'Low' | 'Moderate' | 'High';
    goodWithKids: boolean;
}

export interface Breed {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    details: BreedDetails;
}

export const breeds: Breed[] = [
    {
        id: 'maine-coon',
        title: 'Maine Coon',
        subtitle: 'The Gentle Giants',
        description: 'Known for their large size and gentle nature, Maine Coons are often called "gentle giants". They are friendly, playful, and great with families.',
        details: { origin: 'United States', temperament: 'Gentle & Sociable', size: 'Large', grooming: 'Moderate', goodWithKids: true },
    },
    {
        id: 'bengal',
        title: 'Bengal',
        subtitle: 'Miniature Leopards',
        description: 'The Bengal cat is a domesticated cat breed created from hybrids of domestic cats, especially the spotted Egyptian Mau, with the Asian leopard cat.',
        details: { origin: 'United States', temperament: 'Playful & Vocal', size: 'Medium', grooming: 'Low', goodWithKids: true },
    },
    {
        id: 'persian',
        title: 'Persian',
        subtitle: 'The Glamorous Icon',
        description: 'The Persian cat is a long-haired breed characterized by its round face and short muzzle. They are quiet, sweet, and love to lounge in luxury.',
        details: { origin: 'Iran (Persia)', temperament: 'Calm & Affectionate', size: 'Medium', grooming: 'High', goodWithKids: true },
    },
    {
        id: 'ragdoll',
        title: 'Ragdoll',
        subtitle: 'Floppy & Affectionate',
        description: 'Ragdolls are large, muscular, semi-longhair cats with a soft and silky coat. They are known for their docile temperament and affectionate nature.',
        details: { origin: 'United States', temperament: 'Docile & Loyal', size: 'Large', grooming: 'Moderate', goodWithKids: true },
    },
    {
        id: 'siberian',
        title: 'Siberian',
        subtitle: 'Hypoallergenic Hunter',
        description: 'Siberian cats are powerful and alert, with a dense triple coat. They produce less of the Fel d 1 protein, making them a popular hypoallergenic choice.',
        details: { origin: 'Russia', temperament: 'Adventurous & Friendly', size: 'Large', grooming: 'Moderate', goodWithKids: true },
    },
    {
        id: 'british-shorthair',
        title: 'British Shorthair',
        subtitle: 'The Teddy Bear',
        description: 'The British Shorthair is the pedigreed version of the traditional British domestic cat, with a distinctively stocky body, dense coat, and broad face.',
        details: { origin: 'United Kingdom', temperament: 'Easy-Going & Calm', size: 'Medium', grooming: 'Low', goodWithKids: true },
    },
    {
        id: 'himalayan',
        title: 'Himalayan',
        subtitle: 'The Colorpoint Persian',
        description: 'The Himalayan is a sub-breed of the Persian, known for its striking blue eyes and color-point coat pattern. They combine the Persian\'s luxurious coat with the Siamese\'s beautiful markings.',
        details: { origin: 'United States / United Kingdom', temperament: 'Sweet & Devoted', size: 'Medium', grooming: 'High', goodWithKids: true },
    },
];
