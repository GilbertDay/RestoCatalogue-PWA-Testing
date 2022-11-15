/* eslint-disable no-unreachable */
import API_ENDPOINT from '../globals/api-endpoint';

class DataRestoSource {
  static async getAllResto() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getRestoDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}
export default DataRestoSource;
