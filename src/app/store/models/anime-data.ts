export interface AnimeData {
  Page: Page;
}

export interface Page {
  media: [Media];
}
export interface Media {
  title: {
    english: String;
    romaji: String;
  };
  coverImage: {
    medium: String;
  };
  description: String;
  status: String;
  format: String;
  type: String;
  id: Number;
  season: String;
  seasonYear: Number;
  trending: Number;
}
