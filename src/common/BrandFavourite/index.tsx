import React from 'react';
import { StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RootState } from '../../../store';
import { useSelector, useDispatch } from 'react-redux';
import { addOrRemoveFavourite, setFavouriteBrands } from '../../../store/brands';

const BrandFavourite = ({ brandId }) => {

    const dispatch = useDispatch();
    const isTheBrandFavourite = useSelector((state: RootState) => state.brands.isTheBrandFavourite);
    const adTofavBrand = (brand_id: number) => {
        // console.log('adTofavBrand',brand_id);
        dispatch(addOrRemoveFavourite({ brand_id }));
        setTimeout(()=>{
            dispatch(setFavouriteBrands({}));
        },300)
        
    }

    return (
        <TouchableOpacity style={[styles.container]} onPress={()=>adTofavBrand(brandId)}>
            {
                isTheBrandFavourite ?
                    <MaterialIcons name="star" color="yellow" size={30} style={{ marginRight: 20 }} />
                    :
                    <MaterialIcons name="star-border" color="#fff" size={30} style={{ marginRight: 20 }} />
            }
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {

    },

})

export { BrandFavourite };

