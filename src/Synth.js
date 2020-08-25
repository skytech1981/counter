import React ,{Component ,useState,useEffect} from 'react';
import Kick from '../drums/kickdrum.wav';
import Snare from '../drums/snare.wav';
import clap from '../drums/clap.wav';
import chihat from '../drums/chihat.wav';
import ride from '../drums/ride.wav';
import shake from '../drums/shake.wav';
import tom from '../drums/tom.wav';
import cowba from '../drums/cowba.wav';
import clave from '../drums/clave.wav';
import congalo from '../drums/congalo.wav';
import snaree from '../drums/snaree.wav';
import softhit from '../drums/softhit.wav';
import tropicalclap from '../drums/tropicalclap.wav';
import Perc from '../drums/Perc.wav';
import shot from '../drums/shot.wav';
import hatt from '../drums/hatt.wav';
import a from '../drums/fx2.wav';
import b from '../drums/fx2.wav';
import c from '../drums/fx2.wav';
import {Howl,Howler} from 'howler';


const drumLoops =   [ 
                    {intro:a}
                    ]



const audioClips =   [ 
                      {sound:Kick,label:"",id:1,letter:'q'},
                      {sound:Snare,label:"",id:2},
                      {sound:chihat,label:"",id:3},
                      {sound:clap,label:"",id:4}
                     ]
const audioClips2 =  [
                      {sound:ride,label:"",id:5},
                      {sound:shake,label:"",id:6},
                      {sound:tom,label:"",id:7},
                      {sound:cowba,label:"",id:8}
                     ]
const audioClips3 =  [
                      {sound:clave,label:"",id:9},
                      {sound:congalo,label:"",id:10},
                      {sound:snaree,label:"",id:11},
                      {sound:hatt,label:"",id:12}
                     ]
const audioClips4 =  [
                      {sound:softhit,label:"",id:13},
                      {sound:tropicalclap,label:"",id:14},
                      {sound:Perc,label:"",id:15},
                      {sound:shot,label:"",id:16}
                     ]
const audioClips5 =  [
                      {sound:Kick,label:"",id:17},
                      {sound:Kick,label:"",id:18},
                      {sound:Kick,label:"",id:19},
                      {sound:Kick,label:"",id:20}
                     ]
const audioClips6 =  [
                      {sound:Kick,label:"",id:21},
                      {sound:Kick,label:"",id:22},
                      {sound:Kick,label:"",id:23},
                      {sound:Kick,label:"",id:24}
                     ]
const audioClips7 =  [
                      {sound:Kick,label:"",id:25},
                      {sound:Kick,label:"",id:26},
                      {sound:Kick,label:"",id:27},
                      {sound:Kick,label:"",id:28}
                     ]
const audioClips8 =  [
                      {sound:Kick,label:"",id:29},
                      {sound:Kick,label:"",id:30},
                      {sound:Kick,label:"",id:31},
                      {sound:Kick,label:"",id:32}
                     ]



class Tr808 extends Component {

  

soundPlay= (src) => {



  
const clips = [{audioClips},{audioClips2},{audioClips3},{audioClips4}]
const clips2 =[{audioClips5},{audioClips6},{audioClips7},{audioClips8}]
const clips3 = [{audioClips},{audioClips6},{audioClips7},{audioClips4}]



const intro = new Howl({
  src: ['drumloop.webm', 'intro.mp3'],

     });
intro.play();



 const sound= new Howl({
    src
  })
 sound.play();
 }



  rendButtonAndSound = () => {
    Howler.volume(1.0)
        return audioClips.map((soundObj, index) => {
          return (
            
            <div className="contain">
                <button
                    className="synth" 
                    style={{color:"white"}} 
                    key={index} 
                    onClick={() => this.soundPlay(soundObj.sound)}>{soundObj.label} 
                    <img className="keypad" src={ require('../pages/keypad1.png') } />
               </button>
               
          </div>
         )
      })
  }

  rendButtonAndSound2 = () => {
    return audioClips2.map((soundObj, index) => {
      return (
        
        <div className="contain2">
            <button
                className="synth" 
                style={{color:"white"}} 
                key={index} 
                onClick={() => this.soundPlay(soundObj.sound)}>{soundObj.label} 
                <img className="keypad2" src={ require('../pages/keypad3.png') } />
           </button>
           
      </div>
     )
  })
}

rendButtonAndSound3 = () => {
  return audioClips3.map((soundObj, index) => {
    return (
      
      <div className="contain3">
          <button
              className="synth" 
              style={{color:"white"}} 
              key={index} 
              onClick={() => this.soundPlay(soundObj.sound)}>{soundObj.label} 
              <img className="keypad3" src={ require('../pages/keypad4.png') } />
         </button>
         
    </div>
   )
})
}

rendButtonAndSound4 = () => {
  return audioClips4.map((soundObj, index) => {
    return (
      
      <div className="contain4">
          <button
              className="synth" 
              style={{color:"white"}} 
              key={index} 
              onClick={() => this.soundPlay(soundObj.sound)}>{soundObj.label} 
              <img className="keypad4" src={ require('../pages/keypad5.png') } />
         </button>
         
    </div>
   )
})
}

rendButtonAndSound5 = () => {
  return drumLoops.map((soundObj, index) => {
    return (
      
      <div className="contain4">
          <button
              className="synth" 
              style={{color:"white"}} 
              key={index} 
              onClick={() => this.soundPlay(soundObj.drumLoop)}>{soundObj.label} 
              <img className="keypad4" src={ require('../pages/keypad5.png') } />
         </button>
         
    </div>
   )
})
}

keyPlay = () => {
    return drumLoops.map((soundObj, index) => {
return (
<>
<button className="keyPlay" onClick={this.soundPlay(soundObj.intro)}>click</button>
</>
)

})}
 






