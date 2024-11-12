export const professions = {
  doctor: { _id: '67rdca3eeb7f6fgeed471818', name: 'Лікар' },
  waiter: { _id: '67rdca3eeb7f6fgeed471820', name: 'Офіціант' },
  physics: { _id: '67rdca3eeb7f6fgeed471814', name: 'Фізик' },
  engineer: { _id: '67rdca3eeb7f6fgeed471822', name: 'Інженер' },
  actor: { _id: '67rdca3eeb7f6fgeed471824', name: 'Актор' },
  cook: { _id: '67rdca3eeb7f6fgeed471829', name: 'Кухар' }
};

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(professions);
    }, 2000);
  });

export default {
  fetchAll
};
