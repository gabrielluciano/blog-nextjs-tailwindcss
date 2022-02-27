function shuffleArray(array) {

    for (let i = 0; i < array.length; i++) {

        const newIndex = Math.floor(Math.random() * (array.length - 1)) + 0;
        if (i !== newIndex) 
            [array[i], array[newIndex]] = [array[newIndex], array[i]];

    }
    return array;

}

export default shuffleArray;