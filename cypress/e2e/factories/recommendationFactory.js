import { faker } from '@faker-js/faker';

export default function recommendationBody() {
    const body = {
        name: faker.music.songName(),
        youtubeLink: "https://www.youtube.com/watch?v=mM0tiwgtoCw",
    };
    return body;
}