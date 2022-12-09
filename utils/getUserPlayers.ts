import { IPlayer } from "~~/interfaces";

export const getUserPlayers = (
  playersArray: IPlayer[],
  userPlayers: string[]
): IPlayer[] | [] => {
  const resultPlayers = [];

  for (const playerId of userPlayers) {
    const foundPlayer = playersArray.find((player) => player.id === playerId);
    if (foundPlayer) resultPlayers.push(foundPlayer);
  }

  return resultPlayers;
};
