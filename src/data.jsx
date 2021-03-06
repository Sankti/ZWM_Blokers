import logo from './img/gui/logo.png';
import avatarKnight from './img/avatars/knight.png';
import avatarHacker from './img/avatars/hacker.png';
import avatarRapper from './img/avatars/rapper.png';

export const data = {
    logo: logo,
    stats: {
        baseAttribute: 8,
        baseHealth: 3,
        baseMoney: 20,
        healthName: "PŻ",
        currency: "PLN",
    },
    classes: {
        knight: {
            name: "Rycerz",
            avatar: avatarKnight,
            strength: 10,
            intellect: 4,
            charisma: 6,
        },
        hacker: {
            name: "Haker",
            avatar: avatarHacker,
            strength: 4,
            intellect: 11,
            charisma: 4,
        },
        rapper: {
            name: "Raper",
            avatar: avatarRapper,
            strength: 4,
            intellect: 6,
            charisma: 10,
        },
    },
    locations: {
        location0: "Stary ZWM",
        location1: "PG1",
        location2: "Park",
        locarion3: "Real",
        location4: "LO6",
        location5: "Nowy ZWM",
    },
};