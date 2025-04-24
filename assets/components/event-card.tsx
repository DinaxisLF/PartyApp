import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

const EventCard = () =>{
    return(
        <View style={styles.card}>
                <Image
                source={require('@/assets/images/event-icon.png')}
                style={styles.cardImage}
                />

                <View style={styles.infoContainer}>
                    <Text style={styles.groupName}>Nombre Grupo</Text>
                    <Text style={styles.eventState}>Estado</Text>

                    <View style={styles.dateContainer}>
                        <Text style={styles.eventDate}>8:00 PM - 11:00P M</Text>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.detailsButton}>
                            <Text style={styles.detailsButtonText}>Detalles</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.cancelButton}>
                            <Text style={styles.cancelButtonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
    );
};

const styles = StyleSheet.create({
    card:{
        height: 128, 
        width: 357, 
        backgroundColor: '#1F2A37', 
        marginTop: 16, 
        borderWidth: 1, 
        borderColor: '#374151',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        flexDirection: 'row',
        gap: 30    
    },
    cardImage:{
        height: 103,
        width: 137,
        marginTop: 12
    },
    infoContainer:{
        alignItems: 'center',
        paddingTop: 7
    },
    groupName:{
        fontFamily: 'biryani',
        color: 'white',
        fontSize: 16,
        fontWeight: 600
    },
    eventState:{
        fontFamily: 'biryani',
        color: '#16BDCA',
        fontSize: 10,
        fontWeight: 800
    },
    dateContainer:{
        height: 20,
        width: 171,
        backgroundColor: '#E5EDFF',
        borderRadius: 6,
        marginTop: 4
    },
    eventDate:{
        fontFamily: 'biryani',
        color: '#42389D',
        fontSize: 14,
        fontWeight: 700,
        textAlign: 'center'
    },
    buttonContainer:{
        flexDirection: 'row',
        gap: 8,
        marginTop: 13
    },
    detailsButton:{
        height: 20,
        width: 65,
        backgroundColor: '#1A56DB',
        borderRadius: 8
    },
    detailsButtonText:{
        fontFamily: 'biryani',
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: 400,
        textAlign: 'center',
        paddingTop: 1
    },
    cancelButton:{
        height: 20,
        width: 65,
        backgroundColor: '#E02424',
        borderRadius: 8
    },
    cancelButtonText:{
        fontFamily: 'biryani',
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: 400,
        textAlign: 'center',
        paddingTop: 1
    }
});

export default EventCard;