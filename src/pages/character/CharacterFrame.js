import React, { Component } from 'react'
import { Text, View , StyleSheet} from 'react-native'
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHandSparkles, faHatWizard, faGuitar, faBullseye, faShieldAlt, faHands, faMeteor, faFistRaised, faAngry, faGavel, faPaw, faUserNinja} from '@fortawesome/free-solid-svg-icons'
import { lightgray } from 'color-name';


class CharacterFrame extends Component {

  render() {  
    let classImage = null

    if (this.props.class == "Barbarian"){
        classImage = <FontAwesomeIcon style={styles.Icon} size={ 40 } icon={ faAngry } />
    }
    else if(this.props.class == "Bard"){
        classImage = <FontAwesomeIcon style={styles.Icon} size={ 40 } icon={ faGuitar } />
    }
    else if(this.props.class == "Cleric"){
        classImage = <FontAwesomeIcon style={styles.Icon} size={ 40 } icon={ faHands } />
    }
    else if(this.props.class == "Druid"){
        classImage = <FontAwesomeIcon style={styles.Icon} size={ 40 } icon={ faPaw } />
    }
    else if(this.props.class == "Fighter"){
        classImage = <FontAwesomeIcon style={styles.Icon} size={ 40 } icon={ faGavel } />
    }
    else if(this.props.class == "Monk"){
        classImage = <FontAwesomeIcon style={styles.Icon} size={ 40 } icon={ faFistRaised } />
    }
    else if(this.props.class == "Paladin"){
        classImage = <FontAwesomeIcon style={styles.Icon} size={ 40 } icon={ faShieldAlt } />
    }
    else if(this.props.class == "Ranger"){
        classImage = <FontAwesomeIcon style={styles.Icon} size={ 40 } icon={ faBullseye } />
    }
    else if(this.props.class == "Rogue"){
        classImage = <FontAwesomeIcon style={styles.Icon} size={ 40 } icon={ faUserNinja } />
    }
    else if(this.props.class == "Sorcerer"){
        classImage = <FontAwesomeIcon style={styles.Icon} size={ 40 } icon={ faHandSparkles } />
    }
    else if(this.props.class == "Warlock"){
        classImage = <FontAwesomeIcon style={styles.Icon} size={ 40 } icon={ faMeteor } />
    }
    else if(this.props.class == "Wizard"){
        classImage = <FontAwesomeIcon style={styles.Icon} size={ 40 } icon={ faHatWizard } />
    }

    return (
        <View style={styles.CharacterWrap}>
            <View style={styles.CharacterInfoWrap}>
                <Text style={styles.CharacterInfo}>{this.props.name}</Text>
            </View>
            <View style={styles.CharacterInfoWrap}>
                {classImage}
                <Text style={styles.CharacterInfo}>{this.props.class}</Text>
            </View>
            <View style={styles.CharacterInfoWrap}>
                <Text style={styles.CharacterInfo}>{this.props.race}</Text>
            </View>
        </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.character.name,
    class: state.character.class,
    race: state.character.race,
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