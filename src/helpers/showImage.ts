import italianCuisine from '../images/italianCuisine.jpg';
import japanCuisine from '../images/japanCuisine.jpg';
import turkishCuisine from '../images/turkishCuisine.jpg';
import chineseCuisine from '../images/chineseCuisine.jpg';
import greekCuisine from '../images/greekCuisine.jpg';
import americanCuisine from '../images/americanCuisine.jpg';
import internationalCuisine from '../images/internationalCuisine.jpg';

const showImage = (cuisine: string) => {
    if(cuisine === 'Italian') {
        return italianCuisine;
    } else if(cuisine === 'Japan') {
        return japanCuisine;
    } else if (cuisine === 'Greek') {
        return greekCuisine;
    } else if (cuisine === 'Chinese') {
        return chineseCuisine;
    } else if (cuisine === 'Turkish') {
        return turkishCuisine;
    } else if (cuisine === 'American') {
        return americanCuisine;
    } else if (cuisine === 'International') {
        return internationalCuisine;
    } else {
        return 'none';
    }
};

export default showImage;