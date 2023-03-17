import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert, PermissionsAndroid } from 'react-native';
import { Rtext } from '../Rtext';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ActivityIndicator } from 'react-native-paper';
import { FILE_ICONS } from '../../../config';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RNFS from 'react-native-fs';
import Spinner from 'react-native-loading-spinner-overlay';
import { showFlashMessage } from '../../../utility/MyUtility';
import FileViewer from 'react-native-file-viewer';

const ShowAttachments = (props: any) => {

    let { attachments, onCancel, style } = props;
    const [loader, showLoader] = useState<boolean>(false);
    const [downloadText, setDownloadText] = useState<string>('');

    const downloadFile = (file: any) => {
        const permission = _requestStoragePermission();
        if (permission) {
            //     console.log("downloading file");

            const basePath = 'https://dev-idiosys.s3.ap-southeast-1.amazonaws.com/bdf360/';
            const fromDownloadPath = basePath + file.path;
            const downloadPath = RNFS.DownloadDirectoryPath + "/" + file.name;
            const onemb = 1000000;
            showLoader(true);
            RNFS.downloadFile({
                fromUrl: fromDownloadPath,
                toFile: downloadPath,
                background: true,
                // connectionTimeout: 1000 * 10,
                // readTimeout: 1000 * 10,
                discretionary: true,
                progressDivider: 1,
                progress: (res) => {
                    setDownloadText(`${(res.bytesWritten / onemb).toFixed(2)}MB / ${(res.contentLength / onemb).toFixed(2)}MB`);
                }
            }).promise.then((result) => {
                showLoader(false);
                showFlashMessage('File successfully downloaded', 'Tap to open the file', 'success', () => {
                    console.log('press', downloadPath);
                    FileViewer.open(downloadPath)
                        .then(() => {
                            // success
                        })
                        .catch(error => {
                            Alert.alert('File is not opening');
                        });
                }, 5000);
                setDownloadText('');

            })
                .catch(error => {
                    showLoader(false);
                    console.log('error', error);
                    Alert.alert('Download error');
                    setDownloadText('');
                })
        }
    }

    const showDownloadAlert = (attachment: any) => {
        // console.log('attachment',attachment.name);
        Alert.alert(
            attachment.name,
            "Do you want to download the file?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Yes", onPress: () => downloadFile(attachment) }
            ],
            { cancelable: true }
        );
    }

    return (

        <View style={[styles.container, style]}>
            <Icon name="paperclip" size={25} color="#1B95E0" style={styles.attIcon} />
            {
                attachments.map((att: any, index: number) => {
                    const fileIcon = getFileIconFromName(att.name);
                    return (
                            <TouchableOpacity onPress={() => showDownloadAlert(att)} key={index}>
                                <View style={styles.fileIconContainer}>
                                    <Icon style={styles.fileIcon} name={fileIcon.name} color={fileIcon.color} size={25}></Icon>
                                </View>
                            </TouchableOpacity>

                    )
                })
            }

            <Spinner
                visible={loader}
                overlayColor="rgba(0, 0, 0, 0.50)"
            >
                <View style={styles.downloadIndicator}>
                    <ActivityIndicator color="#00ff00" size="large"></ActivityIndicator>
                    <Rtext color="white" fontSize={17} style={{ marginTop: 10 }}>{downloadText}</Rtext>
                </View>
            </Spinner>


        </View>

    )


};

const _requestStoragePermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: 'Storage Permission',
                message: 'Recording needs access to your storage.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.error(err);
        return false;
    }
}


const getFileIconFromName = (fileName: string) => {
    let extension: string = fileName.split('.').pop() || 'default';
    return FILE_ICONS[extension];
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        // justifyContent: "flex-end"
        backgroundColor: "#eef3d4",
        paddingVertical: 5,
        paddingHorizontal: 8,
        borderRadius: 4,
        elevation: 1
    },
    attIcon: {
        marginRight: 15,
        borderRightWidth: 1,
        borderColor: "gray",
        paddingRight: 10
    },
    fileIcon: {

    },
    fileIconContainer: {
        marginRight: 16,
        alignItems: "center"
    },
    downloadIndicator: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    }

});

export { ShowAttachments };