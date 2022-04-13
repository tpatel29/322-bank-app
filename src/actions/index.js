export const addCharacter = (name, initiative, type) => {
  return {
    type: 'ADD_CHARACTER',
    payload: {
      name, initiative, type
    }
  };
};