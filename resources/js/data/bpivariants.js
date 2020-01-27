export default {
    getVariant(bpi) {
        if (bpi <= -99.99) { return 'lighter_grey'; }
        else if (bpi < -15.00) { return 'white'; }
        else if (bpi < -10.00) { return 'dark_grey'; }
        else if (bpi < -5.00) { return 'light_grey'; }
        else if (bpi < 0.00) { return 'lighter_grey'; }

        else if (bpi < 5.00) { return 'pink'; }
        else if (bpi < 10.00) { return 'peach'; }
        else if (bpi < 15.00) { return 'light_orange'; }
        else if (bpi < 20.00) { return 'orange'; }
        else if (bpi < 30.00) { return 'yellow'; }
        else if (bpi < 40.00) { return 'pale_yellow'; }
        else if (bpi < 50.00) { return 'lime'; }
        else if (bpi < 60.00) { return 'spring_green'; }
        else if (bpi < 70.00) { return 'teal'; }
        else if (bpi < 80.00) { return 'lavender'; }
        else if (bpi < 90.00) { return 'purple'; }
        else if (bpi < 100.00) { return 'light_purple'; }
        else { return 'blood_purple'; }

    }
}