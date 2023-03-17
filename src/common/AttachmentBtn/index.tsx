import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Rtext } from '../Rtext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Badge } from 'react-native-paper';
import { normalizeSize } from '../../../utility/MyUtility';


const AttachmentBtn = (props: any) => {

    let { count, onPress } = props;
    return (
        <TouchableOpacity style={styles.attachmentBtn} onPress={onPress}>

            <Rtext color='#1B95E0' fontSize={15.5} >Attachements</Rtext>



            <View style={styles.attchView}>
                <Ionicons name="attach-outline" color="#1B95E0" size={26}></Ionicons>
                {
                        count > 0 &&
                        <Badge style={{ position: "absolute", right: normalizeSize(-8, -3), top: normalizeSize(-2) }}
                            size={normalizeSize(19, 16)}>
                            {count}
                        </Badge>
                }
            </View>
        </TouchableOpacity>
    )
};

const styles = {
    attachmentBtn: {
        marginTop: 10,
        marginBottom: 15,
        borderRadius: 4,
        borderWidth: 0.5,
        alignItems: "center",
        borderColor: "gray",
        padding: 10,
        position: "relative"
    },

    attchView: {
        position: "absolute",
        right: normalizeSize(25),
        top: normalizeSize(8),
        width: normalizeSize(28),
        flexDirection: "row",
        alignItems: "center"
    },
}

export { AttachmentBtn };