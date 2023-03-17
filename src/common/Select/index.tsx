import React from 'react';
import { View,Picker} from 'react-native';

// data={backingTracks} keyValue
const Select = ({selectedValue, onSelectedValue, data, keyValue}) => {


    const items = []

    for (const [index, value] of data.entries()) {
      items.push(<Picker.Item value={data[index][keyValue[0]]}  label={data[index][keyValue[1]]} key={index}/>)
    }

    return (
        <View style={styles.selectDropContainer}>
            <Picker
                    selectedValue={selectedValue}
                    style={styles.selectDrop}
                    onValueChange={(itemValue, itemIndex) => onSelectedValue(itemValue,itemIndex)}>
                    
                    {items}
            </Picker>
        </View>
    )
};

const styles = {
    selectDropContainer: {
        backgroundColor: "#CFD0E5",
        borderColor: "#FFFFFF",
        borderWidth: 1,
        borderRadius: 20,
        paddingLeft:4,
        fontStyle: "italic"
      },
      selectDrop: {
        width: '100%',
        color: "black",
        height: 40,
        fontStyle: "italic"
      }
}

export {Select};

