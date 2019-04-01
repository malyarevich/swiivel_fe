export interface ShowFeeModel {
  dormitory: boolean,
  registration: boolean,
  activity: boolean,
  tuition: boolean,
  scholarship: boolean,
  lunch: boolean,
}

export interface ShowFeeDiscountsModel extends ShowFeeModel {
}
