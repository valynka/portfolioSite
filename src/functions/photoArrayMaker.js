function makePhotoColl(q, folder, alt) {
    const coll = [];
    for (let i = 1; i <= q; i += 1) {
        let num = (i < 10) ? `0${i}` : i;
        const photoObj = {
            fullImg800: `/photo/${folder}/main/${folder}_${num}_800.jpg`,
            fullImg1920: `/photo/${folder}/main/${folder}_${num}_1920.jpg`,
            preview800: `/photo/${folder}/preview/${folder}_${num}_800.jpg`,
            alt: `${alt} ${num}`,
        };
        coll.push(photoObj);
    }
    return (coll);
};

export function makeGcColl() {
    const coll = [];
    for (let i = 1; i < 25; i += 1) {
        let num = (i < 10) ? `0${i}` : i;
        const gcObj = {
            img: `/gc/gc-${num}.jpg`,
            alt: '',
            title: '',
            desc: '',
        }
        coll.push(gcObj);
    }
    return (coll);
}

export default makePhotoColl;