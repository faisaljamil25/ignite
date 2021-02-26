const base_url: string = "https://api.rawg.io/api/";

const getCurrentMonth = (): string => {
  const month: number = new Date().getMonth() + 1;
  if (month < 10) return `0${month}`;
  return `${month}`;
};

const getCurrentDay = (): string => {
  const day: number = new Date().getDate();
  if (day < 10) return `0${day}`;
  return `${day}`;
};

const currentYear: number = new Date().getFullYear();
const currentMonth: string = getCurrentMonth();
const currentDay: string = getCurrentDay();
const currentDate: string = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear: string = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear: string = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games: string = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games: string = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames: string = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
export const gameURL = (game_id: number) => `${base_url}games/${game_id}`;
