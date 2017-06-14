export function selectEloadas(eloadas) {
  // selectEloadas is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: 'ELOADAS_SELECTED',
    payload: eloadas
  };
}
