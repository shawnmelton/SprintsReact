import { StyleSheet } from 'react-native';

let ForRentStyles = {
    accentBlue: 'rgb(0, 174, 239)',
    darkBlue: 'rgb(2, 88, 142)',
    mediumBlue: 'rgb(27, 122, 186)',
};

let ErrorStyles = {
    lightRed: 'rgb(245, 232, 232)',
    mediumRed: 'rgb(232, 198, 199)',
    darkRed: 'rgb(164, 30, 34)',
};

module.exports = StyleSheet.create({
    /* Alignment */
    alignCenter: {
        alignItems: 'center',
    },
    alignEnd: {
        alignItems: 'flex-end',
    },
    alignStart: {
        alignItems: 'flex-start',
    },
    alignSelfEnd: {
        alignSelf: 'flex-end',
    },

    justifyCenter: {
        justifyContent: 'center',
    },
    justifySpaceBetween: {
        justifyContent: 'space-between',
    },
    noWrap: {
        flexWrap: 'nowrap',
    },

    /* Backgrounds */
    bgAccentBlue: {
        backgroundColor: ForRentStyles.accentBlue
    },
    bgDarkBlue: {
        backgroundColor: ForRentStyles.darkBlue
    },
    bgError: {
        backgroundColor: ErrorStyles.lightRed,
    },
    bgMediumBlue: {
        backgroundColor: ForRentStyles.mediumBlue
    },
    bgOffWhite: {
        backgroundColor: 'rgb(250, 250, 250)',
    },
    bgTransWhite: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    bgTransMediumBlue: {
        backgroundColor: 'rgba(27, 122, 186, 0.95)',
    },
    bgTransparent: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    bgWhite: {
        backgroundColor: '#fff',
    },

    /* Borders */
    border: {
        borderColor: 'transparent',
        borderStyle: 'solid',
        borderWidth: 1,
    },
    borderError: {
        borderColor: ErrorStyles.mediumRed,
    },
    borderWhite: {
        borderColor: '#fff',
    },

    /* Display */
    hide: {
        width: 0,
        height: 0,
    },

    /* Flex */
    flex1: {
        flex: 1,
    },
    flex2: {
        flex: 2,
    },
    flex3: {
        flex: 3,
    },
    flexRows: {
        flexDirection: 'row',
    },
    flexColumns: {
        flexDirection: 'column',
    },

    /* Fonts */
    fontSize16: {
        fontSize: 16,
    },
    fontSize20: {
        fontSize: 20,
    },

    /* Margins */
    margin10: {
        margin: 10,
    },
    marginBottom10:  {
        marginBottom: 10,
    },
    marginBottom15:  {
        marginBottom: 15,
    },
    marginBottom50: {
        marginBottom: 50,
    },
    marginRight10: {
        marginRight: 10,
    },
    marginTop10:  {
        marginTop: 10,
    },
    marginTop25:  {
        marginTop: 25,
    },
    marginTop50: {
        marginTop: 50,
    },
    marginTop75: {
        marginTop: 75,
    },

    /* Padding */
    padding10: {
        padding: 10,
    },

    /* Sizing */
    clearHeight: {
        height: null,
    },
    clearWidth: {
        width: null,
    },
    height50: {
        height: 50,
    },

    /* Text */
    textCenter: {
        textAlign: 'center',
    },
    textBlack: {
        color: '#000',
    },
    textBold: {
        fontWeight: 'bold',
    },
    textDarkGrey: {
        color: '#333',
    },
    textError: {
        color: ErrorStyles.darkRed,
    },
    textLightGrey: {
        color: '#ccc',
    },
    textWhite: {
        color: '#fff',
    }
});