import React from 'react';
import { useStateValue } from '../state/state';
import { determineGameResult } from '../utils/utils';

const OngoingGame = ({ game }) => {
	const playerAWins = determineGameResult(game);
	if (game.type === 'GAME_BEGIN') {
		return (
			<div className='playing'>
				<span style={{ float: 'left' }}>{game.playerA.name}</span>
				<span style={{ float: 'right' }}>{game.playerB.name}</span>
			</div>
		);
	} else {
		return (
			<div className='played'>
				{playerAWins === 'tie'
					? <div>{game.playerA.name} ({game.playerA.played}) tied with {game.playerB.name} ({game.playerB.played})!</div>
					: playerAWins
						? <div>{game.playerA.name} wins {game.playerB.name}´s {game.playerB.played} with {game.playerA.played}!</div>
						: <div>{game.playerB.name} wins {game.playerA.name}´s {game.playerA.played} with {game.playerB.played}!</div>}
			</div>
		);
	}
};

const OngoingGames = () => {
	const [{ ongoingGames }] = useStateValue();
	return (
		<div className='games-list'>
			{ongoingGames.map((g, i) => <OngoingGame key={i} game={g} />)}
		</div>
	);
};

export default OngoingGames;