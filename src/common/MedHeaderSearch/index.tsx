import React from 'react';
import { StyleSheet,Platform,Dimensions } from 'react-native';
import { Input } from '../Input';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { debounce } from 'lodash';
import { searchMed } from '../../../store/medGlobalSearch';
import { View } from 'react-native-animatable';


const screenWidth = Math.round(Dimensions.get('window').width);
const searchBoxWidth = screenWidth < 430 ? (screenWidth - 80) : 350;
const MedHeaderSearch = () => {

    console.log('screenWidth',screenWidth);
    const dispatch = useDispatch();
    const searchText = useSelector((state: RootState) => state.medGlobalSearch.search);
    const search = debounce((e) => {
        console.log('e', e);
        dispatch(searchMed({ search: e }));
    }, 200);

    return (
        <View style={styles.container}>
            <Input style={styles.inputStyle} value={searchText} autoFocus={true} onChangeText={search} search={true} placeholder="Brands,Generic,Indication" />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: Platform.OS === 'ios' ? 0 : 5
    },
    inputStyle: {
        zIndex: 999,
        marginBottom: 0,
        width: searchBoxWidth

    }
})

export { MedHeaderSearch };

