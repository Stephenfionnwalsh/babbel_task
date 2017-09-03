import React from 'react';
import Player from './player';

const Scoreboard = () => {
    let score = [];

    // First Bowl And Following Bowls If There Is a Strike
    for(let i = 1; i <= 10; i++){
      let firstBowl = Math.floor((Math.random() * 11));
      let secondBowl;
      let thirdBowl;

      if( firstBowl === 10){
        console.log('strike');
        secondBowl = Math.floor((Math.random() * 11));
        thirdBowl = Math.floor((Math.random() * 11));
      }

      // First Bowl And Following Bowls If There Is a No
      if( firstBowl !== 10 ) {
        let remainingPins = 10 - firstBowl;
        let x = Math.floor((Math.random() * remainingPins) + 1)
        secondBowl = x;
      }

      // If first bowl is strike then push three scores to scores array
      // else push two scores to array
      if( firstBowl && secondBowl && thirdBowl){
        score.push({ round: i,  firstBowlScore: firstBowl, secondBowlScore: secondBowl, thirdBowlScore: thirdBowl,
                  score: firstBowl + secondBowl + thirdBowl});
      } else {
        score.push({ round: i,  firstBowlScore: firstBowl, secondBowlScore: secondBowl,
                  score: firstBowl + secondBowl});
      }

    }

    // Total Score
    var result = score.map((bla) => bla.score).reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
    });

    return (
      <div>
        <h1>Bowling Score System : {result}</h1>
        { score.map((round) => <div style={{ border: "1px solid black", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr" }} key={round.round}>
                              <h1>Round {round.round}</h1>
                              <h3>Total: {round.score}</h3>
                              <h3>first bowl {round.firstBowlScore}</h3>
                              <h3>second bowl {round.secondBowlScore}</h3>
                              {
                                round.thirdBowlScore ? <h3>third bowl {round.thirdBowlScore}</h3> : ''
                              }
                            </div>)}
      </div>
    );
};

export default Scoreboard;
