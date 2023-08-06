import { instances } from "../instances";



const instance = instances['DATA_LIST'];

export const requestAllJSData =async(title) => {
   const response = await instance.request({
    url: `/questions?site=stackoverflow&tagged=${title}`,
    method: 'GET',
  })


  return response.data.items
}