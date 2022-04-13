const generateID = () => {
  return `${Date.now()}${Math.floor(Math.random() * 100)}`;
};

const DEFAULT_STATE = {
  characters: [
    { id: generateID(), name: 'Vlad', initiative: 8, type: 'player' },
    { id: generateID(), name: 'Vesh', initiative: 5, type: 'player' },
    { id: generateID(), name: 'Kritch', initiative: 22, type: 'player' },
    { id: generateID(), name: 'Azreal', initiative: 15, type: 'player' },
    { id: generateID(), name: 'Tasselhoff', initiative: 19, type: 'player' },
    { id: generateID(), name: 'Fire Giant', initiative: 6, type: 'enemy' },
    { id: generateID(), name: 'Frost Giant', initiative: 1, type: 'enemy' },
    { id: generateID(), name: 'Storm Giant', initiative: 18, type: 'enemy' },
    { id: generateID(),  name: 'Cloud Giant', initiative: 13, type: 'enemy' },
  ],
  players: [],
  enemies: [],
};

const sortCharacters = (state) => {
  let newState = {
    characters: [ ...state.characters ],
    players: state.characters.filter(char => char.type === 'player'),
    enemies: state.characters.filter(char => char.type === 'enemy'),
  };

  return newState;
};

const characterReducer = (state = sortCharacters(DEFAULT_STATE), action) => {
  switch (action.type) {
    case 'ADD_CHARACTER':
      const character = action.payload;
      character.id = generateID();
      state.characters.push(character);
      return sortCharacters(state);

    case 'REMOVE_CHARACTER':
      const { id } = action.payload;
      state.characters = state.characters.filter(char => {
        return char.id !== id;
      });
      return sortCharacters(state);

    default:
      return state;
  }
};

export default characterReducer;