import React from 'react';
import Player from './player';

const Scoreboard = () => {
    let score = [];

    for(let i = 1; i <= 10; i++){
      let firstBowl = Math.floor((Math.random() * 11));
      let secondBowl;
      let thirdBowl;

      console.log(firstBowl);
      if( firstBowl === 10){
        console.log('strike');
        secondBowl = Math.floor((Math.random() * 11));
        thirdBowl = Math.floor((Math.random() * 11));
      }
      if( firstBowl !== 10 ) {
        let remainingPins = 10 - firstBowl;
        let x = Math.floor((Math.random() * remainingPins) + 1)
        console.log('remainingPins: ' + remainingPins);
        secondBowl = x;
        if (x === remainingPins){
          console.log('spare');
        }
      }
      if( firstBowl && secondBowl && thirdBowl){
        score.push({ round: i,  firstBowlScore: firstBowl, secondBowlScore: secondBowl, thirdBowlScore: thirdBowl,
                  score: firstBowl + secondBowl + thirdBowl});
      } else {
        score.push({ round: i,  firstBowlScore: firstBowl, secondBowlScore: secondBowl,
                  score: firstBowl + secondBowl});
      }

    }
    console.log(score);
    let bla = score.map((bla) => bla.score);
    var result = bla.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
    });
    console.log(result);
    console.log(bla);
    return (
      <div>
        <h1>Bowling Score System : {result}</h1>
        { score.map((x) => <div key={x.round}>
                              <h1>Round {x.round}</h1>
                              <h3>first bowl {x.firstBowlScore}</h3>
                              <h3>second bowl {x.secondBowlScore}</h3>
                              {
                                x.thirdBowlScore ? <h3>third bowl {x.thirdBowlScore}</h3> : ''
                              }
                            </div>)}
                          </div>
    );
};

export default Scoreboard;
