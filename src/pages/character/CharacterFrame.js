import React, { Component } from 'react'
import { Text, View , StyleSheet} from 'react-native'
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHandSparkles, faHatWizard, faGuitar, faBullseye, faShieldAlt, faHands, faMeteor, faFistRaised, faAngry, faGavel, faPaw, faUserNinja} from '@fortawesome/free-solid-svg-icons'


class CharacterFrame extends Component {

  render() {  
    let classImage = null
    let charRoute = this.props.characters[this.props.charId]

    if ( charRoute.class == "Barbarian"){
        classImage = <FontAwesomeIcon style={styles.Icon} size={ 40 } icon={ faAngry } />
    }
    else if(charRoute.class == "Bard"){
        classImage = <FontAwesomeIcon style={styles.Icon} size={ 40 } icon={ faGuitar } />
    }
    else if(charRoute.class == "Cleric"){
        classImage = <FontAwesomeIcon style={styles.Icon} size={ 40 } icon={ faHands } />
    }
    else if(charRoute.class == "Druid"){
        classImage = <FontAwesomeIcon style={styles.Icon} size={ 40 } icon={ faPaw } />
    }
    else if(charRoute.class == "Fighter"){
        classImage = <FontAwesomeIcon style={styles.Icon} size={ 40 } icon={ faGavel } />
    }
    else if(charRoute.class == "Monk"){
        classImage = <FontAwesomeIcon style={styles.Icon} size={ 40 } icon={ faFistRaised } />
    }
    else if(charRoute.class == "Paladin"){
        classImage = <FontAwesomeIcon style={styles.Icon} size={ 40 } icon={ faShieldAlt } />
    }
    else if(charRoute.class == "Ranger"){
        classImage = <FontAwesomeIcon style={styles.Icon} size={ 40 } icon={ faBullseye } />
    }
    else if(charRoute.class == "Rogue"){
        classImage = <FontAwesomeIcon style={styles.Icon} size={ 40 } icon={ faUserNinja } />
    }
    else if(charRoute.class == "Sorcerer"){
        classImage = <FontAwesomeIcon style={styles.Icon} size={ 40 } icon={ faHandSparkles } />
    }
    else if(charRoute.class == "Warlock"){
        classImage = <FontAwesomeIcon style={styles.Icon} size={ 40 } icon={ faMeteor } />
    }
    else if(charRoute.class == "Wizard"){
        classImage = <FontAwesomeIcon style={styles.Icon} size={ 40 } icon={ faHatWizard } />
    }

    return (
        <View style={styles.CharacterWrap}>
            <View style={styles.CharacterInfoWrap}>
                <Text style={styles.CharacterInfo}>{charRoute.name}</Text>
            </View>
            <View style={styles.CharacterInfoWrap}>
                {classImage}
                <Text style={styles.CharacterInfo}>{charRoute.class}</Text>
            </View>
            <View style={styles.CharacterInfoWrap}>
                <Text style={styles.CharacterInfo}>{charRoute.race}</Text>
            </View>
        </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.character.characters
  }
}

const styles = StyleSheet.create({
    CharacterWrap: {
        backgroundColor: 'black',
        alignItems: 'center', 
        justifyContent: 'space-evenly',
        width: '100%',
        position: 'relative',
        flexDirection: 'row',
        bottom: 0,
        padding: 20,
    },
    CharacterInfoWrap: {
        alignItems: 'center',
        width: '33%'
    },
    CharacterInfo: {
        fontSize: 20,
        color: 'white',
    },
    Icon: {
        color: 'white'
    }
});



export default  connect(mapStateToProps)(CharacterFrame)