/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

import { InfoFoods } from '@models/interfaces/TypeFood';

export const filterFoodData = (data: InfoFoods[], categoryTitle: string) => data?.filter((item: InfoFoods) => categoryTitle === item.title);
