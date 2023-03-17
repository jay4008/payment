import React from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { Rtext } from '../Rtext';


const Rbutton = (props) => {

    let { loader= false } = props;
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity
            disabled={props.disabled || loader}
            style={
                [buttonStyle, {
                    opacity: props.disabled === true ? 0.5 : 1,
                    backgroundColor: props.color ? props.color : '#1B95E0',
                    paddingTop: props.paddingV ? parseInt(props.paddingV) : 8,
                    paddingBottom: props.paddingV ? parseInt(props.paddingV) : 8,
                    marginTop: props.top ? parseInt(props.top) : 0,
                    width: props.width ? props.width : "100%"
                },props.style]}
            onPress={props.onPress}
        >

            {
                loader ?
                    <ActivityIndicator color="#fff"></ActivityIndicator>
                    :
                    <Rtext
                        style={
                            [textStyle, {
                                color: props.textColor ? props.textColor : '#fff'
                            }]
                        }

                        fontSize={props.fontSize ? parseInt(props.fontSize) : 16}
                    >
                        {props.children}

                    </Rtext>

            }
        </TouchableOpacity>
    )
};

const styles = {
    buttonStyle: {
        padding: 8,
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0, .6)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android


    },
    textStyle: {
        // fontFamily: 'Roboto-Thin',
        alignSelf: 'center',
        // color: 'white',
        fontSize: 16,
        fontWeight: '600',
        textTransform: "uppercase",
        letterSpacing: 0.3
    }
}

export { Rbutton };