const filesName = [
    'apple.png',
    'bread.png',
    'chees.png',
    'coffy.png',
    'dairy.png',
    'drinks.png',
    'flour.png',
    'fruits.png',
    'Jar.png',
    'meat.png',
    'pasta.png',
    'sausage.png',
    'sweets1.png',
    'sweets.png',
    'default.png',
    'vegetables.png',
];

interface IFile {
    [key: string]: string;
}

const files: IFile = {};
for (const it of filesName) {
    files[it.split('.')[0]] = it;
}

export const Icon = async (name: string) => {
    let file = filesName.find((nameFile) => {
        return nameFile === files[name];
    });
    file = file ? file : `default.png`;
    const img = await import(`asset/icons/${file}`);
    return img;
};
