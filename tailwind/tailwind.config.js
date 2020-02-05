/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const variants = require('./variants');
const plugins = require('./plugins');
const fonts = require('./fonts');

module.exports = {
    theme: {
        ...fonts,
        container: {
            center: true,
            padding: '15px'
        },

        extend: {
            opacity: {
                '30': '.3'
            },
            lineHeight: {
                '87%': '87%'
            },
            inset: {
                '2px': '2px',
                '5px': '5px',
                '17px': '17px',
                '22px': '22px',
                '20px': '20px',
                '30px': '30px',
                '50px': '50px',
                '1/1': '100%',
                '1/2': '50%',
                '1/3': '33,33%'
            },
            borderRadius: {
                '1/2': '50%',
                '32px': '32px'
            },
            colors: {
                'dark-gray': '#5D5D5D',
                'blue-back': '#4D97C8',
                '#CAE0EF': '#CAE0EF',
                'header-back': '#F9FBFD',
                'client-back': '#F9FBFD',
                'input-color': '#CECECE',
                'color-red': '#FF3F3F',
                'gray-colorful': '#F1F1F1',
                'blue-colorful': '#66AFE0',
                '2C88C5': '#2C88C5',
                'white-colorful': '#E8E8E8',
                'gray-text': '#A8A8A8',
                '777777': '#777777',
                '0A3857': '#0A3857',
                '164D72': '#164D72',
                '252525': '#252525',
                '4D4D4D': '#4D4D4D',
                'gray-1': '#AFAFAF',
                'accent-color': '#EAF4F6',
                'gray-color': '#656565',
                'text-color': '#092B54',
                'footer-back': '#345879',
                'aqua-back': '#eaf4f6',
                '00305B': '#00305B',
                'form-back': '#eff6f8',
                '3D3D3D': '#3D3D3D',
                '3ca6cd': '#3ca6cd',
                'main-yellow': '#FFDC0A'
            },
            fontSize: {
                '94px': '94px',
                '80px': '80px',
                '70px': '70px',
                '65px': '65px',
                '60px': '60px',
                '40px': '40px',
                '36px': '36px',
                '32px': '32px',
                '30px': '30px',
                '24px': '24px',
                '22px': '22px',
                '20px': '20px',
                '18px': '18px',
                '16px': '16px',
                '15px': '15px',
                '14px': '14px',
                '13px': '13px',
                '12px': '12px'
            },
            spacing: {
                '1400px': '1400px',
                '870px': '870px',
                '400px': '400px',
                '450px': '450px',
                '300px': '300px',
                '195px': '195px',
                '170px': '170px',
                '165px': '165px',
                '145px': '145px',
                '100px': '100px',
                '90px': '90px',
                '87px': '87px',
                '80px': '80px',
                '70px': '70px',
                '60px': '60px',
                '50px': '50px',
                '48px': '48px',
                '46px': '46px',
                '45px': '45px',
                '40px': '40px',
                '30px': '30px',
                '29px': '29px',
                '28px': '28px',
                '26px': '26px',
                '25px': '25px',
                '20px': '20px',
                '17px': '17px',
                '16px': '16px',
                '15px': '15px',
                '14px': '14px',
                '12px': '12px',
                '10px': '10px',
                '8px': '8px',
                '7px': '7px',
                '6px': '6px',
                '5px': '5px',
                '50%': '50%',
                '30%': '30%',
                '33%': '33%',
                '12%': '12%'
            },
            width: {
                '1/7': '14.2857143%',
                '2/7': '28.5714286%',
                '3/7': '42.8571429%',
                '4/7': '57.1428571%',
                '5/7': '71.4285714%',
                '6/7': '85.7142857%',
                '1/9': '11.1111111%',
                '2/9': '22.2222222%',
                '3/9': '33.3333333%',
                '4/9': '44.4444444%',
                '5/9': '55.5555555%',
                '6/9': '66.6666666%',
                '7/9': '77.7777777%',
                '8/9': '88.8888888%',
                '1/14': '7.14285714%',
                '2/14': '14.2857143%',
                '3/14': '21.4285714%',
                '4/14': '28.5714286%',
                '5/14': '35.7142857%',
                '6/14': '42,8571429%',
                '7/14': '50%',
                '8/14': '57.1428571%',
                '9/20': '45%'
            },
            maxWidth: {
                '1400px': '1400px',
                '1280px': '1280px',
                '1250px': '1250px',
                '1200px': '1200px',
                '1180px': '1180px',
                '1170px': '1170px',
                '1160px': '1160px',
                '1150px': '1150px',
                '1140px': '1140px',
                '1089px': '1089px',
                '1070px': '1070px',
                '1000px': '1000px',
                '980px': '980px',
                '890px': '890px',
                '785px': '785px',
                '750px': '750px',
                '620px': '620px',
                '550px': '550px',
                '493px': '493px',
                '470px': '470px',
                '450px': '450px',
                '375px': '375px',
                '350px': '350px',
                '332px': '332px',
                '316px': '316px',
                '273px': '273px',
                '230px': '230px',
                '215px': '215px',
                '190px': '190px',
                '170px': '170px',
                '160px': '160px',
                '150px': '150px',
                '144px': '144px',
                '140px': '140px',
                '100px': '100px',
                '90px': '90px'
            },
            screens: {
                '2xl': '1360px',
                '3xl': '1490px'
            }
        }
    },
    variants,
    plugins
};
