import {
  ITeam,
  ITeamProperties,
  TeamNotionResponse,
  TeamNotionPropertiesResponse,
  PopulateRelationOptions,
} from "~~/interfaces";
import { findRelationById } from "~~/utils";

export const teamPropertiesAdapter = (
  properties: TeamNotionPropertiesResponse,
  populateOptions: PopulateRelationOptions
): ITeamProperties => {
  const { players } = populateOptions;

  return {
    Equipo: properties.Equipo.title[0].plain_text,
    Posicion1: findRelationById(players, properties.Posicion1?.relation[0]?.id),
    Posicion1_Dorsal: properties.Posicion1_Dorsal.number,
    Posicion2: findRelationById(players, properties.Posicion2?.relation[0]?.id),
    Posicion2_Dorsal: properties.Posicion2_Dorsal.number,
    Posicion3: findRelationById(players, properties.Posicion3?.relation[0]?.id),
    Posicion3_Dorsal: properties.Posicion3_Dorsal.number,
    Posicion4: findRelationById(players, properties.Posicion4?.relation[0]?.id),
    Posicion4_Dorsal: properties.Posicion4_Dorsal.number,
    Posicion5: findRelationById(players, properties.Posicion5?.relation[0]?.id),
    Posicion5_Dorsal: properties.Posicion5_Dorsal.number,
    Posicion6: findRelationById(players, properties.Posicion6?.relation[0]?.id),
    Posicion6_Dorsal: properties.Posicion6_Dorsal.number,
    Posicion7: findRelationById(players, properties.Posicion7?.relation[0]?.id),
    Posicion7_Dorsal: properties.Posicion7_Dorsal.number,
    Posicion8: findRelationById(players, properties.Posicion8?.relation[0]?.id),
    Posicion8_Dorsal: properties.Posicion8_Dorsal.number,
    Posicion9: findRelationById(players, properties.Posicion9?.relation[0]?.id),
    Posicion9_Dorsal: properties.Posicion9_Dorsal.number,
    Posicion10: findRelationById(
      players,
      properties.Posicion10?.relation[0]?.id
    ),
    Posicion10_Dorsal: properties.Posicion10_Dorsal.number,
    Posicion11: findRelationById(
      players,
      properties.Posicion11?.relation[0]?.id
    ),
    Posicion11_Dorsal: properties.Posicion11_Dorsal.number,
    UserId: properties.UserId.relation[0].id,
  };
};

export const teamAdapter = (
  results: TeamNotionResponse[],
  populateOptions: PopulateRelationOptions
): ITeam => ({
  id: results[0].id,
  ...teamPropertiesAdapter(results[0].properties, populateOptions),
});

export const updateUserTeamDto = (userTeam: ITeam) => {
  const teamDto: any = {};

  let teamKeys = Object.keys(userTeam);
  teamKeys = teamKeys.filter((key) => key !== "id" && key !== "Equipo");

  teamKeys.forEach((key: string) => {
    if (
      userTeam[key as keyof ITeam] !== null &&
      typeof userTeam[key as keyof ITeam] !== "number"
    ) {
      const tempId = userTeam[key as keyof ITeam] as any;
      teamDto[key] = {
        relation: [{ id: tempId.id }],
      };
    }

    if (
      userTeam[key as keyof ITeam] !== null &&
      typeof userTeam[key as keyof ITeam] === "number"
    ) {
      const numberTeam = userTeam[key as keyof ITeam] as any;
      teamDto[key] = {
        number: numberTeam,
      };
    }

    teamDto["UserId"] = {
      relation: [{ id: userTeam.UserId }],
    };
    teamDto["Equipo"] = {
      title: [
        {
          text: {
            content: userTeam.Equipo,
          },
        },
      ],
    };
  });

  return teamDto;
};
