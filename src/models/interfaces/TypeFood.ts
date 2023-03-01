export interface DetailFoods {
    id: string;
    i18n: string;
    src: string;
    category: string;
  }

export interface category {
    title: string;
    i18n: string;
  }

export interface InfoFoods extends category {
    info: DetailFoods[];
  }
