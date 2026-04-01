function makePhotoColl(q, folder, alt) {
  const coll = [];
  for (let i = 1; i <= q; i += 1) {
    let num = i < 10 ? `0${i}` : i;
    const photoObj = {
      fullImg800: `/portfolioSite/photo/${folder}/main/${folder}_${num}_800.jpg`,
      fullImg1920: `/portfolioSite/photo/${folder}/main/${folder}_${num}_1920.jpg`,
      preview800: `/portfolioSite/photo/${folder}/preview/${folder}_${num}_800.jpg`,
      alt: `${alt} ${num}`,
    };
    coll.push(photoObj);
  }
  return coll;
}

export default makePhotoColl;
