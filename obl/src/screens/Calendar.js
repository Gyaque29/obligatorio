import DateTimePicker, { DateType, useDefaultStyles } from 'react-native-ui-datepicker';
import { View } from "react-native";
export function Calendar({date, onSelect}) {
    const defaultStyles = useDefaultStyles();

    const fechaValida = date instanceof Date ? date : new Date();

    return (
        <View>
            <DateTimePicker
                mode="single"
                date={fechaValida}
                onChange={({ date }) => onSelect(date)}
                styles={defaultStyles}
                minDate={new Date()}
            />
        </View>

    );
}