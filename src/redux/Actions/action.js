import {GET_BRANDS} from '../constant/type';

export const getSubBrand = (subBrand) => {
    return {
        type: GET_BRANDS,
        subBrand
    }
    
}