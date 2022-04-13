export const addCharacter = (name, initiative, characterType) => {
  return {
    type: 'ADD_CHARACTER',
    payload: {
      name, initiative, characterType
    }
  };
};